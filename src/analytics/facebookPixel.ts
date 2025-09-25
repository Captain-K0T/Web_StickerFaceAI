const PIXEL_ID = '1869867667255042'; // Твой ID из предоставленного файла

export const init = () => {
  if ((window as any).fbq) return; // Предотвращаем повторную инициализацию

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
    (window as any).fbq('init', '${PIXEL_ID}');
  `;
  document.head.appendChild(script);
};

// Функция для отслеживания просмотров страниц
export const pageview = () => {
  if ((window as any).fbq) {
    (window as any).fbq('track', 'PageView');
  }
};

// Функция для отслеживания кастомных событий
export const event = (name: string, options = {}) => {
  if ((window as any).fbq) {
    (window as any).fbq('track', name, options);
  }
};