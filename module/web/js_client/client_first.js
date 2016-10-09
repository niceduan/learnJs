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
//HTTP上传文件multipart/form-data
function postFormData(url,data,callback) {
    if(typeof FormData==="undefined")
        throw new Error("form data is not implenmented");
    var request = new XMLHttpRequest();
    request.open("POST",url);
    request.onreadystatechange = function () {
        if(request.readyState==4&&callback) {
            callback(request);
        }
    }
    var formdata = new FormData();
    for(var name in data){
        if(!data.hasOwnProperty(name)) continue;
        var value = data[name];
        if(typeof value==="function") continue;
        formdata.append(name,value);
    }
    request.send(formdata);
}
//监控HTTP上传进度
whenReady(function () {
    var elts = document.getElementsByClassName("firstDropTagget");
    for (var i =0;i<elts.length;i++) {
        var target = elts[i];
        var url = target.getAttribute("data-upload");
        if(!url) continue;
        createFileUploadDropTarget(target,url);
    }
    function createFileUploadDropTarget(target,url) {
        var uploading = false;
        console.log(target,url);
        target.ondragenter = function (e) {
            console.log("dragenter");
            if(uploading) return ;
            var types = e.dataTransfer.types;
            if(types&&
                ((types.contains && types.contains("Files"))||
                (types.indexOf&&types.indexOf("Files")!==-1))){
                target.ondragover = function (e) {
                    if(!uploading) return false;
                };
                target.ondragleave = function (e) {
                    if(!uploading) target.classList.remove("wantdrop");
                };
                target.ondrop = function (e) {
                    if(uploading) return false;
                    var files = e.dataTransfer.files;
                    if(files&&files.length){
                        uploading = true;
                        var message = "Uploading files:<ul>";
                        for(var i=0;i<files.length;i++)
                            message += "<li>" + files[i].name + "</li>";
                        message += "</ul>";
                        target.innerHTML = message;
                        target.classList.remove("wantdrop");
                        target.classList.add("uploading");
                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", url);
                        var body = new FormData();
                        for(var i = 0;i<filess.length;i++) {
                            body.append(i, files[i]);
                        }
                        xhr.upload.onprogress = function (e) {
                            if(e.lengthComputable){
                                target.innerHTML = message + Math.random(e.loaded / e.total * 100)
                                    + "% Complete";
                            }
                        };
                        xhr.upload.onload = function (e) {
                            uploading = false;
                            target.classList.remove("uploading");
                            target.innerHTML = "Drop files to upload";
                        }
                        xhr.send(body);
                        return false;
                    }
                    target.classList.remove("wantdrop");
                }
            }

        }



    }

})
//实现超时
function timedGetText(url,timeout,callback) {
    var request = new XMLHttpRequest();
    var timedout = false;
    var timer = setTimeout(function () {
        timedout = true;
        request.abort();
    }, timeout);
    request.open("GET", url);
    request.onreadystatechange = function () {
        if (request.readyState !== 4) return;
        if (timedout) return;
        clearTimeout(timer);
        if (request.status === 200) {
            callback(request.responseText);
        }
        ;
        request.send(null);//立即发送请求
    }
}
//借助<script>发送请求JSONP
function getJSONP(url, callback) {
    var cbnum = "cb" + getJSONP.counter++;
    var cbname = "getJSONP." + cbnum;
}

//jQuery
$(":header").map(function () {
    return this.id;
}).toArray().sort();
$("div").each(function () {
    if ($(this).is(":hidden")) return;
    //对可见元素做点什么
});

