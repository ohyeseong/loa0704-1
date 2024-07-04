$(document).ready(function(){
    $("a").click(function(e){
        e.preventDefault();
    })
    // 헤더 메뉴 슬라이드
    $(".header_sub_r, .sub").hide();

    $(".header_menu > li, .header_sub_r").hover(function(){
        $(".header_sub_r, .sub").stop().slideDown("fast");
    },function(){
        $(".header_sub_r, .sub").stop().slideUp("fast");
    })

    // 게임스타트 클릭시
    $(".start a").click(function(){
        alert("게임이 실행중입니다.");
    })

    // 버튼과 이미지 연결
    $(".mainslide_box div").click(function(){
        $(".mainslide_box div").removeClass("btn_act");
        $(this).addClass("btn_act");

        var n = $(this).index();
        console.log(n);

        $(".slide_img a").hide();
        $(".slide_img a").eq(n).show();

    })

    // 메인 슬라이드 이미지 배치
    $(".slide_img a").eq(0).siblings().hide();
})