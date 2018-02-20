//popups
(function(){
    function initPopup(prop){
        var $body = $('body');
        var $btnShow = prop.btnShow;
        var $btnHide = prop.btnHide;
        $btnShow.on('click', function(e){
            e.preventDefault();
            $body.addClass(prop.openClass);
        });
        $btnHide.on('click', function(e){
            e.preventDefault();
            $body.removeClass(prop.openClass);
        });
    }

    initPopup({
        btnShow: $('.header__burger'),
        btnHide: $('.mobile_menu__cross'),
        openClass: 'openedMenu'
    });
})();