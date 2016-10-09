var app=angular.module("myApp",[]);

app.controller('clockController',function ($scope,$timeout)
{
    var updateClock =function () {
        $scope.clock=new Date();
        $timeout(function() {
            updateClock();
        },1000);
    };
    updateClock();

    $scope.message="hello"
    $scope.counter = 0;
    $scope.add = function(amount){$scope.counter += amount;};
    $scope.subtract = function (amount) {
        $scope.counter -= amount;
    };
    console.log("123")

})
app.controller("parentController",function ($scope) {
    $scope.person = {greeted:false}
});
app.controller("childController",function ($scope) {
    $scope.sayHello = function () {
        $scope.person.name = 'Ari Lerner'
    }
})
app.controller('exprController',function ($scope,$parse,$interpolate) {
    $scope.$watch('expr',function (newValue,oldValue,scope) {
        if(newValue!=oldValue)
        {
            var parseFun = $parse(newValue);
            $scope.parseValue = parseFun(scope)
        }
    })
    $scope.to = 'ari@fullstack.io';
    $scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';
    $scope.$watch('eamilBody',function (body) {
        if(body){
            var template = $interpolate(body);
            $scope.previewText =
                template({to:$scope.to});
        }
    })
})
app.controller('MyController',
    function($scope, $interpolate) {
       // $scope.to = 'ari@fullstack.io';
        //$scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';
        // Set up a watch
        $scope.$watch('emailBody', function(body) {
            if (body) {
                var template = $interpolate(body);
                $scope.previewText =
                    template($scope);
            }
        });
        $scope.myText = "My name is: <h1>John Doe</h1>";
    });
