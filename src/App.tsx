import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import FeaturesScreen from './components/FeaturesScreen/FeaturesScreen';
import UploadScreen from './components/UploadScreen/UploadScreen';
import ContactScreen from './components/ContactScreen/ContactScreen';
// Импортируем финальный экран
import PaywallScreen from './components/PaywallScreen/PaywallScreen';

function App() {
  const [screen, setScreen] = useState('start');

  return (
    <>
      {screen === 'start' && <StartScreen onNavigate={() => setScreen('features')} />}
      {screen === 'features' && <FeaturesScreen onNavigate={() => setScreen('upload')} />}
      {screen === 'upload' && <UploadScreen onNavigate={() => setScreen('contact')} />}
      {/* Обновляем навигацию с экрана контактов */}
      {screen === 'contact' && <ContactScreen onNavigate={() => setScreen('paywall')} />}
      {/* Отображаем финальный экран */}
      {screen === 'paywall' && <PaywallScreen />}
    </>
  );
}

export default App;