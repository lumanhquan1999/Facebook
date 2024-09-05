package com.example.facebook.entity;


import java.sql.Timestamp;
import java.util.UUID;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;

@Entity(name="Post")
public class Post {
	@Id
	@GeneratedValue
	private UUID postId;
	
	private String userId;
	private String userName;
	private String imageURL;
	private String description;
	private String postImgURL;
	private int likes;
	private Timestamp dateTime;	
	
	public Post() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Post(UUID postId, String userId, String userName, String imageURL, String description, String postImgURL,
			int likes, Timestamp dateTime) {
		super();
		this.postId = postId;
		this.userId = userId;
		this.userName = userName;
		this.imageURL = imageURL;
		this.description = description;
		this.postImgURL = postImgURL;
		this.likes = likes;
		this.dateTime = dateTime;
	}
	
	public UUID getPostId() {
		return postId;
	}
	public void setPostId(UUID postId) {
		this.postId = postId;
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
	public String getImageURL() {
		return imageURL;
	}
	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPostImgURL() {
		return postImgURL;
	}
	public void setPostImgURL(String postImgURL) {
		this.postImgURL = postImgURL;
	}
	public int getLike() {
		return likes;
	}
	public void setLike(int like) {
		this.likes = like;
	}
	public Timestamp getDateTime() {
		return dateTime;
	}
	public void setDateTime(Timestamp dateTime) {
		this.dateTime = dateTime;
	}
}
