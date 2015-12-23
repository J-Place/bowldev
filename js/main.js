$(document).ready(function(){


    // Toggle Login
    $(".login-toggle").click(function(){
        $(this).addClass("open");
        $(".login-wrapper").addClass("open");
        $(".login__input--email").focus();
    });


    // Topggle Search
    $(".search__button").click(function(){
        $(".search-container").addClass("open");
        $(".search__button").addClass("open");
        $(".search__input").css("display", "block");
        $("input.search__input").focus();
    });

    // Toggle Mobile Nav
    $(".nav-small-icon").click(function(){
        // if ($(".dropdown-wrapper").hasClass("open")) {

        // }
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(".nav-main").removeClass("open");
            $(".nav-main").removeClass("left");
            $(".nav-dropdown").removeClass("open");
            $(".dropdown-wrapper").removeClass("open");
            $(".dropdown-wrapper").removeClass("left");
        }
        else {
            $(this).addClass("open");
            $(".nav-main").addClass("open");
            // $(".nav-dropdown").addClass("open");
        }
    });


    // Set width of Mobile Nav panels
    var panelWidth = $(window).width()-30;
    var setPanel = function(){
        if (panelWidth < 780) {
            // alert("Test 1");
            $(".dropdown-wrapper.bowlers").width(panelWidth);
            $(".dropdown-wrapper.youth").width(panelWidth);
            $(".dropdown-wrapper.youth-tournaments").width(panelWidth);
            // alert("Test 2");
        }
        else if (panelWidth >= 780) {
            // alert("Desktop");
        }
    };
    setPanel();


    // Top level nav event
    // var linkID = $(this).getElementById();

    // $(this).click( function(){
    //     alert(linkID);
    // });

    // var topLink = $("")
    $("#bowlers").click(function(){
        if (panelWidth >= 780) {
            // $(".nav-dropdown").addClass("open");
            $(".bowlers").addClass("open");
        }
        if (panelWidth < 780) {
            $(".nav-main").width(panelWidth);
            $(".nav-main").addClass("left");
            $(".nav-dropdown").addClass("open");
            $(".bowlers").addClass("open");
        }
    });

    $(".exit--bowlers").click(function() {
        $(".nav-dropdown").removeClass("open");
        $(".bowlers").removeClass("open");
        $(".nav-main").removeClass("left").addClass("open");
    });

    $("#youth").click(function(){
        $(".nav-main").addClass("left");
        $(".nav-dropdown").addClass("open");
        $(".youth").addClass("open");
    });

    $(".exit--youth").click(function() {
        $(".nav-dropdown").removeClass("open");
        $(".youth").removeClass("open");
        $(".nav-main").removeClass("left").addClass("open");
    });

    $("#youth-tournaments").click(function(){
        // $(".nav-main").addClass("left");
        // $(".nav-dropdown").addClass("open");
        $(".youth").removeClass("open").addClass("left");
        $(".youth-tournaments").addClass("open");
    });

    $(".exit--youth-tournaments").click(function() {
        $(".nav-dropdown").removeClass("left").removeClass("open");
        $(".youth").removeClass("left").addClass("open");
        $(".youth-tournaments").removeClass("open");
        $(".nav-main").removeClass("left").addClass("open");
    });


    // Close Login and Search on Click Outside
    $(document).mouseup(function(e)
    {
        var dropdown = $(".nav-dropdown");
        var login = $(".login-wrapper");
        var search = $(".search-container");
        var hamburger = $(".nav-samll-icon");

        if(e.target.id != dropdown.attr('id') && !dropdown.has(e.target).length)
        {
            $(".dropdown-wrapper").removeClass("open");
        }
        if(e.target.id != login.attr('id') && !login.has(e.target).length)
        {
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");
        }
        if(e.target.id != hamburger.attr('id') && hamburger.has(e.target).length)
        {
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
            $(".search__input").val("");
            $(".search-container").removeClass("open");
            $(".search__button").removeClass("open");
            $(".search__input").css("display", "none");
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");
        }
    });


    // Marketing Promo Sliding Cover
    $(".marketing-promo").hover(function(){
        $(".marketing-promo__detail").toggleClass("open");
    });

    //Slider
    // $(".slides").slick({
    //     autoPlay: true,
    // });

    $('.slider-for').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        speed: 1200,
        autoplaySpeed: 15000,
        asNavFor: '.slider-nav',
        initialSlide: 0,
    });

    $(".slider-nav").slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        initialSlide: 0,
        dots: false,
        arrows: true,
        fade: true,
        speed: 1200,
        focusOnSelect: false,
      });

});