    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Desktop meganav

    // On hover show dropdown
    // $(".nav__list--item a").hover(
    //     function (){
    //         var navID = $(this).attr("ID");
    //         var dropContainer = $(".nav-dropdown");
    //         $(this).toggleClass("active");
    //         $(".nav-level-2." + navID).toggleClass("open");
    //         $(dropContainer).toggleClass("open");
    //     }
    // );



    // $('#item-over a').hover(
    // function(){
    //     $(this).doTimeout(
    //         'hover', 250,
    //         'addClass', 'hover'
    //         );
    // }, function(){
    //     $(this).doTimeout(
    //         'hover', 250,
    //         'removeClass', 'hover'
    //         );
    // });


    // var el = document.getElementById(".nav__list--item a");
    //     hoverintent(el,
    // function() {
    //     // Handler in
    // }, function() {
    //     // Handler out
    // });

    // var opts = {
    //     timeout: 500,
    //     interval: 50
    // };

    // <script type="text/javascript" src='js/vendor/hoverintent.min.js' />

    // var bowlers = document.getElementById('bowlers');
    // var bowlersDrop = hoverintent(bowlers,
    //     function() {
    //         console.log("hover");
    //         // this.className = 'active';
    //         $(this).addClass("active");
    //     }, function() {
    //         // this.className = '';
    //         $(this).removeClass("active");
    //     }).options({
    //     timeout:500
    // });



$(document).ready(function()
    {
    var timer;
    var navID = $(".nav__list--item a").attr("ID");

    $(".nav__list--item a").hover(
        function()
        {
            // var navID = $(this).attr("ID");
            $(this).addClass("active");
            $(".nav-dropdown").addClass("open");
            $(".nav-level-2." + navID).addClass("open");
        },
        function()
        {
            timer = setTimeout(function(){
                $(".nav__list--item a").removeClass("active");
                // $(navID).removeClass("active");
                $(".nav-dropdown").removeClass("open");
                $(".nav-level-2." + navID).removeClass("open");
            }, 600);
        }
    );

    $(".nav-dropdown").hover(
        function ()
        {
            var navID = $(".nav__list--item a").attr("ID");
            var menuID = $(this).attr("ID");
            if (navID === menuID) {
                $(this).addClass("active");
            }
            clearTimeout(timer);
            $(".nav-dropdown").addClass("open");
            $(".nav-level-2." + navID).addClass("open");
        },
        function()
        {
            var navID = $(this).attr("ID");
            $(".nav__list--item a").removeClass("active");
            $(".nav-dropdown").removeClass("open");
            $(".nav-level-2." + navID).removeClass("open");
        }
    );
});