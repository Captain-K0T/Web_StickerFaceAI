import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import PhotoScreen from './components/PhotoScreen/PhotoScreen';
import StylesScreen from './components/StylesScreen/StylesScreen';
import TextScreen from './components/TextScreen/TextScreen';
import StyleSelectionScreen from './components/StyleSelectionScreen/StyleSelectionScreen'; // <-- Новый импорт
import UploadScreen from './components/UploadScreen/UploadScreen';
import ContactScreen from './components/ContactScreen/ContactScreen';
import PaywallScreen from './components/PaywallScreen/PaywallScreen';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';
import { usePageTracking } from './hooks/usePageTracking';

function App() {
  usePageTracking();

  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/photo" element={<PhotoScreen />} />
      <Route path="/styles" element={<StylesScreen />} />
      <Route path="/text" element={<TextScreen />} />
      <Route path="/style-selection" element={<StyleSelectionScreen />} /> {/* <-- Новый маршрут */}
      <Route path="/upload" element={<UploadScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/paywall" element={<PaywallScreen />} />
      <Route path="/error" element={<ErrorScreen />} />
    </Routes>
  );
}

export default App;