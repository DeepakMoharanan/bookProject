package com.Book.service.impl;

import com.Book.entity.Book;
import com.Book.payload.BookDto;
import com.Book.repository.BookRepository;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class BookServiceImpl {

    private final BookRepository bookRepository;
    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

//    public BookDto createBook(BookDto bookDto) {
//        Book book = mapToEntity(bookDto);
//        Book savedBook = bookRepository.save(book);
//        return mapToDto(savedBook);
//    }
    public List<BookDto> saveBooks(List<BookDto> bookDtos) {
        List<Book> books = bookDtos.stream()
                .map(this::mapToEntity)
                .collect(Collectors.toList());
        List<Book> savedBooks = bookRepository.saveAll(books);
        return savedBooks.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

//    public List<Book> getAllBooks(int pageNo, int pageSize, String sortBy, String sortDir, String name, String author, Integer publishedYear) {
//        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ?
//                Sort.by(sortBy).ascending(): Sort.by(sortBy).descending();
//        Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(Sort.Direction.fromString(sortDir), sortBy));
//        Page<Book> bookPage = bookRepository.findAll(pageable);
//        List<Book> books = bookPage.getContent();
//        return books;
//    }
 // GET ALL BOOK WITH FILTER AND PAGINATION
    public Page<Book> getAllBooks(Pageable pageable) {
        return bookRepository.findAll(pageable);
    }
    public Page<Book> searchBooks(String keyword, Pageable pageable) {
        return bookRepository.findByNameContainingIgnoreCaseOrAuthorContainingIgnoreCase(
                keyword, keyword, pageable);
    }

    public BookDto getBookById(Long id) {
        return bookRepository.findById(id)
                .map(this::mapToDto)
                .orElse(null);
    }

    //Update the book
    public BookDto updateBook(BookDto bookDto, Long id) {
        return bookRepository.findById(id)
                .map(book -> {
                    book.setName(bookDto.getName());
                    book.setAuthor(bookDto.getAuthor());
                    book.setPublishedYear(bookDto.getPublishedYear());
                    Book updatedBook = bookRepository.save(book);
                    return mapToDto(updatedBook);
                })
                .orElse(null);
    }
    //Delete BookById
    public boolean deleteBookById(Long id) {
        if (bookRepository.existsById(id)) {
            bookRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    private Book mapToEntity(BookDto bookDto) {
        Book book = new Book();
        book.setName(bookDto.getName());
        book.setAuthor(bookDto.getAuthor());
        book.setPublishedYear(bookDto.getPublishedYear());
        return book;
    }
    private BookDto mapToDto(Book book) {
        BookDto bookDto = new BookDto();
        bookDto.setId(book.getId());
        bookDto.setName(book.getName());
        bookDto.setAuthor(book.getAuthor());
        bookDto.setPublishedYear(book.getPublishedYear());
        return bookDto;
    }



}
