import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import FeaturesScreen from './components/FeaturesScreen/FeaturesScreen';
import UploadScreen from './components/UploadScreen/UploadScreen';
// Импортируем новый экран
import ContactScreen from './components/ContactScreen/ContactScreen';

function App() {
  const [screen, setScreen] = useState('start');

  return (
    <>
      {screen === 'start' && <StartScreen onNavigate={() => setScreen('features')} />}
      {screen === 'features' && <FeaturesScreen onNavigate={() => setScreen('upload')} />}
      {/* Обновляем навигацию с экрана загрузки */}
      {screen === 'upload' && <UploadScreen onNavigate={() => setScreen('contact')} />}
      {/* Рендерим новый экран и готовим переход на последний экран */}
      {screen === 'contact' && <ContactScreen onNavigate={() => alert('Переход на экран оплаты!')} />}
    </>
  );
}

export default App;