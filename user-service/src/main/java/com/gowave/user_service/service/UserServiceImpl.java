package com.gowave.user_service.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.gowave.user_service.model.User;
import com.gowave.user_service.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    private final BCryptPasswordEncoder hashedPassword = new BCryptPasswordEncoder();
    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        user.setPassword(hashedPassword.encode(user.getPassword()));
        return userRepository.save(user);

    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public boolean emailExists(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public boolean usernameExists(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User login(String username, String rawPassword) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return null;
        }
        if (!user.isActive()) {
            return null;
        }

        if (!hashedPassword.matches(rawPassword, user.getPassword())) {
            return null;
        }
        return user;
    }
}
