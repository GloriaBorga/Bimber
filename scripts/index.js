// ========= Menu ============== //
$('.menu-toggle').click(function () {
    $('.site-nav').toggleClass('site-nav--open', 200);
    $(this).toggleClass('open');
});



// =========== TOP BAR ============= //
$(document).ready(function () {

    $(window).scroll(function () {
        var nav = $('#nav');

        if ($(window).scrollTop() > 0) {
            $('nav-container').addClass('nav-container-fixed-top');
        } else {
            $('nav-container').removeClass('nav-container-fixed-top');
        }
        
        if ($(window).scrollTop() > 50) {
            nav.css({'background' : '#fd5c63'});
        } else {
            nav.css({'background' : 'transparent'});
        
        }
    });
});

//======SmoothScroll=======//
$(document).ready(function () {
    
    $(".smoothScroll").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } 
    });
});

//======strzałeczki=======//
$(document).ready(function () {

    $('.down').click(function (e) {

        var linkHref = $(this).attr('href');


        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 500);

        e.preventDefault();
    });
});

//======Candy======//
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.slogan').css({'transform' : 'translate(0px,'+ wScroll /1.6 +'%)'});
    $('.slogan-2').css({'transform' : 'translate(0px,'+ wScroll /1.7 +'%)'});
    $('.phone-logo').css({'transform' : 'translate(0px, '+ wScroll /13 +'%)'});
    
});

const parallax = document.getElementById("stage");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});









$(document).ready(Tuto);


     
