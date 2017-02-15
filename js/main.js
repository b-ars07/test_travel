$(function () {


    var swiper = new Swiper('.first-slider', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoHeight: true,
        //        autoplay: 7000,
        effect: 'fade'

    });


    var carousel = new Swiper('.slider1', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        spaceBetween: 33,
        loop: true,
        breakpoints: {

            960: {
                slidesPerView: 2.63,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2.33,
                spaceBetween: 20
            },
            510: {
                slidesPerView: 2.1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1.4,
                spaceBetween: 10
            }
        }
    });


    $(".icon").click(function () {
//        $('.nav').toggleClass('menu-mob');
        $(".mobilenav").stop().fadeToggle();
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");

    });



});
