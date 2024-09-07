package com.example.facebook.entity;

import java.sql.Timestamp;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity(name="User")
public class User {

	@Id
	private String userId;
	
	private String userName;
	private String userImageURL;
	private boolean active;
	private Timestamp joinedDate;
	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Comment> comments;
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(String userId, String userName, String userImageURL, boolean active, Timestamp joinedDate, List<Comment> comments) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userImageURL = userImageURL;
		this.active = active;
		this.joinedDate = joinedDate;
		this.comments = comments;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserImageURL() {
		return userImageURL;
	}
	public void setUserImageURL(String userImageURL) {
		this.userImageURL = userImageURL;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	public Timestamp getJoinedDate() {
		return joinedDate;
	}
	public void setJoinedDate(Timestamp joinedDate) {
		this.joinedDate = joinedDate;
	}
	public List<Comment> getComments() {
		return comments;
	}
	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
	
	
}
