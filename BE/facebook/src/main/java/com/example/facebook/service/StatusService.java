package com.example.facebook.service;

import java.util.ArrayList;
import java.util.UUID;

import com.example.facebook.entity.Status;

public interface StatusService {

	Status save(Status status);
	ArrayList<Status> getAllStatus();
	void deleteById(UUID statusId);
}