$("form").attr("action");
$("#icon").attr("src", "icon.gif");
$("#banner").attr({src: "banner.gif", alt: "Advertisement", width: 720, height: 64});
$("a").attr("target", "_blank");
$("a").attr("target", function () {
    if (this.host == location.host) return "_self";
    else return "_blank";
});
$("a").attr({
    targrt: function () {
        //...
    }
});
$("a").removeAttr("target");
//获取和设置CSS属性
$("h1").css("font-weight");
$("h1").css("fontWeight");
$("h1").css("font");
$("h1").css("font-variant", "smallcaps");
$("div.note").css("border", "solid black 2px");
$("h1").css({
    backgroundColor: "black",
    textColor: "white", fontVariant: "small-caps", padding: "10px 2px 4px 20px",
    border: "dotted black 4px"
});
$("h1").css("font-size", function (i, curval) {
    return Math.round(1.25 * parseInt(curval));
});
//获取和设置CSS类
$("h1").addClass("hilite");//给所有元素添加一个类
$("h1+p").addClass("hilite first");
$("section").addClass(function (n) {
    return "section" + n;
});
//s删除CSS类
$("p").removeClass("hilite");
$("p").removeClass("hilite first");//一次删除多个类
$("section").removeClass(function (n) {
    return "section" + n;
});
$("div").removeClass();//s删除所有的类
//切换CSS类
$("tr:odd").toggleClass("oddrow");
$("h1").toggleClass(function (n) {
    return "big bold h1-" + n;
});
$("h1").toggleClass("hilite", true);//add
$("h1").toggleClass("hilite", false);//remove
$("h1").toggleClass(function (n) {
    return "big bold h1" + n;
});
//检测CSS类
$("p").hasClass("first");
$("#lead").is(".first");
$("#lead").is(".first.hilite");

$("#surname").val();
$("#usstate").val();
$("select#extras").val()

$("input:radio[name=ship]:checked").val();
$("#email").val("Invalid email address");

$("input:checkbox").val(["opt1", "opt2"]);//选中带有这些名字或者值的复选框
$("input:text").val(function () {
    return this.defaultValue;//重置所有文本域的默认值
});

var title = $("head title").text()
var headline = $("h1").html();
$("h1").text(function (n, current) {
    return "$" + (n + 1) + ":" + current
});

//获取位置和设置高宽
var elt = $("#sprite");
var position = elt.offset();
position.top += 100;
elt.offset(position);
//将所有的<h1>元素右移，移动的距离取决于他们在文档中的位置
$("h1").offset(function (index, curpos) {
    return {left: curpos.left + 25 * index, top: curpos.top};
});

var body = $("body");
var contentWidth = body.width();
var paddingWidth = body.innerWidth();
var borderWidth = body.outerWidth();
var marginWidth = body.outerWidth(true);

var paddings = paddingWidth - contentWidth;
var borders = borderWidth - paddingWidth;
var margins = marginWidth - borderWidth;

//根据页面数n来滚动窗口，n可以是分数或者负数
function page() {
    var w = $("window");
    var pagesize = w.height();
    var current = w.scrollTop();//得到当前滚动条的位置
    w.scrollTop(current + n * pagesize);
}

//获取和设置元素
$("div").data("x",1);//设置一些数据
$("div.nodata").removeData("x");//s删除一些数据
var x = $("#mydiv").data("x");//获取一些数据;

//插入和替换元素
$("#log").append("<br/>"+message);
$("h1").prepend("$");
$("h1").before("<hr/>");
$("h1").after("<hr/>");
$("hr").replaceWith("<br/>");
$("h2").each(function () {
    var h2 = $(this);
    h2.replaceWith("<h1/>" + h2.html() + "<h1/>");
});
$("h1").map(function () {
    return this.firstChild;
}).before("$");

$("<br/>" + message).appendTo("#log");
$(document.createTextNode("$")).prependTo("h1");
$("<hr/>").insertBefore("h1");
$("<hr/>").insertAfter("h1");
$("<br/>").replaceAll("hr");//将hr替换为br

$(document.body).append("<div id = 'linklist><h1>List of Links</h1></div>");
$("a").clone().appendTo("#linklist");
$("#linklist>a").after("<br/>");
/*
* clone()不会复制事件处理程序和其他与元素相关的数据，如果想复制这些数据，请传入true参数
* */
//用<i>包装所有的<h1>元素
$("h1").wrap(document.createElement("i"));//<i><h1></h1></i>
$("h1").wrapInner("<i/>");//<h1><i></i></h1>
//将第一个段落包装在一个锚点和div里面
$("body>p:first").wrap("<a name='lead><div class='first'></div></a>");

/*
* 删除事件 remove（）
* detach（） 删除但不移除事件处理，以备以后插入
 * unwrap（） 替换父节点为自己
*
* */

