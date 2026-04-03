const frame = document.querySelector('.frame');

function fitDesktopAndTablet() {
  if (!frame) return;

  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  if (isMobile) {
    frame.style.transform = 'none';
    frame.style.marginLeft = '0px';
    frame.style.marginTop = '0px';
    return;
  }

  const width = window.matchMedia('(max-width: 1024px)').matches ? 768 : 1920;
  const height = window.matchMedia('(max-width: 1024px)').matches ? 1024 : 1080;
  const scale = Math.min(window.innerWidth / width, window.innerHeight / height);

  frame.style.transform = `scale(${scale})`;
  const isTablet = window.matchMedia('(max-width: 1024px)').matches;
  frame.style.marginLeft = isTablet ? '0px' : '-190px';
  frame.style.marginTop = isTablet ? '0px' : '-190px';
}

window.addEventListener('resize', fitDesktopAndTablet);
window.addEventListener('orientationchange', fitDesktopAndTablet);
fitDesktopAndTablet();
