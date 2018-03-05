//popups
(function(){
    function Popup(prop) {
        var $body = $('body');
        var $btnShow = prop.btnShow;
        var $btnHide = prop.btnHide;
        function close() {
            $body.removeClass(prop.openClass);
            $body.css({ paddingRight: 0 });
        }
        function open() {
            var wW = $(window).width();
            $body.addClass(prop.openClass);
            $body.css({ paddingRight: $(window).width() - wW });
        }
        $btnShow.on('click', function(e){
            e.preventDefault();
            open();
        });
        $btnHide.on('click', function(e){
            e.preventDefault();
            close();
        });

        this.close = close;
        this.open = open;
    }

    var mobileMenu = new Popup({
        btnShow: $('.header__burger'),
        btnHide: $('.mobile_menu__cross'),
        openClass: 'openedMenu'
    });

    var feedback = new Popup({
        btnShow: $('.header__button'),
        btnHide: $('.feedback__close'),
        openClass: 'openedFeed'
    });

    document.addEventListener('wpcf7mailsent', function (event) {
        setTimeout(function () {
            feedback.close();
        }, 5000);
    }, false);
})();