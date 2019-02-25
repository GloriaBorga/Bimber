$('.menu-toggle').click(function () {

    $('.site-nav').toggleClass('site-nav--open', 200);
    $(this).toggleClass('open');

});

//=====header=======//
$(document).ready(function () {
    nav.style.background = "#fd5c63";

    $(window).scroll(function () {


        if ($(window).scrollTop() > 0) {
            $('.container-fluid2').addClass('container-fluid2-fixed-top');
        }

        if ($(window).scrollTop() < 1) {
            $('.container-fluid2').removeClass('container-fluid2-fixed-top');
        }
    });
});