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

    var navID = $(this).attr("ID");
    var dropContainer = $(".nav-dropdown");

    var level1 = $(".nav-level-1");
    var level2 = $(".nav-level-2");
    var link = $(".nav__list--item a");

    function openLevel1() {
        $(".nav-small-icon").addClass("open");
        $(".nav-main").addClass("open");
        $(".nav-dropdown").addClass("open");
        return level1Open = true;
        return level2Open = false;
        return level3Open = false;
    }
    function closeLevel1() {
        $(".nav-small-icon").removeClass("open");
        $(".nav-main").removeClass("open");
        $(".nav-dropdown").removeClass("open");
        $(".dropdown-wrapper").removeClass("open");
        $(level1).removeClass("left");
        return level1Open = false;
        return level2Open = false;
    }
    function openLevel2() {
        // $(".nav-dropdown").addClass("open");
        // $(level1).addClass("left");
        // $(level2).addClass("open");
        // $(dropID).addClass("open");
        return level1Open = true;
        return level2Open = true;
    }
    function closeLevel2() {
        $(level1).removeClass("left");
        $(level2).removeClass("open");
        return level1Open = true;
        return level2Open = false;
    }
    function openLevel3() {
        $(level1).addClass("left");
        $(level2).addClass("left");
        return level1Open = true;
        return level2Open = true;
    }

    // Click nav icon to open mobile nav
    $(".nav-small-icon").click(function(){
        if (level1Open === false) {
            openLevel1();
        }
        else if (level1Open === true) {
            closeLevel1();
            closeLevel2();
            return level1Open = false;
            return level2Open = false;
        }
    });
    // Click links within dropdown
    $(".nav__list--item a").click(function(navID){

        var navID = $(this).attr("ID");
        console.log(navID);
        console.log(level1Open);

        if (level1Open === true && level2Open === false) {
            // $(".nav-dropdown").addClass("open");
            // openLevel2(navID);
            $(".nav-level-2." + navID).addClass("open");
            $(level1).addClass("left");
            console.log(level1Open);
            return false;
        }
        else {
            openLevel2(navID);
            // var dropContainer = $(".nav-dropdown");
            // $(".nav-dropdown").addClass("open");
            $(dropContainer).addClass("open");
            $(".nav-level-2." + navID).addClass("open");
            // console.log("Else");
            return false;
        }
    });

    $(".exit-level-2").click(function() {
        $(level2).removeClass("open");
        $(level1).removeClass("left");
        return level2Open = false;
    });


});





    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Mobile nav sliding panes

    // var mobileNav = function(){

    //     var navID = $(this).attr("ID");
    //     var dropContainer = $(".nav-dropdown");
    //     var dropID = $(".nav-dropdown ." + navID);
    //     var level1 = $(".nav-level-1");
    //     var level2 = $(".nav-level-2");
    //     var level3 = $(".nav-level-3");
    //     var link = $(".nav__list--item a");

    //     if ($(level1).hasClass("open")) {
    //         if (panelWidth >= 768) {
    //             $(level1).addClass("open");
    //             $(dropContainer).addClass("open");
    //             $(dropID).addClass("open");
    //         }
    //         else {
    //             $(dropContainer).addClass("open");
    //             $(dropID).addClass("open");
    //             $(level1).addClass("left");
    //         }
    //     }
    //     else if ($(level2).hasClass("open")) {
    //         $(level2).addClass("left");
    //         $(level3).addClass("open");
    //     }
    //     else {
    //         $(level1).addClass("open");
    //         $(dropContainer).addClass("open");
    //         $(dropID).addClass("open");
    //     }
    // };

    // $(".nav__list--item a").click(mobileNav);
    // $(".exit-level-2").click(function() {
    //     $(".nav-level-2").removeClass("open");
    //     $(".nav-level-1").removeClass("left");
    // });


// });