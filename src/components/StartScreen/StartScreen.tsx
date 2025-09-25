import './StartScreen.css';
import userPhoto from '../../assets/1-1.png';
import stickerPhoto from '../../assets/1-2.png';

// Определяем тип для наших пропсов
type StartScreenProps = {
  onNavigate: () => void;
};

const StartScreen = ({ onNavigate }: StartScreenProps) => {
  return (
    <div className="start-screen-container">
      <div className="images-container">
        <img src={userPhoto} alt="User photo" className="demo-image demo-image-positioned" />
        <img src={stickerPhoto} alt="Sticker example" className="demo-image demo-image-positioned" />
      </div>

      <h1 className="title">Stickerface AI</h1>
      <p className="subtitle">Твой личный стикерпак за 1 минуту.</p>
      <p className="description">
        Загрузи одно фото — получи 20+ уникальных стикеров в стиле аниме, Ghibli или GTA.
      </p>
      {/* Добавляем обработчик onClick */}
      <button className="cta-button" onClick={onNavigate}>
        Создать свой стикерпак →
      </button>
    </div>
  );
};

export default StartScreen;