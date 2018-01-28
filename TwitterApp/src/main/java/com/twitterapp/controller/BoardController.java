package com.twitterapp.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.twitterapp.entity.Interest;
import com.twitterapp.service.BoardServiceImpl;

@RestController
@RequestMapping("/api/board")
public class BoardController {
	@Autowired
	BoardServiceImpl service;
	
	@RequestMapping(value="/{user}",method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Interest addInterest(@PathVariable String user,@RequestBody Interest interest) {
		return service.addInterest(user, interest);
	}
	@RequestMapping(value = "/{user}",method = RequestMethod.GET)
	public List<Interest> listInterest(@PathVariable String user) {
		return service.listInterests(user);
	}
	@RequestMapping(value="/{user}/{id}",method = RequestMethod.DELETE)
	public void deleteInterest(@PathVariable String user, @PathVariable Long id) {
		try{
			service.delete(user, id);
		}catch(Exception e){
			
		}
	}
	
	

}
