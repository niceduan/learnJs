/**
 * Created by dgx on 2016/9/30.
 */
var app = angular.module("myApp", ['ngSanitize']);
app.service('hexafy',function () {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
app.filter('myFormat',['hexafy',function (hexafy) {
    return function (x) {
        return hexafy.myFunc(x)
    }
}])
app.controller("myCtrl", function($scope,$location,$http,$interval,hexafy) {
    $scope.myText = "My name is: <h1>John Doe</h1>";
    $scope.myUrl = $location.absUrl;
    $http.get("table.html").then(function (data) {
        $scope.myHtml = data.data;
    })
    $interval(function () {
        $scope.theTime = new Date().toLocaleString();
        $scope.theTime1= new Date().toDateString();
        $scope.theTime2 = new Date().toLocaleTimeString();
        $scope.theTime3 = new Date().toUTCString();
    }, 1000);
    $scope.hex = hexafy.myFunc(255);

    $http({
        method: "GET",
        url: "table.html"
    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data;
    },function myError(response) {
        $scope.myWelcome = response.statusText;
    })

});