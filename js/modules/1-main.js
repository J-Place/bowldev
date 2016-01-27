$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Marketing promo slide over
    $(".marketing-promo").hover(function(){
        var bodyWidth = $("body").width();
        if (bodyWidth >= 768) {
            $(".marketing-promo__detail").toggleClass("open");
        }
        return;
    });

    // var windowWidth = $(window).width();
    // var setSkew = function(){
    //     if (windowWidth > 768) {
    //         $(".nav__list--item a.active::after").addClass("skew");
    //     }
    //     else if (windowWidth <= 768) {
    //         $(".nav__list--item a.active::after").removeClass("skew");
    //     }
    // };
    // setSkew();
