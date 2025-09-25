import './ErrorScreen.css';
// Убедись, что файл error.png находится в папке src/assets/
import errorImage from '../../assets/error.png';

const ErrorScreen = () => {
  return (
    <div className="error-container">
      <img src={errorImage} alt="Error illustration" className="error-image" />
      <h2 className="error-title">Something broke, try again later</h2>
    </div>
  );
};

export default ErrorScreen;