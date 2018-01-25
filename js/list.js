 //动态获取商品信息
 $(function () {
        $.ajax({
           type:"get",
            url:"php/getGoodsList.php",
            success:function (data) {
                showgoodsList(data);
            },
            dataType:"json"
        });
    });

    function showgoodsList(datas) {
        let $ulbox = $("#ulbox");
        for(let i=0;i<datas.length;i++){
            //1、创建li
            let str="<li><p><img src='"+datas[i].goodsImg+"'/></p>"+
                "<h2>￥"+datas[i].goodsPrice+"</h2>"+
                "<a id='conId'>"+datas[i].goodsDesc+"</a>"+
                "<p id='conTxt'>"+datas[i].beiyong1+"</p>"+
//              "<div id='jiantou'><input type='text'/>"+datas[i].beiyong2+"</div>"+
//              "<a id='carT' href='#'>"+datas[i].beiyong3+"</a>
								"<a id='car' href='#'>"+datas[i].beiyong4+"</a></li>";
								
            $ulbox.append(str);
        }
    }