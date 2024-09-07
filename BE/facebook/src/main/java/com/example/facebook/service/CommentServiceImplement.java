package com.example.facebook.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.facebook.dto.CommentDTO;
import com.example.facebook.entity.Comment;
import com.example.facebook.entity.Post;
import com.example.facebook.entity.User;
import com.example.facebook.repository.CommentRepository;
import com.example.facebook.repository.PostRepository;
import com.example.facebook.repository.UserRepository;

@Service
public class CommentServiceImplement implements CommentService {
	
	@Autowired
	CommentRepository commentRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PostRepository postRepository;

	@Override
	public Comment createComment(CommentDTO commentDTO) {
		Date date = new Date();
		Timestamp timestamp = new Timestamp(date.getTime());
		Comment comment = new Comment();
		comment.setComment(commentDTO.getComment());
		comment.setCommentId(UUID.randomUUID());
		comment.setDateTime(timestamp);
		String userId = commentDTO.getUserId();
		User user = userRepository.findAllByUserId(userId);
		comment.setUser(user);
		UUID postId = commentDTO.getPostId();
		Post post = postRepository.findByPostId(postId);
		comment.setPost(post);
		return commentRepository.save(comment);
	}

	@Override
	public void deleteComment(UUID commentId) {
		commentRepository.deleteById(commentId);
	}

}
