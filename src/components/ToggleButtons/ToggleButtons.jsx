import React, { useState, useEffect, useCallback } from 'react';
import { FaSun, FaMoon, FaArrowUp, FaGlobe } from 'react-icons/fa';
import { getToggleTranslations } from '../../contexts/Languages';
import './ToggleButtons.css';

const ToggleButtons = ({ 
  theme = 'light', 
  onToggleTheme, 
  language = 'en', 
  onToggleLanguage 
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const t = getToggleTranslations(language);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      const shouldShow = scrolled > 300;
      if (shouldShow !== showBackToTop) {
        setShowBackToTop(shouldShow);
        setIsExiting(false);
      }
      setScrollProgress(maxHeight > 0 ? (scrolled / maxHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showBackToTop]);

  const scrollToTop = useCallback(() => {
    const start = window.scrollY;
    const duration = 600;
    const startTime = performance.now();
    
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeOutCubic(progress);
      
      window.scrollTo(0, start * (1 - easeProgress));
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
    
    requestAnimationFrame(animateScroll);
  }, []);

  const handleBackButtonClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      scrollToTop();
      setIsExiting(false);
    }, 200);
  };

  const themeLabel = isDark ? t.lightMode : t.darkMode;
  const languageLabel = language === 'en' ? t.french : t.english;
  const languageText = language === 'en' ? 'FR' : 'EN';
  const ThemeIcon = isDark ? FaSun : FaMoon;

  return (
    <>
      {scrollProgress > 0 && scrollProgress < 100 && (
        <div 
          className="jci-scroll-progress"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      )}

      <div 
        className={`jci-toggle-container ${isDark ? 'dark-theme' : 'light-theme'}`} 
        role="group" 
        aria-label="Quick settings"
      >
        <button
          onClick={onToggleLanguage}
          className="jci-toggle-btn"
          data-tooltip={languageLabel}
          aria-label={languageLabel}
        >
          <FaGlobe className="jci-toggle-icon" />
          <span className="jci-toggle-text">{languageText}</span>
        </button>

        <button
          onClick={onToggleTheme}
          className="jci-toggle-btn"
          data-tooltip={themeLabel}
          aria-label={themeLabel}
        >
          <ThemeIcon className="jci-toggle-icon" />
        </button>
      </div>

      {showBackToTop && (
        <button
          onClick={handleBackButtonClick}
          className={`jci-backtop-btn ${isExiting ? 'exit' : ''}`}
          aria-label={t.backToTop}
        >
          <FaArrowUp className="jci-backtop-icon" />
        </button>
      )}
    </>
  );
};

export default ToggleButtons;