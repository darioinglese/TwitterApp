package com.twitterapp.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.social.twitter.api.Tweet;
import org.springframework.social.twitter.api.Twitter;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
//import com.twitter_agregator.service.InterestService;

@RestController
@RequestMapping("/interest")
public class InterestController {
	
	@Autowired
	private Twitter twitter;

	@RequestMapping(value = "/{hashTag}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<String> getTweets(@PathVariable final String hashTag) {
		return twitter.searchOperations().search(hashTag, 5).getTweets().stream().map(Tweet::getIdStr).collect(Collectors.toList());
	}
	
	@RequestMapping(value = "/{user}/users", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<String> getUserTweets(@PathVariable final String user) {
		return twitter.timelineOperations().getUserTimeline(user).stream().map(Tweet::getIdStr).collect(Collectors.toList());
	}

	
}
