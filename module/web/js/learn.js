/**
 * Created by dgx on 2016/9/15.
 */

function range(min,max){
    for(let i =Math.ceil(min);
        i<max;i++)
        yield i;

}
for(let n in range(3,8))
    console.log(n);

function fibonacci() {
    let x =0,y =1;
    while(true){
        yield y;
        [x,y] = [y,x+y]
    }
}
//调用fibonacci
var f = fibonacci();
debugger;
for(let i=0;i<10;i++)
    console.log(f.next());

//一个生成器管道
function eachLine(s) {
    let p;
    while((p =s.indexOf('\n'))!=-1){
        yield s.substring(0,p)
        s = s.substring(p+1);
    }
    if(s.length >0) yield s;
}

function map(i,f) {
    for(let x in i) yield f(x);
}
function select(i,f) {
    for(let x in i)
        if(f(x)) yield x;
}
let text = " #comment \n \n hello \nworld \n quit \n unreached \n";
let lines = eachLine(text);
let trimmed =map(lines,function (line) {
    return line.trim();
});
let noblank = select(trimmed,function (line) {
    return line.length >0&&line[0] !='#'
});
for(let line in noblank){
    if(line === "quit") break;
    console.log(line);
}
function counter(initial){
    let nextValue = initial;
    while(true){
        try{
            let increment = yield nextValue;//It is send()
            if(increment)
                nextValue+=increment;
            else nextValue++;//It is next()
        }catch (e){
            if(e=="reset"){
                nextValue = initial;
            }else {
                throw e;
            }
        }
    }
}
let c = counter(10);
console.log(c.next());
console.log(c.send(2));
console.log(c.throw("reset"));

//let evensquares = [x*x for (x in range(0,10)) if (x %2===0)];
let evensquares = [];
for(x in range(0,10)){
    if(x%2===0)
        evensquares.push(x * x);
}
// let h = (f(x) for(x in g));

/*
* onLoad
* 文档载入完成时调用一个函数
*
* */
function onLoad(f){
    if(onLoad.loaded)
        window.setTimeout(f, 0);
    else if(window.addEventListener)//注册事件的标准办法
        window.addEventListener(("load", f, false));
    else if (window.attachEvent) {
        window.attachEvent("onload",f);
    }
    //onload设置一个标志，指示文档是否加载完成
    onLoad.load = false;
    //注册一个函数，文档载入完成时设置这个标志
    onLoad(function () {
        onLoad.loaded = true;
    })

}
/*
* 客户端的线程模型
* setTimeout & setInterval
* */

/*
* 同源策略
* */
name = name.replace(/</g,"&lt;").replace(/>/g,"&gt;");
//错误消息
window.onerror = function (msg,url,line) {
    if(onerror.num++<onerror.max){
        alert("ERROR:" + msg + "\n" + url + ":" + line);
        return true;
    }
};
onerror.max = 3;
onerror.num = 3;
//显示的声明会隐藏隐式的变量元素
var ui = ["input", "prompt", "heading"];
ui.forEach(function (id) {
    ui[id] = document.getElementById(id);
});

var $ = function (id) {
    return document.getElementById(id);
};
ui.prompt = $("prompt");
Window.open()//载入指定URL到新的窗口中，并返回代表那个窗口的Window对象

var w = window.open("smailwin.html","smallwin","width = 400;height = 350,status=yes,resizable=yes",);
var ww = window.open();
ww.alert("ablout to visit http://example.com");
ww.location = "http://exampl.com";
ww.opener !==null;
ww.open().opener ===ww;//true 对于任意窗口的ww 这种烦人的举动应当被禁止，所以请手动选择

ww.close();Window.close();
/*
* parent 表示上级窗口
* top 表示顶级窗口
* */
var iframeElement = document.getElementById("f1");
var childFrame = document.getElementById("f1").contentWindow;
var elt = document.getElementById("f1");
var win = elt.contentWindow;
win.frameElement === elt //对于帧来说永远只true
window.frameElement === null //对于顶级窗口来说永远是true
/*
* instanceof不能跨窗口工作,每个窗口都有自己原型对象
*
* */
function getElements(/*ids*/){
    var elements = {};
    arguments.forEach(id=>{
        var ele = document.getElementById(arguments[id]);
        if(ele==null)
            throw new Error("NO element with id:" +arguments[id]);
        elements[arguments[id]] = ele;
    });
    return elements;
}
var spans = document.getElementsByTagName("span");
var firstPara = document.getElementsByTagName("p")[0];
var firstParaSpans = firstPara.getElementsByTagName("span");
document.images.map(image=>image.style.display ="none");
/*
* 不能在NodeList和HTML集合上调用Array的方法，那就间接的使用
* */
var content = Array.prototype.map.call(document.getElementsByTagName("p"),function (e) {
    return e.innerHTML;
});
//他们的item方法 @param int @return int (index)
//naemdItem方法的话，返回 属性名的值
//这两个玩意是实时更新的，所以需要在必要的时候生成静态的副本
var snapshot = Array.prototype.slice.call(nodelist, 0);

