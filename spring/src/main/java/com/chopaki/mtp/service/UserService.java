package com.chopaki.mtp.service;

import com.chopaki.mtp.model.User;
import com.chopaki.mtp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public Optional<User> getUserData(User user) {
        return userRepository.findById(user.getId());
    }

    @Transactional
    public void changePassword(User user) {
    }
}
