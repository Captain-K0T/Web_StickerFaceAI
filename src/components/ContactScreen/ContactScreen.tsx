import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactScreen.css';

import whatsAppIcon from '../../assets/wa.svg';
import telegramIcon from '../../assets/tg.svg';

const ContactScreen = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedMessenger, setSelectedMessenger] = useState<'whatsapp' | 'telegram' | null>(null);

  const isButtonDisabled = !phoneNumber || !selectedMessenger;

  return (
    <div className="contact-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '75%' }}></div>
      </div>

      <div className="contact-content">
        <h2 className="contact-title">Almost there!</h2>
        <p className="contact-subtitle">
          Where should we send your sticker pack? Enter your phone number.
        </p>

        <div className="input-wrapper">
          <input
            type="tel"
            className="phone-input"
            placeholder="+1 234 567 89 00"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

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
        onClick={() => navigate('/paywall')}
        disabled={isButtonDisabled}
      >
        Get my stickers →
      </button>
    </div>
  );
};

export default ContactScreen;