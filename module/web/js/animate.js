/**
 * Created by dgx on 2016/9/20.
 */
function shake(e,oncomplete,distance,time){
    if(typeof e ==="string") e = document.getElementById(e);
    if(!time) time = 5000;
    if(!distance) distance =5;
    var originalStyle = e.style.cssText;
    var start = (new Date()).getTime();
    animate();
    function animate() {

        var now = (new Date()).getTime();
        var elapsed = now-start;
        var fraction = elapsed/time;
        if(fraction<1){
            var a =100;
            var x= distance*Math.sin(fraction*4*Math.PI);
            a+=50;
            e.style.marginLeft = a+"px";
            setTimeout(animate,Math.min(25,time-elapsed));
        }else {
            e.style.cssText = originalStyle;
            if(oncomplete) oncomplete(e);
        }
    }
}
function fadeOut(e,oncomplete,time) {
    if(typeof e==="string") e=document.getElementById(e);
    if(!time) time=500;
    var ease = Math.sqrt;
    var start = (new Date()).getTime();
    animate();
    function animate() {
        var elapsed = (new Date()).getTime()-start;
        var fraction = elapsed/time;
        if(fraction<1){
            var opacity = 1-ease(fraction);
            e.style.opacity=String(opacity);
            setTimeout(animate,Math.min(25,time-elapsed));
        }else {
            e.style.opacity="0";
            if(oncomplete) oncomplete(e);
        }
    }
}
var title = document.getElementById("sfsdf");
var titleStyles = window.getComputedStyle(element,null);

function ClassList(e){
    if(e.classList) return e.classList;
    return new CSSClassList(e);
}
function CSSClassList(e) {
    this.e=e;
}
ClassList.prototype.contains = function (c) {
    if(c.length===0||c.indexOf(" ")!=-1)
        throw new Error("ddd");
    var classes = this.e.calssName;
    if(classes) return false;
    if(classes===c) return true;
}