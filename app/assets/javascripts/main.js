var app = angular.module('spinner', ['ngGrid'] );

app.factory('JsonRequest', function($http) {

    return {
        getServices: function(url) {
            console.log(url)
            return $http.get(url).then(function(JsonRequestMessage) {
                return JsonRequestMessage.data;
            });
        }
    }
});

var controllers = {}

controllers.SpinnerCtrl = function ($scope, JsonRequest){
    var urls = {}
    urls = {
        "OsbTrackerData": "/osb_deployment_trackers.json",
        "OsbServiceData":  "/osb_services.json",
        "DashBoardData": "/dashboards.json"
    }

    $scope.reset = function() {
        $scope.OsbServiceData = false;
        $scope.OsbTrackerData = false;
        $scope.validation = false;
        $scope.dash =false;
    }

    $scope.OsbGrid = {
        data: 'OsbServiceData',
        showGroupPanel: true,
        enableCellSelection: true,
        enableRowSelection: true,

        columnDefs: [{field: 'name', displayName: 'Name'},
            {field: 'server', displayName: 'Server'},
            {field: 'version', displayName: 'Version'},
            {field: 'harvested_at', displayName: 'Harvested'},
            {field: 'created_at', displayName: 'Created'},
            ]
    }

    $scope.TrackerGrid = {
        data: 'OsbTrackerData',
        showGroupPanel: true,
        enableCellSelection: true,
        enableRowSelection: true,


        columnDefs: [{field: 'environment', displayName: 'Environment'},
            {field: 'server', displayName: 'Server'},
            {field: 'tag', displayName: 'Tag'},
            {field: 'artifacts', displayName: 'Artifacts'},
        ]
    }

    $scope.dashboard = function () {
        $scope.reset();
        $scope.dash = JsonRequest.getServices(urls['DashBoardData']);
        return $scope.dash;
    }    
    $scope.osbservices = function () {
        $scope.reset();
        $scope.OsbServiceData = JsonRequest.getServices(urls['OsbServiceData']);
        return $scope.OsbGrid;
    }
    $scope.osbtracker = function () {
        $scope.reset();
        $scope.OsbTrackerData = JsonRequest.getServices(urls['OsbTrackerData']);
        return $scope.TrackerGrid;
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