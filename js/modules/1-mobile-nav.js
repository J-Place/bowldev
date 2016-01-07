$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Mobile nav dropdown toggle

    $(".nav-small-icon").click(function(){
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(".nav-main").removeClass("open");
            $(".nav-main").removeClass("left");
            $(".nav-dropdown").removeClass("open");
            $(".nav-dropdown").removeClass("left");
            $(".dropdown-wrapper").removeClass("open");
            $(".dropdown-wrapper").removeClass("left");
        }
        else {
            $(this).addClass("open");
            $(".nav-level-1").addClass("open");
            $(".nav-dropdown").addClass("open");
        }
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Set width of mobile nav panels

    var panelWidth = $(window).width()-30;
    var setPanel = function(){
        if (panelWidth < 780) {
            $(".nav-level-2").width(panelWidth);
            $(".nav-level-3").width(panelWidth);
        }
        else if (panelWidth >= 780) {
        }
    };
    setPanel();


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Mobile nav sliding panes

    var mobileNav = function(){
        var navID = $(this).attr("ID");
        var dropContainer = $(".nav-dropdown");
        var dropID = $(".nav-dropdown ." + navID);
        var level1 = $(".nav-level-1");
        var level2 = $(".nav-level-2");
        var level3 = $(".nav-level-3");
        var link = $(".nav__list--item a");

        if (panelWidth >= 480) {
            $(level1).addClass("open");
            $(dropContainer).addClass("open");
            $(dropID).addClass("open");
        }
        else if (panelWidth < 480) {
            if ($(level1).hasClass("open")) {
                $(dropContainer).addClass("open");
                $(dropID).addClass("open");
                $(level1).addClass("left");
                // $(level2).addClass("open");
            }
            else if ($(level2).hasClass("open")) {
                $(level2).addClass("left");
                $(level3).addClass("open");
            }
        }
    };

    $(".nav__list--item a").click(mobileNav);
    $(".exit-level-2").click(function() {
        $(".nav-level-2").removeClass("open");
        $(".nav-level-1").removeClass("left");
    });

});