jQuery(function($) {

    //Preloader
    var preloader = $('.preloader');
    $(window).load(function() {
        preloader.remove();
    });

    var forts = ['苟富贵莫相忘','贫穷而有品位','威武不能屈','开源节流','贫而乐'];

    var displayfort = Math.floor(Math.random()*forts.length);

    $('#fort').html(forts[displayfort]);

    var Resize = function() {
        'use strict',
        height = $(window).height();
        width = $(window).width();
        $('html').css('font-size',width/38+'px');
        if (width * 2 > height * 3) {
            $('#categories').css('height', height);
            $('#categories').css('width', height * 1.5);
            $('#categories').css('background-size', height * 1.5 + "px");
            $('#Think').css('width', height / 2 * 0.8)
            $('#Think').css('height', height / 2 * 0.8)
            $('#Think').css('margin-left', height / 2 * 0.1)
            $('#Think').css('margin-top', height / 2 * 0.1)
            $('#Behave').css('width', height / 2 * 0.8)
            $('#Behave').css('height', height / 2 * 0.8)
            $('#Behave').css('margin-left', height / 2 * 1.1)
            $('#Behave').css('margin-top', height / 2 * 0.1)
            $('#Behave').css('width', height / 2 * 0.8)
            $('#Behave').css('height', height / 2 * 0.8)
            $('#Behave').css('margin-left', height / 2 * 1.1)
            $('#Behave').css('margin-top', height / 2 * 0.1)
            $('#Listen').css('width', height / 2 * 0.8)
            $('#Listen').css('height', height / 2 * 0.8)
            $('#Listen').css('margin-left', height / 2 * 2.1)
            $('#Listen').css('margin-top', height / 2 * 0.1)
            $('#Speak').css('width', height / 2 * 0.8)
            $('#Speak').css('height', height / 2 * 0.8)
            $('#Speak').css('margin-left', height / 2 * 0.1)
            $('#Speak').css('margin-top', height / 2 * 1.1)
            $('#Read').css('width', height / 2 * 0.8)
            $('#Read').css('height', height / 2 * 0.8)
            $('#Read').css('margin-left', height / 2 * 1.1)
            $('#Read').css('margin-top', height / 2 * 1.1)
            $('#Write').css('width', height / 2 * 0.8)
            $('#Write').css('height', height / 2 * 0.8)
            $('#Write').css('margin-left', height / 2 * 2.1)
            $('#Write').css('margin-top', height / 2 * 1.1)
        } else {
            $('#categories').css('height', width / 1.5);
            $('#categories').css('width', width);
            $('#categories').css('background-size', width + "px");
            $('#Think').css('width', width / 3 * 0.8)
            $('#Think').css('height', width / 3 * 0.8)
            $('#Think').css('margin-left', width / 3 * 0.1)
            $('#Think').css('margin-top', width / 3 * 0.1)
            $('#Behave').css('width', width / 3 * 0.8)
            $('#Behave').css('height', width / 3 * 0.8)
            $('#Behave').css('margin-left', width / 3 * 1.1)
            $('#Behave').css('margin-top', width / 3 * 0.1)
            $('#Listen').css('width', width / 3 * 0.8)
            $('#Listen').css('height', width / 3 * 0.8)
            $('#Listen').css('margin-left', width / 3 * 2.1)
            $('#Listen').css('margin-top', width / 3 * 0.1)
            $('#Speak').css('width', width / 3 * 0.8)
            $('#Speak').css('height', width / 3 * 0.8)
            $('#Speak').css('margin-left', width / 3 * 0.1)
            $('#Speak').css('margin-top', width / 3 * 1.1)
            $('#Read').css('width', width / 3 * 0.8)
            $('#Read').css('height', width / 3 * 0.8)
            $('#Read').css('margin-left', width / 3 * 1.1)
            $('#Read').css('margin-top', width / 3 * 1.1)
            $('#Write').css('width', width / 3 * 0.8)
            $('#Write').css('height', width / 3 * 0.8)
            $('#Write').css('margin-left', width / 3 * 2.1)
            $('#Write').css('margin-top', width / 3 * 1.1)
        }
        return width;
    };

    var width = $(document).ready(Resize);

    if (width != $(window).width()) Resize();

    $(window).on('resize orientationchange webkitfullscreenchange mozfullscreenchange fullscreenchange',Resize);
});
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?2897cd11e7e3548d24795c7c778d6025";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();