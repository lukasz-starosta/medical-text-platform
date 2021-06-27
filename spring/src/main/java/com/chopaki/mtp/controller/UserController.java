package com.chopaki.mtp.controller;

import com.chopaki.mtp.model.User;
import com.chopaki.mtp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping(path = "user-info")
    public Optional<User> getUserInfo(@RequestBody User user) {
        return userService.getUserData(user);
    }

    @PostMapping(path = "change-password")
    public void changePassword(@RequestBody User user) {
        userService.changePassword(user);
    }

    @PostMapping(path = "login")
    public String login() {
        return null;
    }

    @PostMapping(path = "register")
    public String register() {
        return null;
    }

    @GetMapping(path = "check")
    public void validateToken() {
    }
}
