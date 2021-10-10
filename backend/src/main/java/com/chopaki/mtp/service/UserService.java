package com.chopaki.mtp.service;

import com.chopaki.mtp.model.User;

import java.util.Optional;

public interface UserService {
    User getUserData(User user);
    void changePassword(User user);
    Boolean register(User user);
}
