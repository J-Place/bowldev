$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Marketing promo slide over
    $(".marketing-promo").hover(function(){
        $(".marketing-promo__detail").toggleClass("open");
    });

});
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
    $(".nav-small-icon").click(function(){
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


$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Toggle login input box
    $(".login-toggle").click(function(){
        // console.log(e.target);
        $(this).addClass("open");
        $(".login-wrapper").addClass("open");
        $(".login__input--email").focus();
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Topggle search input box

    $(".search__toggle").click(function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass("open");
            $(".search__input--wrapper").removeClass("open");
            $("input.search__input").focus();
            $(".search-container").removeClass("open");
            $(".search__button").removeClass("open");
            // $(".search__input").css("display", "block");
        }
        else {
            $(".search__input--wrapper").addClass("open");
            $("input.search__input").focus();
            $(".search-container").addClass("open");
            $(".search__button").addClass("open");
            // $(".search__input").css("display", "block");
        }
    });
        // $(".search__input--wrapper").addClass("open");
        // $("input.search__input").focus();
        // $(".search-container").addClass("open");
        // $(".search__button").addClass("open");
        // $(".search__input").css("display", "block");
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Close Login and Search on click outside
    $(document).mouseup(function(e)
    {
        var dropdown = $(".nav-dropdown");
        var loginToggle = $(".login-toggle");
        var searchToggle = $(".search__toggle");
        var loginDropdown = $(".login-wrapper");
        var search = $(".search-container");
        var hamburger = $(".nav-samll-icon");

        if(e.target.id != dropdown.attr('id') && !dropdown.has(e.target).length)
        {
            // console.log("Outside Dropdown");
            $(".dropdown-wrapper").removeClass("open");
        }
        if(e.target.id != loginDropdown.attr('id') && !loginDropdown.has(e.target).length)
        {
            // console.log("Login Button");
            // console.log("Outside Login");
            // console.log(e.target);
            $(loginDropdown).removeClass("open");
            $(loginToggle).removeClass("open");
        }
        if(e.target.id != hamburger.attr('id') && hamburger.has(e.target).length)
        {
            // console.log("Outside Hamburger");
            // $(".dropdown-wrapper").removeClass("open");
            // $(".search__input").val("");
            // $(".search-container").removeClass("open");
            // $(".search__button").removeClass("open");
            // $(".search__input").css("display", "none");
            // $(".login-wrapper").removeClass("open");
            // $(".login-toggle").removeClass("open");
        }
        if(e.target.id != search.attr('id') && !search.has(e.target).length)
        {
            // console.log("Outside Search");
            $(".search__input").val("");
            $("search").removeClass("open");
            $(".search__button").removeClass("open");
            $(".search__input").css("display", "none");
            $(".search__input--wrapper").removeClass("open");
            $(".search-container").removeClass("open");
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");
            // $(".search__toggle").click();
        }
    });
$(window).bind("load", function() {
    $(".sidebar-links__title").click(function (){
        if ($(this).hasClass('open')) {
            // console.log("It's already open.");
            $(this).removeClass("open");
            $(".sidebar-links__list").removeClass("open");
        }
        else {
            $(this).addClass("open");
            $(".sidebar-links__list").addClass("open");
        }
    });
});
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

$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // slick() is called on 'slider--foreground' and 'slider--background',
    // which are synced via setting 'asNavFor'.

    // Change slider stripe color based on data-attribute of individual content element.
    var slideBlue = $(".slider--foreground .slide").attr("data-slideColor") === "blue";
    var slideYellow = $(".slider--foreground .slide").attr("data-slideColor") === "yellow";
    var slideOrange = $(".slider--foreground .slide").attr("data-slideColor") === "orange";
    var firstSlide = $(".slider .slide").first().attr("data-slideColor");
    // var slideColor = $(this).attr("data-slideColor");
    var slideColor = $(".slider--foreground .slide").attr("data-slideColor");


// Revisit this block vvvvvvvvvvvv

    // function setFirstSlide() {
    //     // console.log(firstSlide);
    //     if (firstSlide == "blue") {
    //         $(".slider--stripes .stripe").css("background-color", "#01348d");
    //         $(".slider--stripes .stripe--right").css("background-color", "#01348d");
    //         $(".ribbon").css("background-color", "#b71234");
    //     }
    //     else if (firstSlide == "yellow") {
    //         $(".slider--stripes .stripe").css("background-color", "#fe7200");
    //         $(".slider--stripes .stripe--right").css("background-color", "#fe7200");
    //         $(".ribbon").css("background-color", "#01348d");
    //     }
    //     else {
    //         console.log("ERR");
    //         return true;
    //     }
    // }
    // setFirstSlide();

    $(".slider--foreground")
        .on({
        //     'beforeChange': function(event, slick, currentSlide) {
        //         $(".slider--stripes .stripes").toggelClass("blue");
        //         $(".slider--stripes .stripes").toggelClass("yellow");
        //     }
        // }) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<This closing is duplicated at end
        // 'init': function(event, slick, currentSlide) {
        //     console.log(event);
        //     // console.log(currentSlide);
        //     return true;
        //         // $(".slider--stripes .stripe").css("background-color", "#01348d");
        //         // $(".slider--stripes .stripe--right").css("background-color", "#01348d");
        //         // $(".ribbon").css("background-color", "#b71234");
        //     }
        // // }
        // // {
            'afterChange': function(event, slick, currentSlide){
                // console.log("after" + currentSlide);
                $(".slider__ribbon .ribbon").toggleClass("blue");
                $(".slider--stripes .stripes").toggleClass("blue");
                $(".slider__ribbon .ribbon").toggleClass("yellow");
                $(".slider--stripes .stripes").toggleClass("yellow");

                // if (currentSlide == slideBlue) {
                //     // console.log("blue");
                //     $(".slider--stripes .stripe").css("background-color", "#01348d");
                //     $(".slider--stripes .stripe--right").css("background-color", "#01348d");
                //     $(".ribbon").css("background-color", "#b71234");
                // }
                // else if (currentSlide == slideYellow) {
                //     // console.log("yellow");
                //     $(".slider--stripes .stripe").css("background-color", "#fe7200");
                //     $(".slider--stripes .stripe--right").css("background-color", "#fe7200");
                //     $(".ribbon").css("background-color", "blue");
                // }
                // else {
                //     console.log("ERR");
                //     return false;
                // }
            }
        })
        .slick({
        infinite: true,
        autoplay: true,
        asNavFor: '.slider--background',
        arrows: true,
        fade: true,
        speed: 0,
        autoplaySpeed: 9000
        });
    });

    $('.slider--background').slick({
        infinite: true,
        asNavFor: '.slider--foreground',
        arrows: false
    });
// });