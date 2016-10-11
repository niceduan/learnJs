/**
 * Created by dgx on 2016/10/9.
 */
angular.module('myApp.service',[])
.factory('githubService',function ($http) {
    var githubUrl = 'http://api.github.com',githubUsername;
    var runUserRequest = function (username,path) {
        //使用jsonp调用github api的$http服务返回promise
        return $http({
            method:'JSONP',
            url:githubUrl+'/user/'+username+'/'+path+'?callback=JSON_CALLBACK'
        });
    };
    return {
        events:function () {
            return runUserRequest('events');
        },
        serUsername:function (username) {
            githubUsername = username;
        }
    };
});
angular.module('myApp', ['myApp.service'])
.controller('ServiceController',function ($scope,githubService,$timeout) {
    //我们可以调用事件对象的函数
   // $scope.events = githubService.events('auser')
    $scope.$watch('username',function (newUsername) {
        if(newUsername){
            if(timeout) $timeout.cancel(timeout)
            timeout = $timeout(function () {
                githubService.events(newUsername)
                    .success(function (data, status, headers) {
                        $scope.events = data.data;
                    })
            },350)
        }

    })
});
/*
* service()接受name和构造函数实例化一个服务对象
* */
var Person = function ($http) {
    this.getName = function () {
        return $http({method: 'GET', url: '/api/user'});
    };

};
angular.service('personService', Person);
//factory()方法调用了provider（）的get方法来注册服务
angular.module('myApp').factory('myService',function () {
    return {'username':'auser'};
}).provider('myService',{
    $get:function () {
        return {'username': 'auser'};
    }
});
angular.module('myApp').constant('apiKey', '123123').value('apikey', '12');
//常量可以注册到配置函数中，而值不行。通常情况下，可以通过value（）来注册
//服务或者函数，用constant（）来配置数据.常量不能被装时器拦截0

angular.module('myApp', ['ngResoruce'])
    .factory('UserService',['$resource',function ($resource) {
        return $resource('/api/users:id',{
            id:'@'
        },{
            update:{
                method:'PUT'
            }
        });
    }]);
















