const iframe = document.createElement('iframe');
iframe.src = import.meta.env.VITE_URL;
iframe.style = "position:fixed;inset:0;width:100vw;height:100dvh;border:0;display:block;";
document.body.appendChild(iframe);

if (!(window.CSS && CSS.supports('height: 100dvh'))) {
  const setHeight = () => { iframe.style.height = `${window.innerHeight}px`; };
  setHeight();
  window.addEventListener('resize', setHeight, { passive: true });
}
