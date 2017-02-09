$(function() {

  // //главный слайдер
  $('.bxslider').bxSlider({
    auto: true,
    speed: 1000,
    adaptiveHeightSpeed: 2000
  });
  //каруселька
  $('.slider1').bxSlider({
    slideWidth: 350,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 30
  });

});
