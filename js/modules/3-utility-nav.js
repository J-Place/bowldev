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

        // Close other main nav
        $(".nav-small-icon").removeClass("open");
        $(".nav-dropdown").removeClass("open");
        $(".dropdown-wrapper").removeClass("open");
        $(".nav-level-1").removeClass("left").removeClass("open");
        $(".nav-level-2").removeClass("left").removeClass("open");
    }
});