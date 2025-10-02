const COUNTER_ID = 104276871; // Твой ID

declare global {
  interface Window {
    ym: (...args: any[]) => void;
  }
}

export const init = () => {
  if ((window as any).ym_counter) return; // Более надежная проверка на инициализацию

  (function(m: any, e: any, t: any, r: any, i: any, k?: any, a?: any){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      // --- ИЗМЕНЕНИЕ ЗДЕСЬ ---
      m[i].l = new Date().getTime(); 
      for (var j = 0; j < e.scripts.length; j++) {if (e.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  (window as any).ym_counter = true; // Флаг, что скрипт добавлен

  window.ym(COUNTER_ID, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true,
      ecommerce:"dataLayer"
  });
};

export const hit = (url: string) => {
  if (window.ym) {
    window.ym(COUNTER_ID, 'hit', url);
  }
};