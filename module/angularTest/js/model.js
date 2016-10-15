/**
 * Created by guoxduan on 16/10/14.
 */
var baz;
(function () {
    var foo = 10;
    var bar = 2;
    baz = function () {
        return foo * bar;
    }

}());
(function (foo, bar) {
    alert(foo * bar);

}(2, 10));
baz();
/*对象的易变性*/
function displayError(message){
    displayError.numTimesExecuted++;
}
displayError.numTimesExcuted = 0;
/*Class Person*/
function Person(name,age) {
    this.name = name;
    this.age = age;

}
Person.prototype = {
    getName:function () {
        return this.name;
    },
    getAge:function () {
        return this.age;
    }
};
var alice = new Person('Alice', 93);
Person.prototype.getGreeting = function () {
    return 'HI' + this.getName() + '!';
};
alice.displayGreeting = function () {
    alert(this.getGreeting());
};


/*接口模仿*/
var Interface = function (name,methods) {
    if(arguments.length!=2){
        throw new Error("arg not satisfied");
    }
    this.name = name;
    this.methods = [];
    for(var i = 0,len = methods.length;i<len;i++) {
        if(typeof methods[i] !=="string") {
            throw new Error("Method Be String");
        }
        this.methods.push(methods[i]);
    }
};
Interface.ensureImplements = function (object) {
    if(arguments.length<2) {
        throw new Error("arg len need 2");
    }
    for(var i = 1,len = arguments.length;i<len;i++) {
        var interface = arguments[i];
        if (interface.constructor != Interface) {
            throw new Error("Function Interface ")
        }
        for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
            var method = interface.methods[j];
            if (!object[method] || typeof object[method] != "function") {
                throw new Error("method not found");
            }
        }
    }


};

var DynamicMap = new Interface('DynamicMap', ['centerOnPoint', 'zoom', 'draw']);
function displayRoute(mapInterface) {
    Interface.ensureImplements(mapInterface,DynamicMap)
    mapInterface.centerOnPoint(12, 34);
    mapInterface.zoom(5);
    mapInterface.draw();
}

/*Singleton*/

var singleton = {
    attribute1: true,
    attrbute2: 10,
    CONSTANT_1:true,
    CONSTANT_1:10,
    method1: function () {

    },
    method2: function (arg) {

    },
    //Init Method
    init:function () {
        
    }
};
//Invoke after load
addLoadEvent(singleton.init);

/*limited singleton*/
GiantGroup.dataParse={
    //private
    _stripWhiteSpace:function (str) {
        return str.replace(/\s+/, "");
    },
    _stringSplit:function (str,delimiter) {
        return str.split(delimiter)
    },
    stringToArray:function (str,delimiter,stripWS) {
        if(stripWS) {
            str = this._stripWhiteSpace(str);
        }
        var outputArray = this._stringSplit(str,delimiter);
        return outputArray;
    }
}




























