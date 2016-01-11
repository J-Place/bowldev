$(window).bind("load", function() {
    $(".sidebar-links__title").click(function (){
        if ($(this).hasClass('open')) {
            // console.log("It's already open.");
            $(this).removeClass("open");
            $(".sidebar-links__list").removeClass("open");
        }
        else {
            $(this).addClass("open");
            $(".sidebar-links__list").addClass("open");
        }
    });
});