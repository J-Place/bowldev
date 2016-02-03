
//////////////////////////////////////////////////////////////////////////////////////////
// Set character limit

(function(){

    var areWeOnMobile = function() {
        return $('#mobile-menu-toggle').is(":visible");
    };

    var cta3Tiles = [$(".top-news__summary p"),$(".marketing-promo__summary p")];
    var newsTiles = $(".article__summary");

    if(areWeOnMobile()) {
        $(cta3Tiles).each(function(){
            $(this).text($(this).text().substr(0,80)).addClass("visible");
        });
        $(newsTiles).each(function(){
            $(this).text($(this).text().substr(0,150));
        });
    }

})();