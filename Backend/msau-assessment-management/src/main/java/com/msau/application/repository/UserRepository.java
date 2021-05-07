package com.msau.application.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.msau.application.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

}
