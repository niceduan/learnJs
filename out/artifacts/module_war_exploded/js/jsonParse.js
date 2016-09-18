/**
 * Created by dgx on 2016/8/20.
 */
var app = angular.module("myApp",[]);
app.directive('tpltdemo', ['$log', function($log){
        return {
            restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: 'table.html',
            replace: true,
            link: function($scope, iElm, iAttrs, controller) {}
        }
    }])

app.controller("myController",function ($scope) {
    $scope.myData = [
        {
            "number": "2013-W45",
            "days": [
                {
                    "dow": "1",
                    "templateDay": "Monday",
                    "jobs": [
                        {
                            "name": "Wakeup",
                            "jobs": [
                                {
                                    "name": "prepare breakfast",

                                }
                            ]
                        },
                        {
                            "name": "work 9-5",

                        }
                    ]
                },
                {
                    "dow": "2",
                    "templateDay": "Tuesday",
                    "jobs": [
                        {
                            "name": "Wakeup",
                            "jobs": [
                                {
                                    "name": "prepare breakfast",

                                }
                            ]
                        }
                    ]

                }
            ],
            "dd":{"ddd":"hellqqo"}
        }

    ]
    //traverse($scope.myData,8);
   var  leftData={"left":"[{\"lower\":0,\"upper\":21,\"action\":3},{\"lower\":22,\"upper\":52,\"action\":4},{\"lower\":53,\"upper\":80,\"action\":3},{\"lower\":81,\"upper\":100,\"action\":4}]"};
    traverse(leftData,3)
    function hello(o) {
        console.log("sss")
        return "1111"
    }



    function traverse(x, level) {
        if (isArray(x)) {
            traverseArray(x, level);
        } else if ((typeof x === 'object') && (x !== null)) {
            traverseObject(x, level);
        } else {
            if(typeof x=="string"&& x.substring(0,1)=="[")
            {
                var a = JSON.parse(x)
                traverseArray(a,level);
            }else{
            console.log(level + x);
            return x;
            }




        }
    }

    function isArray(o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    }

    function traverseArray(arr, level) {
       // console.log(level + "<array>");
        //调用数组模板
        arr.forEach(function(x) {
            traverse(x, level + "  ");
        });
    }

    function traverseObject(obj, level) {
        //调用对象模板
        //console.log(level + "<object>");
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                console.log(level + "  " + key + ":");
                traverse(obj[key], level + "  ");
            }
        }
    }
});
