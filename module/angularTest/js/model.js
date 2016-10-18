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
};
var InputFiled = function (id, Label) {
    Filed.call(this.id);
    this.input = document.createElement('input');
};
extend(InputFiled, Filed);
InputFiled.prototype.getValue=function () {
    return this.input.value;
}

var contactForm = new CompositeForm('contact-form', 'POST', 'cantact.php');
contactForm.add(new InputFiled('first-name', 'FirstName'));
addEvent(window, 'unload', contactForm.save);

var CompositeFiledset = function (id, legendText) {
    this.component = {};
    this.element = document.createElement('fieldset');
    this.element.id = id;
    if (legendText) {
        this.legend = document.createElement('legend');
        this.legend.appendChild(document.createTextNode(legendText));
        this.element.appendChild(this.legend);
    }

};
CompositeFiledset.prototype.add = function (child) {
    Interface.ensureImplements(child, Composite, FormItem);
    this.component[child.getElement().id] = child;
    this.element.appendChild(child.getElement());
};
CompositeFiledset.prototype.remove = function () {
    //remove
};
CompositeFiledset.prototype.getChild = function () {
    //getChild
};
CompositeFiledset.prototype.save = function () {
    //save
};

var nameFiledset = new CompositeFiledset('name-filedset');
nameFiledset.add(new InputFiled('firstname', 'Firstname'));
nameFiledset.add(new InputFiled('lastname', 'LastName'));
contactForm.add(nameFiledset);

/*门面模式*/
var DED = window.DED || {};
DED.util = {
    stopPropagation: function (e) {
        if (e.stopPropagation) {
            //W3 interface
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }

    },
    preventDefault: function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    },
    stopEvent: function (e) {
        DED.util.stopPropagation(e);
        DED.util.preventDefault(e);

    }
};
DED.util.Event = {
    getEvent: function (e) {
        return e || window.event;
    },
    getTarget:function (e) {
        return e.target || srcElement;
    },
    stopPropagation:function (e) {
        if(e.stopPropagation) e.stopPropagation();
        else e.cancelBubble();

    },
    preventDefault:function (e) {
        if(e.preventDefault) e.preventDefault();
        else e.returnValue = false;
    },
    stopEevent:function (e) {
        this.stopPropagation(e);
        this.preventDefault(e);
    }
};

var Acmbicycle = function () {

};
Acmbicycle.prototype = {
    assemble: function () {

    },
    wash: function () {

    },
    ride: function () {

    },
    repair: function () {

    },
    getPrice: function () {

    }
};

var BicycleDecorator = function (bicycle) {
    Interface.ensureImplements(bicycle, Bicycle);
    this.bicycle = bicycle;
};
BicycleDecorator.prototype = {
    assemble: function () {
        return this.bicycle.assemble();
    },
    wash: function () {
        return this.bicycle.wash();
    },
    ride: function () {
        return this.bicycle.ride();
    },
    repair: function () {
        return this.bicycle.repair();
    },
    getPrice: function () {
        return this.bicycle.getPrice();
    }
};
var HeadlightDecorator = function (bicycle) {
    HeadlightDecorator.superclass.constructor.call(this, bicycle)
};
extend(HeadlightDecorator, BicycleDecorator);
HeadlightDecorator.prototype.assemble = function () {
    return this.bicycle.assemble() + 'Attach headlight handlebars';
};
var myBicycle = new Acmbicycle();//a instance of bicycle
alert(myBicycle.getPrice());
myBicycle = new HeadlightDecorator(myBicycle);
alert(myBicycle.getPrice());

