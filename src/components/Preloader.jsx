import { useState, useEffect } from 'react';
import logo from '../assets/ShehriyarDev-01.png';
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
        <div className="logo-container">
          <img src={logo} alt="ShehriyarDev" className="preloader-logo" />
          <div className="logo-glow"></div>
        </div>
        <div className="spinner"></div>
        <h2 className="preloader-text">Shehriyar Dev</h2>
        <p className="preloader-subtitle">Loading Amazing Experience...</p>
      </div>
    </div>
  );
};

export default Preloader;