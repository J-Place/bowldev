$(document).ready(function(){


    // Toggle Login
    $(".login-toggle").click(function(){
        $(this).addClass("open");
        $(".login-wrapper").addClass("open");
        $(".login__input--email").focus();
    });
    $('.login-wrapper').on('blur', function(){
        $(this).removeClass("open");
        $(".login-toggle").removeClass("open");
        // $(".login-wrapper").removeClass("open");
    });


    // Topggle Search Input
    $(".search__button").click(function(){
        $(".search-container").addClass("open");
        $(".search__button").addClass("open");
        $(".search__input").css("display", "block");
        $("input.search__input").focus();
    });


    // Close Login and Search on Click Outside
    $(document).mouseup(function(e)
    {
        var login = $(".login-wrapper");
        var search = $(".search-container");
        if(e.target.id != login.attr('id') && !login.has(e.target).length)
        {
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");
        }
        if(e.target.id != search.attr('id') && !search.has(e.target).length)
        {
            $(this).val("");
            $(".search-container").removeClass("open");
            $(".search__button").removeClass("open");
            $(".search__input").css("display", "none");
        }
    });


    // Marketing Promo Sliding Cover
    $(".marketing-promo").hover(function(){
        $(".marketing-promo__detail").toggleClass("open");
    });

});
