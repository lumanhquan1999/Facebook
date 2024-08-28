package com.example.facebook.entity;

import java.sql.Timestamp;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Status {

	@Id
	@GeneratedValue
	private UUID statusId;
	
	private UUID userId;
	private String statusImageURL;
	private Timestamp uploadTime;
	public Status() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UUID getStatusId() {
		return statusId;
	}
	public void setStatusId(UUID statusId) {
		this.statusId = statusId;
	}
	public UUID getUserId() {
		return userId;
	}
	public void setUserId(UUID userId) {
		this.userId = userId;
	}
	public String getStatusImageURL() {
		return statusImageURL;
	}
	public void setStatusImageURL(String statusImageURL) {
		this.statusImageURL = statusImageURL;
	}
	public Timestamp getUploadTime() {
		return uploadTime;
	}
	public void setUploadTime(Timestamp uploadTime) {
		this.uploadTime = uploadTime;
	}
	public Status(UUID statusId, UUID userId, String statusImageURL, Timestamp uploadTime) {
		super();
		this.statusId = statusId;
		this.userId = userId;
		this.statusImageURL = statusImageURL;
		this.uploadTime = uploadTime;
	}
}
