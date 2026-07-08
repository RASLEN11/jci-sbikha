// components/Logo/Logo.jsx - JCI Sbikha Edition
import React, { useState, useEffect, useRef } from 'react';
import './Logo.css';
import LogoLight from '../../Images/Logo/JCI_Logo_Dark.png';
import LogoDark from '../../Images/Logo/JCI_Logo_Light.png';
import { useTheme } from '../../contexts/ThemeContext';

const Logo = ({ className = '' }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);
  const animationRef = useRef(null);
  const rotationRef = useRef(0);

  // In light theme, use dark logo for better contrast; in dark theme, use light logo
  const logoSrc = theme === 'dark' ? LogoDark : LogoLight;

  useEffect(() => {
    const flip = () => {
      if (!isHovered && imageRef.current) {
        // Increment rotation by 0.5 degrees per frame (smooth animation)
        rotationRef.current += 0.5;
        
        // Keep rotation within 0-360 range
        if (rotationRef.current >= 360) {
          rotationRef.current = 0;
        }
        
        // Apply the 3D flip transformation with smooth transition
        imageRef.current.style.transition = 'transform 0.05s linear';
        imageRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
      }
      
      animationRef.current = requestAnimationFrame(flip);
    };

    // Start the animation
    animationRef.current = requestAnimationFrame(flip);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div className={`jci-logo-wrapper ${className}`}>
      <div 
        className="jci-logo-container" 
        role="img" 
        aria-label="JCI Sbikha"
        title="JCI Sbikha"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          ref={imageRef}
          src={logoSrc} 
          alt="JCI Sbikha" 
          className="jci-logo-image"
          draggable="false"
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
            transform: 'rotateY(0deg)'
          }}
        />
      </div>
    </div>
  );
};

export default Logo;