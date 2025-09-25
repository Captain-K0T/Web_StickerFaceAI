import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import FeaturesScreen from './components/FeaturesScreen/FeaturesScreen';
// Импортируем наш новый экран
import UploadScreen from './components/UploadScreen/UploadScreen';

function App() {
  // Добавляем 'upload' в возможные состояния
  const [screen, setScreen] = useState('start');

  return (
    <>
      {screen === 'start' && <StartScreen onNavigate={() => setScreen('features')} />}
      {/* Передаем функцию навигации на следующий экран */}
      {screen === 'features' && <FeaturesScreen onNavigate={() => setScreen('upload')} />}
      {/* Рендерим новый экран и готовимся к переходу на следующий (пока пустая функция) */}
      {screen === 'upload' && <UploadScreen onNavigate={() => alert('Переход на экран контактов!')} />}
    </>
  );
}

export default App;