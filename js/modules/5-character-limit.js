
//////////////////////////////////////////////////////////////////////////////////////////
// Set character limit

(function(){

    var topNewsChar = $(".top-news__summary p");
    var mktgPromoChar = $(".marketing-promo__summary p")
    var newsTiles = $(".article__summary");

    $(topNewsChar).each(function(){
        $(this).text($(this).text().substr(0,80)).addClass("visible");
    });
    $(mktgPromoChar).each(function(){
        $(this).text($(this).text().substr(0,80)).addClass("visible");
    });
    $(newsTiles).each(function(){
        $(this).text($(this).text().substr(0,140));
    });

})();