const PIXEL_ID = '1869867667255042'; // Твой ID

declare global {
  interface Window {
    fbq?: (...args: any[]) => void; // Делаем fbq опциональным, чтобы проверка работала
    _fbq?: any;
  }
}

export const init = () => {
  if (window.fbq) return;

  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
  `;
  document.head.appendChild(script);

  const initCall = document.createElement('script');
  initCall.innerHTML = `window.fbq('init', '${PIXEL_ID}');`;
  document.head.appendChild(initCall);
};

export const pageview = () => {
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const event = (name: string, options = {}) => {
  if (window.fbq) {
    window.fbq('track', name, options);
  }
};