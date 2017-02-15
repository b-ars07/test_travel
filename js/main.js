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
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2.33,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    //    var $hamburger = $(".hamburger");
    //    $hamburger.on("click", function (e) {
    //        $hamburger.toggleClass("is-active");
    //        $('.page-block').toggleClass('menu-tab');
    //    });

    $(".icon").click(function () {
        $(".mobilenav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");

        var mobilemenu = document.querySelector('.mobilenav');

        if (mobilemenu.style.display === 'block') {
            $('.header').css({
                'position': 'fixed',
                'width': '100%'
            });
        }
    });




});
