jQuery.fn.extend({
    "bigMirror":function () {
        //this://

    }
});

$(function () {
    $("#box").bigMirror(大图，倍数，位置);
});





    //显示放大镜和放大效果
    function showBigMirror(){
        $("bigMirror").style.display = "block";
        $("show").style.display = "block";
    }

    //隐藏放大镜和放大效果
    function hiddenBigMirror(){
        $("bigMirror").style.display = "none";
        $("show").style.display = "none";
    }

    window.onload = function(){
        $("box").onmouseover = showBigMirror;
        $("box").onmouseout = hiddenBigMirror;

        //放大镜的尺寸；
        let bigMirrorWidth  = 60;
        let bigMirrorHeight  = 80;
        $("box").onmousemove = function(event){
            //一、放大镜跟着鼠标走
            let evt = event || window.event;

            //计算鼠标距离box左上角的位置
            let left = evt.pageX-this.offsetLeft;//鼠标距离页面的横向距离-box距离页面的横向距离
            let top = evt.pageY-this.offsetTop;

            //计算放大镜的位置
            let bigMirrorLeft = left-bigMirrorWidth/2;
            let bigMirrorTop = top-bigMirrorHeight/2;

            //边界处理
            //if(left>=小图的宽度-放大镜的宽度){
            if(bigMirrorLeft>=$("box").offsetWidth-$("bigMirror").offsetWidth){
                bigMirrorLeft =$("box").offsetWidth-$("bigMirror").offsetWidth;
            }else if(bigMirrorLeft<=0){
                bigMirrorLeft =0;
            }

            if(bigMirrorTop>=$("box").offsetHeight-$("bigMirror").offsetHeight){
                bigMirrorTop =$("box").offsetHeight-$("bigMirror").offsetHeight;
            }else if(bigMirrorTop<=0){
                bigMirrorTop =0;
            }

            $("bigMirror").style.left = bigMirrorLeft+"px";
            $("bigMirror").style.top = bigMirrorTop+"px";

            //二、大图的移动
            $("bigImg").style.left = -2*bigMirrorLeft+"px";
            $("bigImg").style.top = -2*bigMirrorTop+"px";
        }

    }