var app = angular.module("myApp", []);
app.controller("parentScope", ['$scope', function($scope){
	$scope.a = 10;
	$scope.b = 20;
}]);
app.controller("childScope", ['$scope', function($scope){
	$scope.c = 12;
	$scope.d = 21;
}]);
