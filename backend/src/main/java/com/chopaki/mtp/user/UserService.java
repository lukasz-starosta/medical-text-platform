package com.chopaki.mtp.user;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.Date;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

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
        log.info("Getting user data: " + user.getUsername());
        return userRepository.findById(user.getId());
    }

    public void changePassword(User user) {
        log.info("Changing password");
    }

    public String signUpUser(User user) {
        log.info("Signing up user: " + user.getUsername());
        if (user.getUsername() == null || userRepository.findByUsername(user.getUsername()) != null || userRepository.findByEmail(user.getEmail()) != null) {
            throw new IllegalStateException("Username or email already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);

        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());

        return JWT.create()
                .withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 15 * 60 * 1000))
                .sign(algorithm);
    }

    public void enableUser(User user) {
        if (user.isEnabled()) {
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "User already enabled: " + user.getUsername());
        }
        log.info("Enabling user");
        user.setEnabled(true);
        userRepository.save(user);
    }
}
