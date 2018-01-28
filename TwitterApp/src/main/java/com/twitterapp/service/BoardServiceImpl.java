package com.twitterapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.twitterapp.dao.InterestDao;
import com.twitterapp.entity.Interest;
@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	InterestDao dao;
	public List<Interest> listInterests(String user) {
		return dao.findAllByOwner(user);
	}
	public Interest addInterest(String user, Interest interest) {
		interest.setUsername(user);
		return dao.save(interest);
		
	}
	public void delete(String user, Long id) {
		Interest interest = dao.findOne(id);
		if(user.equals(interest.getOwner())) {
			dao.delete(id);
		}
	}
	
	

}
