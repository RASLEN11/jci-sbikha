import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  FaHome, 
  FaInfoCircle,
  FaProjectDiagram,
  FaHandshake, 
  FaNewspaper, 
  FaEnvelope, 
  FaBars, 
  FaTimes 
} from 'react-icons/fa';
import { getHeaderTranslations } from '../../Utils/Languages';
import logoLight from '../../Images/Header/JCI_Logo_Dark.png';
import logoDark from '../../Images/Header/JCI_Logo_Light.png';
import './Header.css';

const Header = ({ theme = 'light', language = 'en', translations = {} }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const t = getHeaderTranslations(language);
  // In light theme, use dark logo for better contrast; in dark theme, use light logo
  const logo = theme === 'light' ? logoLight : logoDark;
  const isDark = theme === 'dark';

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // --- UPDATED NAVIGATION LINKS WITH ALL PAGES ---
  const navLinks = [
    { name: t.home || 'Accueil', path: '/', icon: FaHome },
    { name: t.about || 'À Propos', path: '/about', icon: FaInfoCircle },
    { name: t.projects || 'Projets', path: '/projects', icon: FaProjectDiagram },
    { name: t.partners || 'Partenaires', path: '/partners', icon: FaHandshake },
    { name: t.news || 'Actualités', path: '/news', icon: FaNewspaper },
    { name: t.contact || 'Contact', path: '/contact', icon: FaEnvelope },
  ];

  const handleNavigation = useCallback((path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  }, [navigate]);

  const isActive = useCallback((path) => location.pathname === path, [location.pathname]);

  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 200);
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = useCallback((e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigation(path);
    }
  }, [handleNavigation]);

  return (
    <>
      <header
        className={`jci-header ${isDark ? 'dark' : 'light'} ${isScrolled ? 'scrolled' : ''}`}
        role="banner"
        aria-label="Site header"
      >
        <div className="jci-header-inner">
          {/* Logo - Far Left */}
          <div 
            className="jci-logo" 
            onClick={() => handleNavigation('/')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, '/')}
            aria-label="JCI Sbikha - Accueil"
          >
            <img 
              src={logo} 
              alt="JCI Sbikha" 
              className="jci-logo-icon"
              loading="eager"
              width="48"
              height="48"
            />
            <div className="jci-logo-text">
              <span className="jci-logo-title">JCI Sbikha</span>
              <span className="jci-logo-subtitle">Junior Chamber International</span>
            </div>
          </div>

          {/* Navigation - Far Right (Desktop) */}
          <nav className="jci-nav-desktop" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div key={link.path} className="jci-nav-item">
                <button
                  onClick={() => handleNavigation(link.path)}
                  className={`jci-nav-link ${isActive(link.path) ? 'active' : ''}`}
                  aria-label={`Navigate to ${link.name}`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  <link.icon className="jci-nav-icon" aria-hidden="true" />
                  <span>{link.name}</span>
                </button>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="jci-actions">
            <button
              onClick={handleMenuToggle}
              className="jci-menu-toggle"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className={`jci-modal-overlay ${isClosing ? 'closing' : ''}`}
            onClick={handleMenuClose}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Escape' || e.key === 'Enter') {
                handleMenuClose();
              }
            }}
            aria-label="Close menu"
          />
          <div 
            className={`jci-menu-mobile ${isClosing ? 'closing' : ''}`}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="jci-menu-header">
              <button 
                onClick={handleMenuClose} 
                className="jci-menu-close"
                aria-label="Close menu"
              >
                <FaTimes aria-hidden="true" />
              </button>
            </div>
            
            <nav className="jci-nav-mobile" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`jci-nav-link-mobile ${isActive(link.path) ? 'active' : ''}`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  <link.icon aria-hidden="true" />
                  <span>{link.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;