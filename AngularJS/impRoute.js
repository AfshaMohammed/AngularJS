var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/main', {
		template: '<h1>Main Page</h1><p>Calculation Part</p>'
	})
	.when('/home', {
		template: '<h2>Home page</h2><p>a={{a}} b={{b}} c={{a+b}}</p>',
		controller: 'homeCtrl'
	})
	.when('/about', {
		template: '<p>About page</p><address>306 Zoll Str<br/>Warrensburg<br/>Missouri<br/>64093</address>'
	})
	.when('/signin', {
		template: '<p>Signin</p><form>Name:<input type="text"><br/>Email:<input type="text"><br/><button type="submit" value="submit">Submit</button></form>'
	})
});

app.controller("homeCtrl", function($scope){
	$scope.a = 10;
	$scope.b = 20;
})
