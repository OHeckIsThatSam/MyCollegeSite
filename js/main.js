$(document).ready(function () {

  $(".menuIcon").on("click",function () {
    $("#hamburger").slideToggle("fast");
    if($("#hamburger").is(':visible')){
      $("#hamburger").css("display", "flex");
    }
    $(this).toggleClass("change");
  });

  $("#CoursesDropBtn").on("click", function (){
    $("#CoursesDropdownContent").toggle();
  });

  $("#StaffAndStudentsDropBtn").on("click", function (){
    $("#StaffAndStudentsDropdownContent").toggle();
  });

  // Will only call lightSilder function if the element lightslider exists
  if($("#lightSlider").length){
    $("#lightSlider").lightSlider({
    item: 1,
    slideMargin: 0,
    loop: true,
    auto: true,
    speed: 2000,
    pause: 2000,
    pauseOnHover: true,
    keyPress: true,
    });
  }
  
});
