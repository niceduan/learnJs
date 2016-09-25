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
e.dataTransfe

var request = new XMLHttpRequest();
if(window.XMLHttpRequest===undefined){
    window.XMLHttpRequest = function(){
        try{
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        }catch(e1){
            try{
                return ActiveXObject("Msxml2.XMLHTTP.3.0");
            }catch (e2){
                throw new Error("XMLHttprequest is not supported");
            }
        }
    }
}
request.open("GET","data.csv");
request.setRequestHeader("Content-Type", "text/plain");
request.send(null);
/*POST方法给服务器发送纯文本*/
function postMessage(msg) {
    var request = new XMLHttpRequest();
    request.open("POST","/log.php");
    //用请求体发送纯文本消息
    request.setRequestHeader("Content-Type",
        "text/plain;charset=UTF-8");
    request.send(msg)
}
function getText(url,callback) {
    var request = new XMLHttpRequest();
    request.open("GET",url);
    request.onreadystatechange = function () {
        if(request.readyState===4&&request.status===200){
            var type = request.getResponseHeader("Content-Type");
            if(type.match(/^text/)){
                callback(request.responseText)
            }
        }
    };
    request.send(null);
}
//解析HTTP响应
function get(url,callback) {
    var request = new XMLHttpRequest();//创建新请求
    request.open("GET",url);
    request.onreadystatechange = function () {
        if(request.readyState===4&&request.status===200) {
            var type = request.getResponseHeader("Content-Type");
            if(type.indexOf("xml")!=-1&&request.responseXML){
                callback(request.responseXML);
            }else if(type==="application/json"){
                callback(JSON.parse(request.responseText));//JSON
            }else {
                callback(request.responseText);//String
            }
        }
    };
    request.send(null);
}
//不把响应作为XML文档处理
request.overrideMimeType("text/plain;charset=utf-8");
function encodeFormData(data) {
    if(!data) return "";
    var paris =[];
    for (var name in data){
        if(!data.hasOwnProperty("name") )continue;
        if(typeof data[name] ==="function") continue;
        var value = data[name].toString();
        name = encodeURIComponent(name.replace("20%","+"));
        value = encodeURIComponent(value.replace("%20","+"));
        paris.push(name+"="+value);
    }
    return paris.join('&');
}
function postData(url,data,callback) {
    var request = new XMLHttpRequest();
    request.open("POST",url);
    request.onreadystatechange = function () {
        if(request.readyState===4&& callback)
            callback(request);

    };
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
    request.send(encodeFormData(data));
}
//表单编码数据发起get请求
function getData(url,data,callback) {
    var requeset = new XMLHttpRequest();
    requeset.open("GET", url + "?" + encodeFormData(data));
    requeset.onreadystatechange = function () {
        if(requeset.readyState===4&&callback) callback(requeset);
    }
    requeset.send(null);
}
//使用JSON编码主体来发起HTTP POST请求
function postJSON(url,data,callback) {
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && callback) {
            callback(request);
        }
    };
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
}
//XML编码的请求
function postQuery(url,what,where,radius,callback) {
    var request = new XMLHttpRequest();
    request.open("POST",url);
    request.onreadystatechange = function () {
        if(request.readyState===4&&callback) callback(request);
    };
    var doc = document.implementation.createDocument("", "query", null);
    var query = doc.documentElement;
    var find = doc.createElement("find");
    find.setAttribute("zipcode",where);
    find.setAttribute("radius",radius);
    find.appendChild(doc.createTextNode(what));
    request.send(doc);
}

whenReady(function () {
    var elts = document.getElementsByTagName("input");
    for(var i=1;i<elts.length;i++){
        var input = elts[i];
        if(input.type!=="file") continue;
        var url = input.getAttribute("data-uploadto");
        if(!url) continue;
    }
    input.addEventListener("change",function () {
        var file = this.files[0];
        if(!file) return;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.send(file);
    },false)
});





















