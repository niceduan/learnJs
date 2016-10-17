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
};
/*annother*/
GiantGroup.dataParse2 =(function () {
    var whiteSpaceRegex = /\s+/;
    function stringSplit(str,delimiter) {
        return str.split(delimiter);
    }
    function stripWhiteSpace(str) {
        return str.replace(whiteSpaceRegex);
    }
    return{
        stringToAray:function (str,delimiter,whiteSpace) {
            if(whiteSpace){
                str = stripWhiteSpace(str)
            }
            var outputArray = stringSplit(str, delimiter);
            return outputArray;
        }

    }
});
/*lazy loading*/
GaintGroup.dataParse3 = (function () {
    var uniqueInstance;
    function constructor() {
        var privateAttribute1 = false;
        var privateAttribute2 = [1, 2, 3];
        function privateMethod1() {
            
        };
        function privateMethod2() {
            
        }
        return {//publicmember
            publicAttribute1:true,
            publicAttribute2:10,
            publicMethod1:function () {
                privateAttribute1();
            },
            publicMethod2:function (args) {
                
            }

        }
    };
    return {
        getInstance:function () {
            if(!uniqueInstance){
                uniqueInstance = constructor();
            }
            return uniqueInstance;
        }
    };

}());
/*分支*/
var xhrFactory = (function () {
    
})

var BicycleFactory = {
    createBicycle: function (model) {
        var bicycle;
        switch (model) {
            case 'The Speedster':
                //creat
                break;
            case 'The Lowride':
                //creat
                break;
            case 'The Comfortable Cruiser':
                //creat
                break;
        }
        Interface.ensureImplements(bicycle, Bicycle);

        return bicycle;
    },
    
};
var Bicycle = new Interface('Bycicle', ['assemble', 'wash', 'ride', 'repair']);
var Speedster = function () {};
Speedster.prototype={
    assemble:function () {

    },
    wash:function () {

    },
    ride:function () {

    },
    repair:function () {
        
    }
}
var BicycleShop = function () {};
BicycleShop.prototype = {
    sellBicycle: function (model) {
        var bicycle = BicycleFactory.createBicycle(model);
        bicycle.assemble();
        bicycle.wash();
        //bicycle.ride();
        // bicycle.repair();
        return bicycle;

    },
    createBicycle: function (model) {
        throw new Error("create");
    }
};
var AcmShop = function () {

};
extend(AcmShop, BicycleShop);
AcmShop.prototype.createBicycle = function (model) {
    var bicycle;
    switch (model) {
        case "Speedster":
            bicycle = Speedster();
            break;
        default:
            bicycle = null;


    }
    return bicycle;
};

/*专用型链接对象*/
var SimpleHandler  = function () {

};
SimpleHandler.prototype={
    request:function (method,url,callback,postVars) {
        var xhr = this.createObject();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            (xhr.status === 200) ?
                callback.success(xhr.responseText, xhr.responseXML) :
                callback.failure(xhr, status);

        };
        xhr.open(method,url,true);
        if(method!=='POST')
            postVars = null;
        xhr.send(postVars);



    },
    createObject:function () {

    }

}

var QueueHandler = function () {
    this.queue = [];
    this.requestInProgress = false;
    this.retryDelay = 5;

};
extend(QueueHandler, SimpleHandler);

/*桥接模式*/
addEvent(element, 'click', getBeerById);
addEvent(element, 'click', getBeerByIdBridge);
function getBeerById(e) {
    var id = this.id;
    asynRequest('GET', 'url&params', function (resp) {
        console.log(resp);
    });
}
//转换为桥接模式
function getBeerByIdFix(id,callback) {
    asynRequest('','',function (resp) {
        console.log(resp);
    })
}
function getBeerByIdBridge(e) {
    getBeerByIdFix(this.id, function (beer) {
        //Do somethig
    });
}


var asynRequest = (function () {
    function handleReadyState(o,callback) {
        var poll = window.setInterval(
            function () {
                if(o&&o.readyState == 4) {
                    window.clearInterval(poll);
                    if(callback) {
                        callback(o)
                    }
                }
            },50
        );
    }
    var getXhr = function () {
        var http;
        try{
            /*Books wrong ?????*/
            http = new XMLHttpRequest;
            getXHR = function () {
                return new XMLHttpRequest;
            }
        }
    }
});
Function.prototype.method = function (name, fn) {
    this.prototype[name] = fn;
    return this;

};

if(!Array.prototype.forEach) {
    Array.method('forEach', function (fn, thisbj) {
        var scope = thisObj || window;
        for (var i = 0, len = this.length; i < len; i++) {
            fn.call(scope, this[i], i.this)
        }

    });
    if(!Array.prototype.filter) {
        Array.method('filter',function (fn,thisObj) {
            var scope = thisObj || window;
            var a = [];
            for (var i = 0, len = this.length; i < len;i++){
                if(!fn.call(scope,this[i],i,this))
                    continue;
                a.push(this[i]);
            }
            return a;
        })


    }
}
/*组合模式*/
var Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
var FormItem = new Interface('FormItem', ['save']);

var CompositeForm = function (id, method, action) {
    this.formComponents = [];
    this.element.id = id;
    this.method = method || 'POST';
    this.action = action || '#';
};
CompositeForm.prototype.add = function (child) {
    Interface.ensureImplements(child, Composite, FormItem);
    this.formComponents.push(child);
    this.element.appendChild(child.getElement());
};
CompositeForm.prototype.remove = function (child) {
    for (var i = 0, len = this.formComponents.length; i < len; i++) {
        this.formComponents.splice(i, 1);//remove one element from the array at position 1
        break;
    }
};
CompositeForm.prototype.getChild = function (i) {
    return this.formComponents[i];
};
CompositeForm.prototype.save = function () {
    for (var i = 1, len = this.formComponents.length; i < len; i++) {
        this.formComponents[i].save();
    }
};
CompositeForm.prototype.getElement = function () {
    return this.getElement();
};
/*叶对象*/
var Filed = function (id) {
    this.id = id;
    this.element;
};
Filed.prototype.add = function () {};
Filed.prototype.remove = function () {};
Filed.prototype.getChild= function () {};
Filed.prototype.save = function () {
    setcookie(this.id, this.getValue);
};
Filed.prototype.getElement = function () {
    return this.element;
};
Filed.prototype.getValue = function () {
    throw new Error('blabla');
}







































