
/////////////////////////////////////////////////////////////////////////////
// Desktop and Mobile Nav
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
    $navLinks1.hoverIntent(function(){
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