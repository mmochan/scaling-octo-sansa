var app = angular.module('spinner', [] );


app.factory('myService', function($http) {
    return {
        getServices: function() {
            return $http.get('/osb_services.json').then(function(result) {
                    return result.data;
                });
        }
    }
});

app.factory('Tracker', function($http) {
    return {
        getServices: function() {
            return $http.get('/osb_deployment_trackers.json').then(function(tracker) {
                    return tracker.data;
                });
        }
    }
});

app.factory('Dashboard', function($http) {
    return {
        getServices: function() {
            return $http.get('/dashboards.json').then(function(dash) {
                    return dash.data;
                });
        }
    }
});

var controllers = {}

controllers.SpinnerCtrl = function ($scope, myService, Tracker, Dashboard){

    $scope.reset = function() {
        $scope.myosbs = false;
        $scope.tracker = false;
        $scope.validation = false;
        $scope.poos =false;
    }
    $scope.poos = function () {
        $scope.reset();
        $scope.poos = Dashboard.getServices();
        return $scope.poos;
    }    
    $scope.osbservices = function () {
        $scope.reset();
        $scope.myosbs = myService.getServices();
        return $scope.myosbs;
    }
    $scope.osbtracker = function () {
        $scope.reset();
        $scope.tracker = Tracker.getServices();
        return $scope.tracker;
    }
    $scope.validation = function () {
        $scope.reset();
        $scope.validation = true;
        return $scope.validation;
    }    
}

app.controller(controllers);