(function(){

    window.frontendApp = window.frontendApp || {};

    var init = function() {
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
                $("body").removeClass("search-open");
            }
            else {
                $(".search__input--wrapper").addClass("open");
                $(".search__input").css("display", "block").focus();
                $(".search-container").addClass("open");
                $(".search__button").addClass("open");
                $('body').addClass("search-open");

                // Close main nav
                window.frontendApp.menu.setCurrentPath(false);
            }
        });

        $('.login-wrapper').mouseup(function(e){
            e.stopImmediatePropagation();
        });
    };

    init();
})();