package com.chopaki.mtp.user;

import com.chopaki.mtp.user.registration.token.ConfirmationToken;
import com.chopaki.mtp.user.registration.token.ConfirmationTokenService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final ConfirmationTokenService confirmationTokenService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            log.error("User not found in the database");
            throw new UsernameNotFoundException("User not found in the database");
        } else {
            log.info("User found in the database: {}", username);
        }

        return user;
    }

    public User getUserData(User user) {
        log.info("Getting user data");
        return userRepository.findById(user.getId()).orElse(new User());
    }

    public void changePassword(User user) {
        log.info("Changing password");
    }

    public String signUpUser(User user) {
        if (user.getUsername() == null || userRepository.findByUsername(user.getUsername()) != null || userRepository.findByEmail(user.getEmail()) != null) {
            throw new IllegalStateException("Username or email already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);

        ConfirmationToken token = new ConfirmationToken(
                UUID.randomUUID().toString(),
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                user
        );
        confirmationTokenService.saveConfirmationToken(token);

        return token.getToken();
    }

    public void enableUser(User user) {
        user.setEnabled(true);
        userRepository.save(user);
    }

//        log.info("Adding new user");
//        if (user.getUsername() != null && userRepository.findByUsername(user.getUsername()) == null) {
//            user.setPassword(passwordEncoder.encode(user.getPassword()));
//            userRepository.save(user);
//            return true;
//        }
//        return false;
}
