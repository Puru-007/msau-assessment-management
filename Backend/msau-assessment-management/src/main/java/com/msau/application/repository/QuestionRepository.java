package com.msau.application.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.msau.application.models.Question;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Long> {
}
