    $(window).scroll( function(){
        // console.log(window.scrollY);
        if($(window).scrollTop() > 20) {
            $("body").addClass("scroll--header");
            $(".header").addClass("scroll");
            $(".logo").addClass("scroll");
            $(".nav-main").addClass("scroll");
        }
        // else if ($(window).scrollTop() < 100) {
        //     $(".header").removeClass("scroll");
        //     $(".logo").removeClass("scroll");
        //     $(".nav-main").removeClass("scroll");
        // }
    });
