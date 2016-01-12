$(window).bind("load", function() {

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
    // Toggle mobile nav

    var level1Open = false;
    var level2Open = false;

    // var navID = $(this).attr("ID");
    var dropContainer = $(".nav-dropdown");

    var level1 = $(".nav-level-1");
    var level2 = $(".nav-level-2");
    // var link = $(".nav__list--item a");

    function openLevel1() {
        $(".nav-small-icon").addClass("open");
        $(".nav-main").addClass("open");
        $(".nav-dropdown").addClass("open");
    }
    function openLevel2() {
        // $(".nav-dropdown").addClass("open");
        // $(level1).addClass("left");
        // $(level2).addClass("open");
        // $(dropID).addClass("open");
        return level1Open = true;
        return level2Open = true;
    }
    function closeLevel1() {
        $(".nav-small-icon").removeClass("open");
        $(".nav-main").removeClass("open");
        $(".nav-dropdown").removeClass("open");
        $(".dropdown-wrapper").removeClass("open");
        $(level1).removeClass("left");
    }
    function closeLevel2() {
        $(level1).removeClass("left");
        $(level2).removeClass("open");
    }
    function closeAll() {
        // $(".nav-small-icon").removeClass("open");
        // $(".nav-main").removeClass("open");
        // $(".nav-dropdown").removeClass("open");
        // $(".dropdown-wrapper").removeClass("open");
        // $(level1).removeClass("left");
        // $(level1).removeClass("open");
        // $(level2).removeClass("open");
        closeLevel1();
        closeLevel2();
        return level1Open = false;
        return level2Open = false;
    }

    // Click nav icon to open mobile nav
    $(".nav-small-icon").click(function(e){
        e.preventDefault();
        if (level1Open === false) {
            openLevel1();
            return level1Open = true;
            // return level2Open = false;
        }
        else if (level1Open === true) {
            closeLevel1();
            closeLevel2();
            return level1Open = false;
            return level2Open = false;
        }
    });

    // Click links within dropdown
    $(".nav__list--item a").click(function(){
        var navID = $(this).attr("ID");

        if ($(this).hasClass("has-children")) {
            $(dropContainer).addClass("open");
            $(level1).addClass("left");
            $(".nav-level-2." + navID).addClass("open");
            return false;
        }
        else {
            return true;
        }
    });
    $(".exit-level-2").click(function() {
        $(level2).removeClass("open");
        $(level1).removeClass("left");
        return level2Open = false;
    });

});