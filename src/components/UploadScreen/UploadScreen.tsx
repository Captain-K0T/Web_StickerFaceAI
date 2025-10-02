import { useState, useEffect, useRef, type ChangeEvent } from 'react'; // <-- ИЗМЕНЕНИЕ ЗДЕСЬ
import { useNavigate } from 'react-router-dom';
import './UploadScreen.css';

const UploadScreen = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [processingStep, setProcessingStep] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isProcessing) return;

    setProcessingStep("Analyzing face...");

    const totalDuration = 4000;
    const intervalTime = 40;
    const increment = 100 / (totalDuration / intervalTime);

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;

        if (newProgress >= 100) {
          clearInterval(interval);
          setProcessingStep("Done! Your stickers look amazing.");
          setIsComplete(true);
          return 100;
        }

        if (newProgress >= 66) {
          setProcessingStep("Applying styles...");
        } else if (newProgress >= 33) {
          setProcessingStep("Generating emotions...");
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
        <h2 className="upload-title">Upload your best selfie</h2>
        <p className="upload-subtitle">
          We'll analyze it and create some magic ✨.
        </p>

        {!isProcessing && !isComplete && (
          <div className="upload-box" onClick={handleUploadBoxClick}>
            <div className="upload-box-icon">+</div>
            <div className="upload-box-text">Click or drag a photo here</div>
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
        <button className="upload-cta-button" onClick={() => navigate('/contact')}>
          Show result →
        </button>
      )}
    </div>
  );
};

export default UploadScreen;