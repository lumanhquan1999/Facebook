package com.example.facebook.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.facebook.entity.Comment;
import com.example.facebook.repository.CommentRepository;

@Service
public class CommentServiceImplement implements CommentService {
	
	@Autowired
	CommentRepository commentRepository;

	@Override
	public Comment createComment(Comment comment) {
		Date date = new Date();
		Timestamp timestamp = new Timestamp(date.getTime());
		comment.setCommentId(UUID.randomUUID());
		comment.setDateTime(timestamp);
		return commentRepository.save(comment);
	}

	@Override
	public ArrayList<Comment> getAllComment(UUID postId) {
		return commentRepository.findAllByPostId(postId);
	}

	@Override
	public void deleteComment(UUID commentId) {
		commentRepository.deleteById(commentId);
	}

}