/*
* 通过CSS选取元素
* 高端的空格隔开法....
*
* */
var warnings = document.getElementsByClassName("warning");
var log = document.getElementById("log");
var fatal = log.getElementsByClassName("fatal error");

/*
* CSS               选择器
* #nav              id=nav 的元素
* div               所有的<div>元素
* .warning          所有的class属性中包含了“warning”的元素
* p[lang="fr"]      所有的法语段落，如<p lang="fr">
* *[name="x"]       所有的包含name = “x” 属性的元素
* span.fatal.error  <span>元素，其class中包含fatal和error
* span[lang="fr"].warning      所有的使用法语的且且class中包含warning的<span>
*
    * 选择器指示文档的结构
* #log span          id= “log”的元素的后代元素中的所有的<span>元素
* #log>span          id= “log”的元素的子元素中的所有的<span>元素
* body>h1:first-child       <body>的子元素的第一个<h1>元素
*
* */
//div ， #log 并集组合
//querySelectorAll()出现了
function parent(e,n) {
    if(n===undefined) n=1;
    while(n--&&e) e =e.parentNode;
}
/*
* 集合
* */


function invoke(f,start,interval,end){
    if(!start) start = 0;
    if(arguments.length<=2)
        setTimeout(f,start);
    else {
        setTimeout(repeat,start);
        function repeat() {
            var h =setInterval(f,interval);
            if(end) setTimeout(function () {
                clearInterval(h);
            },end);
        }
    }
}
/*
* 浏览器定位和导航
* */
window.location === document.location//总是返回true
/*
* 提取
* */
function urlArgs() {
    var args = {};
    var query = location.search.substring(1);//查找到查询串并去掉？
    var paris = query.split("&");
    for(var i=0;i<paris.length;i++) {
        var pos = paris[i].indexOf("=");
        if(pos==-1) continue;
        var name = paris[i].substring(0, pos);
        var value = paris[i].substring(pos+1);
        value = decodeURIComponent(value);//传说中的解码
        arg[name] = value;//存储为属性的高超技巧
    }
    return args;//函数的话总是需要返回
}

/*
* 载入新的文档
* replace 载入文档之前会把历史中的文档删除
* */
//如果浏览器不支持XMLHttpRequest对象
// 则将其重定向到一个不需要Ajax的静态页面
if(!XMLHttpRequest) location.replace("staticPage.html");
//还可以把URL赋值给location，他们会对URL进行解析
location = "page2.html";
location = "#top"//无id为top时则到顶部
location.search = "?page="+(pageNum+1);//改变url导致载入新文档，hash值的话当前文档中跳转？？？
/*
* 浏览历史
* */
history.go(-2);
history.back();
history.forward();
navigator.onLine;
window.screen;

do{
    var name = prompt("what is your name?");
    var corret = confirm("your name "+name +".\n"+
    "Click Okay to proceed or cancel to re-enter.");
}while (!corret)
alert("Hello,"+name);//输出一个纯文本信息
//对话框产生阻塞confirm 和 prompt

var p = showModalDialog("mutiprompt.html",[
    "Enter 3D point coordinates","x","y","z"],
    "dialogwidth:400;dialogheight:300;resizable:yes");

var sparkLines = document.getElementsByClassName("sparkLine");
for(var i = 0;i<sparkLines.length;i++){
    var dataset = sparkLines[i].dataset;
    var ymin = parseFloat(dataset.ymin);
    var ymax = parseFloat(dataset.ymax);
    var data = sparkLines[i].textContent.split(".").map(parseFloat);
    drawSparkLine(sparkLines[i],ymin,ymax,data);

}

/*插入节点，接受两个参数*/
n.parentNode.replaceChild(document.createTextNode("[REPLACED]"));

var frag = document.createDocumentFragment();//特殊的Node，作为其他节点的一个临时容器

//倒序排列节点
function reverse (n) {
    var frag = document.createDocumentFragment();
    while (n.lastChild) frag.appendChild(n.lastChild);
    n.appendChild(frag);
}
/*查询窗口滚动条的位置*/
function getScrollOffsets(w){
    w = w||window;
    if(w.pageXOffset !=null) return {x: w.pageXOffset, y: w.pageYOffset};
    var d = document;
    if(document.compatMode == "CSS1Compat")
        return {x:d.documentElement.scrollLeft,y:d.documentElement.scrollTop};
    //怪异模式
    return {x:d.body.scrollLeft,y:d.body.scrollTop};

}

/*查询窗口的视图尺寸*/
function getViewSize(w) {
    w=w||window;
    if(w.innerWidth !=null) return {w:w.innerWidth,h:w,innerHeight};

}

var box = e._getBoundingClientRect();
var offsets = getScrollOffsets();
var x = box.left + offsets.x;
var y = box.top + offsets.y;

var fields = document.getElementById("address").getElementsByTagName("input");
document.querySelectorAll('#shipping input[type="radio"]');
document.querySelectorAll('#shipping input[type="radio"][name="method"]');


/*查询选取的文本*/
function getSelectedText() {
    if(window.getSelection) {
        return window.getSelection()
    }else if(document.selection) {
        return document.selection.createRange().text;
    }
}
s
































