$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Marketing promo slide over
    $(".marketing-promo").hover(function(){
        $(".marketing-promo__detail").toggleClass("open");
    });



    var panelWidth = $(window).width();
    var setSkew = function(){
        if (panelWidth > 780) {
            $(".nav__list--item a").addClass("skew");
        }
        else if (panelWidth <= 780) {
            $(".nav__list--item a").removeClass("skew");
        }
    };
    setSkew();


});