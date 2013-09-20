var app = angular.module('spinner', [] );

var controllers = {}

controllers.AppCtrl = function ($scope){
    $scope.sayHi = function () {
        alert("Hi")
    }
}

app.controller(controllers);