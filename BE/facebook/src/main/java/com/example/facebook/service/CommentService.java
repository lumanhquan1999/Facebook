package com.example.facebook.service;

import java.util.ArrayList;
import java.util.UUID;

import com.example.facebook.entity.Comment;

public interface CommentService {

	Comment createComment(Comment comment);
	ArrayList<Comment> getAllComment(UUID postId);
	void deleteComment(UUID commentId);
}
