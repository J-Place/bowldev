    $(window).scroll( function(){
        var panelWidth = $(window).width();
        // console.log(window.scrollY);
        if (panelWidth >= 768 && $(window).scrollTop() > 20) {
            console.log("Above 20.");
            $(".logo").addClass("scroll");
            $("body").addClass("scroll--header");
            $(".header").addClass("scroll");
            $(".nav-main").addClass("scroll");
        }
        if (panelWidth >= 768 && $(window).scrollTop() < 20) {
            console.log("Below 20.");
            $(".logo").removeClass("scroll");
            $(".header").removeClass("scroll");
            $(".nav-main").removeClass("scroll");
            $("body").removeClass("scroll--header");
        }
    });