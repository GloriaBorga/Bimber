$('.menu-toggle').click(function () {

    $('.site-nav').toggleClass('site-nav--open', 200);
    $(this).toggleClass('open');

});

//=====header=======//
$(document).ready(function () {

    $(window).scroll(function () {


        if ($(window).scrollTop() > 0) {
            $('.container-fluid2').addClass('container-fluid2-fixed-top');
        }

        if ($(window).scrollTop() < 1) {
            $('.container-fluid2').removeClass('container-fluid2-fixed-top');
        }
    });
});

//=====transparent navbar======//
var nav = document.getElementById('nav');
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        nav.style.background = "#fd5c63";
    } else {
        nav.style.background = "transparent";
    }
};

$(document).ready(function () {
    if (window.pageYOffset > 100) {
        nav.style.background = "#fd5c63";
    } else {
        nav.style.background = "transparent";
    }
});
      