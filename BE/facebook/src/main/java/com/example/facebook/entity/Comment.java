package com.example.facebook.entity;

import java.sql.Timestamp;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Comment {

	@Id
	@GeneratedValue
	private UUID commentId;
	
	private UUID postId;
	private UUID userId;
	private String comment;
	private Timestamp dateTime;
	
	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Comment(UUID commentId, UUID postId, UUID userId, String comment, Timestamp dateTime) {
		super();
		this.commentId = commentId;
		this.postId = postId;
		this.userId = userId;
		this.comment = comment;
		this.dateTime = dateTime;
	}

	public UUID getCommentId() {
		return commentId;
	}

	public void setCommentId(UUID commentId) {
		this.commentId = commentId;
	}

	public UUID getPostId() {
		return postId;
	}

	public void setPostId(UUID postId) {
		this.postId = postId;
	}

	public UUID getUserId() {
		return userId;
	}

	public void setUserId(UUID userId) {
		this.userId = userId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Timestamp getDateTime() {
		return dateTime;
	}

	public void setDateTime(Timestamp dateTime) {
		this.dateTime = dateTime;
	}
	
}
