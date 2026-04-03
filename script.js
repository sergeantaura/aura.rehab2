(function () {
  var frame = document.querySelector('.frame');
  if (!frame) return;

  /* Feature-detect modern CSS — if supported, CSS handles everything */
  if (CSS.supports && CSS.supports('aspect-ratio', '1 / 1') && CSS.supports('width', 'min(1px, 1px)')) return;

  /* Fallback for older browsers without aspect-ratio / min() */
  function fit() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var mq767  = window.matchMedia('(max-width: 767px)').matches;
    var mq1024 = window.matchMedia('(max-width: 1024px)').matches && !mq767;

    var dw = mq767 ? 393 : (mq1024 ? 768 : 1920);
    var dh = mq767 ? 853 : (mq1024 ? 1024 : 1080);

    var scale = Math.min(w / dw, h / dh);

    frame.style.width  = (dw * scale) + 'px';
    frame.style.height = (dh * scale) + 'px';
    frame.style.aspectRatio = '';
  }

  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', fit);
  fit();
})();
