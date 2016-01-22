$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Marketing promo slide over
    $(".marketing-promo").hover(function(){
        $(".marketing-promo__detail").toggleClass("open");
    });


    var windowWidth = $(window).width();
    var setSkew = function(){
        if (windowWidth > 768) {
            $(".nav__list--item a").addClass("skew");
        }
        else if (windowWidth <= 768) {
            $(".nav__list--item a").removeClass("skew");
        }
    };
    setSkew();
