package com.example.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.app.entity.Role;
import com.example.app.repository.RoleRepo;

@Service
public class RoleService {

    @Autowired
    private RoleRepo roleDao;

    public Role createNewRole(Role role) {
        return roleDao.save(role);
    }
}
