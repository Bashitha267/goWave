package com.gowave.user_service.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gowave.user_service.dto.LoginRequest;
import com.gowave.user_service.dto.LoginResponse;
import com.gowave.user_service.model.User;
import com.gowave.user_service.security.JwtUtil;
import com.gowave.user_service.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        if (userService.emailExists(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email already in use");
        }
        if (userService.usernameExists(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username already taken");
        }

        User createdUser = userService.createUser(user);
        return ResponseEntity.ok().body(createdUser);
    }

    @GetMapping("/getusers")
    public ResponseEntity<?> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok().body(users);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        User user = userService.login(loginRequest.getUsername(), loginRequest.getPassword());
        if (user == null) {
            return ResponseEntity.badRequest().body("Invalid Credentials");
        }

        String token = JwtUtil.generateToken(user.getUsername(), user.getRole().toString());
        return ResponseEntity.ok().body(new LoginResponse(token, user.getUsername(), user.getRole().toString()));

    }

    @GetMapping("/test")
    public ResponseEntity<?> test() {
        return ResponseEntity.ok().body("User Service is up and running!");
    }

}