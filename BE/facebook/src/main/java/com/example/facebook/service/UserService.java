package com.example.facebook.service;

import java.util.ArrayList;
import java.util.UUID;

import com.example.facebook.entity.User;

public interface UserService {
	
	User save(User user);
	
	ArrayList<User> getAllUser();
	
	User getUserByID(UUID userId);
}
