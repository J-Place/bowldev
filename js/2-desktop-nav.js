
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Desktop hover

(function(){

$navMainLevel1 = $('.nav-main.nav-level-1');
$navMainLevel1Links = $navMainLevel1.find('a');
$navLevel2Container = $('.nav-dropdown');
$navLevel2Links = $('.dropdown-wrapper.nav-level-3');

var _activeMenu = false;
var _level2Active = false;
var _level1MouseOutTimeout = false;

var level1MouseOver = function(e) {
    // if(e.relatedTarget.parentNode.className === "nav-dropdown") {
    //     clearTimeout(_level1MouseOutTimeout);
    //     setActiveMenu($(e.currentTarget).attr('id'));
    // }
    // var timeout = 500;
    clearTimeout(_level1MouseOutTimeout);
    setActiveMenu($(e.currentTarget).attr('id'));
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
    _level2Active = true;
};

var level2MouseOut = function(e) {
    if (("dropdown-" + e.relatedTarget.id) === e.target.id) {
        console.log("This nav is already open.");
        return;
    }
    _level2Active = false;
    setActiveMenu(false);
};

var setActiveMenu = function(name) {
    if(name === _activeMenu) {
        return;
    }
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

$navMainLevel1Links.hoverIntent(level1MouseOver, level1MouseOut);
$navLevel2Container.hover(level2MouseOver, level2MouseOut);

//end desktop hover script

})();