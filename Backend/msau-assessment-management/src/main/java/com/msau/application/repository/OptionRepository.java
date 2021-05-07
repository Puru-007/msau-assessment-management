package com.msau.application.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.msau.application.models.Option;

@Repository
public interface OptionRepository extends CrudRepository<Option, Long> {
}
