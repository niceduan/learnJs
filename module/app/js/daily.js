/**
 * Created by dgx on 2016/9/30.
 */
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
$(document).ready(function(){
    var table = $("tr[id^='proj_']");
    var arr = [];
    $('#projs tr td:nth-child(3)').each(function (key, value) {
        arr.push($(this).html());
        console.log($(this));
        var input = value.getElementsByTagName("input");
        console.log(input[0].getAttribute("value"));
        input[0].setAttribute("value","haha");

    });
    var result = arr.join(',');
    console.log(result);


    // console.log(table.length);
    // for(var i=0;i<table.length;i++){
    //     var item = table[i];
    //     console.log(item);
    //     item.find('td').css('color','red');
    //
    // }

    //$('form input[type="text"] ').css('border','1px solid red');

    /*var  projectWorkTimes = [];


    console.log(table);*/

});
function genDate() {
    new Date();
}