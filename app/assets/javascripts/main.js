var app = angular.module('spinner', [] );


app.factory('myService', function($http) {
    return {
        getServices: function() {
            //return the promise directly.
            return $http.get('/osb_services.json').then(function(result) {
                    //resolve the promise as the data
                    return result.data;
                });
        }
    }
});


var controllers = {}
controllers.SpinnerCtrl = function ($scope, myService){
    $scope.osbservices = function () {
        $scope.myosbs = myService.getServices();
        return $scope.myosbs;
    }
}

app.controller(controllers);