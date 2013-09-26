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
    urls = { "OsbTrackerData": "/osb_deployment_trackers.json",
        "OsbServiceData":  "/osb_services.json",
        "DashBoardData": "/dashboards.json",
        "DeploymentServiceData": "/deployment_service_data.json"
    }

    $scope.reset = function() {
        $scope.OsbServiceData = false;
        $scope.OsbTrackerData = false;
        $scope.validation = false;
        $scope.DashBoardData =false;
        $scope.DeploymentServiceData =false;
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

    $scope.getData = function (serviceName) {
// Working on this bit
        mykeys = Object.keys(urls));
        console.log(mykeys);
        $scope[ serviceName ] = JsonRequest.getServices(urls[$scope[serviceName]]);
    }

    $scope.dashboard = function () {
        $scope.reset();
        $scope.DashBoardData = JsonRequest.getServices(urls['DashBoardData']);
    }    
    $scope.osbservices = function () {
        $scope.reset();
        $scope.OsbServiceData = JsonRequest.getServices(urls['OsbServiceData']);
    }
    $scope.osbtracker = function () {
        $scope.reset();
        $scope.OsbTrackerData = JsonRequest.getServices(urls['OsbTrackerData']);  // using ng-show to trigger the display

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