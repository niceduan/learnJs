/**
 * Created by dgx on 2016/9/29.
 */

for (var i = 0, j = 100; i < j; i++) {
    (function () {
        var c = {}, r;
        for (var i = 0, j = 1000; i < j; i++) {
            r = (Math.random() / +new Date()).toString(36).replace(/\d/g, '').slice(1);
            c[r] ? c[r] += 1 : c[r] = 1;
        }
        for (var k in c) {
            if (c[k] === 1) {
                delete c[k];
            }
        }
        console.log(c);
    }())
}

var c = {}, r;
for (var i = 0, j = 10000000; i < j; i++) {
    r = (Math.random() / +new Date()).toString(36).replace(/\d/g, '').slice(1);
    c[r] ? c[r] += 1 : c[r] = 1;
}
for (var i in c) {
    if (c[i] === 1) {
        delete c[i];
    }
}
console.log(c);

Array.apply(0, Array[5]).map(function () {
    return function (charset) {
        return charset.charAt(Math.floor(Math.random() * charset.length))
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
}).join('');

function rand(x) {
    var s = "";
    while(s.length<x&&x>0){
        var r = Math.random();
        s+=String.fromCharCode(Math.floor(r*26)+(r>0.5?97:65));
    }
    return s ;

}

/*
* jQuery.map()接数组或者类数组对象作为第一个参数，第二个参数为映射函数
* */
/*
* jQuery.merge()
* @param Obj1 Obj2
* @return Obj1 Obj1已经合并了Obj2，Obj2没有变化
* */
//p:nth-child(3n+1):text(Javascript):not(:has(a))
/*
* "inout:radio"比":radio"高效
* id过滤器是个例外"#address" 更加高效于 "form#address"
*
* A B 子孙元素中选B
* A>B 子元素中中选B
* A+B 下一个兄弟元素
* A~B 后面的兄弟元素
* 逗号分隔选择器组
* */
var paras = $("p");
paras.first();
paras.last();
paras.eq(1);
paras.eq(-1);
paras[1];

$("div").filter(function (idx) {
    return idx % 2 == 0;
});//$("div:even")
/*
* next()
* prev()
* */
jQuery.debug = function () {
    var elt = jQuery("#debug");
    if(elt.length==0) {
        elt = jQuery("<div id='debug'><h1>Debugging Output</h1></div>");
        jQuery(document.body).append(elt);
    }
    elt.println.apply(elt, arguments);
};
/*
* 添加选择器引擎
* */
jQuery.expr[":"].draggable = function (e) {
    return e.draggable === true;
};
jQuery.expr[":"].data = function (element, index, match, array) {
    return element.hasAttribute("data" + match[3]);
};
/*
* 持久化存储
* */
var naem = localStorage.username;
name = localStorage["username"];
if(!name) {
    name = prompt("what is your name ");
    localStorage.username = name;
}
for (var name in localStorage) {
    var value = localStorage[name];
}

/*
* Cookie
* */
function setcookie(name,value,daysToLive) {
    var cookie = name + "=" + encodeURIComponent(value);
    if(typeof daysToLive==="number")
        cookie+=";max-age="+(daysToLive*60*60*24)
    document.cookie = cookie;

}
function getcookie() {
    var cookie = {};
    var all = document.cookie;
    if(all==="")
        return cookie;
    var list = all.split(";");
    for(var i=0;i<list.length;i++) {
        var cookie = list[i];
        var p = cookie.indexOf("=");
        var name = cookie.substring(0, p);
        var value = cookie.substring(p + 1);
        value = decodeURIComponent(value);
        cookie[name] = value;

    }
}
/*
* 实现基于cookie的存储API
*
* */
function cookieStorage(maxage,path) {
    var cookie = (function () {
        var cookie = {};
        var all = document.cookie;
        if (all === "")
            return cookie;
        var list = all.split(";");
        list.forEach(function (cookie) {
            var p = cookie.indexOf("=");
            var name = cookie.substring(0, p);
            var value = cookie.substring(p + 1);
            value = decodeURIComponent(value);
            cookie[name] = value;
        });
        return cookie;
    }());
    var keys = [];
    cookie.forEach(function (cookie) {
        keys.push(cookie["key"]);
    });
    this.length = keys.length;
    //返回第n个cookie的名字
    this.key=function (n) {
        if(n<0||n>=keys.length)
            return null;
        return keys[n];
    };
    this.getItem = function (name) {
        return cookie[name] || null;
    };
    this.setItem = function (key, value) {
        if(!(key in cookie)) {
            key.push(key);
            this.length++;
        }
        cookie[key] = value;
        var cookie = key + "=" + encodeURIComponent(value);
        if(maxage)
            cookie += "; max-age = " + maxage;
        if(path)
            cookie += "; path = " + path;
        document.cookie = cookie;
        //删除指定cookie
    };
    this.removeItem = function(key) {
        if(!(ket in cookie))
            return ;
        delete cookie[key];
        for(var i = 0;i<keys.length;i++)
        {
            if(keys[i]===key) {
                keys.splice(i, 1);
                break;
            }
        }
        this.length--;
        document.cookie = key + "=;max-age=0";
    };
    this.clear = function () {
        keys.forEach(function (key) {
            document.cookie = keys[key] + "=;max-age=0";
        });
        cookie = {};
        keys = [];
        this.length = 0;
    }
}
/*
* 基于IE的userData实现部分存储API
* */
function UserDataStorage(maxage) {
    //创建一个元素并附加userData行为
    //因此它获得save（）和load（）方法
    var memory = document.createElement("div");
    memory.style.display = "none";
    memory.style.behavior = "url('#default#userData')";
    document.body.appendChild(memory);
    if(maxage) {
        var now = new Date().getTime();
        var expires = now +maxage*1000;
        memory.expires = new Date(expires).toUTCString();
    }
}
/*条件注释*/























