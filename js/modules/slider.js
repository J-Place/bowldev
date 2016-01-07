$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // slick() is called on 'slider--foreground' and 'slider--background',
    // which are synced via setting 'asNavFor'.

    // Change slider stripe color based on data-attribute of individual content element.
    var stripeBlue = $(".slider--stripes .stripe").attr("data-stripeColor") === "blue";
    var slideBlue = $(".slider--foreground .slide").attr("data-slideColor") === "blue";
    var stripeYellow = $(".slider--stripes .stripe").attr("data-stripeColor") === "yellow";
    var slideYellow = $(".slider--foreground .slide").attr("data-slideColor") === "yellow";
    var stripeOrange = $(".slider--stripes .stripe").attr("data-stripeColor") === "orange";
    var slideOrange = $(".slider--foreground .slide").attr("data-slideColor") === "orange";

    $(".slider--foreground").on(
        {'beforeChange': function(event, slick, currentSlide){
            if (currentSlide == slideBlue) {
                // console.log("Blue");
                $(".slider--stripes .stripe").css("background-color", "#01348d");
                $(".slider--stripes .stripe--right").css("background-color", "#01348d");
                $(".ribbon").css("background-color", "#b71234");
            }
            else if (currentSlide == slideYellow) {
                // console.log("Yellow");
                $(".slider--stripes .stripe").css("background-color", "#ffc100");
                $(".slider--stripes .stripe--right").css("background-color", "#ffc100");
                $(".ribbon").css("background-color", "#63666b");
            }
            else if (currentSlide == slideOrange) {
                // console.log("Orange");
                $(".slider--stripes .stripe").css("background-color", "#fe7200");
                $(".slider--stripes .stripe--right").css("background-color", "#fe7200");
                $(".ribbon").css("background-color", "#01348d");
            }
            else {
                // alert("Fail.");
            }
        }
    }).slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider--background',
        initialSlide: 0,
        focusOnSelect: false,
        arrows: true,
        fade: true,
        speed: 0,
        autoplaySpeed: 3000,
        pauseOnHover: true
    });

    $('.slider--background').slick({
        infinite: true,
        // autoplay: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // asNavFor: '.slider--foreground',
        initialSlide: 0,
        focusOnSelect: false,
        arrows: false,
        pauseOnHover: true
    });

});