$(function() {
    $(window).scroll( function(){


        $('.fadeInBlock').each( function(){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            bottom_of_window = bottom_of_window + 200;

            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},2000);

            }
        });

    });
});


