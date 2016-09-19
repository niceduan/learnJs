/**
 * Created by dgx on 2016/9/11.
 */
//将代码包装在一个匿名函数中，定义的变量就在这个函数作用域内
(function () {
    //定义一个不可枚举的属性ObjectId，它可以被所有的对象继承
    //当读取这个属性时调用getter函数
    //它没有定义setter，因此它是只读的
    //它是不可配置的，因此它是不可删除的
    Object.defineProperty(Object.prototype,"objectId",{
        get:idGetter,
        enumerable:false,
        configurable:false
    });
    function idGetter(){
        if(!(idprop in this))
            throw Error ("can't define id for nonextensible objects")
        Object.defineProperty(this,idprop,{
            value:nextid++,
            writable:false,
            enumerable:false,
            configurable:false
        });
        return this[idprop];

    };
    var idprop = "|**objectId**|";
    var nextid = 1;

    function Range(from,to) {
        var props = {
            from:{value:from, enumerable:true,writable:false,configurable:false},
            to:{value:to,enumerable:true,writable:false,configurable:false}
        };
        if (this instanceof Range)
            Object.defineProperties(this,props);
        else
            return Object.create(Range.prototype,props)
    }
    Object.defineProperties(Range.prototype,{
        includes:{
            values:function (x) {
                return (this.from <=x && x<=to);
            }
        },
        foreach:{
            value:function (f) {
                for(var x = Math.ceil(this.from);x<this.to;x++){
                    f(x);
                }
            }
        },
        toString:{
            value:function () {
                return "("+this.from +"..."+this.to +")";
            }
        }

    })
}());
//设置o的属性为不可配置
function freezeProps(o) {
    var props = (arguments.length == 1)
        ?Object.getOwnPropertyNames(o)
        :Array.prototype.splice.call(arguments,1);

    props.forEach(function (n) {
        //忽略不可配置的属性
        if(!Object.getOwnPropertyDescriptor(o,n).configurable) return;
        Object.defineProperty(o,n,{writable:false,configurable:false});
    });
    return o;
}
//another
function hidePeops(o){
    var props = (arguments.length ==1)
        ?Object.getOwnPropertyNames(o)
        :Array.prototype.splice.call(arguments,1);
    props.forEach(function (n) {
        if(!Object.getOwnPropertyDescriptor(o,n).configurable) return;
        Object.defineProperties(o,n,{enumerable:false})
    });
    return o;
}
function Range(from,to) {
    this.from = from;
    this.to = to ;
    freezeProps(this);
}
Range.prototype = hidePeops({
    constructor:Range,
    includes:function (x) {
    return this.from <=x && x<=this.to;
},
    foreach:function (f) {
        for(var x = Math.ceil(this.from);x<=this.to;x++)
            f(x);
    },
    toString:function () {
        return "("+this.from+"..."+this.to+")"
    }
})

/*这个版本的Range类是可变的，但是将端点进行了良好的封装
*
* */
function Range(from,to) {
    if(from>to) throw new Errorf("Range error");
    //定义存取器方法以维持不变
    function getFrom() {
        return from;
    }
    function getTo() {
        return to;
    }
    function setFrom(f) {
        if(f <= to ) from = f;
        else throw new Error("from must <= to");
    }
    function setTo(t) {
        if(t>=from) to = t;
        else throw new Error("range to must >=from");
    }
    Object.defineProperties(this,{
        from:{get:getFrom,set:setFrom,enumerable:true,configurable:false},
        to:{get:getTo,set:setTo,enumerable:true,configurable:false}
    });
}
//组织对Objet。prototype的扩展
Object.seal(Object.prototype);//Object.freeze

function StringSet() {
    this.set = Object.create(null);
    this.n = 0;
    this.add.apply(this,arguments);
}
StringSet.prototype = Object.create(AbstractWritableSet.prototype,{
    constructor:{value:StringSet},
    contains:{value:function (x) {
        return x in this.set;
    }},
    size:{value:function(){
        return this.n}},
    foreach:{value:function (f,c) {
        Object.keys(this.set).forEach(f,c);
    }},
    add:{value:function () {
        for(var i in arguments)
        {
            if(!i in set){
                this.set[i] = true;
                this.n++;
            }
        }
        return this;
    }},
    remove:{
        value:function () {
            for(var i in arguments){
                if(i in this.set) {
                    delete this.set[i];
                    this.n--;
                }


            }
        }
}
});
(function namespace() {
    function properties()
    {
        var names;
        if (arguments.length == 0)
            names = Object.getOwnPropertyNames(this);
        else if (arguments.length == 1 && Array.isArray(arguments[0]))
            names = arguments[0];
        else
            names = Array.prototype.splice.call(arguments, o);
        return new Properties(this, name);
    }
    Object.defineProperty(Object.prototype,"properties",{
        value:properties,
        enumerable:false,writable:true,configurable:true
    });
    Properties.prototype.hide = function () {
        var o = this.o,hidden = {enumerable:false};
        this.names.forEach(function (n) {
            if(o.hasOwnProperty(n))
                Object.defineProperty(o,n,hidden);
        });
        return this;
    };
    Properties.prototype.freeze = function () {
        var o = this.o,freeze={writable:false,configurable:false};
        this.names.forEach(function (n) {
            if(o.hasOwnProperty(n))
                Object.defineProperty(o,n,frozen);
        });
        return this;
    }
    Properties.prototype.descriptors = function () {
        var o = this.o,desc = {};
        this.names.forEach(function (n) {
            if(!o.hasOwnProperty(n)) return ;
            desc[n] = Object.getOwnPropertyDescriptor(o,n);
        });
        return desc;
    }
    Properties.prototype.toString = function () {
        var o = this.o;
        var lines = this.names.map(nameToString);
        return "{\n"+lines.join(",\n")+"\n}";
        function nameToString(n) {
            var s = "",desc=Object.getOwnPropertyDescriptor(o,n);
            if(!desc) return "nonexistent" + n +":undefined";
            if(!desc.configurable) s+="permanent";
            //blabla
        }
        return s ;
    }
    Properties.prototype.properties().hide();


}());
var collections;
if(!collections)
    collections={};
    collections.sets={};
    collections.sets.AbstractSet=function () {
        //Do something
    };

var Set =(function invocation() {
    function Set() {
        this.value = {};
        this.n = 0;
        this.add.apply(this,arguments);
    }
    Set.prototype.contains = function(value){
        return this.value.hasOwnProperty(v2s(value));
    }
    function v2s(val){/*...*/}
    function objectId(o){/*...*/}
    var nextId =1;
    return Set;
}());

collections.sets = (function namespace() {
    return {
        AbstractSet:AbstractSet,
        NoSet:NoSet
    }
}());
collections.sets = (new function namespace() {
    this.AbstractSet = AbstractSet;
    this.NoSet = NoSet
}());

(function namespace() {
    collections.sets.AbstractSet = AbstractSet;
    collections.sets.NoSet = NoSet;
}());















