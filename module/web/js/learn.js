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
}
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























































