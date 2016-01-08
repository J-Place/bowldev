$(window).bind("load", function() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // slick() is called on 'slider--foreground' and 'slider--background',
    // which are synced via setting 'asNavFor'.

    // Change slider stripe color based on data-attribute of individual content element.
    var slideBlue = $(".slider--foreground .slide").attr("data-slideColor") === "blue";
    var slideYellow = $(".slider--foreground .slide").attr("data-slideColor") === "yellow";
    var slideOrange = $(".slider--foreground .slide").attr("data-slideColor") === "orange";
    var firstSlide = $(".slider .slide").first().attr("data-slideColor");
    var slideColor = $(this).attr("data-slideColor");

    // alert(stripe1);

    function setFirstSlide() {
        // console.log("Running function...");
        // console.log(firstSlide);
        if (firstSlide == "blue") {
            $(".slider--stripes .stripe").css("background-color", "#01348d");
            $(".slider--stripes .stripe--right").css("background-color", "#01348d");
            $(".ribbon").css("background-color", "#b71234");
        }
        else if (firstSlide == "orange") {
            $(".slider--stripes .stripe").css("background-color", "#fe7200");
            $(".slider--stripes .stripe--right").css("background-color", "#fe7200");
            $(".ribbon").css("background-color", "#01348d");
        }
        else if (firstSlide == "yellow") {
            $(".slider--stripes .stripe").css("background-color", "#ffc100");
            $(".slider--stripes .stripe--right").css("background-color", "#ffc100");
            $(".ribbon").css("background-color", "#63666b");
        }
    }

    // console.log(firstSlide = slideOrange);
    setFirstSlide();

    $(".slider--foreground").on(
        {
        'afterChange': function(event, slick, currentSlide){
            console.log(currentSlide);
            if (currentSlide == slideBlue) {
                // console.log("blue");
                $(".slider--stripes .stripe").css("background-color", "#01348d");
                $(".slider--stripes .stripe--right").css("background-color", "#01348d");
                $(".ribbon").css("background-color", "#b71234");
            }
            else if (currentSlide == slideYellow) {
                // console.log("yellow");
                $(".slider--stripes .stripe").css("background-color", "#fe7200");
                $(".slider--stripes .stripe--right").css("background-color", "#fe7200");
                $(".ribbon").css("background-color", "blue");
            }
            else {
                console.log("ERR");
                return true
            }
        }
    }).slick({
        infinite: true,
        // autoplay: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        asNavFor: '.slider--background',
        // initialSlide: 0,
        // focusOnSelect: false,
        arrows: true,
        fade: true,
        speed: 0,
        autoplaySpeed: 3000,
        // pauseOnHover: true
    });

    $('.slider--background').slick({
        infinite: true,
        // autoplay: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        asNavFor: '.slider--foreground',
        // initialSlide: 0,
        // focusOnSelect: false,
        arrows: false,
        // pauseOnHover: true
    });

});