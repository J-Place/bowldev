    (function(){

        //desktop hover script

        $navMainLevel1 = $('.nav-main.nav-level-1');
        $navMainLevel1Links = $navMainLevel1.find('a');
        $navLevel2Container = $('.nav-dropdown');
        $navLevel2Links = $('.dropdown-wrapper.nav-level-2');

        var _activeMenu = false;
        var _level2Active = false;
        var _level1MouseOutTimeout = false;

        var level1MouseOver = function(e) {
            if(e.relatedTarget.parentNode.className === "nav-dropdown") {
                clearTimeout(_level1MouseOutTimeout);
                setActiveMenu($(e.currentTarget).attr('id'));
            }
            var timeout = 500;
            _level1MouseOverTimeout = setTimeout(function(){
                setActiveMenu($(e.currentTarget).attr('id'));
            }, timeout);
        };

        var level1MouseOut = function(e) {
            var timeout = 500;
            // shorten timeout if mouse moves above nav
            if(e.clientY < $navMainLevel1.position().top) {
                timeout = 1;
            }
            _level1MouseOutTimeout = setTimeout(function(){
                if(!_level2Active) {
                    setActiveMenu(false);
                    // return false;
                }
            }, timeout);
        };

        var level2MouseOver = function(e) {
            console.log("mouse over dropdown");
            _level2Active = true;
        };

        var level2MouseOut = function(e) {
            console.log("mouse out dropdown");
            _level2Active = false;
            setActiveMenu(false);
        };

        var setActiveMenu = function(name) {
            console.log("setting active class");
            if(name === _activeMenu) {
                return;
            }
            // if(name === "has-children") {
            //     console.log("don't hide dropdown");
            // }
            _activeMenu = name;
            //set the active link
            $navMainLevel1Links.each(function(index, navLevel1Link){
                $(navLevel1Link).toggleClass('active', ($(navLevel1Link).attr('id') === _activeMenu));
            });
            //toggle the dropdown
            $navLevel2Container.toggleClass('open', (_activeMenu !== false));
            $navLevel2Links.each(function(index, navLevel2Link){
                $(navLevel2Link).toggleClass('open', $(navLevel2Link).hasClass(_activeMenu));
            });
        };

        $navMainLevel1Links.hover(level1MouseOver, level1MouseOut);
        $navLevel2Container.hover(level2MouseOver, level2MouseOut);

        //end desktop hover script

    })();