/*ToolTips*/
var Tooltips = function (targetElement, text) {
    this.target = targetElement;
    this.text = text;
    this.delayTimeout = null;
    this.delay = 1500;
    //create html
    this.element = document.createElement('div');
    this.element.style.display = 'none';
    this.element.style.position = 'absolute';
    this.element.className = 'tooltip';
    document.getElementsByName('body')[0].appendChild(this.element);
    this.element.innerHTML = this.text;
    //attach events
    var that = this;//Correcting the scope
    addEvent(this.target,'mouseover',function (e) {
        this.startDelay();
    });
    addEvent(this.target,'mouseout',function (e) {
        that.hide();
    });
    Tooltips.prototype = {
        startDelay:function (e) {
            var that = this;
            var x = e.clientX;
            var y = e.clientY;
            this.delayTimeout = setTimeout(function () {
                that.show(x, y);
            }, this.delay);
        },
        show:function (x,y) {
            clearTimeout(this.delayTimeout);
            this.delayTimeout = null;
            this.element.style.display = 'none';
        },
        hide:function () {
            clearTimeout(this.delayTimeout);
            this.delayTimeout = null;
            this.element.style.display = 'none';
        }
    }

};
var Tooltip = function () {
    this.delayTimeout = null;
    this.delay = 1500;
    //create html
    this.element = document.createElement('div');
    this.element.style.display = 'none';
    this.element.style.position = 'absolute';
    this.element.className = 'tooltip';
    document.getElementsByTagName('body')[0].appendChild(this.element);
};
Tooltip.prototype = {
    startDelay: function (e, text) {
        if (this.delayTimeout == null) {
            var that = this;
            var x = e.clientX;
            var y = e.clientY;
            this.delayTimeout = setTimeout(function () {
                taht.show(x, y, text);
            }, this.delay)
        }
    },
    show: function (x, y, text) {
        clearTimeout(this.delayTimeout);
        this.delayTimeout = null;
        this.element.innerHTML = text;
        this.element.style.left = x + 'px';
        this.element.style.top = (y + 20) + 'px';
        this.element.style.display = 'block';

    },
    hide:function () {
        clearTimeout(this.delayTimeout);
        this.delayTimeout = null;
        this.element.style.display = 'none';
    }
};

var TooltipManager = (function () {
    var storeInstance = null;
    var Tooltip = function () {
        //...
    };
    Tooltip.prototype = {
        //...
    };
    return {
        addTooltip: function (targetElement, text) {
            //get the tooltip object
            var tt = this.getTooltip();
            //attach event
            addEvent(targetElement, 'mouseover', function (e) {
                tt.startDelay(e.text);
            });
            addEvent(targetElement, 'mouseout', function (e) {
                tt.hide();
            });
        },
        getTooltip: function () {
            if (storeInstance == null) {
                storeInstance = new Tooltip();
            }
            return storeInstance;
        }

    };
});
TooltipManager.addTooltip($('link-id'), 'Lomsdf..');
var DisplayModule = new Interface('DisplayModule', ['show', 'hide', 'state']);
var DialogBox = function () {
    //implements DisplayModule
};
DialogBox.prototype = {
    show: function (header, body, footer) {
        //set the content and show the dialog box
    },
    hide: function () {
        //Hide the box
    },
    state: function () {
        //return the visible or hidden
    }
};
var DialogManager = (function () {
    var created = [];
    return {
        displayDialogBox: function (header, body, footer) {
            var inUse = this.numberInUse();
            if (inUse > created.length) {
                created.push(this.createDialogBox());
            }
            cerated[inUse].show(header, body.footer)
        },
        createDialogBox: function () {
            var db = new DialogBox();
            return db;
        },
        numberInUse: function () {
            var inUse = 0;
            created.forEach(function (e) {
                if (e.state() === 'visible')
                    inUse++;
            })
            return inUse;
        }

    }
}());
/*观察者*/
function Publisher() {
    this.subscribers = [];
}
Publisher.prototype.deliver = function () {

};
Function.prototype.subscribe = function (publisher) {
    //exist?
    return this ;
}
var Animation =function (o) {
    this.onStart = new Publisher;
    this.onComplete = new Publisher;
    this.onTween = new Publisher;
};
Animation.method('fly',function () {
    //fly this
    this.onStart.deliver();
    this.onComplete.deliver();
})























































