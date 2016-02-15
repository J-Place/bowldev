
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// slick() is called on 'slider--foreground' and 'slider--background',
// which are synced by setting 'asNavFor'.

$(".slider--foreground").on({ 'afterChange': function(event, slick, currentSlide){
    $(".slider__ribbon .ribbon").toggleClass("blue-youth");
    $(".slider__ribbon .ribbon").toggleClass("yellow");
    $(".slider--stripes .stripes").toggleClass("blue-youth");
    $(".slider--stripes .stripes").toggleClass("yellow");
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