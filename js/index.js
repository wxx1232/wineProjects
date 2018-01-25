//轮播图
var arr=["../img/banner01.jpg","../img/banner02.jpg","../img/banner03.jpg","../img/banner04.jpg","../img/banner05.jpg","../img/banner06.jpg"];
var ord = 0;//代表当前图片的序号，从0开始。
var myTimer = null;

function  initUI() {
    $("#box li:first").css({"backgroundColor":"#f0eedc","opacity":"0.9"});
}

function  initEvent() {
    $("#box").mouseenter(function () {
        stopPlay();
    });

    $("#box").mouseleave(function () {
        autoPlay();
    });

    $("#box #lis").click(function () {
        goImg($("#box li").index(this));
    });

    $("#leftArrow").click(function () {
        let transord =ord-1;
        transord = transord<0?arr.length-1:transord;
        goImg(transord);
    });

    $("#rightArrow").click(function () {
        let transord =ord+1;
        transord = transord>arr.length-1?0:transord;
        goImg(transord);
    });
}

//1、自动播放
function autoPlay() {
    myTimer = setInterval(function () {
        //一、改变数据
        // 1、记录当前序号（淡出的图片序号）
        let outOrd = ord;
        //2、改变要显示的图片的序号（淡出图片序号加一）
        ord++;
        if(ord>arr.length-1){
            ord=0;
        }
        //二、改变外观
        let $img = $("#box img");
        //1、淡入淡出效果
        //让一张(outOrd)淡出 当前消失
        $img.eq(outOrd).animate({"opacity":0},1500);
        //让一张(ord)淡入下一张图片显示
        $img.eq(ord).animate({"opacity":1},1500);
        //2、改变豆豆的颜色；
        $("#box li").eq(ord).css({"backgroundColor":"#f0eedc","opacity":"0.9"}).siblings().css({"backgroundColor":"#706e68"});
    },3000);
}

//2、停止播放
function stopPlay() {
    window.clearInterval(myTimer);
}

//3、跳转到指定的图片
function  goImg(transOrd) {
    //一、改变数据
    // 1、记录当前序号（淡出的图片序号）
    let outOrd = ord;
    //2、改变要显示的图片的序号（传入的图片序号）
    ord=transOrd;
    if(ord>arr.length-1){
        ord=0;
    }
    //二、改变外观
    let $img = $("#box img");
    //1、淡入淡出效果
    //让一张(outOrd)淡出 当前消失
    $img.eq(outOrd).animate({"opacity":0},2000);
    //让一张(ord)淡入下一张图片显示
    $img.eq(ord).animate({"opacity":1},2000);
    //2、改变豆豆的颜色；
   $("#box li").eq(ord).css({"backgroundColor":"#f0eedc","opacity":"0.9"}).siblings().css({"backgroundColor":"#706e68"});
}


$(function () {
    //1、初始化界面
    initUI();
    //2、绑定事件
    initEvent();
    //3、自动播放
    autoPlay();
});
	
//定时器
$(function() {
    show_time();
});

function show_time() {
    var time_start = new Date().getTime(); //设定当前时间
  	var time_end = new Date("2017/12/25 00:00:00").getTime(); //设定目标时间
    // 计算时间差
	  var time_distance = time_end - time_start;
    // 时
    var int_hour = Math.floor(time_distance / 3600000);
    time_distance -= int_hour * 3600000;
    // 分
    var int_minute = Math.floor(time_distance / 60000);
    time_distance -= int_minute * 60000;
    // 秒
    var int_second = Math.floor(time_distance / 1000);
    // 时分秒为单数时、前面加零
    if (int_hour < 10) {
        int_hour = "0" + int_hour;
    }
    if (int_minute < 10) {
        int_minute = "0" + int_minute;
    }
    if (int_second < 10) {
        int_second = "0" + int_second;
    }
    // 显示时间
    $("#time_h").val(int_hour);
    $("#time_m").val(int_minute);
    $("#time_s").val(int_second);
    // 设置定时器
    setTimeout("show_time()", 1000);
}