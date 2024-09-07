package com.example.facebook.dto;

import java.util.UUID;

public class CommentDTO {

	private String comment;
	private String userId;
	private UUID postId;

	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public UUID getPostId() {
		return postId;
	}
	public void setPostId(UUID postId) {
		this.postId = postId;
	}
	
}
