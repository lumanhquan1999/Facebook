package com.example.facebook.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.facebook.entity.User;
import com.example.facebook.repository.UserRepository;

@Service
public class UserServiceImp implements UserService {

	@Autowired
	UserRepository userRepository;

	@Override
	public User save(User user) {
		Date date = new Date();
		Timestamp timestamp = new Timestamp(date.getTime());
		user.setUserId(UUID.randomUUID());
		user.setActive(true);
		user.setJoinedDate(timestamp);
		return userRepository.save(user);
	}

	@Override
	public ArrayList<User> getAllUser() {
		return userRepository.findAll();
	}

	@Override
	public User getUserByID(UUID userId) {
		return userRepository.findAllByUserId(userId);
	}
	
	
}
