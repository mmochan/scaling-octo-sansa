var app = angular.module('spinner', [] );

app.factory('myService', function($http) {
    return {
        getFoos: function() {
            //return the promise directly.
            return $http.get('/foos').then(function(result) {
                    //resolve the promise as the data
                    return result.data;
                });
        }
    }
});

module.controller('MyCtrl', function($scope, myService) {
    //now you can just call it and stick it in a $scope property.
    //it will update when it resolves.
    $scope.foos = myService.getFoos();
});

var controllers = {}

controllers.AppCtrl = function ($scope){
    $scope.sayHi = function () {
        alert("Hi")
    }
}

app.controller(controllers);