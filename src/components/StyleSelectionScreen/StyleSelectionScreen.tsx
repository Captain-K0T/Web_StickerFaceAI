import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StyleSelectionScreen.css';

// --- ИЗМЕНЕНИЯ ЗДЕСЬ ---
// 1. Импортируем каждое изображение
import st1 from '../../assets/st1.png';
import st2 from '../../assets/st2.png';
import st3 from '../../assets/st3.png';
import st4 from '../../assets/st4.png';
import st5 from '../../assets/st5.png';
import st6 from '../../assets/st6.png';
import st7 from '../../assets/st7.png';
import st8 from '../../assets/st8.png';

// 2. Создаем массив из импортированных переменных
const styleIcons = [st1, st2, st3, st4, st5, st6, st7, st8];
// ----------------------

const styleNames = [
  'Anime', 'Cartoon', 'Ghibli', 'Pixel Art',
  'GTA', 'Simpsons', 'Cyberpunk', 'Fantasy'
];

const StyleSelectionScreen = () => {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [customStyle, setCustomStyle] = useState('');

  const handleStyleClick = (styleName: string) => {
    setCustomStyle('');
    if (selectedStyle === styleName) {
      setSelectedStyle(null);
    } else {
      setSelectedStyle(styleName);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSelectedStyle(null);
    setCustomStyle(e.target.value);
  };
  
  const handleInputFocus = () => {
    setSelectedStyle(null);
  };

  const isButtonDisabled = !selectedStyle && customStyle.trim().length === 0;
  const isInputSelected = !selectedStyle && customStyle.length >= 0;

  return (
    <div className="style-selection-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '57.1%' }}></div>
      </div>

      <div className="style-selection-content">
        <h2 className="style-selection-title">Define your unique style</h2>
        <p className="style-selection-subtitle">
          Choose one of our popular styles or describe your own.
        </p>

        <div className="styles-grid">
          {styleNames.map((name, index) => (
            <button
              key={name}
              className={`style-tab ${selectedStyle === name ? 'selected' : ''}`}
              onClick={() => handleStyleClick(name)}
            >
              {/* Теперь здесь будет правильный путь к картинке */}
              <img src={styleIcons[index]} alt={`${name} style`} className="style-icon" />
              <span>{name}</span>
            </button>
          ))}
        </div>

        <textarea
          className={`style-input ${isInputSelected ? 'selected' : ''}`}
          rows={2}
          placeholder="Or describe any style here, for example: 'Sticker in the style of old Disney cartoons'"
          value={customStyle}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </div>

      <button 
        className="style-selection-cta-button" 
        onClick={() => navigate('/upload')}
        disabled={isButtonDisabled}
      >
        Continue →
      </button>
    </div>
  );
};

export default StyleSelectionScreen;