package com.chopaki.mtp.service;

import com.chopaki.mtp.model.User;
import com.chopaki.mtp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserService {
//    @Autowired
//    UserRepository userRepository;

    public User getUserData() {
        return new User();
    }
}
