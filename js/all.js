$(window).bind("load", function() {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Marketing promo slide over
$(".marketing-promo").hover(function(){
    var bodyWidth = $("body").width();
    if (bodyWidth >= 768) {
        $(".marketing-promo__detail").toggleClass("open");
    }
    return;
});
/////////////////////////////////////////////////////////////////////////////
// Desktop and Mobile Nav
(function(){

  window.frontendApp = window.frontendApp || {};

  var init = function() {
    window.frontendApp.menu = new Menu([
      $('.nav-level-1'),
      $('.nav-level-2'),
      $('.nav-level-3')
    ], $('#mobile-menu-toggle'));
  };

  var areWeOnMobile = function() {
    return $('#mobile-menu-toggle').is(":visible");
  };

  var Menu = function($levelElements, $mobileToggle) {
    var self = this;
    this.$levelElements = $levelElements;
    this.$mobileToggle = $mobileToggle;
    this._currentPath = false;

    //mobile toggle
    $mobileToggle.click(function(){
      if(self._currentPath !== false) {
        self.setCurrentPath(false);
      } else {
        self.setCurrentPath('');
      }
    });

    //level 1
    $navLinks1 = $levelElements[0].find('[data-link]');
    $navLinks1.click(function(event){
      clearTimeout(self.rollOutTimeout);
      self.setCurrentPath($(this).data('link'));
    });
    $navLinks1.hoverIntent(function(e){
      if(areWeOnMobile()) {
        return;
      }
      // Make sure Search and Login are closed
      $(".search__toggle").removeClass("open");
      $(".search__input--wrapper").removeClass("open");
      $("input.search__input").blur();
      $(".search-container").removeClass("open");
      $(".search__button").removeClass("open");
      $("body").removeClass("search-open");
      $(".login-toggle").removeClass("open");
      $(".login-wrapper").removeClass("open");

      clearTimeout(self.rollOutTimeout);
      self.setCurrentPath($(this).data('link'));
    }, function(){
      if(areWeOnMobile()) {
        return;
      }
      clearTimeout(self.rollOutTimeout);
      self.rollOutTimeout = setTimeout(self.setCurrentPath.bind(self, ''), 500);
    });

    //level 2
    $groupLevel2Els = $levelElements[1].find('[data-group]');
    $groupLevel2Els.each(function(index, groupLevel2El){
      $exitLink = $(groupLevel2El).find('.exit-level');
      $exitLink.click(function(){
        self.setCurrentPath('');
      });
      //links to level 3
      $navLinks2 = $(groupLevel2El).find('[data-link]');
      $navLinks2.click(function(){
        clearTimeout(self.rollOutTimeout);
        self.setCurrentPath($(groupLevel2El).data('group') + '/' + $(this).data('link'));
      });
    });

    //level 3
    $groupLevel3Els = $levelElements[2].find('[data-group]');
    $groupLevel3Els.each(function(index, groupLevel3El){
      $exitLink = $(groupLevel3El).find('.exit-level');
      $exitLink.click(function(){
        self.setCurrentPath($(groupLevel3El).data('group'));
      });
    });
    $groupLevel3Els.hoverIntent(function(){
      if(areWeOnMobile()) {
        return;
      }
      clearTimeout(self.rollOutTimeout);
      self.setCurrentPath($(this).data('group'));
    }, function(){
      if(areWeOnMobile()) {
        return;
      }
      self.setCurrentPath('');
    });
  };

  /**
   * set the active menu location & highlight the correct links
   * false - dont show the menu
   * '' - show menu level 1
   * youth - show youth menu
   * youth/youth-tournaments - show youth tournamens
   */
  Menu.prototype.setCurrentPath = function(value) {
    // console.log(value);
    if(value !== this._currentPath) {
      this._currentPath = value;
      var splitted = (value !== false) ? value.split('/') : false;
      //console.log(splitted);
      //reset classes
      for (var i = this.$levelElements.length - 1; i >= 0; i--) {
        this.$levelElements[i].removeClass('open');
        this.$levelElements[i].removeClass('left');
        this.$levelElements[i].find('[data-group]').removeClass('open');
        //this one is not working with classes yet, but with inline css
        //this.$levelElements[i].find('[data-subgroup]').removeClass('open');
        this.$levelElements[i].find('[data-subgroup]').show();
      }
      if(!areWeOnMobile()) {
        //desktop
        if(splitted.length === 1) {
          if(splitted[0] === '') {
            //hide level 3
            this.$levelElements[2].removeClass('open');
            this.$levelElements[2].find('[data-group]').removeClass('open');
          } else {
            //show level 3
            this.$levelElements[2].addClass('open');
            this.$levelElements[2].find('[data-group]').each(function(index, element){
              $(element).toggleClass('open', $(element).data('group') === splitted[0]);
            });
          }
        }
        //highlight active menu item
        this.$levelElements[0].find('[data-link]').each(function(index, element){
          $(element).toggleClass('active', $(element).data('link') === splitted[0]);
        });
      } else {
        this.$mobileToggle.toggleClass('open', (splitted !== false));
        if(splitted !== false) {
          //set correct menu visible
          if(splitted[0] === '') {
            //just show root menu
            this.$levelElements[0].addClass('open');
          } else {
            if(splitted.length === 1) {
              this.$levelElements[0].addClass('open');
              this.$levelElements[0].addClass('left');
              this.$levelElements[1].addClass('open');
              //show the correct group in this level
              this.$levelElements[1].find('[data-group]').each(function(index, element){
                $(element).toggleClass('open', $(element).data('group') === splitted[0]);
              });
            } else if(splitted.length === 2) {
              this.$levelElements[0].addClass('open');
              this.$levelElements[0].addClass('left');
              this.$levelElements[1].addClass('open');
              this.$levelElements[1].addClass('left');
              this.$levelElements[2].addClass('open');

              this.$levelElements[2].find('[data-group]').each(function(index, element){
                $(element).toggleClass('open', $(element).data('group') === splitted[0]);
              });
              //show the correct subgroup
              $subgroupEls = this.$levelElements[2].find('[data-subgroup]');
              $subgroupEls.each(function(index, subgroupEl){
                //this one doesn't work with classes yet, but inline css - you should probably create a css class for that
                //$(subgroupEl).toggleClass('open', $(subgroupEl).data('subgroup') === splitted[1]);
                $(subgroupEl).toggle($(subgroupEl).data('subgroup') === splitted[1]);
              });
            }
          }
        }
      }
    }
  };

  init();

})();
(function(){

    window.frontendApp = window.frontendApp || {};

    var init = function() {
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Toggle login input box
        $(".login-toggle").click(function(e){
            e.preventDefault();
            $(this).addClass("open");
            $(".login-wrapper").addClass("open");
            $(".login__input--email").focus();
        });

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Topggle search input box
        $(".search__toggle").click(function(e) {
            e.preventDefault();
            if ($(this).hasClass('open')) {
                $(this).removeClass("open");
                $(".search__input--wrapper").removeClass("open");
                $("input.search__input").blur();
                $(".search-container").removeClass("open");
                $(".search__button").removeClass("open");
                $("body").removeClass("search-open");
            }
            else {
                $(".search__input--wrapper").addClass("open");
                $(".search__input").css("display", "block").focus();
                $(".search-container").addClass("open");
                $(".search__button").addClass("open");
                $('body').addClass("search-open");

                // Close main nav
                window.frontendApp.menu.setCurrentPath(false);
            }
        });

        $('.login-wrapper').mouseup(function(e){
            e.stopImmediatePropagation();
        });
    };

    init();
})();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sidebar nav

$(".sidebar-links__title").click(function(){
    var bodyWidth = $("body").width();
    var bodyHeight = $(document).height();
    if (bodyWidth <= 768) {
        if ($(this).hasClass('open')) {
            $(this).removeClass("open");
            $(".sidebar-links__list").removeClass("open");
        }
        else {
            $(this).addClass("open");
            $(".sidebar-links__list").addClass("open");
        }
    }
});

//////////////////////////////////////////////////////////////////////////////////////////
// Set character limit

(function(){

    var topNewsChar = $(".top-news__summary p");
    var mktgPromoChar = $(".marketing-promo__summary p")
    var newsTiles = $(".article__summary");

    $(topNewsChar).each(function(){
        $(this).text($(this).text().substr(0,80)).addClass("visible");
    });
    $(mktgPromoChar).each(function(){
        $(this).text($(this).text().substr(0,80)).addClass("visible");
    });
    $(newsTiles).each(function(){
        $(this).text($(this).text().substr(0,140));
    });

})();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// slick() is called on 'slider--foreground' and 'slider--background',
// which are synced by setting 'asNavFor'.

$(".slider--foreground").on({ 'afterChange': function(event, slick, currentSlide){
    $(".slider__ribbon .ribbon").toggleClass("yellow-2");
    $(".slider__ribbon .ribbon").toggleClass("cool-gray");
    $(".slider--stripes .stripes").toggleClass("blue-3");
    $(".slider--stripes .stripes").toggleClass("orange-1");
}}).slick({
    infinite: true,
    autoplay: true,
    asNavFor: '.slider--background',
    arrows: true,
    fade: true,
    speed: 0,
    autoplaySpeed: 9000
});

$('.slider--background').slick({
    infinite: true,
    asNavFor: '.slider--foreground',
    arrows: false
});

// Close all modules
});
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
(function(){

    window.frontendApp = window.frontendApp || {};

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Close Login and Search on click outside
    $(document).mouseup(function(e) {
        var dropdown = $(".nav-dropdown");
        var loginToggle = $(".login-toggle");
        var searchToggle = $(".search__toggle");
        var loginDropdown = $(".login-wrapper");
        var search = $(".search-container");

        if(e.target.id != loginDropdown.attr('id') && !loginDropdown.has(e.target).length)
        {
            $(loginDropdown).removeClass("open");
            $(loginToggle).removeClass("open");
        }

        if(e.target.id != search.attr('id') && !search.has(e.target).length)
        {
            $(".search__input").val("");
            $("search").removeClass("open");
            $(".search__button").removeClass("open");
            $(".search__input").css("display", "none");
            $(".search__input--wrapper").removeClass("open");
            $("input.search__input").blur();
            $("body").removeClass("search-open");
            $(".search-container").removeClass("open");
            $(".login-wrapper").removeClass("open");
            $(".login-toggle").removeClass("open");

            // Close main nav
            //window.frontendApp.menu.setCurrentPath(false);
        }
    });
})();
$(window).scroll(function(){
    var panelWidth = $(window).width();
    if (panelWidth >= 480 && $(window).scrollTop() > 20) {
        $(".logo").addClass("scroll");
        $("body").addClass("scroll--header");
        $(".header").addClass("scroll");
        $(".nav-main").addClass("scroll");
    }
    if (panelWidth >= 480 && $(window).scrollTop() < 20) {
        $(".logo").removeClass("scroll");
        $(".header").removeClass("scroll");
        $(".nav-main").removeClass("scroll");
        $("body").removeClass("scroll--header");
    }
});