$("p").click(function () {
    $(this).css("background-color","gray")
});
/*
* focus和blur不支持事件冒泡，但是focusin 和 focusout支持
* mouseover 和mouseout 支持冒泡
*
* */

/*
* 返回false等同于调用Event的preventDefault（） 和 stopPropagation（）
* */
$("a").bind('mouseenter mouseleave', f);
$('a').hover(f,g)
$("a").bind({mouseenter: f, mouseleave: g});
//注销事件处理程序
/*
* unbind()不会注销通过onclick元素定义的处理程序，也不会注销addEventListener或者
* attachEvent方法注册的事件处理程序
* 不带参数时unbind会注销jQuery对象中所有元素的所有事件处理程序
* */
$('*').unbind();//从所有元素中移除jQuery事件处理程序
$('a').unbind("mouseover mouseout");
$('a').unbind("click.ns1.ns2");
$('a').unbind("mouseover.myMod mouseout.myMod");
$('a').unbind(".myMod");

$("#mybutton").unbind('click', myClickListener);//注销特定事件类型的指定处理函数
$("a").unbind({
    mouseover:mouseoverHandler,
    mouseout:mouseoutHandler
});

$("#my_form").submit();//就和用户单击提交按钮一样 依然冒泡，以及触发祖先节点的处理事件
$("#my_form").trigger("submit");

$("button").trigger("click.ns1");
$("button").trigger("click!");
//button1的单击事件处理程序触发button2上的相同事件
$("button1").click(function (e) {
    $('#button2').trigger(e);
});
//触发事件，添加额外的属性给事件对象
$("button1").trigger({type: 'click', synthetic: true});
//该程序处理检测额外的属性来区分是真实事件还是虚假事件
$("button1").click(function (e) {
    if(e.synthetic){//do something
        }
});
//给触发程序传递参数
$("#button1").trigger("click", true);
$("#button1").trigger("click", [x,y,z]);

$(document).delegate('a', 'mouseover', linkHandler);
//静态链接的静态事件处理程序
$("a").bind("mouseover", linkHandler);
//文档中的动态更新部分采用实时处理程序
$(".dynamic").delegate("a", "mouseover", linkHandler);

$("a").live("mouseover", linkHandler);
$("a", $(".dynamic")).live("mouseover", linkHandler);

$("a").die('mouseover');
$("a").die('mouseover','linkHandler');

$(document).undelegate('a');
$(document).undelegate('a','mouseover');
$(document).undelegate('a','mouseover',linkHandler);

$(".stopmoving").click(function () {
    jQuery.fx.off = true;
});
$("#message").fadeIn({
    duration:"fast",
    complete:function () {
        $(this).text("Hello World");
    }
});

$("#sprite").animate({
    opacity:.25,
    fontSize:10
},{
    duration:500,
    complete:function () {
        this.text("Goodbye");
    }
});
$("p").animate({
    "margin-left": "+=.5in",
    opacity: "-=.1"
});
$("img").fadeIn(500)
    .animate({"width": "+=100"}, {queue: false, duration: 1000})
    .fadeOut(500);
$("img").animate({"width": "+=100"}, {duration: 500, easing: "iinear"});
$("img").animate({"width": "+=100"}, { 500, "iinear"});

$("img").bind({
    mouseover:function () {
        $(this).stop().fadeTo(300, 1.0);
    },
    mouseout:function () {
        $(this).stop().fadeTo(300, 0.5);
    }
});
$("img").fadeTo(100,0.5).delay(200).slideUp();
setInterval(function () {
    $("#status").load("status_report.html");
}, 6000);
//加载并显示天气预告的温度部分
$("#temp").load("whether_report.html #temperature");
$("#temp").load("whether_report.html","zipcode=02134");
$("#temp").load("whether_report.html",{zipcode:0o21314,units:'F'});

jQuery.get("debug.txt", alert);
jQuery.ajax({
    type:"GET",
    url:url,
    data:null,
    dataType:"script",
    success:callback

});
$("#loading_animation").bind({
    ajaxStart:function () {
        $(this).show();
    },
    ajaxStop:function () {
        $(this).hide();
    }
});
/*
* jQuery.each()遍历属性且包括继承的属性
* */





































