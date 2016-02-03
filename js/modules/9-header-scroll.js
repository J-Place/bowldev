$(window).scroll(function(){
    var panelWidth = $(window).width();
    if (panelWidth >= 480 && $(window).scrollTop() > 20) {
        $(".logo").addClass("scroll");
        $("body").addClass("scroll--header");
        $(".header").addClass("scroll");
        $(".nav-main").addClass("scroll");
    }
    if (panelWidth >= 480 && $(window).scrollTop() < 20) {
        $(".logo").removeClass("scroll");
        $(".header").removeClass("scroll");
        $(".nav-main").removeClass("scroll");
        $("body").removeClass("scroll--header");
    }
});