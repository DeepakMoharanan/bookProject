package com.Book.controller;
import com.Book.entity.Book;
import com.Book.payload.BookDto;
import com.Book.service.impl.BookServiceImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/book")
public class BookController {

    private final BookServiceImpl bookService;
    public BookController(BookServiceImpl bookService) {
        this.bookService = bookService;
    }

     //http://localhost:8080/api/book
//    @PreAuthorize("hasRole('ADMIN')")
//    @PostMapping
//    public ResponseEntity<BookDto> createBook(@RequestBody BookDto bookDto) {
//        BookDto createdBook = bookService.createBook(bookDto);
//        return new ResponseEntity<>(createdBook, HttpStatus.CREATED);
//    }
// http://localhost:8080/api/book/list
        @PreAuthorize("hasRole('ROLE_ADMIN')")
        @PostMapping("/list")
   public ResponseEntity<List<BookDto>> saveBooks(@RequestBody List<BookDto> bookDtos) {
    List<BookDto> createdBooks = bookService.saveBooks(bookDtos);
    return new ResponseEntity<>(createdBooks, HttpStatus.CREATED);
}
    // GET ALL BOOK WITH FILTER AND PAGINATION
   // http://localhost:8080/api/book?page=0&size=10&sort=id&keyword=
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
    @GetMapping
public ResponseEntity<Page<Book>> getBooks(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size,
        @RequestParam(defaultValue = "id") String sort,
        @RequestParam(defaultValue = "") String keyword) {
    Pageable pageable = PageRequest.of(page, size, Sort.by(sort));
    Page<Book> books = keyword.isEmpty() ?
            bookService.getAllBooks(pageable) :
            bookService.searchBooks(keyword, pageable);
    return ResponseEntity.ok(books);
}
    // http://localhost:8080/api/book/id/1
    @GetMapping("/id/{id}")
    public ResponseEntity<?> getBookById(@PathVariable(name = "id") Long id) {
        BookDto foundBook = bookService.getBookById(id);
        if (foundBook != null) {
            return new ResponseEntity<>(foundBook, HttpStatus.OK);
        } else {
            String errorMessage = "Book not found with ID: " + id;
            return new ResponseEntity<>(errorMessage, HttpStatus.NOT_FOUND);
        }

    }
    // http://localhost:8080/api/book/id/1
    @PutMapping("/id/{id}") // Corrected path variable placement and added correct return type
    public ResponseEntity<?> updateBook(@RequestBody BookDto bookDto, @PathVariable(name = "id") Long id) {
        BookDto bookResponse = bookService.updateBook(bookDto, id);
        if (bookResponse != null) {
            return new ResponseEntity<>(bookResponse, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Book not available", HttpStatus.NOT_FOUND);
        }
    }

    // http://localhost:8080/api/book/id/1
    @DeleteMapping("/id/{id}") // Corrected path variable placement
    public ResponseEntity<?> deleteBookById(@PathVariable(name = "id") Long id) {
        boolean isDeleted = bookService.deleteBookById(id);
        if (isDeleted) {
            return new ResponseEntity<>("Book deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Book not available", HttpStatus.NOT_FOUND);
        }
    }
}
