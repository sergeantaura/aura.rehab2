const frame = document.querySelector('.frame');

function fitLayoutToCenter() {
  if (!frame) return;

  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const isTablet = window.matchMedia('(max-width: 1024px)').matches && !isMobile;

  const width = isMobile ? 393 : (isTablet ? 768 : 1920);
  const height = isMobile ? 853 : (isTablet ? 1024 : 1080);

  const scale = Math.min(window.innerWidth / width, window.innerHeight / height);

  frame.style.transform = `scale(${scale})`;
  frame.style.marginLeft = '0px';
  frame.style.marginTop = '0px';
}

window.addEventListener('resize', fitLayoutToCenter);
window.addEventListener('orientationchange', fitLayoutToCenter);
fitLayoutToCenter();
