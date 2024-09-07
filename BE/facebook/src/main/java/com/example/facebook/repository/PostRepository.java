package com.example.facebook.repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.facebook.entity.Post;

@Repository
public interface PostRepository extends CrudRepository<Post, UUID> {
	
	ArrayList<Post> findAll();
	Post findByPostId(UUID postId);
}
