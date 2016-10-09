/**
 * Created by dgx on 2016/10/7.
 */
var app = angular.module('myApp', []);
app.directive('myDirective',function () {
    return {
        restrict:'E',
        template:'<a href="form.html">Click Me </a>'
    }
});
app.directive('googleDirective',function () {
    return {
        restrict:'A',
        replace:true,
        scope:{
            myUrl:'=someAttr',
            myLinkText:'@'//绑定策略
        },
        template:'<div><label><input type="text" ng-model="myUrl"/><a href="{{myUrl}}">{{myLinkText}}</a></label></label></div>'

    }
});
app.controller('directiveCtrl',['$scope',function ($scope) {
    $scope.myData = "44asd"
}]);
app.run(function ($rootScope,$timeout) {
    $rootScope.isDisabled = true;
    $timeout(function () {
        $rootScope.isDisabled = false;
    }, 5000);
});
app.directive('sidebox',function () {
    return {
        restrict:'EA',
        scope:{
            title:'@'
        },
        transclude:true,
        template:'<div class="sidebox">' +
        '<div class="content">' +
        '<h2 class="header">{{title}}</h2>' +
        '<span class="content" ng-transclude></span>' +
        '</div></div>'
    }
});
angular.module('myApp',[])
.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'views/home.html',
            controller:'HomeController'
        })
        .when('/login',{
            templateUrl:'views/login.html',
            controller:'LoginController'
        })
        .when('/dashboard',{
            templateUrl:'views/dashboard.html',
            controller:'DashboardController',
            resolve:{
                user:function (SessionService) {
                    return SessionService.getCurrentUser();
                }
            }
        })
        .otherwise({
            redirectTo:'/'
        });

}]);
/*
* $routerChangeStart
* $routerChangeSuccess
* */
app.run(['$rootScope','$location',function ($rootScope,$location) {
    $rootScope.$on('routerChangeStart',function (evt,next,current) {
        //路由变化之前广播此事件，路由服务加载所需的依赖
        //并且模板和resolve键中的promise也会被resolve
    })
}]);
/*
* $location服务不会重新加载整个页面，只会单纯的改变URL。如果我们想重新加载整个页面
* 需要使用$windows.location.href='/reload/page'
* */
/*
* 异步的地址变化
* 想在作用域生命周期外使用$location服务，必须用$apply函数将变化抛到应用外部。因为$location
* 服务是基于$digest来驱动浏览器的地址变化，以路由事件正常工作的
* */

//依赖注入环节
app.factory('greeter',function () {
    return {
        greet:function (msg) {
            alert(msg);
        }
    }
}).controller('injectController',function ($scope,greeter) {
    $scope.sayHello = function () {
        greeter.greet("Hello!");
    };
});
//内部加载
var injector = angular.injector(['ng', 'myApp']);
var $controller = injector.get('$controller');
var scope = injector.get('$rootScope').$new();
var injectController = $controller('injectController',{$scope:scope});
//注入
injector.invoke(function ($http,greeter) {
    //Do Something
});
//显式注入声明
var aControllerFactory =
    function aController($scope,greeter) {
        console.log("Load Controller",greeter)
    };
aControllerFactory.$inject = ['$scope', 'greeter'];
angular.module('myApp', [])
    .controller('MyController', aControllerFactory)
    .factory('greeter', greeterService);
var injector = angular.injector(['ng', 'myApp']),
    controller = injector.get('$controller'),
    rootScope = injector.get('$rootScope'),
    newScope = rootScope.$new();
//调用控制器
controller('MyController', {$scope: newScope});
//服务
app.factory('UserService',function ($http) {
    var current_user;
    return {
        getCurrentUser:function () {
            return current_user;
        },
        setCurrentUser:function (user) {
            current_user = user;
        }
    }
});











