
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// slick() is called on 'slider--foreground' and 'slider--background',
// which are synced by setting 'asNavFor'.

$(".slider--foreground").on({ 'afterChange': function(event, slick, currentSlide){
    $(".slider__ribbon .ribbon").toggleClass("yellow-2");
    $(".slider__ribbon .ribbon").toggleClass("cool-gray");
    $(".slider--stripes .stripes").toggleClass("blue-3");
    $(".slider--stripes .stripes").toggleClass("orange-1");
}}).slick({
    infinite: true,
    autoplay: true,
    asNavFor: '.slider--background',
    arrows: true,
    fade: true,
    speed: 0,
    autoplaySpeed: 9000
});

$('.slider--background').slick({
    infinite: true,
    asNavFor: '.slider--foreground',
    arrows: false
});

// Close all modules
});