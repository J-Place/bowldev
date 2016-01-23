    (function(){

        //desktop hover script

        $navMainLevel1 = $('.nav-main.nav-level-1');
        $navMainLevel1Links = $navMainLevel1.find('a');
        $navLevel2Dropdown = $('.nav-dropdown');
        $navLevel2Wrappers = $('.dropdown-wrapper.nav-level-2');

        var _activeMenu = false;
        var _level2Active = false;
        var _level1MouseOutTimeout = false;

        var level1MouseOver = function(e) {
            clearTimeout(_level1MouseOutTimeout);
            setActiveMenu($(e.currentTarget).attr('id'));
        };

        var level1MouseOut = function(e) {
            var timeout = 500;
            if(e.clientY < $navMainLevel1.position().top) {
                timeout = 1;
            }
            _level1MouseOutTimeout = setTimeout(function(){
                if(!_level2Active) {
                    setActiveMenu(false);
                }
            }, timeout);
        };

        var level2MouseOver = function(e) {
            _level2Active = true;
        };

        var level2MouseOut = function(e) {
            _level2Active = false;
            setActiveMenu(false);
        };

        var setActiveMenu = function(name) {
            if(name === _activeMenu) {
                return;
            }
            _activeMenu = name;
            //set the active link
            $navMainLevel1Links.each(function(index, navLevel2Link){
                $(navLevel2Link).toggleClass('active', ($(navLevel2Link).attr('id') === _activeMenu));
            });
            //toggle the dropdown
            $navLevel2Dropdown.toggleClass('open', (_activeMenu !== false));
            $navLevel2Wrappers.each(function(index, navLevel2Wrapper){
                $(navLevel2Wrapper).toggleClass('open', $(navLevel2Wrapper).hasClass(_activeMenu));
            });
        };

        $navMainLevel1Links.hover(level1MouseOver, level1MouseOut);
        $navLevel2Dropdown.hover(level2MouseOver, level2MouseOut);

        //end desktop hover script

    })();
