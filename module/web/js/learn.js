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




















