$(document).ready(function () {
    $(".bag-icon").on("mouseenter", function () {
      $(".empty-bag").css("display", "block");
    });
    $(".bag-icon").on("mouseleave", function () {
      $(".empty-bag").css("display", "none");
    });
  
  $(".menu").click( function () {
    $(".menu-nav-container").css("transform", "translateX(0)");
    $(".angle-left-container").css("display", "block");
    $(".mobbox .menu-container").css("display", "none");
    $(".mobbox .item-container").css("display", "none");
  })

  $(".angle-left-icon").click(function () {
    $(".menu-nav-container").css("transform", "translateX(-100%)");
    $(".angle-left-container").css("display", "none");
    $(".mobbox .menu-container").css("display", "block");
    $(".mobbox .item-container").css("display", "block");
  });

  $(".search-icon").click(function () {
    $(".mob-search-container").css("transform", "translateX(0)");
  });

  $(".angle-right-icon").click(function () {
    $(".mob-search-container").css("transform", "translateX(100%)");
  });
});