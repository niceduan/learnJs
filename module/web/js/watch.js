/**
 * Created by dgx on 2016/9/18.
 */
var app = angular.module("wat", []);

app.directive("increasea", function() {
    return function (scope, element, attr) {
        element.on("click", function() {
            scope.a++;
            scope.$digest();
        });
    };
});

app.directive("increaseb", function() {
    return function (scope, element, attr) {
        element.on("click", function() {
            scope.b++;
            scope.$digest();    //这个换成$apply即可
        });
    };
});

app.controller("OuterCtrl", ["$scope", function($scope) {
    $scope.a = 1;

    $scope.$watch("a", function(newVal) {
        console.log("a:" + newVal);
    });

    $scope.$on("test", function(evt) {
        $scope.a++;
    });
}]);

app.controller("InnerCtrl", ["$scope", function($scope) {
    $scope.b = 2;

    $scope.$watch("b", function(newVal) {
        console.log("b:" + newVal);
        $scope.$emit("test", newVal);
    });
}]);