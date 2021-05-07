package com.msau.application.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.msau.application.models.Result;

@Repository
public interface ResultRepository extends CrudRepository<Result, Long> {
}
