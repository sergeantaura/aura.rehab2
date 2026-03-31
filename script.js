7
/**
 * Scales the active layout to fit the viewport width.
 * Allows vertical scrolling if content is taller than viewport.
 */
(function () {
  var layouts = {
    desktop: { el: null, w: 1920, h: 1080 },
    tablet:  { el: null, w: 768,  h: 1024 },
    mobile:  { el: null, w: 393,  h: 853 }
  };
 
  function init() {
    layouts.desktop.el = document.querySelector('.desktop-layout');
    layouts.tablet.el  = document.querySelector('.tablet-layout');
    layouts.mobile.el  = document.querySelector('.mobile-layout');
    adjust();
    window.addEventListener('resize', adjust);
  }
 
  function adjust() {
    var vw = document.documentElement.clientWidth;
    var active;
 
    if (vw >= 1025) {
      active = layouts.desktop;
    } else if (vw >= 768) {
      active = layouts.tablet;
    } else {
      active = layouts.mobile;
    }
 
    // Scale down to fit viewport width; never scale up beyond design size
    var scale = Math.min(vw / active.w, 1);
 
    // Apply scale to active layout
    active.el.style.transform = 'scale(' + scale + ')';
 
    // Set body min-height so the page is scrollable
    document.body.style.minHeight = (active.h * scale) + 'px';
  }
 
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
