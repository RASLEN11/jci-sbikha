// Trainings.jsx
import React, { useState, useEffect } from 'react';
import './Trainings.css';
import { 
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaArrowRight,
  FaUsers,
  FaCertificate,
  FaBook,
  FaLightbulb,
  FaSearch,
  FaTimes,
  FaFilter,
} from 'react-icons/fa';

// Import all data from Utils/Trainings.js
import {
  categories,
  trainingsData,
  heroData,
  sectionHeaders,
  benefitsData,
  statusConfig,
  categoryLabelMap,
  defaultColor
} from '../../Utils/Ressources/Trainings';

const Trainings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.jci-animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          el.classList.add('jci-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter trainings
  const filteredTrainings = trainingsData.filter(training => {
    const matchesCategory = selectedCategory === 'all' || training.category === selectedCategory;
    const matchesSearch = training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          training.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          training.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredTrainings = trainingsData.filter(t => t.featured);

  const getCategoryLabel = (categoryId) => {
    return categoryLabelMap[categoryId] || categoryId;
  };

  const getStatusColor = (status) => {
    return statusConfig[status]?.color || statusConfig.default.color;
  };

  const getStatusBg = (status) => {
    return statusConfig[status]?.bg || statusConfig.default.bg;
  };

  return (
    <div className="jci-trainings-page">
      {/* Hero Section */}
      <section className="jci-trainings-hero jci-animate-on-scroll">
        <div className="jci-trainings-hero-overlay"></div>
        <div className="jci-trainings-hero-content">
          <div className="jci-trainings-hero-badge">
            {heroData.badge.icon}
            {heroData.badge.text}
          </div>
          <h1 className="jci-trainings-hero-title">
            {heroData.title}<br />
            <span className="jci-trainings-hero-highlight">{heroData.highlight}</span>
          </h1>
          <p className="jci-trainings-hero-description">{heroData.description}</p>
          <div className="jci-trainings-hero-stats">
            {heroData.stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="jci-trainings-hero-stat">
                  <span className="jci-trainings-hero-stat-number">{stat.value}</span>
                  <span className="jci-trainings-hero-stat-label">{stat.label}</span>
                </div>
                {index < heroData.stats.length - 1 && (
                  <div className="jci-trainings-hero-stat-divider"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="jci-trainings-search-section">
        <div className="jci-container">
          <div className="jci-trainings-search-wrapper jci-glass-card">
            <div className="jci-trainings-search-bar">
              <FaSearch className="jci-trainings-search-icon" />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="jci-trainings-search-input"
              />
              {searchTerm && (
                <button className="jci-trainings-search-clear" onClick={() => setSearchTerm('')}>
                  <FaTimes />
                </button>
              )}
            </div>
            <button className="jci-trainings-filter-toggle" onClick={() => setIsFilterOpen(!isFilterOpen)}>
              <FaFilter />
              Filtrer
            </button>
          </div>

          {isFilterOpen && (
            <div className="jci-trainings-filters jci-glass-card jci-animate-on-scroll">
              <div className="jci-trainings-filters-header">
                <span className="jci-trainings-filters-title">Catégories</span>
                <button className="jci-trainings-filters-close" onClick={() => setIsFilterOpen(false)}>
                  <FaTimes />
                </button>
              </div>
              <div className="jci-trainings-filters-grid">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`jci-trainings-filter-btn ${selectedCategory === category.id ? 'jci-active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="jci-trainings-filter-icon">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Trainings */}
      <section className="jci-trainings-featured-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.featured.title}</h2>
            <p className="jci-section-subtitle">{sectionHeaders.featured.subtitle}</p>
          </div>

          <div className="jci-trainings-featured-grid">
            {featuredTrainings.map((training) => {
              const color = training.color || defaultColor;
              return (
                <div key={training.id} className="jci-training-featured-card jci-animate-on-scroll jci-glass-card">
                  <div className="jci-training-featured-header">
                    <div className="jci-training-featured-icon" style={{ background: `${color}15`, color: color }}>
                      {training.icon}
                    </div>
                    <div className="jci-training-featured-status" style={{
                      background: getStatusBg(training.status),
                      color: getStatusColor(training.status)
                    }}>
                      {training.status}
                    </div>
                  </div>
                  <h3 className="jci-training-featured-title">{training.title}</h3>
                  <p className="jci-training-featured-description">{training.description}</p>
                  <div className="jci-training-featured-meta">
                    <span><FaCalendarAlt /> {training.duration}</span>
                    <span><FaClock /> {training.schedule}</span>
                  </div>
                  <div className="jci-training-featured-info">
                    <span><FaUsers /> {training.registered}/{training.capacity}</span>
                    <span><FaMapMarkerAlt /> {training.location}</span>
                  </div>
                  <button 
                    className="jci-training-featured-btn"
                    onClick={() => setSelectedTraining(training)}
                  >
                    En savoir plus
                    <FaArrowRight className="jci-btn-icon-small" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Trainings Grid */}
      <section className="jci-trainings-grid-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.all.title}</h2>
            <p className="jci-section-subtitle">
              {sectionHeaders.all.subtitle(filteredTrainings.length)}
            </p>
          </div>

          {filteredTrainings.length > 0 ? (
            <div className="jci-trainings-grid">
              {filteredTrainings.map((training) => {
                const color = training.color || defaultColor;
                return (
                  <div 
                    key={training.id} 
                    className="jci-training-card jci-animate-on-scroll jci-glass-card"
                    onClick={() => setSelectedTraining(training)}
                  >
                    <div className="jci-training-card-header">
                      <div className="jci-training-card-icon" style={{ background: `${color}15`, color: color }}>
                        {training.icon}
                      </div>
                      <div className="jci-training-card-status" style={{
                        background: getStatusBg(training.status),
                        color: getStatusColor(training.status)
                      }}>
                        {training.status}
                      </div>
                    </div>
                    <h3 className="jci-training-card-title">{training.title}</h3>
                    <p className="jci-training-card-description">{training.description}</p>
                    <div className="jci-training-card-category">
                      {training.icon}
                      <span>{getCategoryLabel(training.category)}</span>
                    </div>
                    <div className="jci-training-card-footer">
                      <div className="jci-training-card-info">
                        <span><FaCalendarAlt /> {training.duration}</span>
                        <span><FaUsers /> {training.registered}/{training.capacity}</span>
                      </div>
                      <button className="jci-training-card-details">
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="jci-trainings-empty">
              <FaSearch className="jci-trainings-empty-icon" />
              <h3>Aucune formation trouvée</h3>
              <p>Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Training Modal */}
      {selectedTraining && (
        <div className="jci-training-modal-overlay" onClick={() => setSelectedTraining(null)}>
          <div className="jci-training-modal jci-glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="jci-training-modal-close" onClick={() => setSelectedTraining(null)}>
              ×
            </button>
            <div className="jci-training-modal-content">
              <div className="jci-training-modal-header">
                <div className="jci-training-modal-icon" style={{ 
                  background: `${selectedTraining.color || defaultColor}15`, 
                  color: selectedTraining.color || defaultColor 
                }}>
                  {selectedTraining.icon}
                </div>
                <div className="jci-training-modal-title-area">
                  <h2 className="jci-training-modal-title">{selectedTraining.title}</h2>
                  <div className="jci-training-modal-meta">
                    <span className="jci-training-modal-category">
                      {selectedTraining.icon}
                      {getCategoryLabel(selectedTraining.category)}
                    </span>
                    <span className="jci-training-modal-status" style={{
                      background: getStatusBg(selectedTraining.status),
                      color: getStatusColor(selectedTraining.status)
                    }}>
                      {selectedTraining.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="jci-training-modal-body">
                <p className="jci-training-modal-description">{selectedTraining.fullDescription}</p>

                <div className="jci-training-modal-details">
                  <div className="jci-training-modal-detail">
                    <FaCalendarAlt className="jci-training-modal-detail-icon" />
                    <div>
                      <span className="jci-training-modal-detail-label">Début</span>
                      <span className="jci-training-modal-detail-value">{selectedTraining.startDate}</span>
                    </div>
                  </div>
                  <div className="jci-training-modal-detail">
                    <FaClock className="jci-training-modal-detail-icon" />
                    <div>
                      <span className="jci-training-modal-detail-label">Horaire</span>
                      <span className="jci-training-modal-detail-value">{selectedTraining.schedule}</span>
                    </div>
                  </div>
                  <div className="jci-training-modal-detail">
                    <FaMapMarkerAlt className="jci-training-modal-detail-icon" />
                    <div>
                      <span className="jci-training-modal-detail-label">Lieu</span>
                      <span className="jci-training-modal-detail-value">{selectedTraining.location}</span>
                    </div>
                  </div>
                  <div className="jci-training-modal-detail">
                    <FaUsers className="jci-training-modal-detail-icon" />
                    <div>
                      <span className="jci-training-modal-detail-label">Participants</span>
                      <span className="jci-training-modal-detail-value">{selectedTraining.registered}/{selectedTraining.capacity}</span>
                    </div>
                  </div>
                  <div className="jci-training-modal-detail">
                    <FaUser className="jci-training-modal-detail-icon" />
                    <div>
                      <span className="jci-training-modal-detail-label">Formateur</span>
                      <span className="jci-training-modal-detail-value">{selectedTraining.instructor}</span>
                    </div>
                  </div>
                  <div className="jci-training-modal-detail">
                    <FaCertificate className="jci-training-modal-detail-icon" />
                    <div>
                      <span className="jci-training-modal-detail-label">Certification</span>
                      <span className="jci-training-modal-detail-value">{selectedTraining.certification}</span>
                    </div>
                  </div>
                </div>

                <div className="jci-training-modal-skills">
                  <h4 className="jci-training-modal-skills-title">
                    <FaLightbulb className="jci-training-modal-skills-icon" />
                    Compétences acquises
                  </h4>
                  <div className="jci-training-modal-skills-list">
                    {selectedTraining.skills.map((skill, index) => (
                      <span key={index} className="jci-training-modal-skill">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="jci-training-modal-footer">
                <button 
                  className="jci-btn jci-btn-primary jci-training-modal-btn"
                  disabled={selectedTraining.status === 'Complet'}
                >
                  {selectedTraining.status === 'Complet' ? 'Formation Complète' : "S'inscrire Maintenant"}
                  {selectedTraining.status !== 'Complet' && <FaArrowRight className="jci-btn-icon" />}
                </button>
                <button className="jci-btn jci-btn-secondary jci-training-modal-btn-secondary">
                  <FaBook /> Programme
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="jci-trainings-benefits-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-trainings-benefits-wrapper jci-glass-card">
            <h2 className="jci-trainings-benefits-title">{benefitsData.title}</h2>
            <div className="jci-trainings-benefits-grid">
              {benefitsData.items.map((item, index) => (
                <div key={index} className="jci-trainings-benefit-item">
                  <div className="jci-trainings-benefit-icon-wrapper">
                    {item.icon}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainings;