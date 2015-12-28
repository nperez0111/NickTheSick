// jshint devel:true
'use strict';

$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['Welcome', 'About', 'Work'],
        menu: '#menu',
        navigation: false,
        scrollOverflow: true,
        /*//*/loopTop: true //*/

    });
    $('.down').click($.fn.fullpage.moveSectionDown);
    $('.left').click($.fn.fullpage.moveSlideRight);
    if(!window.pageYOffset){ hideAddressBar(); }
});

function hideAddressBar()
{
      if(document.height < window.outerHeight)
      {
          document.body.style.height = (window.outerHeight + 50) + 'px';
      }

      setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
}

window.addEventListener("orientationchange", hideAddressBar );
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
