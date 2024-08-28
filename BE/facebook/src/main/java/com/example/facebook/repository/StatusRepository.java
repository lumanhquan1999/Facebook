package com.example.facebook.repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.facebook.entity.Status;

@Repository
public interface StatusRepository extends CrudRepository<Status, UUID> {

	ArrayList<Status> findAll();
}
