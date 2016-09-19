/**
 * Created by dgx on 2016/8/21.
 */
angular.module("myApp",[], function ($rootScopeProvider) {
    $rootScopeProvider.digestTtl(Infinity);
})
    .controller('confController',function ($scope) {
        $scope.data = JSON.parse($scope.value)
        var head =[];
        for(var a in $scope.data[0] )
            head.push(a);
        $scope.thead=head;

        console.log($scope.data);
    })
    .controller('menuCtrl', function ($scope, $http) {
        $scope.helloa = true;
        $scope.helloh = true;
        function helloa() {
            $scope.checkObj = !$scope.checkObj;

        }

        function helloh() {
            $scope.helloh = !$scope.helloh;
        }

        var urlRegEx = /^https?:\/\//
        //var tag = 0;
        $scope.type = function (thing) {
            tag=0;
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
            "MODIFY": {
                "config": {
                    "left": "[{\"lower\":0,\"upper\":21,\"action\":3},{\"lower\":22,\"upper\":52,\"action\":4},{\"lower\":53,\"upper\":80,\"action\":3},{\"lower\":81,\"upper\":100,\"action\":4}]",
                    "right": "[{\"lower\":0,\"upper\":21,\"action\":3},{\"lower\":22,\"upper\":52,\"action\":4},{\"lower\":53,\"upper\":80,\"action\":3},{\"lower\":81,\"upper\":90,\"action\":4},{\"lower\":91,\"upper\":100,\"action\":3}]",
                    "arr":"[{\"one\":1,\"oneone\":11},{\"two\":2,\"twotwo\":22}]"
                }
            }
        }
        $scope.value = data;

        /*$http.get("data.json").then(function (response) {
         $scope.value = response.data
         });*/

        window.sc = $scope
    });
