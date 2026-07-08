// Projects.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import {
  FaHandsHelping,
  FaChartLine,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaShare,
  FaTrophy,
  FaRocket,
  FaUsers,
  FaFilter,
  FaSearch,
  FaTimes,
  FaQuoteLeft,
} from "react-icons/fa";

// Import all data from Utils/Projects.js
import {
  categories,
  projectsData,
  heroData,
  impactData,
  ctaData,
  sectionHeaders,
  statusConfig,
  categoryIconMap,
  categoryLabelMap,
} from "../../Utils/Pages/Projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".jci-animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          el.classList.add("jci-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter projects
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projectsData.filter((p) => p.featured);

  const getCategoryIcon = (categoryId) => {
    return categoryIconMap[categoryId] || <FaRocket />;
  };

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
    <div className="jci-projects-page">
      {/* Hero Section */}
      <section className="jci-projects-hero jci-animate-on-scroll">
        <div className="jci-projects-hero-overlay"></div>
        <div className="jci-projects-hero-content">
          <div className="jci-projects-hero-badge">
            {heroData.badge.icon}
            {heroData.badge.text}
          </div>
          <h1 className="jci-projects-hero-title">
            {heroData.title}
            <br />
            <span className="jci-projects-hero-highlight">
              {heroData.highlight}
            </span>
          </h1>
          <p className="jci-projects-hero-description">{heroData.description}</p>
          <div className="jci-projects-hero-stats">
            {heroData.stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="jci-projects-hero-stat">
                  <span className="jci-projects-hero-stat-number">{stat.value}</span>
                  <span className="jci-projects-hero-stat-label">{stat.label}</span>
                </div>
                {index < heroData.stats.length - 1 && (
                  <div className="jci-projects-hero-stat-divider"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="jci-projects-search-section">
        <div className="jci-container">
          <div className="jci-projects-search-wrapper jci-glass-card">
            <div className="jci-projects-search-bar">
              <FaSearch className="jci-projects-search-icon" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="jci-projects-search-input"
              />
              {searchTerm && (
                <button
                  className="jci-projects-search-clear"
                  onClick={() => setSearchTerm("")}
                >
                  <FaTimes />
                </button>
              )}
            </div>
            <button
              className="jci-projects-filter-toggle"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FaFilter />
              Filtrer
            </button>
          </div>

          {isFilterOpen && (
            <div className="jci-projects-filters jci-glass-card jci-animate-on-scroll">
              <div className="jci-projects-filters-header">
                <span className="jci-projects-filters-title">Catégories</span>
                <button
                  className="jci-projects-filters-close"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="jci-projects-filters-grid">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`jci-projects-filter-btn ${activeCategory === category.id ? "jci-active" : ""}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="jci-projects-filter-icon">
                      {category.icon}
                    </span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="jci-projects-featured-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.featured.title}</h2>
            <p className="jci-section-subtitle">{sectionHeaders.featured.subtitle}</p>
          </div>

          <div className="jci-projects-featured-grid">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="jci-project-featured-card jci-animate-on-scroll jci-glass-card"
              >
                <div className="jci-project-featured-header">
                  <div
                    className="jci-project-featured-icon"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                    }}
                  >
                    {project.icon}
                  </div>
                  <div
                    className="jci-project-featured-status"
                    style={{
                      background: getStatusBg(project.status),
                      color: getStatusColor(project.status),
                    }}
                  >
                    {project.status}
                  </div>
                </div>
                <h3 className="jci-project-featured-title">{project.title}</h3>
                <p className="jci-project-featured-description">
                  {project.description}
                </p>
                <div className="jci-project-featured-meta">
                  <span>
                    <FaMapMarkerAlt /> {project.location}
                  </span>
                  <span>
                    <FaCalendarAlt /> {project.duration}
                  </span>
                </div>
                <div className="jci-project-featured-impact">
                  <FaChartLine className="jci-project-featured-impact-icon" />
                  <span>{project.impact}</span>
                </div>
                <button
                  className="jci-project-featured-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  En savoir plus
                  <FaArrowRight className="jci-btn-icon-small" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="jci-projects-grid-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.all.title}</h2>
            <p className="jci-section-subtitle">
              {sectionHeaders.all.subtitle(filteredProjects.length)}
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="jci-projects-grid">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="jci-project-card jci-animate-on-scroll jci-glass-card"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="jci-project-card-header">
                    <div
                      className="jci-project-card-icon"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                      }}
                    >
                      {project.icon}
                    </div>
                    <div
                      className="jci-project-card-status"
                      style={{
                        background: getStatusBg(project.status),
                        color: getStatusColor(project.status),
                      }}
                    >
                      {project.status}
                    </div>
                  </div>
                  <h3 className="jci-project-card-title">{project.title}</h3>
                  <p className="jci-project-card-description">
                    {project.description}
                  </p>
                  <div className="jci-project-card-category">
                    {getCategoryIcon(project.category)}
                    <span>{getCategoryLabel(project.category)}</span>
                  </div>
                  <div className="jci-project-card-footer">
                    <span className="jci-project-card-impact">
                      {project.impact}
                    </span>
                    <button className="jci-project-card-details">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="jci-projects-empty">
              <FaSearch className="jci-projects-empty-icon" />
              <h3>Aucun projet trouvé</h3>
              <p>Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Impact Section */}
      <section className="jci-projects-impact-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-projects-impact-wrapper jci-glass-card">
            <div className="jci-projects-impact-header">
              <div className="jci-projects-impact-icon-wrapper">
                <FaChartLine className="jci-projects-impact-icon" />
              </div>
              <div>
                <h2 className="jci-projects-impact-title">{impactData.title}</h2>
                <p className="jci-projects-impact-subtitle">{impactData.subtitle}</p>
              </div>
            </div>
            <div className="jci-projects-impact-grid">
              {impactData.items.map((item, index) => (
                <div key={index} className="jci-projects-impact-item">
                  <span className="jci-projects-impact-number">{item.number}</span>
                  <span className="jci-projects-impact-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="jci-projects-cta-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-projects-cta-wrapper jci-glass-card">
            <div className="jci-projects-cta-content">
              <div className="jci-projects-cta-icon-wrapper">
                <FaHandsHelping className="jci-projects-cta-icon" />
              </div>
              <h2 className="jci-projects-cta-title">{ctaData.title}</h2>
              <p className="jci-projects-cta-text">{ctaData.description}</p>
              <div className="jci-projects-cta-actions">
                {ctaData.buttons.map((button, index) => (
                  <Link
                    key={index}
                    to={button.link}
                    className={`jci-btn ${
                      button.variant === "primary"
                        ? "jci-btn-primary jci-projects-cta-btn"
                        : "jci-btn-secondary jci-projects-cta-btn-secondary"
                    }`}
                  >
                    {button.text}
                    {button.variant === "primary" && (
                      <FaArrowRight className="jci-btn-icon" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="jci-project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="jci-project-modal jci-glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="jci-project-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <div className="jci-project-modal-content">
              <div className="jci-project-modal-header">
                <div
                  className="jci-project-modal-icon"
                  style={{
                    background: `${selectedProject.color}15`,
                    color: selectedProject.color,
                  }}
                >
                  {selectedProject.icon}
                </div>
                <div className="jci-project-modal-title-area">
                  <h2 className="jci-project-modal-title">
                    {selectedProject.title}
                  </h2>
                  <div className="jci-project-modal-meta">
                    <span className="jci-project-modal-category">
                      {getCategoryIcon(selectedProject.category)}
                      {getCategoryLabel(selectedProject.category)}
                    </span>
                    <span
                      className="jci-project-modal-status"
                      style={{
                        background: getStatusBg(selectedProject.status),
                        color: getStatusColor(selectedProject.status),
                      }}
                    >
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="jci-project-modal-body">
                <p className="jci-project-modal-description">
                  {selectedProject.fullDescription}
                </p>

                <div className="jci-project-modal-details">
                  <div className="jci-project-modal-detail">
                    <FaMapMarkerAlt className="jci-project-modal-detail-icon" />
                    <div>
                      <span className="jci-project-modal-detail-label">Lieu</span>
                      <span className="jci-project-modal-detail-value">
                        {selectedProject.location}
                      </span>
                    </div>
                  </div>
                  <div className="jci-project-modal-detail">
                    <FaCalendarAlt className="jci-project-modal-detail-icon" />
                    <div>
                      <span className="jci-project-modal-detail-label">Durée</span>
                      <span className="jci-project-modal-detail-value">
                        {selectedProject.duration}
                      </span>
                    </div>
                  </div>
                  <div className="jci-project-modal-detail">
                    <FaUsers className="jci-project-modal-detail-icon" />
                    <div>
                      <span className="jci-project-modal-detail-label">
                        Bénéficiaires
                      </span>
                      <span className="jci-project-modal-detail-value">
                        {selectedProject.beneficiaries}
                      </span>
                    </div>
                  </div>
                  <div className="jci-project-modal-detail">
                    <FaChartLine className="jci-project-modal-detail-icon" />
                    <div>
                      <span className="jci-project-modal-detail-label">Impact</span>
                      <span className="jci-project-modal-detail-value">
                        {selectedProject.impact}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="jci-project-modal-achievements">
                  <h4 className="jci-project-modal-achievements-title">
                    <FaTrophy className="jci-project-modal-achievements-icon" />
                    Réalisations
                  </h4>
                  <ul className="jci-project-modal-achievements-list">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index}>
                        <FaCheckCircle className="jci-project-modal-achievement-check" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.testimonials &&
                  selectedProject.testimonials.length > 0 && (
                    <div className="jci-project-modal-testimonials">
                      <h4 className="jci-project-modal-testimonials-title">
                        <FaQuoteLeft className="jci-project-modal-testimonials-icon" />
                        Témoignages
                      </h4>
                      {selectedProject.testimonials.map(
                        (testimonial, index) => (
                          <div
                            key={index}
                            className="jci-project-modal-testimonial"
                          >
                            <p className="jci-project-modal-testimonial-text">
                              "{testimonial.text}"
                            </p>
                            <div className="jci-project-modal-testimonial-author">
                              <span className="jci-project-modal-testimonial-name">
                                {testimonial.name}
                              </span>
                              <span className="jci-project-modal-testimonial-role">
                                {testimonial.role}
                              </span>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  )}
              </div>

              <div className="jci-project-modal-footer">
                <Link
                  to="/join"
                  className="jci-btn jci-btn-primary jci-project-modal-btn"
                >
                  Participer au Projet
                  <FaArrowRight className="jci-btn-icon" />
                </Link>
                <button className="jci-btn jci-btn-secondary jci-project-modal-btn-secondary">
                  <FaShare /> Partager
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;