import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
// Раскомментируем импорт
import FeaturesScreen from './components/FeaturesScreen/FeaturesScreen';

function App() {
  const [screen, setScreen] = useState('start');

  return (
    <>
      {screen === 'start' && <StartScreen onNavigate={() => setScreen('features')} />}
      {/* Раскомментируем рендеринг второго экрана */}
      {screen === 'features' && <FeaturesScreen />}
    </>
  );
}

export default App;