package com.twitterapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.twitterapp.service.InterestService;

@RestController
@RequestMapping("/interest")
public class InterestController {
	
	private final int tweetAmount = 5;
	
	@Autowired
	private InterestService service;

	@RequestMapping(value = "/{hashTag}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<String> getTweets(@PathVariable final String hashTag) {
		return service.getTweets(hashTag, tweetAmount);
	}
	
	@RequestMapping(value = "/{user}/users", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<String> getUserTweets(@PathVariable final String user) {
		return service.getUserTweets(user, tweetAmount);
	}
}
