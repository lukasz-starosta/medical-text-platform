package com.chopaki.mtp.controller;

import com.chopaki.mtp.model.User;
import com.chopaki.mtp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping(path = "user-info")
    public User getUserInfo() {
        return userService.getUserData();
    }

    @PostMapping(path = "change-password")
    public Boolean changePassword() {
        return null;
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
    public String validateToken() {
        return null;
    }
}
