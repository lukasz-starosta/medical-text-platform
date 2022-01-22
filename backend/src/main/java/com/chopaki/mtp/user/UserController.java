package com.chopaki.mtp.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class UserController {
    private final UserService userService;

    @GetMapping(path = "/user-info")
    public ResponseEntity<User> getUserInfo(@RequestBody User user) {
        return ResponseEntity.ok().body(userService.getUserData(user));
    }

    @PostMapping(path = "/change-password")
    public ResponseEntity<Boolean> changePassword(@RequestBody String json) {
        return ResponseEntity.ok().body(userService.changePassword(json));
    }
    
    @PostMapping(path = "/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return ResponseEntity.ok().build();
    }
}
