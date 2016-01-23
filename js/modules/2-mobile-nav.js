$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Set height and width of mobile nav panels

    var panelWidth = $(window).width();
    var setPanel = function(){

        var bodyWidth = $("body").width();
        var bodyHeight = $(document).height();

        // console.log(bodyHeight);

        if (panelWidth < 768) {
            $(".nav-dropdown").width(bodyWidth);
            $(".nav-level-2").width(bodyWidth - 30);
        }
        else if (panelWidth >= 768) {
        }
    };

    setPanel();


    // Listen for orientation changes
    window.addEventListener("orientationchange", function() {
        location.reload();
    }, false);


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Toggle mobile nav

    var level1Open = false;
    var level2Open = false;
    var dropContainer = $(".nav-dropdown");
    var level1 = $(".nav-level-1");
    var level2 = $(".nav-level-2");

    function openLevel1() {
        $(".nav-small-icon").addClass("open");
        $(".nav-main").addClass("open");
        $(".nav-dropdown").addClass("open");
        $(".container-fluid.header").addClass("open");
    }
    function closeLevel1() {
        $(".nav-small-icon").removeClass("open");
        $(".nav-main").removeClass("open");
        $(".nav-dropdown").removeClass("open");
        $(level1).removeClass("open");
        $(".container-fluid.header").removeClass("open");
    }
    function openLevel2() {
        $(level1).addClass("left");
        $(level2).addClass("open");
        return level1Open = true;
        return level2Open = true;
    }
    function closeLevel2() {
        $(level1).removeClass("left");
        $(level2).removeClass("open");
    }

// Click nav icon to open mobile nav
    $(".nav-small-icon").click(function(e){
        e.preventDefault();
        if (level1Open === false) {
            openLevel1();
            return level1Open = true;
            return level2Open = false;
        }
        else if (level1Open === true) {
            closeLevel1();
            closeLevel2();
            return level1Open = false;
            return level2Open = false;
        }
    });

// Click links within dropdown
    $(".nav__list--item a").click(function(e){
        var navID = $(this).attr("ID");
        $(this).addClass("active");
        e.preventDefault();
        if (panelWidth < 768 && level1Open === true) {
            $(level1).addClass("left");
            $(".nav-level-2." + navID).addClass("open");
            return level1Open = true;
            return level2Open = true;
        }
        else if (panelWidth >= 768) {
            $(".nav-dropdown").addClass("open");
            $(".nav-level-2." + navID).addClass("open");
            return level1Open = true;
            return level2Open = false;
        }

        //////////////////////////////////////////////////////////////
        // Keep this in case we need nav links with no children
        //
        // if ($(this).hasClass("has-children")) {
        //     // $(dropContainer).addClass("open");
        //     // $(level1).addClass("left");
        //     // $(".nav-level-2." + navID).addClass("open");
        //     // return false;
        // }
        // else {
        //     return true;
        // }
        //////////////////////////////////////////////////////////////

    });


    $(".exit-level-2").click(function() {
        $(level2).removeClass("open");
        $(level1).removeClass("left");
        return level2Open = false;
    });

});