/**
 * Created by dgx on 2016/8/21.
 */

function flexsum(a){
    var total = 0;
    for(var i=0;i<arguments.length;i++){
        var element = arguments[i],n;
        if(element == null)continue;
        if(isArray(element))
            n = flexsum.apply(this,element)
        else if(typeof element ==="function")
            n = Numben(element());
        else
            n = Number(element);
        if(isNaN(n))
            throw Error("flexsum(): can't convert" + element +"to number");
        total +=n;
    }
    return total;
}
uniqueInteger.counter = 0;
function uniqueInteger(){
    return uniqueInteger.counter++;
}
var uniqueInteger1 = (function () {
    var counter=1;
    return function () {
        return counter++;
    };
}());

var uniqueInteger2 = temp();

function temp() {
    var counter = 3;
    return function (){return counter++;}
}

function factorial(n){
    if(isFinite(n) && n>0 && n ==Math.round(n)){
        if(!(n in factorial))
            factorial[n] = n*factorial(n-1);
        return factorial[n];
    }
    else return NaN;
}
factorial[1] = 1;

var scope = "global";
function checkacope(){
    var scope = "local"
    function f(){return scope;}
    return f;
}
function counter(){
    var n=0;
    return {
        count:function(){return n++},
        reset:function(){ n = 0 }
    };
}
var c= counter(),d = counter();
console.log([c.count(),d.count(),c.reset()])
function inherit(p) {
    if(p == null) throw TypeError();
    if(Object.create)
        return Object.create(p);
    var t = typeof p;
    if(t!=="object" && t !=="function" )
        function f(){};
    f.prototype = p;
    return new f();
}




