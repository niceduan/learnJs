/**
 * Created by dgx on 2016/9/30.
 */
var app = angular.module("myApp", ["ngRouter"]);
app.config(function ($routerProvider) {
    $routerProvider
        .when("/", {
            templateUrl: "main.htm"
        })
        .when("/red", {
            templateUrl: "red.htm"
        })
        .when("/green", {
            templateUrl: "green.htm"
        })
        .when("/blue", {
            templateUrl: blue.htm
        });
});