package com.example.app.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.app.entity.Role;

@Repository
public interface RoleRepo extends CrudRepository<Role, String> {

}

