package com.twitterapp.service;

import java.util.List;

import com.twitterapp.entity.Interest;

public interface BoardService {
	
	public List<Interest> listInterests(String user);
	public Interest addInterest(String user, Interest interest);
	public void delete(String user, Long id);

}
