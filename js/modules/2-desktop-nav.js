    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Desktop meganav


    // On hover show dropdown
    $(".nav__list--item a").hover(
        function (){

            var navID = $(this).attr("ID");
            var dropContainer = $(".nav-dropdown");

            console.log(navID);

            // if(e.target.id === dropdown.attr('id') && dropdown.has(e.target).length) {
            //     $(this).toggleClass("active");
            //     $(".nav-level-2." + navID).toggleClass("open");
            //     $(dropContainer).toggleClass("open");
            // }
            if ($(this).hasClass("open")) {
                $(this).toggleClass("active");
                $(".nav-level-2." + navID).toggleClass("open");
                $(dropContainer).toggleClass("open");
            }
            if (!$(this).hasClass("open")) {
                $(this).toggleClass("active");
                $(".nav-level-2." + navID).toggleClass("open");
                $(dropContainer).toggleClass("open");
            }
    });