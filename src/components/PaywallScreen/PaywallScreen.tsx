import { useState } from 'react';
import './PaywallScreen.css';
import stickerExample from '../../assets/3-1.png';

const PaywallScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState('popular');

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="paywall-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '100%' }}></div>
      </div>

      <div className="paywall-content">
        <img src={stickerExample} alt="Sticker example" className="paywall-image" />
        <h2 className="paywall-title">Выберите свой пакет кредитов</h2>
        <p className="paywall-subtitle">
          Каждый стикерпак требует кредитов для генерации. Выберите самый выгодный пакет, чтобы создавать наборы для себя и друзей!
        </p>

        <div className="plans-container">
          {/* План #1 */}
          <div 
            className={`plan-card ${selectedPlan === 'basic' ? 'selected' : ''}`}
            onClick={() => handlePlanSelect('basic')}
          >
            <p className="plan-credits">1 000 кредитов</p>
            <p className="plan-description">Хватит на <strong>1</strong> стикерпак</p>
            <p className="plan-bonus">Идеально, чтобы попробовать</p>
            {/* 2. Обновлена цена */}
            <p className="plan-price">
              $1.99
              <span className="price-period">/ 1 month</span>
            </p>
          </div>

          {/* План #2 (Выделенный) */}
          <div 
            className={`plan-card popular ${selectedPlan === 'popular' ? 'selected' : ''}`}
            onClick={() => handlePlanSelect('popular')}
          >
            <div className="popular-badge">⭐ Самый выгодный</div>
            <p className="plan-credits">12 000 кредитов</p>
            <p className="plan-description">Хватит на <strong>30+</strong> стикерпаков</p>
            <p className="plan-bonus">10 000 + 2 000 в подарок</p>
            {/* 2. Обновлена цена */}
            <p className="plan-price">
              $9.99
              <span className="price-period">/ 1 month</span>
            </p>
          </div>

          {/* План #3 */}
          <div 
            className={`plan-card ${selectedPlan === 'standard' ? 'selected' : ''}`}
            onClick={() => handlePlanSelect('standard')}
          >
            <p className="plan-credits">5 000 кредитов</p>
            <p className="plan-description">Хватит на <strong>10+</strong> стикерпаков</p>
            <p className="plan-bonus">4 000 + 1 000 в подарок</p>
            {/* 2. Обновлена цена */}
            <p className="plan-price">
              $4.99
              <span className="price-period">/ 1 month</span>
            </p>
          </div>
        </div>
      </div>

      <button className="paywall-cta-button">
        Купить кредиты и создать стикерпак →
      </button>
    </div>
  );
};

export default PaywallScreen;