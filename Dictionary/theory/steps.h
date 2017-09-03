                          MVC-Model View Controller
step A:
     1.make index a html file and model, controller,view as js file 
     2.attach angular.min.js with your files.
step B:
     1.create angular module by {angular.module('appname',[])} and hold in a variable.
     2.create model by {appname.factory('model name',functions)}
     3.create controller by{appname.controller('controller name',functions)}
step C:-
     1.we amke a function in model 'callServer()' and print something inthis function.
     2.then we pass the $scope and model name in controller function and call the function in controller  and hold the value of function in a variable with $scope.
     3.we make a button in index.html and use ng-click for click with value(variable name).
         
Part-2
     1. we take a api url in model in any function and for use of this url we pass the $http as argument in model function.
     2.and write syntax $http.get(url).then(success,fail) then are used for when we dont know server respond time so if we wait the response time then apllication will be hang so we ,make some function like success and fail which utilize the server response time and the application doesnt hang.
     3.     

