app.factory('myFactory',function($http,$q){
    var Object={};
     Object.callServer=function(city){
         var deferObject=$q.defer();
         var url="http://api.openweathermap.org/data/2.5/weather?q= "+ city+"&APPID=4300ce1519819eddbc01ec09c189f412&units=Metric";
         $http.get(url).then(success,fail);
         function success(data){
             deferObject.resolve(data);
             
         }
         function fail(err){
             deferObject.reject(err);
         }
         return deferObject.promise;
         
     }
    
    return Object;
});