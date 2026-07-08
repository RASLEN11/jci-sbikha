// Home.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Import all data from Utils/Home.js
import {
  stats,
  projects,
  testimonials,
  events,
  heroData,
  missionData,
  sectionHeaders,
  ctaData,
} from "../../Utils/Pages/Home";

import jciShieldLogo from "../../Images/Home/JCI_Logo.png";

const Home = () => {
  // Animation on scroll
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

  return (
    <div className="jci-home-page">
      {/* Hero Section */}
      <section className="jci-hero-section jci-animate-on-scroll">
        <div className="jci-hero-overlay"></div>
        <div className="jci-hero-content">
          <div className="jci-hero-logo-wrapper">
            <div className="jci-hero-badge">
              <span className="jci-hero-badge-text">{heroData.badge}</span>
            </div>
          </div>
          <h1 className="jci-hero-title">
            <span className="jci-hero-title-highlight">{heroData.title}</span>
            <br />
            <span className="jci-hero-title-sub">{heroData.subtitle}</span>
          </h1>
          <p className="jci-hero-description">{heroData.description}</p>
          <div className="jci-hero-actions">
            {heroData.buttons.map((button, index) => (
              <Link
                key={index}
                to={button.link}
                className={`jci-btn ${
                  button.variant === "primary"
                    ? "jci-btn-primary jci-hero-btn-primary"
                    : "jci-btn-secondary jci-hero-btn-secondary"
                }`}
              >
                {button.text}
                {button.icon && <FaArrowRight className="jci-btn-icon" />}
              </Link>
            ))}
          </div>
          <div className="jci-hero-stats-mini">
            {stats.map((stat, index) => (
              <div key={index} className="jci-hero-stat-mini">
                <span className="jci-hero-stat-mini-value">{stat.value}</span>
                <span className="jci-hero-stat-mini-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="jci-stats-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.stats.title}</h2>
            <p className="jci-section-subtitle">{sectionHeaders.stats.subtitle}</p>
          </div>
          <div className="jci-stats-grid-modern">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="jci-stat-card-modern jci-animate-on-scroll jci-glass-card"
              >
                <div className="jci-stat-icon-wrapper">{stat.icon}</div>
                <div className="jci-stat-value-modern">{stat.value}</div>
                <div className="jci-stat-label-modern">{stat.label}</div>
                <div className="jci-stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="jci-mission-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-mission-grid">
            <div className="jci-mission-content">
              <div className="jci-mission-badge">{missionData.badge}</div>
              <h2 className="jci-mission-title">
                {missionData.title}
                <br />
                <span className="jci-mission-highlight">{missionData.highlight}</span>
              </h2>
              <p className="jci-mission-text">{missionData.description}</p>
              <div className="jci-mission-values">
                {missionData.values.map((value, index) => (
                  <div key={index} className="jci-mission-value">
                    <div
                      className="jci-mission-value-dot"
                      style={{ background: value.color }}
                    ></div>
                    <span>{value.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="jci-mission-visual">
              <div className="jci-mission-circle">
                <div className="jci-mission-circle-inner">
                  <img
                    src={jciShieldLogo}
                    alt="JCI Sbikha Shield Logo"
                    style={{
                      width: "110px",
                      height: "auto",
                      objectFit: "contain",
                      filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="jci-projects-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.projects.title}</h2>
            <p className="jci-section-subtitle">{sectionHeaders.projects.subtitle}</p>
            <Link
              to={sectionHeaders.projects.viewAllLink}
              className="jci-btn jci-btn-secondary jci-view-all-btn"
            >
              {sectionHeaders.projects.viewAllText}{" "}
              <FaChevronRight className="jci-btn-icon-small" />
            </Link>
          </div>
          <div className="jci-projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="jci-project-card jci-animate-on-scroll jci-glass-card"
              >
                <div
                  className="jci-project-icon"
                  style={{
                    background: `${project.color}15`,
                    color: project.color,
                  }}
                >
                  {project.icon}
                </div>
                <h3 className="jci-project-title">{project.title}</h3>
                <p className="jci-project-description">{project.description}</p>
                <div className="jci-project-impact">
                  <FaStar className="jci-project-impact-icon" />
                  <span>{project.impact}</span>
                </div>
                <Link to="/projects" className="jci-project-link">
                  En savoir plus <FaArrowRight className="jci-btn-icon-small" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="jci-events-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-events-wrapper jci-glass-card">
            <div className="jci-events-header">
              <div className="jci-events-header-icon">
                <FaCalendarAlt />
              </div>
              <div>
                <h2 className="jci-events-title">{sectionHeaders.events.title}</h2>
                <p className="jci-events-subtitle">{sectionHeaders.events.subtitle}</p>
              </div>
            </div>
            <div className="jci-events-list">
              {events.map((event, index) => (
                <div key={index} className="jci-event-item">
                  <div className="jci-event-date">
                    <span className="jci-event-day">
                      {event.date.split(" ")[0]}
                    </span>
                    <span className="jci-event-month">
                      {event.date.split(" ")[1]}
                    </span>
                  </div>
                  <div className="jci-event-info">
                    <h4 className="jci-event-title">{event.title}</h4>
                    <div className="jci-event-meta">
                      <span className="jci-event-location">
                        <FaMapMarkerAlt className="jci-event-meta-icon" />{" "}
                        {event.location}
                      </span>
                      <span className="jci-event-type">{event.type}</span>
                    </div>
                  </div>
                  <Link to="/news-events" className="jci-event-rsvp">
                    S'inscrire <FaArrowRight className="jci-btn-icon-small" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="jci-testimonials-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.testimonials.title}</h2>
            <p className="jci-section-subtitle">{sectionHeaders.testimonials.subtitle}</p>
          </div>
          <div className="jci-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="jci-testimonial-card jci-animate-on-scroll jci-glass-card"
              >
                <FaQuoteLeft className="jci-testimonial-quote" />
                <p className="jci-testimonial-text">{testimonial.quote}</p>
                <div className="jci-testimonial-author">
                  <div className="jci-testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="jci-testimonial-author-info">
                    <span className="jci-testimonial-name">{testimonial.name}</span>
                    <span className="jci-testimonial-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="jci-cta-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-cta-wrapper jci-glass-card">
            <div className="jci-cta-content">
              <h2 className="jci-cta-title">{ctaData.title}</h2>
              <p className="jci-cta-text">{ctaData.description}</p>
              <div className="jci-cta-buttons">
                {ctaData.buttons.map((button, index) => (
                  <Link
                    key={index}
                    to={button.link}
                    className={`jci-btn ${
                      button.variant === "primary"
                        ? "jci-btn-primary jci-cta-btn-primary"
                        : "jci-btn-secondary jci-cta-btn-secondary"
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
            <div className="jci-cta-quick-links">
              {ctaData.quickLinks.map((link, index) => (
                <Link key={index} to={link.to} className="jci-cta-link-item">
                  <span className="jci-cta-link-icon">{link.icon}</span>
                  <span className="jci-cta-link-name">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;