import { useNavigate } from 'react-router-dom';
import './StartScreen.css';
import userPhoto from '../../assets/1-1.png';
import stickerPhoto from '../../assets/1-2.png';

const StartScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="start-screen-container">
      <div className="images-container">
        <img src={userPhoto} alt="User photo" className="demo-image demo-image-positioned" />
        <img src={stickerPhoto} alt="Sticker example" className="demo-image demo-image-positioned" />
      </div>

      <h1 className="title">Stickerface AI</h1>
      <p className="subtitle">Your personal sticker pack in 1 minute.</p>
      <p className="description">
        Upload one photo — get 20+ unique stickers in Anime, Ghibli, or GTA style.
      </p>
      <button className="cta-button" onClick={() => navigate('/features')}>
        Create your sticker pack →
      </button>
    </div>
  );
};

export default StartScreen;