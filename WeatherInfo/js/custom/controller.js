app.controller('apiController',function($scope,myFactory){
    $scope.weather=function(){
         var myCity=$scope.city;
        
         var promise=myFactory.callServer(myCity);
        for(i=1;i<=10;i++){
            console.log("Time Pass",i);
            
        }
        promise.then(function(data){
            console.log("Promise Filled...");
			$scope.weatherData = data;         
            
        },
        function(err){
        console.log("Promise didn't filled...");
    });      
    }
    
});