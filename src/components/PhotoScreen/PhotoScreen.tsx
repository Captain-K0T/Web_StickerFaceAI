import { useNavigate } from 'react-router-dom';
import './PhotoScreen.css';

import photoOriginal from '../../assets/2-1-1.png';
import stickersGroup from '../../assets/2-1-6.png';

const PhotoScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="feature-screen-container">
      <div className="progress-bar-container">
        {/* --- ИЗМЕНЕНИЕ ЗДЕСЬ --- */}
        <div className="progress-bar" style={{ width: '14.3%' }}></div>
      </div>

      <div className="feature-content-wrapper">
        <h2 className="feature-title">One photo — a whole set</h2>
        <div className="visual-content">
          <div className="photo-visual">
            <img src={photoOriginal} alt="Original" className="photo-original-img" />
            <img src={stickersGroup} alt="Stickers group" className="stickers-group-img" />
          </div>
        </div>
        <div className="text-content">
          <p>Just upload any selfie. Our AI will instantly generate stickers with different emotions.</p>
        </div>
      </div>

      <button className="feature-cta-button" onClick={() => navigate('/styles')}>
        I like it, next! →
      </button>
    </div>
  );
};

export default PhotoScreen;