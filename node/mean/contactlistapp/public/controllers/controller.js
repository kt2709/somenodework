var myapp = angular.module('myApp',[]);

myapp.controller('AppCtrl',['$scope','$http',function($scope,$http){

	console.log("hello world");

	$http.get('/contactlist').success(function(data){
		$scope.contactlist = data;
	});
	
	//$scope.contactlist = contactlist;

}]);