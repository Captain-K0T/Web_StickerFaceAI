import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import FeaturesScreen from './components/FeaturesScreen/FeaturesScreen';
import UploadScreen from './components/UploadScreen/UploadScreen';
import ContactScreen from './components/ContactScreen/ContactScreen';
import PaywallScreen from './components/PaywallScreen/PaywallScreen';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';
import { usePageTracking } from './hooks/usePageTracking'; // <-- Импорт хука

function App() {
  usePageTracking(); // <-- Вызов хука для отслеживания страниц

  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/features" element={<FeaturesScreen />} />
      <Route path="/upload" element={<UploadScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/paywall" element={<PaywallScreen />} />
      <Route path="/error" element={<ErrorScreen />} />
    </Routes>
  );
}

export default App;