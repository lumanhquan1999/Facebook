package com.example.facebook.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.facebook.entity.Post;
import com.example.facebook.repository.PostRepository;

@Service
public class PostServiceImp implements PostService {

	@Autowired
	PostRepository postRepository;
	
	@Override
	public Post submitPost(Post post) {
		Date date = new Date();
		Timestamp dateTime = new Timestamp(date.getTime());
		post.setPostId(UUID.randomUUID());
		post.setDateTime(dateTime);
		post.setLike(0);
		return postRepository.save(post);
	}

	@Override
	public ArrayList<Post> getAllPost() {
		// TODO Auto-generated method stub
		return (ArrayList<Post>) postRepository.findAll();
	}

	@Override
	public void deletePost(UUID postId) {
		// TODO Auto-generated method stub
		postRepository.deleteById(postId);;
	}

}
