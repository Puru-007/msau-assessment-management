package com.msau.application.Mycontrollers;

import com.msau.application.models.User;
import com.msau.application.services.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserAccountController {

    private final UserService userService;

    public UserAccountController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/api/user/{id}")
    public User getUser(@PathVariable String id){
        return this.userService.getUserById(id);
    }
}
