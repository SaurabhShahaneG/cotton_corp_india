package com.example.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.app.entity.Role;
import com.example.app.entity.User;
import com.example.app.repository.RoleRepo;
import com.example.app.repository.UserRepo;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserServiceJwt {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private RoleRepo roleDao;

    @Autowired
    private PasswordEncoder passwordEncoder;


   

    public User registerNewUser(User user) {
        Role role = roleDao.findById("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        return userRepo.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
}

