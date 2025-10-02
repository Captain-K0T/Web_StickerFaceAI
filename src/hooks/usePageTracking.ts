import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as yandex from '../analytics/yandexMetrika';
import * as facebook from '../analytics/facebookPixel';

let isInitialized = false;

// Функция для получения названия экрана по URL
const getScreenName = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return 'Start';
    case '/photo':
      return 'One Photo';
    case '/styles':
      return 'Hundreds of Styles';
    case '/text':
      return 'Add Your Jokes';
    case '/style-selection':
      return 'Style Selection';
    case '/upload':
      return 'Upload Photo';
    case '/contact':
      return 'Contact Info';
    case '/paywall':
      return 'Pricing';
    case '/error':
      return 'Error';
    default:
      return '';
  }
};


export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (!isInitialized) {
      yandex.init();
      facebook.init();
      isInitialized = true;
    }
  }, []);

  useEffect(() => {
    // --- НОВЫЙ КОД ЗДЕСЬ ---
    const screenName = getScreenName(location.pathname);
    if (screenName) {
      document.title = `Stickerface AI — ${screenName}`;
    } else {
      document.title = 'Stickerface AI';
    }
    // ----------------------

    // Существующий код для отправки событий в метрики
    yandex.hit(location.pathname + location.search);
    facebook.pageview();
  }, [location]);
};