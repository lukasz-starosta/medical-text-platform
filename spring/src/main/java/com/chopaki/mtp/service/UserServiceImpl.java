package com.chopaki.mtp.service;

import com.chopaki.mtp.model.User;
import com.chopaki.mtp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            log.error("User not found in the database");
            throw new UsernameNotFoundException("User not found in the database");
        } else {
            log.info("User found in the database: {}", username);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }

    public User getUserData(User user) {
        log.info("Getting user data");
        return userRepository.findById(user.getId()).orElse(new User());
    }

    public void changePassword(User user) {
        log.info("Changing password");
    }

    public String register(User user) {
        log.info("Adding new user");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "dupa";
    }
}
