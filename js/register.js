$(function () {
    $("#btnlogin").click(function () {
        $.ajax({
           type:"POST",
           url:"php/logincheck02.php",
           data:{
              "username":$("#username").val(),
              "userpass":$("#userpass").val()
           },
            success:function (t) {
                if(t=="1"){
                    //保存cookie
                    location.href="index.html";
                }else{
                    $("#errorMsg").html("用户名或者密码错误");
                    $("#errorMsg").show();
                }
            }
        });
    });
});

