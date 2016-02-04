////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Set height and width of mobile nav panels

var panelWidth = $(window).width();
var setPanel = function(){
    var bodyWidth = $("body").width();
    // var bodyHeight = $(document).height();
    if (panelWidth < 768) {
        $(".nav-level-1").width(bodyWidth);
        $(".nav-level-2").width(bodyWidth);
        $(".nav-level-3").width(bodyWidth);
        // $(".nav-dropdown").width(bodyWidth);
        // $(".nav-level-2").width(bodyWidth - 30);
        // $(".dropdown__list--title").width(bodyWidth - 45);
    }
    else if (panelWidth >= 768) {
    }
};
setPanel();

// Listen for orientation changes
// window.addEventListener("orientationchange", function() {
//     location.reload();
//     // .setPanel();
// }, false);

// window.addEventListener('orientationchange', function () {
    // var originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');
    // document.body.style.display='none';
    // setTimeout(function () {
    //   document.body.style.display = originalBodyStyle;
// });