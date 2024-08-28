package com.example.facebook.repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.facebook.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, UUID> {

	ArrayList<User> findAll();
	User findAllByUserId(UUID userId);
}
