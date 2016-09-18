/**
 * Created by dgx on 2016/9/8.
 */
//B.prototype = inherit(A.prototype)
//B.prototype.constructor = B;

function defineSubClass(superclass,
                        constructor,
                        method,
                        static) {
    //建立子类的原型对象
    constructor.prototype = inherrit(superclass.prototype);
    constructor.prototype.constructor = constructor;
    //像对常规类一样复制方法和属性
    if (method) extend(constructor.prototype, method);
    if (static) extend(constructor.prototype, static);

    return constructor
}
Function.prototype.extend = function (constructor, methods, ststics) {
    return defineSubClass(this, constructor, methods, ststics);
};
function SingletonSet(member) {
    this.member = member;
}
SingletonSet.prototype = inherit(Set.prototype);
extend(SingletonSet.prototype, {
    constructor: SingletonSet,
    add: function () {
        throw "read only set";
    },
    remove: function () {
        throw "read only set";
    },
    size: function () {
        return 1;
    },
    foreach: function (f, context) {
        f.call(context, this.member);
    },
    contains: function (x) {
        return x == this.member;
    }
});
function NoNullSet() {
    Set.apply(this, arguments)
}
NoNullSet.prototype = inherit(Set.prototype);
NoNullSet.prototype.constructor = NoNullSet;

NoNullSet.prototype.add = function () {
    for (var i = 0; i < arguments.length; i++)
        if (arguments[i] == null)
            throw new Error("cant null or undefine");
    return Set.prototype.add.apply(this, arguments);
};

var StringSet = "";
function filteredSetSubclass(superclass, filter) {
    var constructor = function () {
        superclass.apply(this, arguments);
    };
    var proto = constructor.prototype = inherit(superclass.prototype);
    proto.constructor = constructor;
    proto.add = function () {
        for (var i = 0; i < arguments.length; i++) {
            var v = arguments[i];
            if (!filter(v)) throw ("value is reject");
        }
        superclass.prototype.add.apply(this, arguments);
    };
    return constructor;

}
var NonBullSet = (function () {
    var superclass = Set;
    return superclass.extend(
        function () {
            superclass.apply(this.argument)
        },
        {
            add: function () {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] == null) {
                        throw new Error("can't add")
                    }
                    arguments.forEach(function (a) {
                        if (a == null) a = "4";
                    })
                }
                return superclass.prototype.add.apply(this, arguments);
            }
        });
}());
//使用组合替代继承的实现
/*
 * 实现一个FilteredSet，他包装某个指定的集合对象
 * 并对传入的add（）方法的值应用了某种指定的过滤器
 * 范围类中的其他所有的核心方法延续到包装后的实例中
 * */
var FilteredSet = Set.extend(
    function FilterSet(set, filter) {
        this.set = set;
        this.filter = filter;
    },
    {//实例方法
        add: function () {
            if (this.filter) {
                arguments.forEach(function (a) {
                    if (!this.filter(a))
                        throw new Error("reject");
                });
                this, set.add.apply(this.set, arguments);
                return this;
            }
        },
        //剩下的方法保持不变
        remove: function () {
            this.set.remove.apply(this.set, arguments);
        },
        contains: function (v) {
            return this.set.contains(v);
        },
        size: function () {
            return this.set.size();
        },
        foreach: function (f, c) {
            this.set.foreach(f, c);
        }

    });
var s = new FilteredSet(new Set(), function (x) {
    return x !== null;
});
var t = new FilteredSet(s,
    function (x) {
        return !(x instanceof Set);
    })
//组合优于继承
function abstractmethod() {
    throw new Error("abstract method");
}
/*
 * AbstractSet 类定义了一个抽象方法:contains()
 */
function AbstractSet() {
    throw new Error("can't instantiate abstract classes");
}
AbstractSet.prototype.contains = abstractmethod;
var NoSet = AbstractSet.extend(
    function NoSet(set) {
        this.set = set
    },
    {
        contains: function (x) {
            return !this.set.contains(x);
        },
        equals: function (that) {
            return that instanceof NoSet && this.set.equals(that.set)
                ;
        },
        toString: function (x) {
            return "~" + this.set.toString();
        }
    });
var AbstractEnumerableSet = AbstractSet.extend(
    function () {
        throw new Error("can not instantiate abstract classes");
    },
    {
        size:abstractmethod,
        foreach:abstractmethod,
        isEmpty:function () {
            return this.size()==0;
        },
        toString:function () {
            var s = "{", i =0;
            this.foreach(function (v) {
                if(i++>0) s+=", ";
            });
            return s + "}";
        },
        toLocalString:function () {
            var s ="{",i = 0;
            this.foreach(function (v) {
                if(i++>0) s += ", ";
                if(v==null) s +=v;
                else s+=v.toLocaleString();

            });
            return s +"}";
        },
        toArray:function () {
            var a =[];
            this.foreach(function (v) {
                a.push(v);
            });
            return a ;
        },
        equals:function (that) {
            if(!(that instanceof AbstractEnumerableSet)) return false;
            try{
                this.foreach(function (v) {
                    if(!that.contains(v))
                        throw false;
                    return true;
                });
            }catch (e){
                if(e===false) return false;
                throw e;
            }
        }
    });
var SingletonSet = AbstractEnumerableSet.extend(
    function SingletonSet(member) {
        this.member = member;
    },
    {
        contains:function (x) {
            return x===this.member;
        },
        size:function () {
            return 1;
        },
        foreach:function (f,ctx) {
            f.call(ctx,this.member);
        }
    }
);
var AbstractWritableSet = AbstractEnumerableSet.extend(
    function () {
        throw new Error("can't instantiate abstract classes");
    },
    {
        add:abstractmethod,
        remove:abstractmethod,
        union:function (that) {
            var self = this;
            that.foreach(function (v) {
                self.add(v);
            });
            return this;
        },
        difference:function (that) {
            var self = this;
            that.foreach(function (v) {
                self.remove(v);
            });
            return this;
        },
        intersection:function (that) {
            var self = this;
            this.foreach(function (v) {
                if(!that.contains(v))
                    self.remove(v);
            });
            return this;
        }

    }
);
var ArraySet = AbstractEnumerableSet.extend(
    function ArraySet() {
        this.value =[];
        this.add.apply(this,arguments);
    },
    {
        contains:function (v) {
            return (this.value.indexOf(v) != -1);
        },
        size:function () {
            return this.value.length;
        },
        foreach:function (f,c) {
            this.value.forEach(f,c);
        },
        add:function () {
            for(var i = 0;i<arguments.length;i++){
                var arg = arguments[i];
                if(!this.contains(arg)) this.value.push(arg);
            }
            return this;
        },
        remove:function () {
            for(var i = 0;i<arguments.length;i++){
                var p = this.value.indexOf(arguments[i]);
                if(p==-1) continue;
                this.value.splice(p,1);
            }
            return this ;
        }
    }
)






















