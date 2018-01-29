'use strict';

appControllers.controller('MainController', ['$rootScope', '$scope', '$http', 'authorization',
    function($rootScope, $scope, $http, authorization) {
        $scope.profile = authorization.profile;
        
        $scope.logout = function() {
        	authorization.logout();
        }
        
        $scope.init = function () {
            $http.get("/api/board/" + $scope.profile.username)
                .then(function (response) {
                    console.log (response);
                    $scope.interests = response.data;
                });    
        }

    	$scope.createInterest = function() {
    		var type = $scope.interestTypeSelect === '@' ? 'user' : 'hashtag';
//    		var type = $scope.interestType === '@' ? 'user' : 'hashtag';
    		var interest = {
    			'type' : type,
    			'name' : $scope.newInterest
    		};
    		$http.post("/api/board/" + $scope.profile.username, interest).then(function(response) {
    			console.log(response);
    			$scope.interest = response.data;
    			addNewInterest($scope.interest);
    		});
    	}
    	
    	function addNewInterest(interest) {
    		if ($scope.interests === undefined) {
    			$scope.interests = [];
    		}
    		$scope.interests.push(interest);
    	}
    	
    	$scope.delete = function(id) {
    		var path = "/api/board/"+ $scope.profile.username + "/" + id
    		$http.delete(path)
    		.then(function(response) {
    			console.log(response);
    			$scope.init();
    		});
    	}
    	
    	$scope.search =  function (interest) {
    		var path = "/interest/" + interest.name;
    		if (interest.type === 'user') {
    			path += '/users';
    		}
            $http.get(path)
                .then(function (response) {
                    console.log (response);
                    $scope.tweets = response.data;
                    render();
                });    

        }
    	
//    	$scope.render = function(element) {
//    		
//    	}
    	
//    	function render() {
//    		$("#tweetContainer").html('');
//    		var container = $("#tweetContainer");
//    		
//    		angular.forEach($scope.tweets, function(value, key) {
//    			var tweet = '<div id="' + value + '"></div>';
//    			$("#tweetContainer").append(tweet);
//    			twttr.widgets.createTweet(
//    					value, tweet,
//    					{
//    		    	        conversation : 'none',    // or all
//    		    	        cards        : 'hidden',  // or visible
//    		    	        linkColor    : '#cc0000', // default is blue
//    		    	        theme        : 'light'    // or dark
//    		    	      }).then(function (el){console.log('Tweet added.')});
//    		});	
//    	}
    }
]);