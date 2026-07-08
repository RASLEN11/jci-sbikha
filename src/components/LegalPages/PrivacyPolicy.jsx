import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLock,
  FaUserSecret,
  FaCookie,
  FaEnvelope,
  FaDatabase,
  FaChartLine,
  FaGlobe,
  FaUserShield,
  FaBell,
  FaTrashAlt,
  FaGavel,
  FaShieldAlt,
  FaCheckCircle,
  FaFileContract,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowLeft
} from 'react-icons/fa';
import { getPrivacyTranslations } from '../../contexts/Languages';
import './LegalPages.css';

const PrivacyPolicy = ({ theme = 'light', language = 'en' }) => {
  const isDark = theme === 'dark';
  const sectionRefs = useRef({});
  
  // Get translations from LanguageComponents
  const t = getPrivacyTranslations(language);

  const infoSections = [
    {
      id: 'information',
      icon: FaUserSecret,
      title: t.sections.information.title,
      items: t.sections.information.items
    },
    {
      id: 'usage',
      icon: FaDatabase,
      title: t.sections.usage.title,
      items: t.sections.usage.items
    },
    {
      id: 'sharing',
      icon: FaLock,
      title: t.sections.sharing.title,
      items: t.sections.sharing.items
    },
    {
      id: 'cookies',
      icon: FaCookie,
      title: t.sections.cookies.title,
      items: t.sections.cookies.items
    }
  ];

  const yourRights = t.sections.rights.items;
  const rightIcons = [FaBell, FaDatabase, FaTrashAlt, FaLock, FaChartLine, FaUserShield];

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`jci-legal-page ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <section className="jci-legal-hero">
        <div className="jci-legal-container">
          <div className="jci-legal-hero-content">
            <div className="jci-legal-hero-badge">
              <FaShieldAlt />
              {t.hero.badge}
            </div>
            
            <h1 className="jci-legal-hero-title">
              {t.hero.title} <span className="jci-legal-hero-highlight">{t.hero.highlight}</span>
            </h1>
            
            <p className="jci-legal-hero-description">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="jci-legal-section">
        <div className="jci-legal-container">
          <div className="jci-legal-grid">
            <aside className="jci-legal-sidebar">
              <div className="jci-legal-sidebar-card">
                <h3>
                  <FaShieldAlt /> {t.sidebar.title}
                </h3>
                <ul>
                  <li>
                    <button 
                      className="jci-legal-sidebar-link"
                      onClick={() => scrollToSection('information')}
                    >
                      {t.sidebar.items.information}
                    </button>
                  </li>
                  <li>
                    <button 
                      className="jci-legal-sidebar-link"
                      onClick={() => scrollToSection('usage')}
                    >
                      {t.sidebar.items.usage}
                    </button>
                  </li>
                  <li>
                    <button 
                      className="jci-legal-sidebar-link"
                      onClick={() => scrollToSection('sharing')}
                    >
                      {t.sidebar.items.sharing}
                    </button>
                  </li>
                  <li>
                    <button 
                      className="jci-legal-sidebar-link"
                      onClick={() => scrollToSection('cookies')}
                    >
                      {t.sidebar.items.cookies}
                    </button>
                  </li>
                  <li>
                    <button 
                      className="jci-legal-sidebar-link"
                      onClick={() => scrollToSection('security')}
                    >
                      {t.sidebar.items.security}
                    </button>
                  </li>
                  <li>
                    <button 
                      className="jci-legal-sidebar-link"
                      onClick={() => scrollToSection('rights')}
                    >
                      {t.sidebar.items.rights}
                    </button>
                  </li>
                  <li>
                    <button 
                      className="jci-legal-sidebar-link"
                      onClick={() => scrollToSection('contact')}
                    >
                      {t.sidebar.items.contact}
                    </button>
                  </li>
                </ul>
              </div>
            </aside>

            <div className="jci-legal-main">
              {infoSections.map((section, idx) => {
                const IconComponent = section.icon;
                return (
                  <div
                    key={idx}
                    ref={el => sectionRefs.current[section.id] = el}
                    id={section.id}
                    className="jci-legal-card"
                  >
                    <div className="jci-legal-card-icon">
                      <IconComponent />
                    </div>
                    <h2 className="jci-legal-card-title">{section.title}</h2>
                    <div className="jci-legal-items">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="jci-legal-item">
                          <FaCheckCircle className="jci-legal-item-icon" />
                          <div>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div 
                ref={el => sectionRefs.current['security'] = el}
                id="security" 
                className="jci-legal-card"
              >
                <div className="jci-legal-card-icon">
                  <FaUserShield />
                </div>
                <h2 className="jci-legal-card-title">{t.sections.security.title}</h2>
                <p className="jci-legal-text">{t.sections.security.text}</p>
              </div>

              <div className="jci-legal-card">
                <div className="jci-legal-card-icon">
                  <FaTrashAlt />
                </div>
                <h2 className="jci-legal-card-title">{t.sections.retention.title}</h2>
                <p className="jci-legal-text">{t.sections.retention.text}</p>
              </div>

              <div className="jci-legal-card">
                <div className="jci-legal-card-icon">
                  <FaGlobe />
                </div>
                <h2 className="jci-legal-card-title">{t.sections.international.title}</h2>
                <p className="jci-legal-text">{t.sections.international.text}</p>
              </div>

              <div 
                ref={el => sectionRefs.current['rights'] = el}
                id="rights" 
                className="jci-legal-card jci-legal-card-full"
              >
                <div className="jci-legal-card-icon">
                  <FaGavel />
                </div>
                <h2 className="jci-legal-card-title">{t.sections.rights.title}</h2>
                <p className="jci-legal-text">{t.sections.rights.description}</p>
                
                <div className="jci-legal-rights-grid">
                  {yourRights.map((right, idx) => {
                    const IconComponent = rightIcons[idx % rightIcons.length];
                    return (
                      <div key={idx} className="jci-legal-right-card">
                        <div className="jci-legal-right-icon">
                          <IconComponent />
                        </div>
                        <h4>{right.title}</h4>
                        <p>{right.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="jci-legal-notice">
                  <FaBell />
                  <div>
                    <strong>{t.sections.rights.noticeTitle}</strong>
                    <p>{t.sections.rights.noticeText}</p>
                  </div>
                </div>
              </div>

              <div className="jci-legal-card">
                <div className="jci-legal-card-icon">
                  <FaUserSecret />
                </div>
                <h2 className="jci-legal-card-title">{t.sections.children.title}</h2>
                <p className="jci-legal-text">{t.sections.children.text}</p>
              </div>

              <div className="jci-legal-card">
                <div className="jci-legal-card-icon">
                  <FaFileContract />
                </div>
                <h2 className="jci-legal-card-title">{t.sections.changes.title}</h2>
                <p className="jci-legal-text">{t.sections.changes.text}</p>
              </div>

              <div 
                ref={el => sectionRefs.current['contact'] = el}
                id="contact" 
                className="jci-legal-card jci-legal-contact"
              >
                <div className="jci-legal-card-icon">
                  <FaEnvelope />
                </div>
                <h2 className="jci-legal-card-title">{t.sections.contact.title}</h2>
                <p className="jci-legal-text">{t.sections.contact.description}</p>
                <div className="jci-legal-contact-info">
                  <p><FaEnvelope /> {t.sections.contact.email}</p>
                  <p><FaPhone /> {t.sections.contact.phone}</p>
                  <p><FaMapMarkerAlt /> {t.sections.contact.address}</p>
                </div>
              </div>

              <div className="jci-legal-back">
                <Link to="/" className="jci-home-btn jci-home-btn-primary">
                  <FaArrowLeft /> {t.backToHome}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;