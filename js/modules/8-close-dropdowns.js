(function(){

    window.frontendApp = window.frontendApp || {};

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Close Login and Search on click outside
    $(document).mouseup(function(e) {
        var dropdown = $(".nav-dropdown");
        var loginToggle = $(".login-toggle");
        var searchToggle = $(".search__toggle");
        var loginDropdown = $(".login-wrapper");
        var search = $(".search-container");

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
            $("input.search__input").blur();
            $("body").removeClass("search-open");
            $(".search-container").removeClass("open");
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");

            // Close main nav
            //window.frontendApp.menu.setCurrentPath(false);
        }
    });
})();