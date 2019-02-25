Tuto = function () {

    var profileScreen = $('.profile-screen');
    var phoneScreen = $('.phone-screen');


    var handleScrollEvent = function () {
        $(document).scroll(function () {
            var scrollTop = $(document).scrollTop();
            step1(scrollTop);
            step2(scrollTop);
            step3(scrollTop);
            step4(scrollTop);
            step5(scrollTop);
            step6(scrollTop);
        });
    };

    var step1 = function (scrollTop) { // postion: fixed;

        if (scrollTop > 720) {
            $('.phone-container').addClass('phone-container-fixed');
            $('.phone-container').removeClass('phone-container')
        } else {
            $('.phone-container').removeClass('phone-container-fixed');
            $('.phone-container-fixed').addClass('phone-container');
        }

        if (scrollTop > 3900) {
            $('.phone-container-fixed').addClass('phone-container-fixed-bot');

        } else {
            $('.phone-container-fixed').removeClass('phone-container-fixed-bot');
        }
    };


    var step2 = function (scrollTop) {
        var pic1 = profileScreen.find('#girl-one-prof');

        if (scrollTop > 950) {
            pic1.css({'left': '260px', 'top': '-46px', 'transform': 'rotate(' + 23 + 'deg)', 'transition': '1s'});
        } else {
            pic1.css({'left': '0px', 'top': '0px', 'transform': 'rotate(' + 0 + 'deg)', 'transition': '1s'});
        }

    };

    var step3 = function (scrollTop) {

        if (scrollTop >= 2000) {
            $('.party').removeClass('bum2');
        } else if ((scrollTop >= 1600)) {

            $('.party').addClass('bum2');
        } else {
            $('.party').removeClass('bum2');
        }
    };


    var step4 = function (scrollTop) {

        if (scrollTop >= 2300) {
            $('.match').removeClass('bum');
        } else if (scrollTop >= 2100) {
            $('.match').addClass('bum');
        } else {
            $('.match').removeClass('bum');
        }
    };


    var step5 = function (scrollTop) {
        var chat = phoneScreen.find('.chat-screen');

        var chat1 = phoneScreen.find('#chat1');
        var chat2 = phoneScreen.find('#chat2');
        var chat3 = phoneScreen.find('#chat3');
        var chat4 = phoneScreen.find('#chat4');

        if (scrollTop >= 2600) {
            chat.css({'left': '0px', 'transition': '700ms'});
            $('#phone-fot-chat').css({'z-index': '11'});
            chat1.delay(500).fadeIn(200, function () {
                chat2.delay(200).fadeIn(200, function () {
                    chat3.delay(200).fadeIn(100, function () {
                        chat4.delay(200).fadeIn(100);
                    });
                });
            });
        } else {
            chat.css({'left': '234px', 'transition': '700ms'});
            $('#phone-fot-chat').css({'z-index': '1'});
            $('#chat1').stop(true).hide();
            $('#chat2').stop(true).hide();
            $('#chat3').stop(true).hide();
            $('#chat4').stop(true).hide();
        }


    };

    var step6 = function (scrollTop) {

        var chatScreen = phoneScreen.find('.chat-screen');
        var prof = phoneScreen.find('#prof');

        if (scrollTop >= 3200) {

            var overscrollValue = scrollTop - 3200;
            var translate = Math.max(0,Math.min(234,overscrollValue))

           // var phoneScreenRight = 0;
            prof.css({ 'right': '234px'});
            $('.chat-screen').css({'left': '','right': '', 'transition': ''});
            chatScreen.css({
                'right': 0 - translate 
            });

            
            
        } else {
            prof.css({ 'right': '468px'});

        }


        /* if(scrollTop >= 3200){
             czat.css({'left' : '234px', 'transition':'700ms'});
             prof.css({'right' : '0px', 'transition':'700ms'});
             $('#phone-fot-prof').css({'z-index':'11'});
         } else {
             prof.css({'right' : '234px', 'transition':'700ms'});
             $('#phone-fot-prof').css({'z-index':'1'});
         }*/
    };

    /* var step7 = function (scrollTop) {
          var prof = phoneScreen.find('#prof');

         if(scrollTop >= 3500 ){
             prof.css({'top':'-2160px','transition':'700ms'});
         } else {
             prof.css({'top':'-1916px','transition':'700ms'});
     }
     };

     */

    var init = function () {
        profileScreen = $('.profile-screen');
        phoneScreen = $('.phone-screen');
        handleScrollEvent();
    };
    $(document).ready(handleScrollEvent);

    return {
        'init': init
    };
};
     