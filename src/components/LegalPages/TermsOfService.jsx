import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGavel,
  FaShieldAlt,
  FaUserCheck,
  FaClipboardList,
  FaFileContract,
  FaBalanceScale,
  FaEnvelope,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCopyright,
  FaBan,
  FaClock,
  FaArrowLeft,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { getTermsTranslations } from '../../Utils/Languages';
import './LegalPages.css';

const TermsOfService = ({ theme = 'light', language = 'en' }) => {
  const isDark = theme === 'dark';
  const sectionRefs = useRef({});
  
  // Get translations from LanguageComponents
  const t = getTermsTranslations(language);

  const termsSections = [
    {
      id: 'acceptance',
      icon: FaFileContract,
      title: t.sections.acceptance.title,
      content: t.sections.acceptance.content,
      highlights: t.sections.acceptance.highlights
    },
    {
      id: 'eligibility',
      icon: FaUserCheck,
      title: t.sections.eligibility.title,
      content: t.sections.eligibility.content,
      highlights: t.sections.eligibility.highlights
    },
    {
      id: 'account',
      icon: FaClipboardList,
      title: t.sections.account.title,
      content: t.sections.account.content,
      highlights: t.sections.account.highlights
    },
    {
      id: 'conduct',
      icon: FaBalanceScale,
      title: t.sections.conduct.title,
      content: t.sections.conduct.content,
      highlights: t.sections.conduct.highlights
    },
    {
      id: 'ip',
      icon: FaCopyright,
      title: t.sections.ip.title,
      content: t.sections.ip.content,
      highlights: t.sections.ip.highlights
    }
  ];

  const additionalSections = [
    {
      id: 'termination',
      icon: FaBan,
      title: t.sections.termination.title,
      content: t.sections.termination.content
    },
    {
      id: 'liability',
      icon: FaExclamationTriangle,
      title: t.sections.liability.title,
      content: t.sections.liability.content
    },
    {
      id: 'disclaimer',
      icon: FaShieldAlt,
      title: t.sections.disclaimer.title,
      content: t.sections.disclaimer.content
    },
    {
      id: 'changes',
      icon: FaClock,
      title: t.sections.changes.title,
      content: t.sections.changes.content
    }
  ];

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
              <FaGavel />
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
                      onClick={() => scrollToSection('acceptance')}
                    >
                      {t.sidebar.items.acceptance}
                    </button>
                  </li>
                  <li>
                    <button 
                      className="jci-legal-sidebar-link"
                      onClick={() => scrollToSection('eligibility')}
                    >
                      {t.sidebar.items.eligibility}
                    </button>
                  </li>
                  <li>
                    <button 
                      className="jci-legal-sidebar-link"
                      onClick={() => scrollToSection('account')}
                    >
                      {t.sidebar.items.account}
                    </button>
                  </li>
                  <li>
                    <button 
                      className="jci-legal-sidebar-link"
                      onClick={() => scrollToSection('conduct')}
                    >
                      {t.sidebar.items.conduct}
                    </button>
                  </li>
                  <li>
                    <button 
                      className="jci-legal-sidebar-link"
                      onClick={() => scrollToSection('ip')}
                    >
                      {t.sidebar.items.ip}
                    </button>
                  </li>
                  <li>
                    <button 
                      className="jci-legal-sidebar-link"
                      onClick={() => scrollToSection('termination')}
                    >
                      {t.sidebar.items.termination}
                    </button>
                  </li>
                  <li>
                    <button 
                      className="jci-legal-sidebar-link"
                      onClick={() => scrollToSection('liability')}
                    >
                      {t.sidebar.items.liability}
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
              {termsSections.map((section, idx) => {
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
                    <p className="jci-legal-text">{section.content}</p>
                    
                    {section.highlights && (
                      <div className="jci-legal-highlights">
                        {section.highlights.map((highlight, hIdx) => (
                          <span key={hIdx} className="jci-legal-highlight">
                            <FaCheckCircle /> {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {additionalSections.map((section, idx) => {
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
                    <p className="jci-legal-text">{section.content}</p>
                  </div>
                );
              })}

              <div className="jci-legal-card">
                <div className="jci-legal-card-icon">
                  <FaBalanceScale />
                </div>
                <h2 className="jci-legal-card-title">{t.sections.governingLaw.title}</h2>
                <p className="jci-legal-text">{t.sections.governingLaw.content}</p>
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

              <div className="jci-legal-acceptance">
                <div className="jci-legal-acceptance-card">
                  <FaBalanceScale />
                  <p>{t.acceptance.text}</p>
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

export default TermsOfService;