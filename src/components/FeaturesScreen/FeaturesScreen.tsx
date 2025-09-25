import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturesScreen.css';

import photoOriginal from '../../assets/2-1-1.png';
import stickersGroup from '../../assets/2-1-6.png';
import stylesExample from '../../assets/2-2-2.png';
import textExample from '../../assets/2-3-1.png';

type Tab = 'photo' | 'styles' | 'text';

const FeaturesScreen = () => {
  const [activeTab, setActiveTab] = useState<Tab>('photo');
  const navigate = useNavigate();

  return (
    <div className="features-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '25%' }}></div>
      </div>

      <div className="features-header">
        <h2 className="features-title">How does it work?</h2>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'photo' ? 'active' : ''}`}
            onClick={() => setActiveTab('photo')}
          >
            📷 Photo
          </button>
          <button
            className={`tab ${activeTab === 'styles' ? 'active' : ''}`}
            onClick={() => setActiveTab('styles')}
          >
            🎨 Styles
          </button>
          <button
            className={`tab ${activeTab === 'text' ? 'active' : ''}`}
            onClick={() => setActiveTab('text')}
          >
            ✏️ Text
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
              <h3>One photo — a whole set</h3>
              <p>Just upload any selfie. Our AI will instantly generate stickers with different emotions.</p>
            </div>
          )}
          {activeTab === 'styles' && (
            <div className="content-item">
              <h3>Hundreds of styles for any taste</h3>
              <p>Who will you be today? A character from The Simpsons, a cyberpunk hero, or a resident of Gotham?</p>
            </div>
          )}
          {activeTab === 'text' && (
            <div className="content-item">
              <h3>Add your own jokes</h3>
              <p>Make stickers truly yours. Add unique captions or use our default ones.</p>
            </div>
          )}
        </div>
      </div>

      <button className="features-cta-button" onClick={() => navigate('/upload')}>
        Great, I'm ready! →
      </button>
    </div>
  );
};

export default FeaturesScreen;