app.controller("myctrl",function($scope,myfactory){
	$scope.callMe=function(){
	var myword = $scope.searchWord;	
	var promise = myfactory.callServer(myword);
		
		for(var i = 1; i<=10; i++){
		console.log("Time Pass ",i);
		}
		promise.then(function(data){
			console.log("Promise Filled...");
			$scope.result = data;
		},
        function(err){
			$scope.error = err;
		});
	//$scope.data = result;
	}
});