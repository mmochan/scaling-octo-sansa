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

controllers.GridCtrl = function ($scope) {
    
}

controllers.SpinnerCtrl = function ($scope, JsonRequest){

    $scope.init = function () {
      $scope.DashBoardData = JsonRequest.getServices(urls["DashBoardData"])   //loads the default DashBoardData page
    };

    $scope.category = 'DashBoardData';  // default active tab

    $scope.isActive = function (category) {
        //Check if category of a given <li> is equal to the current category
        return $scope.category === category;                // returns true if they both equal. $scope.category is set in getData()
    }

    var urls = {};

    urls = { "somejunk": false,
        "OsbTrackerData": "/osb_deployment_trackers.json",
        "OsbServiceData":  "/osb_services.json",
        "DashBoardData": "/dashboards.json",
        "DeploymentServiceData": "/deployment_service_data.json",
        "ReleaseValidationData": "/release_validations.json",
        "RuntimeValidationData": "/runtime_validations.json"
    }

    $scope.reset = function() {
        $scope.OsbServiceData = false;
        $scope.OsbTrackerData = false;
        $scope.ValidationTracker = false;
        $scope.DashBoardData = false;
        $scope.DeploymentServiceData = false;
        $scope.ReleaseValidationData = false;
        $scope.RuntimeValidationData = false;
    }


    //Start of Grid definitions

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

    $scope.ReleaseGrid = {
        data: 'ReleaseValidationData',
        showGroupPanel: true,
        enableCellSelection: true,
        enableRowSelection: true,
        columnDefs: [{field: 'server', displayName: 'Server'},
            {field: 'file', displayName: 'file'},
            {field: 'error', displayName: 'Error'},
            {field: 'message', displayName: 'Message'},
            {field: 'component', displayName: 'Component'},
        ]
    }

    $scope.RuntimeGrid = {
        data: 'RuntimeValidationData',
        showGroupPanel: true,
        enableCellSelection: true,
        enableRowSelection: true,
        columnDefs: [{field: 'server', displayName: 'Server'},
            {field: 'file', displayName: 'file'},
            {field: 'error', displayName: 'Error'},
            {field: 'message', displayName: 'Message'},
            {field: 'component', displayName: 'Component'},
        ]
    }

    //  End of Grid definitions

    var namedServiceData = [];
    var idx;

    $scope.getData = function (serviceName) {
        $scope.category = serviceName;                  // Updates the category for tab active
        $scope.reset();                                 // Reset the ng-show to false
        namedServiceData = Object.keys(urls)            // Create an Array of valid serviceNames
        if ( namedServiceData.indexOf(serviceName)) {   // If the serviceName passed exists
            idx = namedServiceData.indexOf(serviceName) // Get the index
            //Use the index to create the name of the $scope.variable and call getServices
            // This sets one of the ng-show variables to be truthy based on response data being present.
            $scope[namedServiceData[idx]] = JsonRequest.getServices(urls[namedServiceData[idx]])
        }
    }
}

app.controller(controllers);