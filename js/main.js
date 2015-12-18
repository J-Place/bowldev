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
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(".nav-main").removeClass("open");
        }
        else {
            $(this).addClass("open");
            $(".nav-main").addClass("open");
        }
    });

    // Slide Mobile Nav Panels
    var panelWidth = $(window).width()-30;

    $(".dropdown-wrapper.bowlers").width(panelWidth);
    $(".dropdown-wrapper.youth").width(panelWidth);
    $(".dropdown-wrapper.youth-tournaments").width(panelWidth);

    $("#bowlers").click(function(){
        $(".nav-main").addClass("left");
        $(".nav-dropdown").addClass("open");
        $(".bowlers").addClass("open");
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
        // $(".nav-dropdown").removeClass("open");
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

        if(e.target.id != dropdown.attr('id') && !dropdown.has(e.target).length)
        {
            $(".dropdown-wrapper").removeClass("open");
        }
        if(e.target.id != login.attr('id') && !login.has(e.target).length)
        {
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");
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



});