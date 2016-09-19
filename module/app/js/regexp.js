/**
 * Created by dgx on 2016/9/12.
 */
function getRE() {
    var re = /[a-z]/;
    re.foo = "bar";
    return re;
}
var reg = getRE(),re2 =getRE();
console.log(reg==re2);
reg.foo = "baz";
console.log(re2.foo);
/*
* /\\/匹配反斜线
* /\d{2,4}/
* \w{3}\d
* /\s+java\s+/
*
*i 不区分大小写
* g 全局的匹配，而不是找到一个就停止
* m  多行匹配
* String.search(/script/i),并且会忽略其中的g，不支持全局
* replace(),match()返回匹配结果组成的数组
*
*
* */
var zipcode = new RegExp("\\d{5}","g");




