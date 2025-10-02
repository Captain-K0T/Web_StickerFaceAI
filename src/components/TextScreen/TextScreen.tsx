import { useNavigate } from 'react-router-dom';
import './TextScreen.css';
import textExample from '../../assets/2-3-1.png';

const TextScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="feature-screen-container">
      <div className="progress-bar-container">
        {/* --- ИЗМЕНЕНИЕ ЗДЕСЬ --- */}
        <div className="progress-bar" style={{ width: '42.9%' }}></div>
      </div>

      <div className="feature-content-wrapper">
        <h2 className="feature-title">Add your own jokes</h2>
        <div className="visual-content">
          <img src={textExample} alt="Text example" className="single-visual-img" />
        </div>
        <div className="text-content">
          <p>Make stickers truly yours. Add unique captions or use our default ones.</p>
        </div>
      </div>

      {/* --- ИЗМЕНЕНИЕ ЗДЕСЬ (навигация) --- */}
      <button className="feature-cta-button" onClick={() => navigate('/style-selection')}>
        Awesome, I'm ready! →
      </button>
    </div>
  );
};

export default TextScreen;