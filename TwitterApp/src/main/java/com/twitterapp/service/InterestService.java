package com.twitterapp.service;

import java.util.List;

public interface InterestService {
	
	List<String> getTweets(String hashTag, int amount);
	List<String> getUserTweets(String user, int amount);

}
