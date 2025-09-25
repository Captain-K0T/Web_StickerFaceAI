import { useState } from 'react';
import './ContactScreen.css';

// Импортируем иконки. Убедись, что файлы wa.svg и tg.svg лежат в src/assets/
import whatsAppIcon from '../../assets/wa.svg';
import telegramIcon from '../../assets/tg.svg';

type ContactScreenProps = {
  onNavigate: () => void;
};

const ContactScreen = ({ onNavigate }: ContactScreenProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedMessenger, setSelectedMessenger] = useState<'whatsapp' | 'telegram' | null>(null);

  const isButtonDisabled = !phoneNumber || !selectedMessenger;

  return (
    <div className="contact-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '75%' }}></div>
      </div>

      <div className="contact-content">
        <h2 className="contact-title">Почти готово!</h2>
        <p className="contact-subtitle">
          Куда отправить твой стикерпак? Введи свой номер телефона.
        </p>

        <div className="input-wrapper">
          <input
            type="tel"
            className="phone-input"
            // 2. Плейсхолдер изменен
            placeholder="+1 234 567 89 00"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        {/* 1. Блок с кнопками теперь будет отображать их в ряд */}
        <div className="messenger-selection">
          <button
            className={`messenger-button ${selectedMessenger === 'whatsapp' ? 'selected' : ''}`}
            onClick={() => setSelectedMessenger('whatsapp')}
          >
            <img src={whatsAppIcon} alt="WhatsApp" className="messenger-icon" />
             WhatsApp
          </button>
          <button
            className={`messenger-button ${selectedMessenger === 'telegram' ? 'selected' : ''}`}
            onClick={() => setSelectedMessenger('telegram')}
          >
            <img src={telegramIcon} alt="Telegram" className="messenger-icon" />
             Telegram
          </button>
        </div>
      </div>

      <button 
        className="contact-cta-button" 
        onClick={onNavigate}
        disabled={isButtonDisabled}
      >
        Получить мои стикеры →
      </button>
    </div>
  );
};

export default ContactScreen;