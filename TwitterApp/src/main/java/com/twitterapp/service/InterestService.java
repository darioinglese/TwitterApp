package com.twitterapp.service;
//package com.twitter_agregator.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.twitter_agregator.dao.InterestDao;
//import com.twitter_agregator.entity.Interest;
//
//@Service
//public class InterestService {
//	@Autowired
//	private InterestDao dao;
//	
//	public void addItem(Interest item){
//		dao.save(item);
//	}
//	
//	public Interest getItemByName(String name) {
//		return dao.findByName(name);
//	}
//
//	public List<Interest> listItems() {
//		return dao.findAll();
//	}
//	
//	public void deleteItem(Interest item) {
//		dao.delete(item);
//	}
//
//	public void delete(Long id) {
//		dao.delete(id);
//		
//	}
//
//}
