package com.msau.application.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.msau.application.models.Quiz;

@Repository
public interface QuizRepository extends CrudRepository<Quiz, Long> {
}
