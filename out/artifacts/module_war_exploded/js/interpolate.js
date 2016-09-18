/**
 * Created by dgx on 2016/8/11.
 */
var app = angular.module('interApp', [])
app/*.config(['$interpolateProvider',function ($interpolateProvider) {
 $interpolateProvider.startSymbol('__');
 $interpolateProvider.endSymbol('__');
 }])*/
    .factory("EmailParse", ["$interpolate", function ($interpolate) {
        return {
            parse: function (text, context) {
                var template = $interpolate(text);
                return template(context);
            }
        }
    }]);
app.controller("interController", ["$scope", "EmailParse",
    function ($scope, EmailParse) {
    $scope.qq = {"modificationDate":{"right":"Aug 9, 2016 5:29:30 PM"},
        "modifiedBy":{"right":"Um00000001"},
        "appCode":{"left":"test0","right":"test1"},
        "decisionId":{"left":1,"right":2}}


        $scope.aaa = ["lower","upper","action"];
        var datas = {
            "MODIFY": {
                "config": {
                    "left": "[{\"lower\":0,\"upper\":40,\"action\":3},{\"lower\":41,\"upper\":100,\"action\":4}]",
                    "right": "[{\"lower\":0,\"upper\":25,\"action\":3},{\"lower\":26,\"upper\":59,\"action\":4},{\"lower\":60,\"upper\":100,\"action\":3}]"
                }
            }
        };
        //var json = JSON.parse(datas);
        // console.log($scope.datas.length);
        //var datas = $scope.datas;
        var property = [];
        var value = [];
        $scope.testArr =[{

            "left": [{"lower":0,"upper":40,"action":3},{"lower":41,"upper":100,"action":4 }],
            "right": [{"lower":0,"upper":25,"action":3},{"lower":26,"upper":59,"action":4},{"lower":60,"upper":100,"action":3}]
        }];


        $scope.tests = [];

        var s = ""

        function func(o) {
            if (typeof o === "object") {
                s += "";
                for (var p in o) {
                    //console.log(s + p)
                    $scope.tests.push(s + p);
                    console.log(typeof o[p])
                    if (typeof o[p] != "object") {
                        if (typeof  o[p] == "string") {
                            console.log("HOW TO DO ?  "+o[p])



                        }
                        else {
                            //console.log(s + p + ":" + s + o[p]);
                            // $scope.tests.pop() ;
                            $scope.tests.pop();
                            $scope.tests.push(s + p + ":" + s + o[p]);
                        }
                    }

                    func(o[p])
                }
                s = s.slice(2)
            }
        }

        func(datas);
        console.log($scope.tests);

        /*for(var a in datas){
         console.log(a)
         for(var b in datas[a]){
         console.log(b)
         for(var c in datas[a][b])
         {
         console.log(c)
         console.log(datas[a][b][c])
         }
         }
         }*/


        // $scope.data2s = parseVal($scope.data1s);
        function parseKey(o) {
            var arr = [], i = 0;
            for (var a in o) {
                arr[i++] = a;//property
            }
            return arr;

        }

        function parseVal(o) {
            var brr = [], j = 0;
            for (var a in o) {
                brr[j++] = o[a];//value
            }
            return brr;

        }


        $scope.$watch("emailBody", function (body) {
            if (body) {
                $scope.previewText = EmailParse.parse(body, {
                    to: $scope.to
                });
            }
        });
    }]);

