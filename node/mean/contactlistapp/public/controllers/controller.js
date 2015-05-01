var myapp = angular.module('myApp',[]);

myapp.controller('AppCtrl',['$scope','$http',function($scope,$http){

	console.log("hello world");

	var refresh = function(){
		$http.get('/contactlist').success(function(data){
		$scope.contactlist = data;
		});
	};

	refresh();

	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactlist',$scope.contact).success(function(data){
			console.log(data);
			refresh();
		});
	};

	$scope.remove = function(id){

		console.log(id);
		$http.delete('/contactlist/'+id).success(function(data){
			console.log(data);
			refresh();
		});
		//refresh();
	};

	$scope.edit = function(id){

		console.log(id);
		$http.get('/contactlist/'+id).success(function(data){
			console.log(data);
			$scope.contact = data;
		});
	};

	$scope.update = function(){
		console.log($scope.contact._id);
		$http.put('/contactlist/'+$scope.contact._id, $scope.contact).success(function(data){
			console.log(data);
			refresh();
		});
	};

	$scope.clear = function(){
		$scope.contact = "";
	};
	
	//$scope.contactlist = contactlist;

}]);