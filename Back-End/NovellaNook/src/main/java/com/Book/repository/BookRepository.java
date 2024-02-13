package com.Book.repository;
import com.Book.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface BookRepository extends JpaRepository<Book,Long> {

//    Page<Book> findByNameContainingIgnorCaseOrNumberConntainingIbnoreCase(String keyword, String keyword1, Pageable pageable);
//Page<Book> findByNameContainingIgnoreCaseOrAuthorContainingIgnoreCase(String name, String author, Pageable pageable);
Page<Book> findByNameContainingIgnoreCaseOrAuthorContainingIgnoreCase(
        String name, String author, Pageable pageable);
}



