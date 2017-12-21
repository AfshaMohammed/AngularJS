var app = angular.module("myApp", []);
app.controller("people", function($scope, $http){
	$http.get('https://127.0.0.1/AngularJS/database.json').success(function(response){
		$scope.persons = response.records;
	});
});
