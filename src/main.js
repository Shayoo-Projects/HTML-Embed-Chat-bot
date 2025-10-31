const iframe = document.createElement('iframe');
iframe.src = import.meta.env.VITE_URL;
iframe.style = "width:100vw;height:100vh;border:none;position:fixed;top:0;left:0;";
document.body.appendChild(iframe);
