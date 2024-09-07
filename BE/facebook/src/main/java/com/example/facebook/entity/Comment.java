package com.example.facebook.entity;

import java.sql.Timestamp;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Comment {

	@Id
	@GeneratedValue
	private UUID commentId;
	
	//private UUID postId;

	//private UUID userId;
	private String comment;
	private Timestamp dateTime;
	@ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
	@JsonIgnore
	private Post post;
	@ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
	private User user;
	
	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Comment(UUID commentId, User user, String comment, Timestamp dateTime, Post post) {
		
		super();
		this.commentId = commentId;
		//this.postId = postId;
		this.user = user;
		this.comment = comment;
		this.dateTime = dateTime;
		this.post = post;
	}

	public UUID getCommentId() {
		return commentId;
	}

	public void setCommentId(UUID commentId) {
		this.commentId = commentId;
	}

//	public UUID getPostId() {
//		return cus_postId;
//	}
//
//	public void setPostId(UUID postId) {
//		this.cus_postId = postId;
//	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
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
	
	public Post getPost() {
		return post;
	}

	public void setPost(Post post) {
		this.post = post;
	}
}

