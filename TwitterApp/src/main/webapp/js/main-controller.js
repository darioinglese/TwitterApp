'use strict';

appControllers.controller('MainController', ['$rootScope', '$scope', '$http', 'authorization',
    function($rootScope, $scope, $http, authorization) {
        $scope.status = 'running...';
        $scope.profile = authorization.profile;
        $scope.isAdmin = authorization.hasRealmRole('admin')
        $scope.isManager = authorization.hasRealmRole('manager')
        
        
        $scope.getContracts = function() {
        	$http.get("http://localhost:8000/api/contracts").success(function(data) {
            	$scope.contracts = data;
            });
        }
        
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

    	$scope.create = function() {
    		var type = $scope.interestTypeSelect === '@' ? 'user' : 'hashtag';
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
                });    

        }
    }
]);