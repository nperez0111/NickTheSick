// jshint devel:true
'use strict';

$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['Welcome', 'About', 'Work'],
        menu: '#menu',
        navigation: false,
        scrollOverflow: true,
        /*//*/
        loopTop: true //*/

    });
    $('.down').click($.fn.fullpage.moveSectionDown);
    $('.left').click($.fn.fullpage.moveSlideRight);
});
//# sourceMappingURL=main.js.map
