    $(window).scroll( function(){
        // console.log(window.scrollY);
        if($(window).scrollTop() > 20) {
            $(".logo").addClass("scroll");
            $("body").addClass("scroll--header");
            $(".header").addClass("scroll");
            $(".nav-main").addClass("scroll");
        }
        else if ($(window).scrollTop() < 20) {
            $(".logo").removeClass("scroll");
            $(".header").removeClass("scroll");
            $(".nav-main").removeClass("scroll");
            $("body").removeClass("scroll--header");
        }
    });