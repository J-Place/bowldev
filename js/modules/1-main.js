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