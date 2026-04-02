(function () {
  var mobile, tablet, desktop;
 
  function adjust() {
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    var el, dw, dh;
 
    if (vw >= 1025) {
      el = desktop; dw = 1920; dh = 1080;
    } else if (vw >= 768) {
      el = tablet; dw = 768; dh = 1024;
    } else {
      el = mobile; dw = 393; dh = 853;
    }
 
    var scale = Math.min(vw / dw, vh / dh);
    var offsetX = (vw - dw * scale) / 2;
    var offsetY = Math.max(0, (vh - dh * scale) / 2);
 
    [mobile, tablet, desktop].forEach(function (l) {
      if (l) l.style.transform = '';
    });
 
    if (el) {
      el.style.transform = 'translate(' + offsetX + 'px,' + offsetY + 'px) scale(' + scale + ')';
    }
  }
 
  function init() {
    mobile = document.querySelector('.mobile');
    tablet = document.querySelector('.tablet');
    desktop = document.querySelector('.desktop');
    adjust();
    window.addEventListener('resize', adjust);
  }
 
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
 
