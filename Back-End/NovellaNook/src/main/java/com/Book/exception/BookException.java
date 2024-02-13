package com.Book.exception;

import org.springframework.http.HttpStatus;

public class BookException extends Throwable {
    public BookException(HttpStatus httpStatus, String invalidJwtSignature) {
    }
}
