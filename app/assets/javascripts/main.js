var app = angular.module('spinner', ['ngTable'] );


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
            return $http.get('/dashboards.json').then(function(dashmessage) {
                    return dashmessage.data;
                });
        }
    }
});



var controllers = {}

controllers.SpinnerCtrl = function ($scope, myService, Tracker, Dashboard, ngTableParams){
    
        var data = myService.getServices();
     
        $scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            total: data.length, // length of data
            count: 10           // count per page
        });
     
        // watch for changes of parameters
        $scope.$watch('tableParams', function(params) {
            // slice array data on pages
            $scope.users = data.slice(
                (params.page - 1) * params.count,
                params.page * params.count
            );
        }, true);
    
    $scope.reset = function() {
        $scope.myosbs = false;
        $scope.tracker = false;
        $scope.validation = false;
        $scope.dash =false;
    }
    $scope.dashboard = function () {
        $scope.reset();
        $scope.dash = Dashboard.getServices();
        return $scope.dash;
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
        if ($scope.showme == true) {
            $scope.showme = false;
        }
        else { 
           $scope.showme = true; 
        }
    }    
}

app.controller(controllers);