import { useState } from 'react';
import './FeaturesScreen.css';

import photoOriginal from '../../assets/2-1-1.png';
import stickersGroup from '../../assets/2-1-6.png';
import stylesExample from '../../assets/2-2-2.png';
import textExample from '../../assets/2-3-1.png';

type Tab = 'photo' | 'styles' | 'text';

// Добавляем пропс onNavigate
type FeaturesScreenProps = {
  onNavigate: () => void;
};

const FeaturesScreen = ({ onNavigate }: FeaturesScreenProps) => {
  const [activeTab, setActiveTab] = useState<Tab>('photo');

  return (
    <div className="features-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '25%' }}></div>
      </div>

      <div className="features-header">
        <h2 className="features-title">Как это работает?</h2>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'photo' ? 'active' : ''}`}
            onClick={() => setActiveTab('photo')}
          >
            📷 Фото
          </button>
          <button
            className={`tab ${activeTab === 'styles' ? 'active' : ''}`}
            onClick={() => setActiveTab('styles')}
          >
            🎨 Стили
          </button>
          <button
            className={`tab ${activeTab === 'text' ? 'active' : ''}`}
            onClick={() => setActiveTab('text')}
          >
            ✏️ Текст
          </button>
        </div>
      </div>
      
      <div className="features-content">
        <div className="visual-content">
          {activeTab === 'photo' && (
            <div className="photo-visual">
              <img src={photoOriginal} alt="Original" className="photo-original-img" />
              <img src={stickersGroup} alt="Stickers group" className="stickers-group-img" />
            </div>
          )}
          {activeTab === 'styles' && (
            <div className="styles-visual">
              <img src={stylesExample} alt="Styles example" className="single-visual-img" />
            </div>
          )}
          {activeTab === 'text' && (
            <div className="text-visual">
               <img src={textExample} alt="Text example" className="single-visual-img" />
            </div>
          )}
        </div>

        <div className="tab-text-content">
          {activeTab === 'photo' && (
            <div className="content-item">
              <h3>Одно фото — целый набор</h3>
              <p>Просто загрузи любое селфи. Наш AI мгновенно сгенерирует стикеры с разными эмоциями.</p>
            </div>
          )}
          {activeTab === 'styles' && (
            <div className="content-item">
              <h3>Сотни стилей на любой вкус</h3>
              <p>Кем ты будешь сегодня? Персонажем Симпсонов, героем киберпанка или жителем Готэма?</p>
            </div>
          )}
          {activeTab === 'text' && (
            <div className="content-item">
              <h3>Добавь свои шутки</h3>
              <p>Сделай стикеры по-настоящему своими. Добавляй уникальные надписи или используй наши подписи.</p>
            </div>
          )}
        </div>
      </div>

      {/* Привязываем onNavigate к кнопке */}
      <button className="features-cta-button" onClick={onNavigate}>
        Отлично, я готов! →
      </button>
    </div>
  );
};

export default FeaturesScreen;