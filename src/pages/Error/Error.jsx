import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHome,
  FaArrowLeft,
  FaExclamationTriangle,
  FaBug, 
  FaSearch,
  FaWrench,
  FaEnvelope,
  FaSyncAlt,
  FaPlug,
  FaQuestionCircle,
  FaRoad,
  FaCompass
} from 'react-icons/fa';
import { getPageTranslations } from '../../contexts/Languages';
import './Error.css';

const Error = ({ code = 404, title, message, language = 'en', translations = {} }) => {
  const pageT = getPageTranslations(language, 'error');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const errorConfig = {
    400: { title: pageT.titles[400], message: pageT.messages[400], icon: FaExclamationTriangle, badge: pageT.badges[400] },
    401: { title: pageT.titles[401], message: pageT.messages[401], icon: FaExclamationTriangle, badge: pageT.badges[401] },
    403: { title: pageT.titles[403], message: pageT.messages[403], icon: FaExclamationTriangle, badge: pageT.badges[403] },
    404: { title: pageT.titles[404], message: pageT.messages[404], icon: FaSearch, badge: pageT.badges[404] },
    500: { title: pageT.titles[500], message: pageT.messages[500], icon: FaBug, badge: pageT.badges[500] },
    503: { title: pageT.titles[503], message: pageT.messages[503], icon: FaWrench, badge: pageT.badges[503] }
  };

  const config = errorConfig[code] || {
    title: title || pageT.titles[404] || 'Something Went Wrong',
    message: message || pageT.messages[404] || 'An unexpected error occurred.',
    icon: FaExclamationTriangle,
    badge: 'Error'
  };

  const IconComponent = config.icon;
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (code === 404 || code === 500 || code === 503) {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            window.location.href = '/';
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [code]);

  const digits = code.toString().split('');
  const floatingCards = [
    { icon: FaQuestionCircle, text: pageT.floatingCards.lost, className: 'error-card-1' },
    { icon: FaRoad, text: pageT.floatingCards.wrongTurn, className: 'error-card-2' },
    { icon: FaCompass, text: pageT.floatingCards.navigate, className: 'error-card-3' }
  ];

  return (
    <div className={`error-page ${isVisible ? 'visible' : ''}`}>
      <section className="error-hero">
        <div className="error-container">
          <div className="error-grid">
            <div className="error-content">
              <div className="error-hero-content animate-on-scroll visible">
                <div className="error-hero-badge animate-on-scroll visible">
                  <IconComponent className="error-hero-badge-icon" />
                  <span className="error-hero-badge-text">{config.badge}</span>
                </div>
                
                <div className="error-code animate-on-scroll visible">
                  {digits.map((digit, i) => (
                    <span 
                      key={i} 
                      className="error-digit"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {digit}
                    </span>
                  ))}
                </div>
                
                <h1 className="error-title animate-on-scroll visible">
                  <span className="error-title-text">{config.title}</span>
                </h1>
                
                <p className="error-description animate-on-scroll visible">
                  <span className="error-description-text">{config.message}</span>
                </p>
                
                <div className="error-stats animate-on-scroll visible">
                  <div className="error-stat">
                    <div className="error-stat-number">
                      <span className="error-stat-number-text">404</span>
                    </div>
                    <div className="error-stat-label">
                      <span className="error-stat-label-text">{pageT.stats.pageNotFound}</span>
                    </div>
                  </div>
                  <div className="error-stat">
                    <div className="error-stat-number">
                      <span className="error-stat-number-text">500</span>
                    </div>
                    <div className="error-stat-label">
                      <span className="error-stat-label-text">{pageT.stats.serverIssue}</span>
                    </div>
                  </div>
                  <div className="error-stat">
                    <div className="error-stat-number">
                      <span className="error-stat-number-text">403</span>
                    </div>
                    <div className="error-stat-label">
                      <span className="error-stat-label-text">{pageT.stats.accessDenied}</span>
                    </div>
                  </div>
                  <div className="error-stat">
                    <div className="error-stat-number">
                      <span className="error-stat-number-text">401</span>
                    </div>
                    <div className="error-stat-label">
                      <span className="error-stat-label-text">{pageT.stats.unauthorized}</span>
                    </div>
                  </div>
                </div>
                
                <div className="error-buttons animate-on-scroll visible">
                  <Link to="/" className="error-home-btn error-home-btn-primary">
                    <FaHome className="error-home-btn-icon" />
                    <span className="error-home-btn-text">{pageT.buttons.goHome}</span>
                  </Link>
                  <button onClick={() => window.history.back()} className="error-home-btn error-home-btn-secondary">
                    <FaArrowLeft className="error-home-btn-icon" />
                    <span className="error-home-btn-text">{pageT.buttons.goBack}</span>
                  </button>
                  <button onClick={() => window.location.reload()} className="error-home-btn error-home-btn-secondary">
                    <FaSyncAlt className="error-home-btn-icon" />
                    <span className="error-home-btn-text">{pageT.buttons.refresh}</span>
                  </button>
                </div>
                
                {(code === 404 || code === 500 || code === 503) && (
                  <div className="error-redirect animate-on-scroll visible">
                    <div className="error-redirect-bar">
                      <div 
                        className="error-redirect-progress" 
                        style={{ 
                          width: `${(countdown / 5) * 100}%`,
                          transition: 'width 0.3s ease'
                        }}
                      />
                    </div>
                    <p>
                      <span className="error-redirect-text">{pageT.redirect} {countdown} {pageT.seconds}...</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="error-visual">
              {floatingCards.map((card, idx) => (
                <div 
                  key={idx} 
                  className={`error-visual-card ${card.className}`}
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <card.icon className="error-visual-card-icon" />
                  <span className="error-visual-card-text">{card.text}</span>
                </div>
              ))}
              <div 
                className="error-visual-center"
                style={{
                  transform: `translate(calc(-50% + ${mousePosition.x * 0.05}px), calc(-50% + ${mousePosition.y * 0.05}px))`
                }}
              >
                <IconComponent className="error-visual-center-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="error-suggestions animate-on-scroll visible">
        <div className="error-container">
          <div className="error-section-header">
            <h2>
              <span className="error-section-header-title">{pageT.suggestions.title}</span>
            </h2>
            <p>
              <span className="error-section-header-subtitle">{pageT.suggestions.subtitle}</span>
            </p>
          </div>
          <div className="error-suggestions-grid">
            <div className="error-suggestion-card glass-card">
              <div className="error-suggestion-icon">
                <FaHome className="error-suggestion-icon-svg" />
              </div>
              <h4>
                <span className="error-suggestion-card-title">{pageT.suggestions.homepage.title}</span>
              </h4>
              <p>
                <span className="error-suggestion-card-desc">{pageT.suggestions.homepage.description}</span>
              </p>
              <Link to="/" className="error-suggestion-link">
                <span className="error-suggestion-link-text">{pageT.suggestions.homepage.link} →</span>
              </Link>
            </div>
            <div className="error-suggestion-card glass-card">
              <div className="error-suggestion-icon">
                <FaSearch className="error-suggestion-icon-svg" />
              </div>
              <h4>
                <span className="error-suggestion-card-title">{pageT.suggestions.search.title}</span>
              </h4>
              <p>
                <span className="error-suggestion-card-desc">{pageT.suggestions.search.description}</span>
              </p>
              <Link to="/search" className="error-suggestion-link">
                <span className="error-suggestion-link-text">{pageT.suggestions.search.link} →</span>
              </Link>
            </div>
            <div className="error-suggestion-card glass-card">
              <div className="error-suggestion-icon">
                <FaEnvelope className="error-suggestion-icon-svg" />
              </div>
              <h4>
                <span className="error-suggestion-card-title">{pageT.suggestions.support.title}</span>
              </h4>
              <p>
                <span className="error-suggestion-card-desc">{pageT.suggestions.support.description}</span>
              </p>
              <Link to="/contact" className="error-suggestion-link">
                <span className="error-suggestion-link-text">{pageT.suggestions.support.link} →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="error-help animate-on-scroll visible">
        <div className="error-container">
          <div className="error-help-card glass-card">
            <div className="error-help-icon">
              <FaPlug className="error-help-icon-svg" />
            </div>
            <h2>
              <span className="error-help-title">{pageT.help.title}</span>
            </h2>
            <p>
              <span className="error-help-desc">{pageT.help.description}</span>
            </p>
            <div className="error-help-buttons">
              <Link to="/contact" className="error-home-btn error-home-btn-primary">
                <FaEnvelope className="error-home-btn-icon" />
                <span className="error-home-btn-text">{pageT.help.contact}</span>
              </Link>
              <Link to="/faq" className="error-home-btn error-home-btn-secondary">
                <FaSearch className="error-home-btn-icon" />
                <span className="error-home-btn-text">{pageT.help.faq}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;