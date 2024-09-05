package com.example.facebook.entity;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity(name="User")
public class User {

	@Id
	private String userId;
	
	private String userName;
	private String userImageURL;
	private boolean active;
	private Timestamp joinedDate;
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(String userId, String userName, String userImageURL, boolean active, Timestamp joinedDate) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userImageURL = userImageURL;
		this.active = active;
		this.joinedDate = joinedDate;
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
	
	
}
