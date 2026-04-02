const frame = document.getElementById("frame");

const layouts = {
  desktop: { width: 1920, height: 1080 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 393, height: 853 }
};

function getLayout() {
  const w = window.innerWidth;
  if (w <= 767) return "mobile";
  if (w <= 1024) return "tablet";
  return "desktop";
}

function fitFrame() {
  const layoutName = getLayout();
  const { width, height } = layouts[layoutName];

  frame.className = layoutName;
  frame.style.width = `${width}px`;
  frame.style.height = `${height}px`;

  const scale = Math.min(window.innerWidth / width, window.innerHeight / height);
  frame.style.transform = `scale(${scale})`;
}

window.addEventListener("resize", fitFrame);
window.addEventListener("orientationchange", fitFrame);
fitFrame();
