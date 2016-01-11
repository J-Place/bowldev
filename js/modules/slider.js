$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // slick() is called on 'slider--foreground' and 'slider--background',
    // which are synced via setting 'asNavFor'.

    // Change slider stripe color based on data-attribute of individual content element.
    var slideBlue = $(".slider--foreground .slide").attr("data-slideColor") === "blue";
    var slideYellow = $(".slider--foreground .slide").attr("data-slideColor") === "yellow";
    var slideOrange = $(".slider--foreground .slide").attr("data-slideColor") === "orange";
    var firstSlide = $(".slider .slide").first().attr("data-slideColor");
    // var slideColor = $(this).attr("data-slideColor");
    var slideColor = $(".slider--foreground .slide").attr("data-slideColor");


// Revisit this block vvvvvvvvvvvv

    // function setFirstSlide() {
    //     // console.log(firstSlide);
    //     if (firstSlide == "blue") {
    //         $(".slider--stripes .stripe").css("background-color", "#01348d");
    //         $(".slider--stripes .stripe--right").css("background-color", "#01348d");
    //         $(".ribbon").css("background-color", "#b71234");
    //     }
    //     else if (firstSlide == "yellow") {
    //         $(".slider--stripes .stripe").css("background-color", "#fe7200");
    //         $(".slider--stripes .stripe--right").css("background-color", "#fe7200");
    //         $(".ribbon").css("background-color", "#01348d");
    //     }
    //     else {
    //         console.log("ERR");
    //         return true;
    //     }
    // }
    // setFirstSlide();

    $(".slider--foreground")
        .on({
        //     'beforeChange': function(event, slick, currentSlide) {
        //         $(".slider--stripes .stripes").toggelClass("blue");
        //         $(".slider--stripes .stripes").toggelClass("yellow");
        //     }
        // }) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<This closing is duplicated at end
        // 'init': function(event, slick, currentSlide) {
        //     console.log(event);
        //     // console.log(currentSlide);
        //     return true;
        //         // $(".slider--stripes .stripe").css("background-color", "#01348d");
        //         // $(".slider--stripes .stripe--right").css("background-color", "#01348d");
        //         // $(".ribbon").css("background-color", "#b71234");
        //     }
        // // }
        // // {
            'afterChange': function(event, slick, currentSlide){
                // console.log("after" + currentSlide);
                $(".slider__ribbon .ribbon").toggleClass("blue");
                $(".slider--stripes .stripes").toggleClass("blue");
                $(".slider__ribbon .ribbon").toggleClass("yellow");
                $(".slider--stripes .stripes").toggleClass("yellow");

                // if (currentSlide == slideBlue) {
                //     // console.log("blue");
                //     $(".slider--stripes .stripe").css("background-color", "#01348d");
                //     $(".slider--stripes .stripe--right").css("background-color", "#01348d");
                //     $(".ribbon").css("background-color", "#b71234");
                // }
                // else if (currentSlide == slideYellow) {
                //     // console.log("yellow");
                //     $(".slider--stripes .stripe").css("background-color", "#fe7200");
                //     $(".slider--stripes .stripe--right").css("background-color", "#fe7200");
                //     $(".ribbon").css("background-color", "blue");
                // }
                // else {
                //     console.log("ERR");
                //     return false;
                // }
            }
        })
        .slick({
        infinite: true,
        autoplay: true,
        asNavFor: '.slider--background',
        arrows: true,
        fade: true,
        speed: 0,
        autoplaySpeed: 9000
        });
    });

    $('.slider--background').slick({
        infinite: true,
        asNavFor: '.slider--foreground',
        arrows: false
    });
// });