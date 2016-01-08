$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Marketing promo slide over
    $(".marketing-promo").hover(function(){
        $(".marketing-promo__detail").toggleClass("open");
    });

});
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

    $(".search__button").click(function(){
        $(".search-container").addClass("open");
        $(".search__button").addClass("open");
        $(".search__input").css("display", "block");
        $("input.search__input").focus();
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Close Login and Search on click outside
    $(document).mouseup(function(e)
    {
        var dropdown = $(".nav-dropdown");
        var loginToggle = $(".login-toggle");
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
            $(search).removeClass("open");
            $(".search__button").removeClass("open");
            $(".search__input").css("display", "none");
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");
        }
    });

});
    $(window).scroll( function(){
        // console.log(window.scrollY);
        if($(window).scrollTop() > 20) {
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
    var slideColor = $(this).attr("data-slideColor");

    // alert(stripe1);

    function setFirstSlide() {
        // console.log("Running function...");
        // console.log(firstSlide);
        if (firstSlide == "blue") {
            $(".slider--stripes .stripe").css("background-color", "#01348d");
            $(".slider--stripes .stripe--right").css("background-color", "#01348d");
            $(".ribbon").css("background-color", "#b71234");
        }
        else if (firstSlide == "orange") {
            $(".slider--stripes .stripe").css("background-color", "#fe7200");
            $(".slider--stripes .stripe--right").css("background-color", "#fe7200");
            $(".ribbon").css("background-color", "#01348d");
        }
        else if (firstSlide == "yellow") {
            $(".slider--stripes .stripe").css("background-color", "#ffc100");
            $(".slider--stripes .stripe--right").css("background-color", "#ffc100");
            $(".ribbon").css("background-color", "#63666b");
        }
    }

    // console.log(firstSlide = slideOrange);
    setFirstSlide();

    $(".slider--foreground").on(
        {
        'afterChange': function(event, slick, currentSlide){
            console.log(currentSlide);
            if (currentSlide == slideBlue) {
                // console.log("blue");
                $(".slider--stripes .stripe").css("background-color", "#01348d");
                $(".slider--stripes .stripe--right").css("background-color", "#01348d");
                $(".ribbon").css("background-color", "#b71234");
            }
            else if (currentSlide == slideYellow) {
                // console.log("yellow");
                $(".slider--stripes .stripe").css("background-color", "#fe7200");
                $(".slider--stripes .stripe--right").css("background-color", "#fe7200");
                $(".ribbon").css("background-color", "blue");
            }
            else {
                console.log("ERR");
                return true
            }
        }
    }).slick({
        infinite: true,
        // autoplay: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        asNavFor: '.slider--background',
        // initialSlide: 0,
        // focusOnSelect: false,
        arrows: true,
        fade: true,
        speed: 0,
        autoplaySpeed: 3000,
        // pauseOnHover: true
    });

    $('.slider--background').slick({
        infinite: true,
        // autoplay: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        asNavFor: '.slider--foreground',
        // initialSlide: 0,
        // focusOnSelect: false,
        arrows: false,
        // pauseOnHover: true
    });

});