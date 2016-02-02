(function(){

  var $mobileMenuToggleEl;
  var navLevel1, navLevel2, navLevel3;
  var mobileMenuVisible = false;
  var allNavigationLinks = [];

  /*
  setMenuVisibility('/')
  setMenuVisibility('/youth')
  setMenuVisibility('/youth/youth-tournaments')
  */

  var init = function() {
    $mobileMenuToggleEl = $('#mobile-menu-toggle');
    navLevel1 = new NavigationLevel(1, $('.nav-level-1'));
    navLevel2 = new NavigationLevel(2, $('.nav-level-2'));
    navLevel3 = new NavigationLevel(3, $('.nav-level-3'));

    $mobileMenuToggleEl.on('click', toggleMobileMenu);
  };

  var toggleMobileMenu = function() {
    mobileMenuVisible = !mobileMenuVisible;
    $mobileMenuToggleEl.toggleClass('open', mobileMenuVisible);

    //set root group active / inactive
    if(mobileMenuVisible) {
      setActiveGroup(navLevel1, '#root');
    }

    if(!mobileMenuVisible) {
      //reset the navigation
      navLevel1.setIsActive(false);
      navLevel1.setIsLeft(false);

      navLevel2.setIsActive(false);
      navLevel2.setIsLeft(false);

      navLevel3.setIsActive(false);
      navLevel3.setIsLeft(false);

      $(".dropdown__list--title a").click( function(){
        e.preventDefault;
      });
    }

    navLevel1.setIsActive(mobileMenuVisible);

  };

  var areWeOnMobile = function() {
    return $mobileMenuToggleEl.is(":visible");
  };

  var setActiveGroup = function(targetGroupLevel, targetGroupName) {
    if(!targetGroupLevel || !targetGroupName) {
      //hide all things
      if(areWeOnMobile()) {
        navLevel1.setIsActive(false);
        navLevel1.setIsLeft(false);
      } else {
        //deactivate the links in the root group
        navLevel1.groups[0]._setActiveLink(false);
      }

      navLevel2.setIsActive(false);
      navLevel2.setIsLeft(false);

      navLevel3.setIsActive(false);
      navLevel3.setIsLeft(false);
      return;
    }

    //hide the login box & search
    $(".login-wrapper").removeClass("open");
    $(".search__toggle").removeClass("open");
    $(".search__input--wrapper").removeClass("open");
    $("input.search__input").blur();
    $(".search-container").removeClass("open");
    $(".search__button").removeClass("open");

    targetGroupLevel.setIsActive(true);
    targetGroupLevel.setActiveGroup(targetGroupName);
  };

  var NavigationLevel = function(level, $el) {
    var self = this;
    this.level = level;
    this.$el = $el;
    this._active = false;
    this._mouseIsOverElement = false;
    this._left = false;
    this.createGroups();

    this.$el.hover(function(){
      self._mouseIsOverElement = true;
      if(!areWeOnMobile()) {
        if(self.level === 3) {
        }
      }
    }, function(){
      self._mouseIsOverElement = false;
      if(!areWeOnMobile()) {
        if(self.level === 3) {
          setActiveGroup(false, false);
        }
      }
    });
  };

  NavigationLevel.prototype.createGroups = function() {
    var self = this;
    self.groups = [];
    //level 1 is just one big group
    if(self.level === 1) {
      self.groups.push(new NavigationGroup(self, self.$el.find('.nav__list')));
    } else {
      self.$el.find('[data-group]').each(function(index, groupEl){
        var navigationGroup = new NavigationGroup(self, $(groupEl));
        self.groups.push(navigationGroup);
      });
    }
  };

  NavigationLevel.prototype.setIsLeft = function(value) {
    if(value !== this._left) {
      this._left = value;
      this._display();
    }
  };

  NavigationLevel.prototype.setIsActive = function(value) {
    if(value !== this._active) {
      this._active = value;
      if(!this._active) {
        this.setActiveGroup(false);
      }
      this._display();
    }
  };

  NavigationLevel.prototype._display = function() {
    //update the element
    this.$el.toggleClass('open', this._active);
    this.$el.toggleClass('left', this._left);
  };

  NavigationLevel.prototype.setActiveGroup = function(groupName) {
    var self = this;
    self.groups.forEach(function(group){
      group.setIsActive(group.name === groupName);
    });
  };

  NavigationLevel.prototype.getNavigationGroupByName = function(groupName) {
    for (var i = this.groups.length - 1; i >= 0; i--) {
      if(this.groups[i].name === groupName) {
        return this.groups[i];
      }
    }
    return false;
  };

  var NavigationGroup = function(navigationLevel, $el) {
    var self = this;
    this.navigationLevel = navigationLevel;
    this.$el = $el;
    this._active = false;
    this._mouseIsOverElement = false;
    this.name = this.$el.data('group') || '#root';
    this.createLinks();

    //exit link for this level?
    $exitLink = this.$el.find('.exit-level');
    $exitLink.on('click', function(){
      if(self.navigationLevel.level === 2) {
        //close this level and go back to root level
        navLevel2.setIsActive(false);
        navLevel1.setIsActive(true);
        navLevel1.setIsLeft(false);
      } else if(self.navigationLevel.level === 3) {
        navLevel3.setIsActive(false);
        navLevel2.setIsActive(true);
        navLevel2.setIsLeft(false);
        navLevel2.setActiveGroup(self.name);
      }
      //display all nav links as normal (not-active)
      for (var i = allNavigationLinks.length - 1; i >= 0; i--) {
        allNavigationLinks[i]._active = false;
        allNavigationLinks[i]._display();
      };
    });

    this._display();
    this.$el.hover(function(){
      self._mouseIsOverElement = true;
    }, function(){
      self._mouseIsOverElement = false;
    });
  };

  NavigationGroup.prototype.setActiveSubGroupName = function(value) {
    if(value !== this._activeSubGroupName) {
      this._activeSubGroupName = value;
      this._display();
    }
  };

  NavigationGroup.prototype.setIsActive = function(value) {
    if(value !== this._active) {
      this._active = value;
      if(!this._active) {
        this._setActiveLink(false);
      }
      this._display();
    }
  };

  NavigationGroup.prototype._display = function() {
    var self = this;
    //update the element
    this.$el.toggleClass('open', this._active);
    //manage subgroups
    $subGroupEls = this.$el.find('[data-subgroup]');
    $subGroupEls.each(function(index, subGroupEl){
      if(self._activeSubGroupName) {
        $(subGroupEl).toggle(self._activeSubGroupName === $(subGroupEl).data('subgroup'));
      } else {
        //all should be visible
        $(subGroupEl).show();
      }
    });
  };

  NavigationGroup.prototype.createLinks = function() {
    var self = this;
    self.links = [];
    self.$el.find('[data-link]').each(function(index, linkEl){
      var navigationLink = new NavigationLink(self, $(linkEl));
      //react when this link becomes active
      $(navigationLink).on('activeChanged', function(){
        var isActive = this._active;
        if(isActive) {
          self._setActiveLink(this);
          //activate the group with this name
          if(areWeOnMobile()) {
            var nextLevel = self.getNextLevel();

            if(nextLevel === navLevel3) {
              //targetGroupName is the name of a subgroup
              //get the parent group name and set that as the active one
              setActiveGroup(nextLevel, self.name);
              //set the correct subgroup
              var activeGroup = nextLevel.getNavigationGroupByName(self.name);
              if(activeGroup) {
                activeGroup.setActiveSubGroupName(this.targetGroupName);
              }
            } else {
              //use the next group
              setActiveGroup(nextLevel, this.targetGroupName);
            }
            //slide this one to the left
            self.navigationLevel.setIsLeft(true);
          } else {
            setActiveGroup(navLevel3, this.targetGroupName);
          }
        } else {
          self._setActiveLink(false);
          setActiveGroup(false, false);
        }
      });
      self.links.push(navigationLink);
    });
  };

  NavigationGroup.prototype.getNextLevel = function() {
    //hardcoded...
    if(this.navigationLevel === navLevel1) {
      return navLevel2;
    }
    if(this.navigationLevel === navLevel2) {
      return navLevel3;
    }
    return false;
  };

  NavigationGroup.prototype._setActiveLink = function(linkToSetActive) {
    var self = this;
    self.links.forEach(function(navigationLink){
      navigationLink.setIsActive(navigationLink === linkToSetActive);
    });
  };

  var NavigationLink = function(navigationGroup, $el) {
    allNavigationLinks.push(this);
    this.navigationGroup = navigationGroup;
    this.$el = $el;
    this._active = false;
    this._mouseIsOverElement = false;
    this.targetGroupName = this.$el.data('link');

    //interaction with the links
    this.$el.hoverIntent(this.rollOver.bind(this), this.rollOut.bind(this));
    this.$el.on('click', this.setIsActive.bind(this, true));
  };

  NavigationLink.prototype.rollOver = function() {
    this._mouseIsOverElement = true;
    if(!areWeOnMobile()) {
      this.setIsActive(true);
    }
  };

  NavigationLink.prototype.rollOut = function() {
    this._mouseIsOverElement = false;
    if(!areWeOnMobile()) {
      if(!navLevel3._mouseIsOverElement) {
        this.setIsActive(false);
      }
    }
  };

  NavigationLink.prototype.setIsActive = function(value) {
    if(value !== this._active) {
      this._active = value;
      this._display();
      $(this).trigger('activeChanged');
    }
  };

  NavigationLink.prototype._display = function() {
    //update the element
    this.$el.toggleClass('active', this._active);
  };

  init();

})();