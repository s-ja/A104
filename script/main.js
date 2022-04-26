$(function(){
    popup();
    menu();
    
    // slide();
    let interval_id = setInterval(slide,3000); 
})

function slide(){
    let curr_slide = $("#items img.top");
    let next_slide = curr_slide.next();
    if(!next_slide.length) next_slide = $("#items img:first");
    curr_slide.removeClass("top")
    next_slide.addClass("top")
}

function menu(){
    // 메인메뉴 li 에 마우스 닿으면 하이라이트 + 서브메뉴 부드럽게 펼치기
    $("#gnb > li").mouseenter(function(){
        if(!$(this).hasClass("active"))$(this).addClass("active");
        $(".header_bg").stop().animate({
            height:150
        });
        $(".lnb").stop().slideDown()
    });
    $("#gnb > li").mouseleave(function(){
      $(this).removeClass("active");
      $(".header_bg").stop().animate({
        height:0
    });
        $(".lnb").stop().slideUp()
    });
}

function popup(){
    $(".news ul li:first").click(function(){
        $("#popup").fadeIn("fast");
    })
    $("#popup button").click(function(){
        $("#popup").fadeOut("fast");
    })
}