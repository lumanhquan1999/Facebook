package com.example.facebook.controller;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.facebook.entity.Status;
import com.example.facebook.service.StatusService;

@RestController
@RequestMapping("/api/statusRequest")
public class StatusController {
	
	@Autowired
	StatusService statusService;

	@PostMapping("/save")
	public Status createStatus(@RequestParam Status status) {
		return statusService.save(status);
	}
	
	@GetMapping("/getAllStatus")
	public ArrayList<Status> getAllStatus() {
		return statusService.getAllStatus();
	}
	
	@DeleteMapping("/deleteStatus/{statusId}")
	public void deleteStatus(@PathVariable("statusId") UUID statusId) {
		statusService.deleteById(statusId);
	}
}
