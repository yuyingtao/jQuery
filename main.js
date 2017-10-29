$(document).ready(function () {
    var i=0;
    var w=750;
    var l=$(".banner .img a").length;
    $(".banner .btn_l").click(function () {
        i++;
        if(i==l)
          {i=0;}
        $(".banner .img").animate({left: -i*w+"px"}, 500);
        $(".banner .num li").eq(i).css("background-color","yellow");
        $(".banner .num li").eq(i).siblings().css("background-color","#888888");

    });
    $(".banner .btn_r").click(function () {
        i--;
        if(i==-1)
        {i=l-1;}
        $(".banner .img").animate({left: -i*w+"px"}, 500);
        $(".banner .num li").eq(i).css("background-color","yellow");
        $(".banner .num li").eq(i).siblings().css("background-color","#888888");
    });

});

