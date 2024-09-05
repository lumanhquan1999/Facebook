package com.example.facebook.controller;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.facebook.entity.User;
import com.example.facebook.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api/userService")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/save")
	public User registerUser(@RequestBody User user) {
		return userService.save(user);
	}
	
	@GetMapping("/getAllUser")
	public ArrayList<User> getAllUser() {
		return userService.getAllUser();
	}
	
	@GetMapping("/getUser/{userId}")
	public User getUser(@PathVariable("userId") String userId) {
		return userService.getUserByID(userId);
	}
}
