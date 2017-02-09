$(function() {

  // // //главный слайдер
  // $('.bxslider').bxSlider({
  //   auto: true,
  //   speed: 1000,
  //   adaptiveHeightSpeed: 2000
  // });
  // //каруселька
  // $('.slider1').bxSlider({
  //   slideWidth: 350,
  //   minSlides: 2,
  //   maxSlides: 3,
  //   moveSlides: 1,
  //   slideMargin: 30
  // });

  var swiper = new Swiper('.first-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: 7000,
        effect: 'fade'
    });

    var carousel = new Swiper('.slider1', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true
    });

});
