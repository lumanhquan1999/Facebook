package com.example.facebook.service;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.facebook.entity.Post;


public interface PostService {

	public Post submitPost(Post post);
	
	public ArrayList<Post> getAllPost();
	
	public void deletePost(UUID postId);
}
