window.onload=function(){
var str="";
		for(var i=0;i<4;i++){
			var a=parseInt(Math.random()*10)
			str+=a;
		}
		document.getElementById("verify_num").innerHTML=str;
	}
	//点击获取4位验证码
	document.getElementById("verify_num").onclick=function(){
		var str="";
		for(var i=0;i<4;i++){
			var a=parseInt(Math.random()*10);
			str+=a;
		}
		document.getElementById("verify_num").innerHTML=str;
	}
	
	
$(function () {
      // 手机
      
    $("#username").blur(function(){
      var str = $("#username").val();
      var ret = /^1\d{10}$/;
      if(ret.test(str)){
         $('#errorMsg').html('用户名合法');
      }else{
         $('#errorMsg').html('用户名不合法');
      }
    });
   
	
    // 密码
    $("#userpass").blur(function(){
      var str = $("#userpass").val();
      var ret = /^[a-zA-Z]\w{5,14}$/;
      if(ret.test(str)){
         $('#errorMsg').html('密码合法');
      }else{
         $('#errorMsg').html('密码不合法');
      }
    });
    
	
});


   //注册用户，并判断用户是否存在
$(function () {
    $("#btnlogin").click(function () {
        $.ajax({
           type:"POST",
           url:"php/regsave.php",
           data:{
              "username":$("#username").val(),
              "userpass":$("#userpass").val()
           },
            success:function (t) {
                if(t=="0"){
                    //保存cookie
                    location.href="register.html";
					$("#ceshi").html("该用户名注册成功");
                }else{
                    $("#ceshi").html("注册失败，该用户名已存在");
//                  $("#errorMsg").show();
                }
            }
        });
    });
});