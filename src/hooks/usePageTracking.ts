import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as yandex from '../analytics/yandexMetrika';
import * as facebook from '../analytics/facebookPixel';

let isInitialized = false;

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Инициализируем счётчики только один раз при загрузке приложения
    if (!isInitialized) {
      yandex.init();
      facebook.init();
      isInitialized = true;
    }
  }, []);

  useEffect(() => {
    // 2. Отправляем событие просмотра страницы при каждой смене URL
    yandex.hit(location.pathname + location.search);
    facebook.pageview();
  }, [location]);
};