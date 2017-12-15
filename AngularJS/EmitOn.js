var app = angular.module("myApp", []);
app.controller("parent", ['$scope', '$rootScope', function($scope, $rootScope){
	$scope.a = 10;
	$scope.b = 20;
	$scope.Cal1emit1 = function(){
		$scope.$emit("myCal1emit1");
	}
	$scope.$on("myCal1emit1", function(e, data){
		console.log("Scope level MyCal1Emit1")
	});
	$rootScope.$on("myCal1emit1", function(e, data){
		console.log(" rootScope level MyCal1Emit1")
	});
}]);
app.controller("sibling", ['$scope', '$rootScope', function($scope, $rootScope){
	$scope.p = 11;
	$scope.q = 22;
	$rootScope.$on("myCal1emit1", function(e, data){
		console.log(" sibling controller level MyCal1Emit1")
	});
}]);
app.controller("child", ['$scope', '$rootScope', function($scope, $rootScope){
	$rootScope.$on("myCal1emit1", function(e, data){
		console.log(" child controller MyCal1Emit1")
	});
}])
