$(document).ready(function(){


    // Toggle Login
    $(".login-toggle").click(function(){
        $(this).addClass("open");
        $(".login-wrapper").addClass("open");
        $(".login__input--email").focus();
    });


    // Topggle Search
    $(".search__button").click(function(){
        $(".search-container").addClass("open");
        $(".search__button").addClass("open");
        $(".search__input").css("display", "block");
        $("input.search__input").focus();
    });

    // Toggle Mobile Nav
    $(".nav-small-icon").click(function(){
        // if ($(".dropdown-wrapper").hasClass("open")) {

        // }
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(".nav-main").removeClass("open");
            $(".nav-main").removeClass("left");
            $(".nav-dropdown").removeClass("open");
            $(".dropdown-wrapper").removeClass("open");
            $(".dropdown-wrapper").removeClass("left");
        }
        else {
            $(this).addClass("open");
            $(".nav-main").addClass("open");
            // $(".nav-dropdown").addClass("open");
        }
    });


    // Set width of Mobile Nav panels
    var panelWidth = $(window).width()-30;
    var setPanel = function(){
        if (panelWidth < 780) {
            // alert("Test 1");
            $(".dropdown-wrapper.bowlers").width(panelWidth);
            $(".dropdown-wrapper.youth").width(panelWidth);
            $(".dropdown-wrapper.youth-tournaments").width(panelWidth);
            // alert("Test 2");
        }
        else if (panelWidth >= 780) {
            // alert("Desktop");
        }
    };
    setPanel();


    // Top level nav event
    // var linkID = $(this).getElementById();

    // $(this).click( function(){
    //     alert(linkID);
    // });

    // var topLink = $("")
    $("#bowlers").click(function(){
        if (panelWidth >= 780) {
            // $(".nav-dropdown").addClass("open");
            $(".bowlers").addClass("open");
        }
        if (panelWidth < 780) {
            $(".nav-main").width(panelWidth);
            $(".nav-main").addClass("left");
            $(".nav-dropdown").addClass("open");
            $(".bowlers").addClass("open");
        }
    });

    $(".exit--bowlers").click(function() {
        $(".nav-dropdown").removeClass("open");
        $(".bowlers").removeClass("open");
        $(".nav-main").removeClass("left").addClass("open");
    });

    $("#youth").click(function(){
        $(".nav-main").addClass("left");
        $(".nav-dropdown").addClass("open");
        $(".youth").addClass("open");
    });

    $(".exit--youth").click(function() {
        $(".nav-dropdown").removeClass("open");
        $(".youth").removeClass("open");
        $(".nav-main").removeClass("left").addClass("open");
    });

    $("#youth-tournaments").click(function(){
        // $(".nav-main").addClass("left");
        // $(".nav-dropdown").addClass("open");
        $(".youth").removeClass("open").addClass("left");
        $(".youth-tournaments").addClass("open");
    });

    $(".exit--youth-tournaments").click(function() {
        $(".nav-dropdown").removeClass("left").removeClass("open");
        $(".youth").removeClass("left").addClass("open");
        $(".youth-tournaments").removeClass("open");
        $(".nav-main").removeClass("left").addClass("open");
    });


    // Close Login and Search on Click Outside
    $(document).mouseup(function(e)
    {
        var dropdown = $(".nav-dropdown");
        var login = $(".login-wrapper");
        var search = $(".search-container");
        var hamburger = $(".nav-samll-icon");

        if(e.target.id != dropdown.attr('id') && !dropdown.has(e.target).length)
        {
            $(".dropdown-wrapper").removeClass("open");
        }
        if(e.target.id != login.attr('id') && !login.has(e.target).length)
        {
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");
        }
        if(e.target.id != hamburger.attr('id') && hamburger.has(e.target).length)
        {
            // $(".dropdown-wrapper").removeClass("open");
            // $(".search__input").val("");
            // $(".search-container").removeClass("open");
            // $(".search__button").removeClass("open");
            // $(".search__input").css("display", "none");
            // $(".login-wrapper").removeClass("open");
            // $(".login-toggle").removeClass("open");
        }
        if(e.target.id != search.attr('id') && !search.has(e.target).length)
        {
            $(".search__input").val("");
            $(".search-container").removeClass("open");
            $(".search__button").removeClass("open");
            $(".search__input").css("display", "none");
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");
        }
    });


    // Marketing Promo Sliding Cover
    $(".marketing-promo").hover(function(){
        $(".marketing-promo__detail").toggleClass("open");
    });

    //Slider
    // $(".slides").slick({
    //     autoPlay: true,
    // });

    $('.slider-for').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        speed: 1200,
        autoplaySpeed: 15000,
        asNavFor: '.slider-nav',
        initialSlide: 0,
    });

    $(".slider-nav").slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        initialSlide: 0,
        dots: false,
        arrows: true,
        fade: true,
        speed: 1200,
        focusOnSelect: false,
      });

});
$(document).ready(function(){

    console.log("The DOM is ready");

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Toggle login input box
    $(".login-toggle").click(function(){
        // console.log(e.target);
        $(this).addClass("open");
        $(".login-wrapper").addClass("open");
        $(".login__input--email").focus();
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Topggle search input box

    $(".search__button").click(function(){
        $(".search-container").addClass("open");
        $(".search__button").addClass("open");
        $(".search__input").css("display", "block");
        $("input.search__input").focus();
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Mobile nav dropdown toggle

    $(".nav-small-icon").click(function(){
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(".nav-main").removeClass("open");
            $(".nav-main").removeClass("left");
            $(".nav-dropdown").removeClass("open");
            $(".nav-dropdown").removeClass("left");
            $(".dropdown-wrapper").removeClass("open");
            $(".dropdown-wrapper").removeClass("left");
        }
        else {
            $(this).addClass("open");
            $(".nav-level-1").addClass("open");
            $(".nav-dropdown").addClass("open");
        }
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Set width of mobile nav panels

    var panelWidth = $(window).width()-30;
    var setPanel = function(){
        if (panelWidth < 780) {
            $(".nav-level-2").width(panelWidth);
            $(".nav-level-3").width(panelWidth);
        }
        else if (panelWidth >= 780) {
        }
    };
    setPanel();


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Mobile nav sliding panes

    var mobileNav = function(){
        var navID = $(this).attr("ID");
        var dropContainer = $(".nav-dropdown");
        var dropID = $(".nav-dropdown ." + navID);
        var level1 = $(".nav-level-1");
        var level2 = $(".nav-level-2");
        var level3 = $(".nav-level-3");
        var link = $(".nav__list--item a");

        if (panelWidth >= 480) {
            $(level1).addClass("open");
            $(dropContainer).addClass("open");
            $(dropID).addClass("open");
        }
        else if (panelWidth < 480) {
            if ($(level1).hasClass("open")) {
                $(dropContainer).addClass("open");
                $(dropID).addClass("open");
                $(level1).addClass("left");
                // $(level2).addClass("open");
            }
            else if ($(level2).hasClass("open")) {
                $(level2).addClass("left");
                $(level3).addClass("open");
            }
        }
    };

    $(".nav__list--item a").click(mobileNav);
    $(".exit-level-2").click(function() {
        $(".nav-level-2").removeClass("open");
        $(".nav-level-1").removeClass("left");
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Close Login and Search on click outside
    $(document).mouseup(function(e)
    {
        var dropdown = $(".nav-dropdown");
        var loginToggle = $(".login-toggle");
        var loginDropdown = $(".login-wrapper");
        var search = $(".search-container");
        var hamburger = $(".nav-samll-icon");

        if(e.target.id != dropdown.attr('id') && !dropdown.has(e.target).length)
        {
            // console.log("Outside Dropdown");
            $(".dropdown-wrapper").removeClass("open");
        }
        if(e.target.id != loginDropdown.attr('id') && !loginDropdown.has(e.target).length)
        {
            // console.log("Login Button");
            // console.log("Outside Login");
            // console.log(e.target);
            $(loginDropdown).removeClass("open");
            $(loginToggle).removeClass("open");
        }
        if(e.target.id != hamburger.attr('id') && hamburger.has(e.target).length)
        {
            // console.log("Outside Hamburger");
            // $(".dropdown-wrapper").removeClass("open");
            // $(".search__input").val("");
            // $(".search-container").removeClass("open");
            // $(".search__button").removeClass("open");
            // $(".search__input").css("display", "none");
            // $(".login-wrapper").removeClass("open");
            // $(".login-toggle").removeClass("open");
        }
        if(e.target.id != search.attr('id') && !search.has(e.target).length)
        {
            // console.log("Outside Search");
            $(".search__input").val("");
            $(search).removeClass("open");
            $(".search__button").removeClass("open");
            $(".search__input").css("display", "none");
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");
        }
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Marketing promo slide over
    $(".marketing-promo").hover(function(){
        $(".marketing-promo__detail").toggleClass("open");
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Slider plugin and parameters, .slick() is called
    // on 'slider--foreground' and 'slider--background',
    // which are synced by plugin setting, asNavFor.

    $(".slider--foreground").slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider--background',
        initialSlide: 0,
        focusOnSelect: false,
        arrows: true,
        fade: false,
        speed: 650,
        autoplaySpeed: 215000,
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
    // Change slider stripe color based on data-attribute of individual content element.
    var stripeBlue = $(".slider--stripes .stripe").attr("data-stripeColor") === "blue";
    var stripeYellow = $(".slider--stripes .stripe").attr("data-stripeColor") === "yellow";
    var slideBlue = $(".slider--foreground .slide").attr("data-slideColor") === "blue";
    var slideYellow = $(".slider--foreground .slide").attr("data-slideColor") === "yellow";
    $('.slider-for').on('beforeChange', function(event, slick, currentSlide){
        if (currentSlide == slideBlue) {
            $(".slider--stripes .stripe").css("background-color", "#01348d");
            $(".slider--stripes .stripe--right").css("background-color", "#01348d");
            $(".ribbon").css("background-color", "#b71234");
        }
        else if (currentSlide == slideYellow) {
            $(".slider--stripes .stripe").css("background-color", "#ffc100");
            $(".slider--stripes .stripe--right").css("background-color", "#ffc100");
            $(".ribbon").css("background-color", "#63666b");
        }
        else {
            // alert("Fail.");
        }
    });



    // Set Fixed Height for Article Rows with Ads
        // $(window).load(function() {
        //     var width = $('.article.fixed-height').width();
        //     $('.article.fixed-height').attr('height', width*25/30);
        // });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Equal Height for Articles
        // these are (ruh-roh) globals. You could wrap in an
        // immediately-Invoked Function Expression (IIFE) if you wanted to...
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array();
        function setConformingHeight(el, newHeight) {
            // set the height to something new, but remember the original height in case things change
            el.data("originalHeight", (el.data("originalHeight") === undefined) ? (el.height()) : (el.data("originalHeight")));
            el.height(newHeight);
        }
        function getOriginalHeight(el) {
            // if the height has changed, send the originalHeight
            return (el.data("originalHeight") === undefined) ? (el.height()) : (el.data("originalHeight"));
        }
        function columnConform() {
            // find the tallest DIV in the row, and set the heights of all of the DIVs to match it.
            $('.article--equal').each(function() {
                // "caching"
                var $el = $(this);
                var topPosition = $el.position().top;
                if (currentRowStart != topPosition) {
                    // we just came to a new row.  Set all the heights on the completed row
                    for(currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
                    // set the variables for the new row
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = getOriginalHeight($el);
                    rowDivs.push($el);
                } else {
                    // another div on the current row.  Add it to the list and check if it's taller
                    rowDivs.push($el);
                    currentTallest = (currentTallest < getOriginalHeight($el)) ? (getOriginalHeight($el)) : (currentTallest);
                }
                // do the last row
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
            });
        }
        $(window).bind("load", function() {
            // columnConform();
            console.log("Everything is loaded");
        });

        setTimeout(function(){
            console.log("Time's up");
            console.log("Now run the column equalizer...");
            columnConform();
        }, 15000);
        }, 5000);

        // $(window).load(function () {
        //     columnConform();
        // });

        $(window).resize(function() {
            columnConform();
        });

        // Dom Ready
        // You might also want to wait until window.onload if images are the things that
        // are unequalizing the blocks
        // $(function() {
        //     columnConform();
        // });


});
$(document).ready(function(){


    // Toggle Login
    $(".login-toggle").click(function(){
        $(this).addClass("open");
        $(".login-wrapper").addClass("open");
        $(".login__input--email").focus();
    });


    // Topggle Search
    $(".search__button").click(function(){
        $(".search-container").addClass("open");
        $(".search__button").addClass("open");
        $(".search__input").css("display", "block");
        $("input.search__input").focus();
    });

    // Toggle Mobile Nav
    $(".nav-small-icon").click(function(){
        // if ($(".dropdown-wrapper").hasClass("open")) {

        // }
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(".nav-main").removeClass("open");
            $(".nav-main").removeClass("left");
            $(".nav-dropdown").removeClass("open");
            $(".dropdown-wrapper").removeClass("open");
            $(".dropdown-wrapper").removeClass("left");
        }
        else {
            $(this).addClass("open");
            $(".nav-main").addClass("open");
            // $(".nav-dropdown").addClass("open");
        }
    });


    // Set width of Mobile Nav panels
    var panelWidth = $(window).width()-30;
    var setPanel = function(){
        if (panelWidth < 780) {
            // alert("Test 1");
            $(".dropdown-wrapper.bowlers").width(panelWidth);
            $(".dropdown-wrapper.youth").width(panelWidth);
            $(".dropdown-wrapper.youth-tournaments").width(panelWidth);
            // alert("Test 2");
        }
        else if (panelWidth >= 780) {
            // alert("Desktop");
        }
    };
    setPanel();


    // Top level nav event
    // var linkID = $(this).getElementById();

    // $(this).click( function(){
    //     alert(linkID);
    // });

    // var topLink = $("")
    $("#bowlers").click(function(){
        if (panelWidth >= 780) {
            // $(".nav-dropdown").addClass("open");
            $(".bowlers").addClass("open");
        }
        if (panelWidth < 780) {
            $(".nav-main").width(panelWidth);
            $(".nav-main").addClass("left");
            $(".nav-dropdown").addClass("open");
            $(".bowlers").addClass("open");
        }
    });

    $(".exit--bowlers").click(function() {
        $(".nav-dropdown").removeClass("open");
        $(".bowlers").removeClass("open");
        $(".nav-main").removeClass("left").addClass("open");
    });

    $("#youth").click(function(){
        $(".nav-main").addClass("left");
        $(".nav-dropdown").addClass("open");
        $(".youth").addClass("open");
    });

    $(".exit--youth").click(function() {
        $(".nav-dropdown").removeClass("open");
        $(".youth").removeClass("open");
        $(".nav-main").removeClass("left").addClass("open");
    });

    $("#youth-tournaments").click(function(){
        // $(".nav-main").addClass("left");
        // $(".nav-dropdown").addClass("open");
        $(".youth").removeClass("open").addClass("left");
        $(".youth-tournaments").addClass("open");
    });

    $(".exit--youth-tournaments").click(function() {
        $(".nav-dropdown").removeClass("left").removeClass("open");
        $(".youth").removeClass("left").addClass("open");
        $(".youth-tournaments").removeClass("open");
        $(".nav-main").removeClass("left").addClass("open");
    });


    // Close Login and Search on Click Outside
    $(document).mouseup(function(e)
    {
        var dropdown = $(".nav-dropdown");
        var login = $(".login-wrapper");
        var search = $(".search-container");
        var hamburger = $(".nav-samll-icon");

        if(e.target.id != dropdown.attr('id') && !dropdown.has(e.target).length)
        {
            $(".dropdown-wrapper").removeClass("open");
        }
        if(e.target.id != login.attr('id') && !login.has(e.target).length)
        {
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");
        }
        if(e.target.id != hamburger.attr('id') && hamburger.has(e.target).length)
        {
            // $(".dropdown-wrapper").removeClass("open");
            // $(".search__input").val("");
            // $(".search-container").removeClass("open");
            // $(".search__button").removeClass("open");
            // $(".search__input").css("display", "none");
            // $(".login-wrapper").removeClass("open");
            // $(".login-toggle").removeClass("open");
        }
        if(e.target.id != search.attr('id') && !search.has(e.target).length)
        {
            $(".search__input").val("");
            $(".search-container").removeClass("open");
            $(".search__button").removeClass("open");
            $(".search__input").css("display", "none");
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");
        }
    });


    // Marketing Promo Sliding Cover
    $(".marketing-promo").hover(function(){
        $(".marketing-promo__detail").toggleClass("open");
    });

    //Slider
    // $(".slides").slick({
    //     autoPlay: true,
    // });

    $('.slider-for').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        speed: 1200,
        autoplaySpeed: 15000,
        asNavFor: '.slider-nav',
        initialSlide: 0,
    });

    $(".slider-nav").slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        initialSlide: 0,
        dots: false,
        arrows: true,
        fade: true,
        speed: 1200,
        focusOnSelect: false,
      });

});
$(document).ready(function(){

    console.log("The DOM is ready");

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Toggle login input box
    $(".login-toggle").click(function(){
        // console.log(e.target);
        $(this).addClass("open");
        $(".login-wrapper").addClass("open");
        $(".login__input--email").focus();
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Topggle search input box

    $(".search__button").click(function(){
        $(".search-container").addClass("open");
        $(".search__button").addClass("open");
        $(".search__input").css("display", "block");
        $("input.search__input").focus();
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Mobile nav dropdown toggle

    $(".nav-small-icon").click(function(){
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(".nav-main").removeClass("open");
            $(".nav-main").removeClass("left");
            $(".nav-dropdown").removeClass("open");
            $(".nav-dropdown").removeClass("left");
            $(".dropdown-wrapper").removeClass("open");
            $(".dropdown-wrapper").removeClass("left");
        }
        else {
            $(this).addClass("open");
            $(".nav-level-1").addClass("open");
            $(".nav-dropdown").addClass("open");
        }
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Set width of mobile nav panels

    var panelWidth = $(window).width()-30;
    var setPanel = function(){
        if (panelWidth < 780) {
            $(".nav-level-2").width(panelWidth);
            $(".nav-level-3").width(panelWidth);
        }
        else if (panelWidth >= 780) {
        }
    };
    setPanel();


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Mobile nav sliding panes

    var mobileNav = function(){
        var navID = $(this).attr("ID");
        var dropContainer = $(".nav-dropdown");
        var dropID = $(".nav-dropdown ." + navID);
        var level1 = $(".nav-level-1");
        var level2 = $(".nav-level-2");
        var level3 = $(".nav-level-3");
        var link = $(".nav__list--item a");

        if (panelWidth >= 480) {
            $(level1).addClass("open");
            $(dropContainer).addClass("open");
            $(dropID).addClass("open");
        }
        else if (panelWidth < 480) {
            if ($(level1).hasClass("open")) {
                $(dropContainer).addClass("open");
                $(dropID).addClass("open");
                $(level1).addClass("left");
                // $(level2).addClass("open");
            }
            else if ($(level2).hasClass("open")) {
                $(level2).addClass("left");
                $(level3).addClass("open");
            }
        }
    };

    $(".nav__list--item a").click(mobileNav);
    $(".exit-level-2").click(function() {
        $(".nav-level-2").removeClass("open");
        $(".nav-level-1").removeClass("left");
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Close Login and Search on click outside
    $(document).mouseup(function(e)
    {
        var dropdown = $(".nav-dropdown");
        var loginToggle = $(".login-toggle");
        var loginDropdown = $(".login-wrapper");
        var search = $(".search-container");
        var hamburger = $(".nav-samll-icon");

        if(e.target.id != dropdown.attr('id') && !dropdown.has(e.target).length)
        {
            // console.log("Outside Dropdown");
            $(".dropdown-wrapper").removeClass("open");
        }
        if(e.target.id != loginDropdown.attr('id') && !loginDropdown.has(e.target).length)
        {
            // console.log("Login Button");
            // console.log("Outside Login");
            // console.log(e.target);
            $(loginDropdown).removeClass("open");
            $(loginToggle).removeClass("open");
        }
        if(e.target.id != hamburger.attr('id') && hamburger.has(e.target).length)
        {
            // console.log("Outside Hamburger");
            // $(".dropdown-wrapper").removeClass("open");
            // $(".search__input").val("");
            // $(".search-container").removeClass("open");
            // $(".search__button").removeClass("open");
            // $(".search__input").css("display", "none");
            // $(".login-wrapper").removeClass("open");
            // $(".login-toggle").removeClass("open");
        }
        if(e.target.id != search.attr('id') && !search.has(e.target).length)
        {
            // console.log("Outside Search");
            $(".search__input").val("");
            $(search).removeClass("open");
            $(".search__button").removeClass("open");
            $(".search__input").css("display", "none");
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");
        }
    });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Marketing promo slide over
    $(".marketing-promo").hover(function(){
        $(".marketing-promo__detail").toggleClass("open");
    });





    // Set Fixed Height for Article Rows with Ads
        // $(window).load(function() {
        //     var width = $('.article.fixed-height').width();
        //     $('.article.fixed-height').attr('height', width*25/30);
        // });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Equal Height for Articles
        // these are (ruh-roh) globals. You could wrap in an
        // immediately-Invoked Function Expression (IIFE) if you wanted to...
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array();
        function setConformingHeight(el, newHeight) {
            // set the height to something new, but remember the original height in case things change
            el.data("originalHeight", (el.data("originalHeight") === undefined) ? (el.height()) : (el.data("originalHeight")));
            el.height(newHeight);
        }
        function getOriginalHeight(el) {
            // if the height has changed, send the originalHeight
            return (el.data("originalHeight") === undefined) ? (el.height()) : (el.data("originalHeight"));
        }
        function columnConform() {
            // find the tallest DIV in the row, and set the heights of all of the DIVs to match it.
            $('.article--equal').each(function() {
                // "caching"
                var $el = $(this);
                var topPosition = $el.position().top;
                if (currentRowStart != topPosition) {
                    // we just came to a new row.  Set all the heights on the completed row
                    for(currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
                    // set the variables for the new row
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = getOriginalHeight($el);
                    rowDivs.push($el);
                } else {
                    // another div on the current row.  Add it to the list and check if it's taller
                    rowDivs.push($el);
                    currentTallest = (currentTallest < getOriginalHeight($el)) ? (getOriginalHeight($el)) : (currentTallest);
                }
                // do the last row
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
            });
        }
        $(window).bind("load", function() {
            // columnConform();
            console.log("Everything is loaded");
        });

        setTimeout(function(){
            console.log("Time's up");
            console.log("Now run the column equalizer...");
            columnConform();
        }, 15000);

        // $(window).load(function () {
        //     columnConform();
        // });

        $(window).resize(function() {
            columnConform();
        });

        // Dom Ready
        // You might also want to wait until window.onload if images are the things that
        // are unequalizing the blocks
        // $(function() {
        //     columnConform();
        // });


});

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Slider plugin and parameters, .slick() is called
    // on 'slider--foreground' and 'slider--background',
    // which are synced by plugin setting, asNavFor.

    $(".slider--foreground").slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider--background',
        initialSlide: 0,
        focusOnSelect: false,
        arrows: true,
        fade: false,
        speed: 650,
        autoplaySpeed: 215000,
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
    // Change slider stripe color based on data-attribute of individual content element.
    var stripeBlue = $(".slider--stripes .stripe").attr("data-stripeColor") === "blue";
<<<<<<< HEAD
    var slideBlue = $(".slider--foreground .slide").attr("data-slideColor") === "blue";
    var stripeYellow = $(".slider--stripes .stripe").attr("data-stripeColor") === "yellow";
    var slideYellow = $(".slider--foreground .slide").attr("data-slideColor") === "yellow";
    var slideOrange = $(".slider--foreground .slide").attr("data-slideColor") === "orange";
    var stripeOrange = $(".slider--stripes .stripe").attr("data-stripeColor") === "orange";
=======
    var stripeYellow = $(".slider--stripes .stripe").attr("data-stripeColor") === "yellow";
    var slideBlue = $(".slider--foreground .slide").attr("data-slideColor") === "blue";
    var slideYellow = $(".slider--foreground .slide").attr("data-slideColor") === "yellow";
    var slideOrange = $(".slider--foreground .slide").attr("data-slideColor") === "orange";
>>>>>>> master
    $('.slider-for').on('beforeChange', function(event, slick, currentSlide){
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
    });