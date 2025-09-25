import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaywallScreen.css';
import stickerExample from '../../assets/3-1.png';

const PaywallScreen = () => {
  const navigate = useNavigate();
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
        <h2 className="paywall-title">Choose your credit pack</h2>
        <p className="paywall-subtitle">
          Each sticker pack requires credits to generate. Choose the best value pack to create sets for yourself and your friends!
        </p>

        <div className="plans-container">
          <div 
            className={`plan-card ${selectedPlan === 'basic' ? 'selected' : ''}`}
            onClick={() => handlePlanSelect('basic')}
          >
            <p className="plan-credits">1,000 credits</p>
            <p className="plan-description">Enough for <strong>1</strong> sticker pack</p>
            <p className="plan-bonus">Perfect for trying it out</p>
            <p className="plan-price">
              $1.99
              <span className="price-period">/ 1 month</span>
            </p>
          </div>

          <div 
            className={`plan-card popular ${selectedPlan === 'popular' ? 'selected' : ''}`}
            onClick={() => handlePlanSelect('popular')}
          >
            <div className="popular-badge">⭐ Best Value</div>
            <p className="plan-credits">12,000 credits</p>
            <p className="plan-description">Enough for <strong>30+</strong> sticker packs</p>
            <p className="plan-bonus">10,000 + 2,000 bonus</p>
            <p className="plan-price">
              $9.99
              <span className="price-period">/ 1 month</span>
            </p>
          </div>

          <div 
            className={`plan-card ${selectedPlan === 'standard' ? 'selected' : ''}`}
            onClick={() => handlePlanSelect('standard')}
          >
            <p className="plan-credits">5,000 credits</p>
            <p className="plan-description">Enough for <strong>10+</strong> sticker packs</p>
            <p className="plan-bonus">4,000 + 1,000 bonus</p>
            <p className="plan-price">
              $4.99
              <span className="price-period">/ 1 month</span>
            </p>
          </div>
        </div>
      </div>

      <button className="paywall-cta-button" onClick={() => navigate('/error')}>
        Buy credits and create sticker pack →
      </button>
    </div>
  );
};

export default PaywallScreen;