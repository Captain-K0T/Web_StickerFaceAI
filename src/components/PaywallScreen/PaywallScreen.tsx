import { useNavigate } from 'react-router-dom';
import './PaywallScreen.css';
import stickerExample from '../../assets/3-1.png';
import { event as trackFacebookEvent } from '../../analytics/facebookPixel';

const PaywallScreen = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    // Отправляем событие о начале триала/подписки
    trackFacebookEvent('Subscribe', { value: '1.00', currency: 'USD' }); 
    
    navigate('/error');
  };

  return (
    <div className="paywall-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '100%' }}></div>
      </div>

      <div className="paywall-content">
        <img src={stickerExample} alt="Sticker example" className="paywall-image" />
        <h2 className="paywall-title">Your sticker pack is ready!</h2>
        <p className="paywall-subtitle">
          Start with a trial to generate your first pack and many more.
        </p>

        <div className="plans-container">
          {/* --- НАЧАЛО ИЗМЕНЕНИЙ --- */}
          <div className="plan-card popular selected">
            <div className="popular-badge">Welcome Offer</div>
            
            <div className="plan-main-info">
              <p className="plan-credits">12,000 credits</p>
              <p className="plan-description">
                Enough for <strong>30+</strong> sticker packs.
              </p>
            </div>
            
            <div className="price-section">
              <p className="price-label">3-day trial for</p>
              <p className="price-main">$1</p>
              <div className="price-per-day">
                <p><strong>$0</strong>33</p>
                <span>per day</span>
              </div>
            </div>
          </div>
          
          <p className="renewal-notice">
            After trial ends, $99.99 will be charged for 3-month subscription.
          </p>
          {/* --- КОНЕЦ ИЗМЕНЕНИЙ --- */}
        </div>
      </div>

      <button className="paywall-cta-button" onClick={handleBuyClick}>
        Start 3-day trial for $1 →
      </button>
    </div>
  );
};

export default PaywallScreen;