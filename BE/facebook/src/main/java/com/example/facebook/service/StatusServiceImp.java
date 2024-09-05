package com.example.facebook.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.facebook.entity.Status;
import com.example.facebook.repository.StatusRepository;

@Service
public class StatusServiceImp implements StatusService {

	@Autowired
	StatusRepository statusRepository;
	
	@Override
	public Status save(Status status) {
		Date date = new Date();
		Timestamp timestamp = new Timestamp(date.getTime());
		status.setStatusId(UUID.randomUUID());
		status.setUploadTime(timestamp);
		return statusRepository.save(status);
	}

	@Override
	public ArrayList<Status> getAllStatus() {
		return statusRepository.findAll();
	}

	@Override
	public void deleteById(UUID statusId) {
		statusRepository.deleteById(statusId);
	}

}
