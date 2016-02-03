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

    // var windowWidth = $(window).width();
    // var setSkew = function(){
    //     if (windowWidth > 768) {
    //         $(".nav__list--item a.active::after").addClass("skew");
    //     }
    //     else if (windowWidth <= 768) {
    //         $(".nav__list--item a.active::after").removeClass("skew");
    //     }
    // };
    // setSkew();

(function(){

  var menu;

  var init = function() {
    menu = new Menu([
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
    $navLinks1.hover(function(){
      if(areWeOnMobile()) {
        return;
      }
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
    $groupLevel3Els.hover(function(){
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
        }
        else {
            $(".search__input--wrapper").addClass("open");
            $(".search__input").css("display", "block").focus();
            $(".search-container").addClass("open");
            $(".search__button").addClass("open");

            // Close other dropdowns
            $(".nav-small-icon").removeClass("open");
            $(".nav-main").removeClass("open");
            $(".nav-dropdown").removeClass("open");
            $(".dropdown-wrapper").removeClass("open");
            $(".nav-level-1").removeClass("left");
            $(".nav-level-2").removeClass("open");
        }
    });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sidebar nav

$(".sidebar-links__title").click(function (){
    var bodyWidth = $("body").width();
    var bodyHeight = $(document).height();
    if (bodyWidth <= 768) {
    // console.log("click");
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

    $(".slider--foreground").on({ 'afterChange': function(event, slick, currentSlide){
        // console.log("after" + currentSlide);
        $(".slider__ribbon .ribbon").toggleClass("blue");
        $(".slider--stripes .stripes").toggleClass("blue");
        $(".slider__ribbon .ribbon").toggleClass("yellow");
        $(".slider--stripes .stripes").toggleClass("yellow");
    }
    }).slick({
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
// Close Login and Search on click outside
$(document).mouseup(function(e)
{
    var dropdown = $(".nav-dropdown");
    var loginToggle = $(".login-toggle");
    var searchToggle = $(".search__toggle");
    var loginDropdown = $(".login-wrapper");
    var search = $(".search-container");

    // if(e.target.id != dropdown.attr('id') && !dropdown.has(e.target).length)
    // {
    //     $(".nav__list--item a").removeClass("active");
    //     $(".dropdown-wrapper").removeClass("open");
    // }
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
        $(".search-container").removeClass("open");
        $(".login-wrapper").removeClass("open");
        $(".login-toggle").removeClass("open");
    }
});
    $(window).scroll( function(){
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