$(function () {
  //메뉴
  $("nav>ul>li").on("mouseover focusin", function () {
    $(this).children(".sub").stop().slideDown();
  });

  $("nav>ul>li").on("mouseout focusout", function () {
    $(this).children(".sub").stop().slideUp();
  });

  //슬라이드
  let i = 0;
  function slide() {
    if (i < 2) {
      i++;
    } else {
      i = 0;
    }
    $(".slide ul").animate({ marginLeft: i * -100 + "%" }, 1000);
  }
  setInterval(slide, 3000);

  //탭메뉴
  $(".tabmenu > li").click(function () {
    $(".tabmenu > li").removeClass("on"); // 1. 모든 li에서 on 제거
    $(this).addClass("on"); // 2. 클릭한 li에만 on 추가

    return false; // 3. 링크 이동 방지 (a태그 클릭 시 위로 튕기는 현상 막기)
  });

  //팝업
  $(".popup01").click(function () {
    $(".popup").show();
    return false;
  });
  $(".close button").click(function () {
    $(".popup").hide();
  });
});
