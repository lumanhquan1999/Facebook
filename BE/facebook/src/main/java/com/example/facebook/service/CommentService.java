package com.example.facebook.service;

import java.util.UUID;

import com.example.facebook.dto.CommentDTO;
import com.example.facebook.entity.Comment;

public interface CommentService {

	Comment createComment(CommentDTO comment);
	void deleteComment(UUID commentId);
}
