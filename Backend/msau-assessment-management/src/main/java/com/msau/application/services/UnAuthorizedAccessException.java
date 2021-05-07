package com.msau.application.services;

public class UnAuthorizedAccessException extends Exception {
    public UnAuthorizedAccessException(String errorMessage) {
        super(errorMessage);
    }
}
