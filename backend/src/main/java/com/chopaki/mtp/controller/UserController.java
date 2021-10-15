package com.chopaki.mtp.controller;

import com.chopaki.mtp.model.User;
import com.chopaki.mtp.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost")
@RequiredArgsConstructor
@RequestMapping("/api/auth")
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
    public ResponseEntity<?> register(@RequestBody User user) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/register").toUriString());
        if (userService.register(user)) {
            return ResponseEntity.created(uri).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
        }
    }
}
