import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 1. Замени импорт BrowserRouter на HashRouter
import { HashRouter } from 'react-router-dom' 
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2. Оберни App в HashRouter */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)