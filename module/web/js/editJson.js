angular.module("myApp", ['ngAnimate'],function ($rootScopeProvider) {
    $rootScopeProvider.digestTtl(Infinity);
})
    .controller('hashController',function ($scope) {
        $scope.isActive=false;
        $scope.test=function () {
            $scope.checkObj=!($scope.checkObj);
        }


    })
    .controller('confController',function ($scope) {
        $scope.data = JSON.parse($scope.value)
        var head =[];
        for(var a in $scope.data[0] )
            head.push(a);
        $scope.thead=head;

        function hello () {
            console.log("helloa")
            //$scope.checkObj=!$scope.checkObj;
        }



    })
    .controller('menuCtrl', function ($scope, $http) {
//(function menuCtrl($scope,$http){
        var urlRegEx = /^https?:\/\//;

        $scope.type = function (thing) {
            switch (typeof thing) {
                case "object":
                    if (Object.prototype.toString.call(thing) === "[object Array]") {
                        return 'array'
                    } else if (thing == null) {
                        return 'null'
                    } else {
                        return 'hash'
                    }
                case "string":
                    if (thing.substring(0, 1) == "[") {
                        var a = JSON.parse(thing)
                        return 'config'
                    }
                    else if (urlRegEx.test(thing)) {
                        return "url"
                    } else {
                        return "string"
                    }
                default:
                    return typeof thing
            }
        }
        var data1=[
            {"number": "2013-W45",
                "days": [{"dow": "1", "templateDay": "Monday", "jobs": [{"name": "Wakeup", "jobs": [
                    {"name": "prepare breakfast",}]}, {"name": "work 9-5",}]},{"dow": "2",
                    "templateDay": "Tuesday", "jobs": [{"name": "Wakeup", "jobs": [{"name": "prepare breakfast",}]}]}],
                "dd":{"ddd":"hellqqo"}}];
        var data = {
            "EQ": "true"
        }
        $scope.value = data;


        /*$http.get("data.json").then(function (response) {
         $scope.value = response.data
         });*/

        window.sc = $scope
    });
