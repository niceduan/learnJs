/**
 * Created by dgx on 2016/9/16.
 */
window.location = "http://cn.bing.com";
setTimeout(function () {
    alert("hello world");
},2000);
var timestamp = document.getElementById("timestamp");
if(timestamp.firstChild == null)
    timestamp.appendChild(document.createTextNode(new Date().toString()));
timestamp.style.backgroundColor = "yellow";
timestamp.className = "highLight";
//事件处理程序的属性名是以“on”开始的
timestamp.onclick = function () {
    this.innerHTML = new Date().toString();
}
//为一个事件注册多个事件处理函数
window.addEventListener("load",function () {
   //do something
},false);
request.addEventListener("readystatechange", function () {
    //do something
}, false);
//关于IE你只能这样做
window.attachEvent("onload", function () {
    //do somrthing
});




















