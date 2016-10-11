angular.module('IsolatedApp', [])
    .controller('MyCtrl', function ($scope) {
        $scope.mydata = "hello";
        $scope.say = say;
        function say(msg) {
            $scope.mydata = msg;
        }
    }).directive('myDirective', function () {
        return {
            template: '<div><input type="text" ng-model="msg1">' +
            '<button type="button" ng-click="wodeshuxing({msgee:msg1})">myButton</button></div>',/*这是一个高端的东西*/
            scope: {
                wodeshuxing: '&'
            }
            /* <div my-directive wodeshuxing="say(msgee)"></div>*/
        }
    })
    // Attribute Isolated Scope
    .controller('AttributeCtrl', function () {
        var ctrl = this;
        ctrl.parentName = 'Attribute Controller';
    })
    .directive('attributeBox', function () {
        return {
            template: '<input class="form-control" type="text" ng-model="localName">',
            scope: {
                localName: '@'
            }
        }
    })

    // One-way Binding Isolated Scope
    .controller('OneWayBindingCtrl', function () {
        var ctrl = this;
        ctrl.parentItem = {
            name: 'Binding Controller',
            description: 'Binding Description'
        };
    })
    .directive('oneWayBindingBox', function () {
        return {
            template: '<input class="form-control" type="text" ng-model="localItem.name">'
            + '<input class="form-control" type="text" ng-model="localItem.description">',
            scope: {
                localItem: '<'
            }
        }
    })
    // Two-way Binding Isolated Scope
    .controller('TwoWayBindingCtrl', function () {
        var ctrl = this;
        ctrl.parentItem = {
            name: 'Binding Controller',
            description: 'Binding Description'
        };
    })
    .directive('twoWayBindingBox', function () {
        return {
            template: '<input class="form-control" type="text" ng-model="localItem.name">'
            + '<input class="form-control" type="text" ng-model="localItem.description">',
            scope: {
                localItem: '='
            }
        }
    })
    // Expression Isolated Scope
    .controller('ExpressionCtrl', function () {
        var ctrl = this;
        ctrl.hello = 'Hello Message';
        ctrl.goodbye = 'Goodbye Message';

        ctrl.sayHello = function (message) {
            ctrl.hello = message;
        }

        ctrl.sayGoodbye = function (message) {
            ctrl.goodbye = message;
        }
    })
    .directive('expressionBox', function () {
        return {
            template: ' <div class="input-group"><input class="form-control" type="text" ng-model="message" placeholder="Enter a message">'
            + '<span class="input-group-btn">'
            + '<button type="button" class="btn btn-default" ng-click="localExpression({message:message})">Send</button></span></div>',
            scope: {
                localExpression: '&'
            }
        }
    });