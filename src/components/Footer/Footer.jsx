import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHome,
  FaHandshake,
  FaNewspaper,
  FaEnvelope,
  FaFileAlt,
  FaShieldAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaShieldVirus,
  FaProjectDiagram,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaBlog,
  FaImages,
  FaGraduationCap,
  FaUserPlus
} from 'react-icons/fa';
import { getFooterTranslations } from '../../contexts/Languages';
import logoLight from '../../Images/Footer/JCI_Logo_Dark.png';
import logoDark from '../../Images/Footer/JCI_Logo_Light.png';
import './Footer.css';

const Footer = ({ theme = 'light', language = 'en', translations = {} }) => {
  const currentYear = new Date().getFullYear();
  const logo = theme === 'light' ? logoLight : logoDark;
  const t = getFooterTranslations(language);
  const isDark = theme === 'dark';

  const footerClass = `jci-footer ${isDark ? 'dark' : 'light'}`;

  // Main Navigation Links
  const navLinks = [
    { name: t.home || 'Accueil', path: '/', icon: FaHome },
    { name: t.about || 'À Propos', path: '/about', icon: FaInfoCircle },
    { name: t.projects || 'Projets', path: '/projects', icon: FaProjectDiagram },
    { name: t.partners || 'Partenaires', path: '/partners', icon: FaHandshake },
    { name: t.news || 'Actualités', path: '/news', icon: FaNewspaper },
    { name: t.contact || 'Contact', path: '/contact', icon: FaEnvelope },
  ];

  // Resources Links
  const resources = [
    { name: 'Blog', path: '/blog', icon: FaBlog },
    { name: 'Galerie', path: '/gallery', icon: FaImages },
    { name: 'Formations', path: '/trainings', icon: FaGraduationCap },
    { name: 'Adhérer', path: '/join', icon: FaUserPlus },
    { name: t.terms || 'Conditions d\'utilisation', path: '/terms', icon: FaFileAlt },
    { name: t.privacy || 'Politique de confidentialité', path: '/privacy', icon: FaShieldAlt },
  ];

  // Contact Information
  const contactInfo = [
    { icon: FaMapMarkerAlt, text: 'Sbikha, Tunisie' },
    { icon: FaEnvelope, text: 'contact@jcisbikha.org' },
    { icon: FaPhone, text: '+216 XX XXX XXX' },
    { icon: FaClock, text: 'Lun-Ven: 9h - 18h' },
  ];

  // Social Media Links - JCI Sbikha
  const jciSocial = [
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/jcisbikha/' },
    { name: 'Facebook', icon: FaFacebookF, url: 'https://www.facebook.com/jcisbikha/' },
    { name: 'LinkedIn', icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/jcisbikha/' },
    { name: 'TikTok', icon: FaTiktok, url: 'https://www.tiktok.com/@jcisbikha' },
  ];

  const copyright = t.copyrightPrefix + currentYear + t.copyrightSuffix;

  return (
    <footer className={footerClass}>
      <div className="jci-footer-inner">
        <div className="jci-footer-grid">
          {/* Brand Section */}
          <div className="jci-footer-brand">
            <Link to="/" className="jci-footer-logo">
              <img 
                src={logo} 
                alt="JCI Sbikha" 
                className="jci-footer-logo-icon" 
                loading="lazy"
              />
              <div className="jci-footer-logo-text">
                <span className="jci-footer-logo-title">JCI Sbikha</span>
                <span className="jci-footer-logo-subtitle">Junior Chamber International</span>
              </div>
            </Link>
            <p className="jci-footer-description">
              {t.description || 'Jeune Chambre Internationale de Sbikha - Développement des leaders pour un monde meilleur.'}
            </p>
            
            {/* Badge + Social Icons on the same line */}
            <div className="jci-footer-brand-row">
              <div className="jci-footer-badge">
                <FaShieldVirus />
                <span>{t.certifiedBadge || 'JCI Officiel'}</span>
              </div>
              
              <div className="jci-footer-brand-social-group">
                {jciSocial.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="jci-footer-brand-social-link"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="jci-footer-section">
            <h4 className="jci-footer-heading">
              <FaHome /> Navigation
            </h4>
            <ul className="jci-footer-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="jci-footer-link">
                    <link.icon /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="jci-footer-section">
            <h4 className="jci-footer-heading">
              <FaFileAlt /> Ressources
            </h4>
            <ul className="jci-footer-list">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="jci-footer-link">
                    <item.icon /> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="jci-footer-section jci-footer-contact-section">
            <h4 className="jci-footer-heading">
              <FaEnvelope /> Contact
            </h4>
            <ul className="jci-footer-list jci-footer-contact-list">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <span className="jci-footer-contact-item">
                    <item.icon className="jci-footer-contact-icon" />
                    <span className="jci-footer-contact-text">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="jci-footer-copyright">
          <p className="jci-footer-copyright-text">{copyright}</p>
          <p className="jci-footer-credit">
            {t.developedBy || 'Développé par'} 
            <a 
              href="https://www.instagram.com/raslen.11/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <span style={{ margin: '0 4px' }}>RASLEN11</span>
            </a>
            <span style={{ margin: '0 4px' }}>|</span>
            <a href="mailto:rkalboussi15@gmail.com">
              rkalboussi15@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;