import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import FeaturesScreen from './components/FeaturesScreen/FeaturesScreen';
import UploadScreen from './components/UploadScreen/UploadScreen';
import ContactScreen from './components/ContactScreen/ContactScreen';
import PaywallScreen from './components/PaywallScreen/PaywallScreen';
// Импортируем новый экран ошибки
import ErrorScreen from './components/ErrorScreen/ErrorScreen';

function App() {
  const [screen, setScreen] = useState('start');

  return (
    <>
      {screen === 'start' && <StartScreen onNavigate={() => setScreen('features')} />}
      {screen === 'features' && <FeaturesScreen onNavigate={() => setScreen('upload')} />}
      {screen === 'upload' && <UploadScreen onNavigate={() => setScreen('contact')} />}
      {screen === 'contact' && <ContactScreen onNavigate={() => setScreen('paywall')} />}
      {/* Обновляем навигацию с экрана оплаты */}
      {screen === 'paywall' && <PaywallScreen onNavigate={() => setScreen('error')} />}
      {/* Отображаем экран ошибки */}
      {screen === 'error' && <ErrorScreen />}
    </>
  );
}

export default App;