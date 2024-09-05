package com.example.facebook.repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.facebook.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

	ArrayList<User> findAll();
	User findAllByUserId(String userId);
}
