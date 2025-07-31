import { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="spinner"></div>
        <h2 className="preloader-text">Shehriyar Dev</h2>
      </div>
    </div>
  );
};

export default Preloader;