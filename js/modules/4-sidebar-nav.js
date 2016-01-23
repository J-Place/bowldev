$(window).bind("load", function() {
    $(".sidebar-links__title").click(function (){
        console.log("click");
        if ($(this).hasClass('open')) {
            console.log("Closed.")
            $(this).removeClass("open");
            $(".sidebar-links__list").removeClass("open");
        }
        else {
            console.log("Should have opened.")
            $(this).addClass("open");
            $(".sidebar-links__list").addClass("open");
        }
    });
});