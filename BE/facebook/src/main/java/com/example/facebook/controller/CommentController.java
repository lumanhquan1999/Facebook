package com.example.facebook.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.facebook.dto.CommentDTO;
import com.example.facebook.entity.Comment;
import com.example.facebook.service.CommentService;

@CrossOrigin
@RestController
@RequestMapping("/api/commentService")
public class CommentController {
	
	@Autowired
	CommentService commentService;

	@PostMapping("/save")
	public Comment createComment(@RequestBody CommentDTO comment) {
		return commentService.createComment(comment);
	}
	
	@DeleteMapping("/delete/{commentId}")
	public void deleteComment(@PathVariable("commentId") UUID commentId) {
		commentService.deleteComment(commentId);
	}
}
