package com.example.facebook.controller;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.facebook.entity.Post;
import com.example.facebook.service.PostService;

@CrossOrigin
@RestController
@RequestMapping("/api/postService")
public class PostController {
	
	@Autowired
	PostService postService;
	
	@PostMapping("/save")
	public Post submitPost(@RequestBody Post body) {
		return postService.submitPost(body);
	}
	
	@GetMapping("/getAllPost")
	public ArrayList<Post> getAllPost() throws NotFoundException {
		ArrayList<Post> result = postService.getAllPost();
		if (result.isEmpty()) {
			throw new NotFoundException();
		}
		else return result;
	}
	
	@DeleteMapping("/delete/{postId}")
	public void deletePost(@PathVariable("postId") UUID postId)
	{
		postService.deletePost(postId);
	}
}
