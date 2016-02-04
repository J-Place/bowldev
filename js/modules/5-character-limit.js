
//////////////////////////////////////////////////////////////////////////////////////////
// Set character limit

(function(){

    // var areWeOnMobile = function() {
    //     return $('#mobile-menu-toggle').is(":visible");
    // };
    // if(areWeOnMobile()) {
        var cta3Tiles = [$(".top-news__summary p"),$(".marketing-promo__summary p")];
        var newsTiles = $(".article__summary");
        // var newsTileFull = $(newsTiles).text();
        // var newsTileTrimmed = newsTileFull.substr(0, 130);
        // newsTileTrimmed = newsTileTrimmed.substr(0, Math.min(newsTileTrimmed.length, newsTileTrimmed.lastIndexOf(" ")))

        $(cta3Tiles).each(function(){
            $(this).text($(this).text().substr(0,80)).addClass("visible");
        });

        $(newsTiles).each(function(){
            $(this).text($(this).text().substr(0,140));
            // $(this).text(newsTileTrimmed);
        });
    // }

})();