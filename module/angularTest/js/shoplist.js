/**
 * Created by dgx on 2016/9/30.
 */
var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function ($scope) {
    $scope.products = ["Milk", "Breed", "Cheese"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item already in your shopping list";
        }
    };
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }
});
app.filter('capitalize', function () {
    return function (input) {
        if(input) {
            return input[0].toUpperCase() + input.slice(1);
        }
    }
});
