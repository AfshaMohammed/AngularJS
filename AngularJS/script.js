
var app = angular.module("myApp", []);
app.directive("actorData", function(){
	return{
		restrict: 'E',
		templateUrl:'data.html'
	};
});
app.controller("myCtrl", function($scope){
	$scope.data=[
		{
			name:'Jamie Dornan',
			movie:'Flying Home',
			image:'https://vg-images.condecdn.net/image/xmq0QKKwrR8/crop/405'
		},
		{
			name:'Dakota Johnson',
			movie:'How to be single',
			image:'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxOTcxMjg0OV5BMl5BanBnXkFtZTgwMjg1Mjg1NDE@._V1_UX214_CR0,0,214,317_AL_.jpg'
		},
		{
			name:'Jennifer Lopez',
			movie:'The wedding planner',
			image:'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0OTY3ODA3OV5BMl5BanBnXkFtZTcwMzMyMzQ1NQ@@._V1_UY317_CR32,0,214,317_AL_.jpg'
		}
	];
	});
