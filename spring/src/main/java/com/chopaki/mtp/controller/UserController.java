package com.chopaki.mtp.controller;

import com.chopaki.mtp.model.User;
import com.chopaki.mtp.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping(path = "user-info")
    public ResponseEntity<User> getUserInfo(@RequestBody User user) {
        return ResponseEntity.ok().body(userService.getUserData(user));
    }

    @PostMapping(path = "change-password")
    public ResponseEntity<?> changePassword(@RequestBody User user) {
        userService.changePassword(user);
        return ResponseEntity.ok().build();
    }

    @PostMapping(path = "login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return ResponseEntity.ok().build();
    }

    @PostMapping(path = "register")
    public ResponseEntity<String> register(@RequestBody User user) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/register").toUriString());
        return ResponseEntity.created(uri).body(userService.register(user));
    }

    @GetMapping(path = "check")
    public void validateToken() {
    }
}
