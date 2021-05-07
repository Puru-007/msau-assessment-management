package com.msau.application.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.msau.application.models.Project;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {
}
