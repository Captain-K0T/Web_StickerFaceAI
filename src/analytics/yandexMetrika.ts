const COUNTER_ID = 104276871; // Твой ID из предоставленного файла

export const init = () => {
  if ((window as any).ym) return; // Предотвращаем повторную инициализацию

  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  (window as any).ym(COUNTER_ID, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true,
      ecommerce:"dataLayer"
  });
};

// Функция для отслеживания просмотров страниц
export const hit = (url: string) => {
  if ((window as any).ym) {
    (window as any).ym(COUNTER_ID, 'hit', url);
  }
};