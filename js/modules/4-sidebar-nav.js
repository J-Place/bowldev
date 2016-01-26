    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Sidebar nav


    $(".sidebar-links__title").click(function (){
        console.log("click");
        if ($(this).hasClass('open')) {
            $(this).removeClass("open");
            $(".sidebar-links__list").removeClass("open");
        }
        else {
            $(this).addClass("open");
            $(".sidebar-links__list").addClass("open");
        }
    });