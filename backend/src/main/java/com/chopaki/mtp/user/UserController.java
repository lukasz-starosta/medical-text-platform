package com.chopaki.mtp.user;

import com.chopaki.mtp.user.registration.RegistrationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class UserController {
    private final UserService userService;
    private final RegistrationService registrationService;
    private final UserRepositoryFirebase userRepositoryFirebase;

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

    @GetMapping(path = "/test")
    public User get(@RequestParam String username) {
        return userRepositoryFirebase.findByEmail(username);
    }
}