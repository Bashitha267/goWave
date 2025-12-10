package com.gowave.user_service.service;

import java.util.List;

import com.gowave.user_service.model.User;

public interface UserService {
        User createUser(User user);

        User getUserByUsername(String username);

        List<User> getAllUsers();

        boolean emailExists(String email);

        boolean usernameExists(String username);

        User login(String username, String password);

}