$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Marketing promo slide over
    $(".marketing-promo").hover(function(){
        $(".marketing-promo__detail").toggleClass("open");
    });


    var windowWidth = $(window).width();
    var setSkew = function(){
        if (windowWidth > 768) {
            $(".nav__list--item a.active::after").addClass("skew");
        }
        else if (windowWidth <= 768) {
            $(".nav__list--item a.active::after").removeClass("skew");
        }
    };
    setSkew();

});
    (function(){

        //desktop hover script

        $navMainLevel1 = $('.nav-main.nav-level-1');
        $navMainLevel1Links = $navMainLevel1.find('a');
        $navLevel2Container = $('.nav-dropdown');
        $navLevel2Links = $('.dropdown-wrapper.nav-level-2');

        var _activeMenu = false;
        var _level2Active = false;
        var _level1MouseOutTimeout = false;

        var level1MouseOver = function(e) {
            if(e.relatedTarget.parentNode.className === "nav-dropdown") {
                clearTimeout(_level1MouseOutTimeout);
                setActiveMenu($(e.currentTarget).attr('id'));
            }
            var timeout = 500;
            _level1MouseOverTimeout = setTimeout(function(){
                setActiveMenu($(e.currentTarget).attr('id'));
            }, timeout);
        };

        var level1MouseOut = function(e) {
            var timeout = 500;
            // shorten timeout if mouse moves above nav
            if(e.clientY < $navMainLevel1.position().top) {
                timeout = 1;
            }
            _level1MouseOutTimeout = setTimeout(function(){
                if(!_level2Active) {
                    setActiveMenu(false);
                    // return false;
                }
            }, timeout);
        };

        var level2MouseOver = function(e) {
            console.log("mouse over dropdown");
            _level2Active = true;
        };

        var level2MouseOut = function(e) {
            console.log("mouse out dropdown");
            _level2Active = false;
            setActiveMenu(false);
        };

        var setActiveMenu = function(name) {
            console.log("setting active class");
            if(name === _activeMenu) {
                return;
            }
            // if(name === "has-children") {
            //     console.log("don't hide dropdown");
            // }
            _activeMenu = name;
            //set the active link
            $navMainLevel1Links.each(function(index, navLevel1Link){
                $(navLevel1Link).toggleClass('active', ($(navLevel1Link).attr('id') === _activeMenu));
            });
            //toggle the dropdown
            $navLevel2Container.toggleClass('open', (_activeMenu !== false));
            $navLevel2Links.each(function(index, navLevel2Link){
                $(navLevel2Link).toggleClass('open', $(navLevel2Link).hasClass(_activeMenu));
            });
        };

        $navMainLevel1Links.hover(level1MouseOver, level1MouseOut);
        $navLevel2Container.hover(level2MouseOver, level2MouseOut);

        //end desktop hover script

    })();

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
$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Toggle login input box
    $(".login-toggle").click(function(e){
        e.preventDefault();
        $(this).addClass("open");
        $(".login-wrapper").addClass("open");
        $(".login__input--email").focus();
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Topggle search input box

    $(".search__toggle").click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            $(this).removeClass("open");
            $(".search__input--wrapper").removeClass("open");
            $("input.search__input").blur();
            $(".search-container").removeClass("open");
            $(".search__button").removeClass("open");
        }
        else {
            $(".search__input--wrapper").addClass("open");
            $(".search__input").css("display", "block").focus();
            $(".search-container").addClass("open");
            $(".search__button").addClass("open");

            // Close other dropdowns
            $(".nav-small-icon").removeClass("open");
            $(".nav-main").removeClass("open");
            $(".nav-dropdown").removeClass("open");
            $(".dropdown-wrapper").removeClass("open");
            $(".nav-level-1").removeClass("left");
            $(".nav-level-2").removeClass("open");
        }
    });
});




$(window).bind("load", function() {
    $(".sidebar-links__title").click(function (){
        console.log("click");
        if ($(this).hasClass('open')) {
            console.log("Closed.")
            $(this).removeClass("open");
            $(".sidebar-links__list").removeClass("open");
        }
        else {
            console.log("Should have opened.")
            $(this).addClass("open");
            $(".sidebar-links__list").addClass("open");
        }
    });
});
    $(window).scroll( function(){
        var panelWidth = $(window).width();
        // console.log(window.scrollY);
        if (panelWidth >= 480 && $(window).scrollTop() > 20) {
            console.log("Above 20.");
            $(".logo").addClass("scroll");
            $("body").addClass("scroll--header");
            $(".header").addClass("scroll");
            $(".nav-main").addClass("scroll");
        }
        if (panelWidth >= 480 && $(window).scrollTop() < 20) {
            console.log("Below 20.");
            $(".logo").removeClass("scroll");
            $(".header").removeClass("scroll");
            $(".nav-main").removeClass("scroll");
            $("body").removeClass("scroll--header");
        }
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Close Login and Search on click outside
$(document).mouseup(function(e)
{
    var dropdown = $(".nav-dropdown");
    var loginToggle = $(".login-toggle");
    var searchToggle = $(".search__toggle");
    var loginDropdown = $(".login-wrapper");
    var search = $(".search-container");

    if(e.target.id != dropdown.attr('id') && !dropdown.has(e.target).length)
    {
        $(".nav__list--item a").removeClass("active");
        $(".dropdown-wrapper").removeClass("open");
    }
    if(e.target.id != loginDropdown.attr('id') && !loginDropdown.has(e.target).length)
    {
        $(loginDropdown).removeClass("open");
        $(loginToggle).removeClass("open");
    }
    if(e.target.id != search.attr('id') && !search.has(e.target).length)
    {
        $(".search__input").val("");
        $("search").removeClass("open");
        $(".search__button").removeClass("open");
        $(".search__input").css("display", "none");
        $(".search__input--wrapper").removeClass("open");
        $(".search-container").removeClass("open");
        $(".login-wrapper").removeClass("open");
        $(".login-toggle").removeClass("open");
    }
});