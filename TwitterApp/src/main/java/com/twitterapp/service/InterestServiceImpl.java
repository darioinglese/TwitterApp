package com.twitterapp.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.twitter.api.Tweet;
import org.springframework.social.twitter.api.Twitter;
import org.springframework.stereotype.Service;
@Service
public class InterestServiceImpl implements InterestService {
	
	@Autowired
	private Twitter twitter;
	
	public List<String> getTweets(final String hashTag, final int amount) {
		return twitter.searchOperations().search(hashTag, amount).getTweets().stream().map(Tweet::getIdStr).collect(Collectors.toList());
	}
	
	public List<String> getUserTweets(final String user, final int amount) {
		return twitter.timelineOperations().getUserTimeline(user, amount).stream().map(Tweet::getIdStr).collect(Collectors.toList());
	}

}
