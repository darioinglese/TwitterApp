package com.twitterapp.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.twitterapp.entity.Interest;

public interface InterestDao extends JpaRepository<Interest, Long>{
	Interest findByName(String name);
	List<Interest> findAllByOwner(String owner);

//	List<Interest> listInterests();
}

