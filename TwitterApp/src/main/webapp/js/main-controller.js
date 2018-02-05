'use strict';

appControllers.controller('MainController', ['$rootScope', '$scope', '$http', 'authorization', '$filter',
    function($rootScope, $scope, $http, authorization, $filter) {
        $scope.profile = authorization.profile;
        $scope.idPool =[]; 
        
        $scope.logout = function() {
        	authorization.logout();
        }
        
        $scope.init = function () {
            $http.get("/api/board/" + $scope.profile.username)
                .then(function (response) {
                    console.log (response);
                    $scope.interests = response.data;
                    $scope.update();
                }); 
        }
        

    	$scope.createInterest = function() {
    		var type = $scope.interestTypeSelect === '@' ? 'user' : 'hashtag';
    		var interest = {
    			'type' : type,
    			'name' : $scope.newInterest
    		};
    		var found = $.grep($scope.interests, function(e) {return e.name === interest.name && e.type === interest.type;}).length;
        	if(found === 0) {	
        		
    		$http.post("/api/board/" + $scope.profile.username, interest).then(function(response) {
    			console.log(response);
    			$scope.interest = response.data;
    			addNewInterest($scope.interest);
    			
    		});
        	} else {
        		console.log('interest alredy exists');
        	}
    	}
    	
    	function addNewInterest(interest) {
    		if ($scope.interests === undefined) {
    			$scope.interests = [];
    		}
    		$scope.interests.push(interest);
    		$scope.search(interest);
    	}
    	
    	$scope.delete = function(idx) {
    		var myInterest = $scope.interests[idx];    		
    		var path = "/api/board/"+ $scope.profile.username + "/" + myInterest.id;
    		$http.delete(path)
    		.then(function(response) {
    			console.log(response);
    			console.log($scope.idPool);
    			$scope.idPool = $filter('filter')($scope.idPool, {interest: '!' + $scope.interests[idx].name})
    			$scope.interests.splice(idx, 1);
    			console.log('idPool: ' + $scope.idPool);
    			console.log('interests: ' + $scope.interests);
    			
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
                    for(var i = 0; i < response.data.length; i++ ) {
                    	var elem = {'interest': interest.name, 'value': response.data[i]};
                    	var found = $.grep($scope.idPool, function(e) {return e.value === elem.value;}).length;
                    	if(found === 0) {	
                    		$scope.idPool.push(elem);
                    	} else {
                    		console.log('interest alredy exists');
                    	}
                    }
                });    

        }
    	
    	$scope.update = function () {
    		for (var i = 0; i < $scope.interests.length; i++) {
    			$scope.search($scope.interests[i]);
    		}
    	}
    	
    }
]);