package com.example.facebook.repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.facebook.entity.Comment;

@Repository
public interface CommentRepository extends CrudRepository<Comment, UUID> {

}
