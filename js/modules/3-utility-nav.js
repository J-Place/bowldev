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