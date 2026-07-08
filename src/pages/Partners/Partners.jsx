// Partners.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Partners.css";
import {
  FaHandshake,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
  FaChartLine,
  FaCalendarAlt,
  FaQuoteLeft,
  FaAward,
  FaHandsHelping,
} from "react-icons/fa";

// Import all data from Utils/Partners.js
import {
  categories,
  partners,
  heroData,
  benefits,
  ctaData,
  sectionHeaders,
  categoryIconMap,
} from "../../Utils/Pages/Partners";

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".jci-animate-on-scroll").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85)
          el.classList.add("jci-visible");
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCategoryIcon = (category) => {
    return categoryIconMap[category] || <FaHandshake />;
  };

  const filteredPartners =
    activeCategory === "all"
      ? partners
      : partners.filter((p) => p.category === activeCategory);

  const featuredPartners = partners.filter((p) => p.id <= 4);

  return (
    <div className="jci-partners-page">
      {/* Hero Section */}
      <section className="jci-partners-hero jci-animate-on-scroll">
        <div className="jci-partners-hero-overlay"></div>
        <div className="jci-partners-hero-content">
          <div className="jci-partners-hero-badge">
            {heroData.badge.icon} {heroData.badge.text}
          </div>
          <h1 className="jci-partners-hero-title">
            {heroData.title}
            <br />
            <span className="jci-partners-hero-highlight">{heroData.highlight}</span>
          </h1>
          <p className="jci-partners-hero-description">{heroData.description}</p>
          <div className="jci-partners-hero-stats">
            {heroData.stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="jci-partners-hero-stat">
                  <span className="jci-partners-hero-stat-number">{stat.value}</span>
                  <span className="jci-partners-hero-stat-label">{stat.label}</span>
                </div>
                {index < heroData.stats.length - 1 && (
                  <div className="jci-partners-hero-stat-divider"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="jci-partners-featured-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.featured.title}</h2>
            <p className="jci-section-subtitle">{sectionHeaders.featured.subtitle}</p>
          </div>
          <div className="jci-partners-featured-grid">
            {featuredPartners.map((partner) => (
              <div
                key={partner.id}
                className="jci-partner-featured-card jci-animate-on-scroll jci-glass-card"
              >
                <div className="jci-partner-featured-badge">
                  <FaStar className="jci-partner-featured-star" /> Partenaire Clé
                </div>
                <div className="jci-partner-featured-header">
                  <div
                    className="jci-partner-featured-logo"
                    style={{
                      background: `${partner.color}15`,
                      color: partner.color,
                    }}
                  >
                    {partner.logo}
                  </div>
                  <div className="jci-partner-featured-info">
                    <h3 className="jci-partner-featured-name">{partner.name}</h3>
                    <span className="jci-partner-featured-category">
                      {getCategoryIcon(partner.category)}
                      {categories.find((c) => c.id === partner.category)?.label}
                    </span>
                  </div>
                </div>
                <p className="jci-partner-featured-description">
                  {partner.description}
                </p>
                <div className="jci-partner-featured-impact">
                  <FaHandsHelping className="jci-partner-featured-impact-icon" />
                  <span>{partner.impact}</span>
                </div>
                <div className="jci-partner-featured-years">
                  <FaCalendarAlt className="jci-partner-featured-years-icon" />
                  <span>{partner.years}</span>
                </div>
                <button
                  className="jci-partner-featured-btn"
                  onClick={() => setSelectedPartner(partner)}
                >
                  En savoir plus <FaArrowRight className="jci-btn-icon-small" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="jci-partners-categories-section">
        <div className="jci-container">
          <div className="jci-partners-categories-wrapper">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`jci-partners-category-btn ${activeCategory === category.id ? "jci-active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="jci-partners-category-icon">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="jci-partners-grid-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.all.title}</h2>
            <p className="jci-section-subtitle">
              {sectionHeaders.all.subtitle(filteredPartners.length)}
            </p>
          </div>
          <div className="jci-partners-grid">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className="jci-partner-card jci-animate-on-scroll jci-glass-card"
                onClick={() => setSelectedPartner(partner)}
              >
                <div
                  className="jci-partner-card-logo"
                  style={{
                    background: `${partner.color}15`,
                    color: partner.color,
                  }}
                >
                  {partner.logo}
                </div>
                <h3 className="jci-partner-card-name">{partner.name}</h3>
                <div className="jci-partner-card-category">
                  {getCategoryIcon(partner.category)}
                  <span>
                    {categories.find((c) => c.id === partner.category)?.label}
                  </span>
                </div>
                <p className="jci-partner-card-description">
                  {partner.description}
                </p>
                <div className="jci-partner-card-impact">
                  <FaChartLine className="jci-partner-card-impact-icon" />
                  <span>{partner.impact}</span>
                </div>
                <div className="jci-partner-card-footer">
                  <span className="jci-partner-card-years">{partner.years}</span>
                  <button className="jci-partner-card-details">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="jci-partners-benefits-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-partners-benefits-wrapper jci-glass-card">
            <div className="jci-partners-benefits-content">
              <h2 className="jci-partners-benefits-title">{sectionHeaders.benefits.title}</h2>
              <p className="jci-partners-benefits-subtitle">{sectionHeaders.benefits.subtitle}</p>
              <div className="jci-partners-benefits-grid">
                {benefits.map((item, index) => (
                  <div key={index} className="jci-partners-benefit-item">
                    <div className="jci-partners-benefit-icon-wrapper">
                      {item.icon}
                    </div>
                    <h4 className="jci-partners-benefit-item-title">
                      {item.title}
                    </h4>
                    <p className="jci-partners-benefit-item-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="jci-btn jci-btn-primary jci-partners-benefits-btn"
              >
                Devenir Partenaire <FaArrowRight className="jci-btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="jci-partners-testimonials-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.testimonials.title}</h2>
            <p className="jci-section-subtitle">{sectionHeaders.testimonials.subtitle}</p>
          </div>
          <div className="jci-partners-testimonials-grid">
            {partners.slice(0, 4).map((partner) => (
              <div
                key={partner.id}
                className="jci-partners-testimonial-card jci-animate-on-scroll jci-glass-card"
              >
                <FaQuoteLeft className="jci-partners-testimonial-quote" />
                <p className="jci-partners-testimonial-text">
                  {partner.testimonial}
                </p>
                <div className="jci-partners-testimonial-author">
                  <div
                    className="jci-partners-testimonial-logo"
                    style={{
                      background: `${partner.color}15`,
                      color: partner.color,
                    }}
                  >
                    {partner.logo}
                  </div>
                  <div className="jci-partners-testimonial-info">
                    <span className="jci-partners-testimonial-name">
                      {partner.name}
                    </span>
                    <span className="jci-partners-testimonial-category">
                      {categories.find((c) => c.id === partner.category)?.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="jci-partners-cta-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-partners-cta-wrapper jci-glass-card">
            <div className="jci-partners-cta-content">
              <div className="jci-partners-cta-icon-wrapper">
                <FaHandshake className="jci-partners-cta-icon" />
              </div>
              <h2 className="jci-partners-cta-title">{ctaData.title}</h2>
              <p className="jci-partners-cta-text">{ctaData.description}</p>
              <div className="jci-partners-cta-actions">
                {ctaData.buttons.map((button, index) => (
                  <Link
                    key={index}
                    to={button.link}
                    className={`jci-btn ${
                      button.variant === "primary"
                        ? "jci-btn-primary jci-partners-cta-btn"
                        : "jci-btn-secondary jci-partners-cta-btn-secondary"
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

      {/* Modal */}
      {selectedPartner && (
        <div
          className="jci-partner-modal-overlay"
          onClick={() => setSelectedPartner(null)}
        >
          <div
            className="jci-partner-modal jci-glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="jci-partner-modal-close"
              onClick={() => setSelectedPartner(null)}
            >
              ×
            </button>
            <div className="jci-partner-modal-content">
              <div className="jci-partner-modal-header">
                <div
                  className="jci-partner-modal-logo"
                  style={{
                    background: `${selectedPartner.color}15`,
                    color: selectedPartner.color,
                  }}
                >
                  {selectedPartner.logo}
                </div>
                <div className="jci-partner-modal-title">
                  <h2>{selectedPartner.name}</h2>
                  <span className="jci-partner-modal-category">
                    {getCategoryIcon(selectedPartner.category)}
                    {
                      categories.find((c) => c.id === selectedPartner.category)
                        ?.label
                    }
                  </span>
                </div>
              </div>
              <div className="jci-partner-modal-body">
                <p className="jci-partner-modal-description">
                  {selectedPartner.description}
                </p>
                <div className="jci-partner-modal-details">
                  <div className="jci-partner-modal-detail-item">
                    <FaHandshake className="jci-partner-modal-detail-icon" />
                    <div>
                      <span className="jci-partner-modal-detail-label">
                        Partenariat
                      </span>
                      <span className="jci-partner-modal-detail-value">
                        {selectedPartner.partnership}
                      </span>
                    </div>
                  </div>
                  <div className="jci-partner-modal-detail-item">
                    <FaChartLine className="jci-partner-modal-detail-icon" />
                    <div>
                      <span className="jci-partner-modal-detail-label">Impact</span>
                      <span className="jci-partner-modal-detail-value">
                        {selectedPartner.impact}
                      </span>
                    </div>
                  </div>
                  <div className="jci-partner-modal-detail-item">
                    <FaCalendarAlt className="jci-partner-modal-detail-icon" />
                    <div>
                      <span className="jci-partner-modal-detail-label">Durée</span>
                      <span className="jci-partner-modal-detail-value">
                        {selectedPartner.years}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="jci-partner-modal-achievements">
                  <h4 className="jci-partner-modal-achievements-title">
                    <FaAward className="jci-partner-modal-achievements-icon" />{" "}
                    Réalisations
                  </h4>
                  <ul className="jci-partner-modal-achievements-list">
                    {selectedPartner.achievements.map((achievement, index) => (
                      <li key={index}>
                        <FaCheckCircle className="jci-partner-modal-achievement-check" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="jci-partner-modal-testimonial">
                  <FaQuoteLeft className="jci-partner-modal-testimonial-quote" />
                  <p className="jci-partner-modal-testimonial-text">
                    {selectedPartner.testimonial}
                  </p>
                </div>
              </div>
              <div className="jci-partner-modal-footer">
                <button className="jci-btn jci-btn-primary jci-partner-modal-btn">
                  Visiter le Site <FaArrowRight className="jci-btn-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners;