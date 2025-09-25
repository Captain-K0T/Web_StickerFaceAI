import { useState, useEffect, useRef, ChangeEvent } from 'react';
import './UploadScreen.css';

// Определяем тип для пропсов
type UploadScreenProps = {
  onNavigate: () => void;
};

const UploadScreen = ({ onNavigate }: UploadScreenProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [processingStep, setProcessingStep] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Эффект для симуляции процесса обработки
  useEffect(() => {
    if (!isProcessing) return;

    // Сразу устанавливаем первый шаг
    setProcessingStep("Анализируем лицо...");

    const totalDuration = 4000; // Ровно 4 секунды
    const intervalTime = 40;    // Обновление каждые 40мс для плавности
    const increment = 100 / (totalDuration / intervalTime);

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;

        if (newProgress >= 100) {
          clearInterval(interval);
          setProcessingStep("Готово! Твои стикеры выглядят потрясающе.");
          setIsComplete(true);
          return 100;
        }

        // Обновляем текстовый шаг в зависимости от прогресса
        if (newProgress >= 66) {
          setProcessingStep("Подбираем стили...");
        } else if (newProgress >= 33) {
          setProcessingStep("Генерируем эмоции...");
        }

        return newProgress;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isProcessing]);


  const handleUploadBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // 1. Ограничиваем длину имени файла
      const name = file.name;
      const truncatedName = name.length > 10 ? `${name.substring(0, 10)}...` : name;
      setFileName(truncatedName);
      
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setIsProcessing(true);
    }
  };

  return (
    <div className="upload-container">
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
        style={{ display: 'none' }}
      />

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '50%' }}></div>
      </div>

      <div className="upload-content">
        <h2 className="upload-title">Загрузи своё лучшее селфи</h2>
        {/* 2. Убрали лишнюю надпись */}
        <p className="upload-subtitle">
          Мы проанализируем его и создадим магию ✨.
        </p>

        {!isProcessing && !isComplete && (
          <div className="upload-box" onClick={handleUploadBoxClick}>
            <div className="upload-box-icon">+</div>
            <div className="upload-box-text">Нажми или перетащи фото сюда</div>
          </div>
        )}

        {isProcessing && imagePreview && (
          <div className="processing-container">
            <img src={imagePreview} alt="Uploaded selfie" className="uploaded-photo-preview" />
            <p className="file-name">{fileName}</p>
            
            <div className="local-progress-bar-container">
              <div 
                className="local-progress-bar" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="processing-status">{processingStep}</p>
          </div>
        )}
      </div>

      {isComplete && (
        <button className="upload-cta-button" onClick={onNavigate}>
          Показать результат →
        </button>
      )}
    </div>
  );
};

export default UploadScreen;