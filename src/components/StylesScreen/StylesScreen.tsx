import { useNavigate } from 'react-router-dom';
import './StylesScreen.css';
import stylesExample from '../../assets/2-2-2.png';

const StylesScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="feature-screen-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '33.3%' }}></div>
      </div>

      <div className="feature-content-wrapper">
        <h2 className="feature-title">Hundreds of styles for any taste</h2>
        <div className="visual-content">
           <img src={stylesExample} alt="Styles example" className="single-visual-img" />
        </div>
        <div className="text-content">
          <p>Who will you be today? A character from The Simpsons, a cyberpunk hero, or a resident of Gotham?</p>
        </div>
      </div>

      <button className="feature-cta-button" onClick={() => navigate('/text')}>
        Show me more →
      </button>
    </div>
  );
};

export default StylesScreen;