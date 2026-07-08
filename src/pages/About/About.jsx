// About.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import {
  FaUsers,
  FaStar,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

// Import all data from Utils/About.js
import {
  timelineData,
  values,
  teamMembers,
  achievements,
  coreStats,
  tabs,
  missionData,
  visionData,
  joinData,
} from "../../Utils/Pages/About";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

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

  return (
    <div className="jci-about-page">
      <section className="jci-about-hero jci-animate-on-scroll">
        <div className="jci-about-hero-overlay"></div>
        <div className="jci-about-hero-content">
          <div className="jci-about-hero-badge">Qui Sommes-Nous</div>
          <h1 className="jci-about-hero-title">
            Ensemble pour un
            <br />
            <span className="jci-about-hero-highlight">Sbikha Meilleur</span>
          </h1>
          <p className="jci-about-hero-description">
            JCI Sbikha est une organisation de jeunes leaders dédiée au
            développement personnel, professionnel et communautaire dans la
            région de Sbikha.
          </p>
          <div className="jci-about-hero-stats">
            {coreStats.map((stat, index) => (
              <div key={index} className="jci-about-hero-stat">
                <div className="jci-about-hero-stat-icon">{stat.icon}</div>
                <div className="jci-about-hero-stat-content">
                  <span className="jci-about-hero-stat-value">{stat.value}</span>
                  <span className="jci-about-hero-stat-label">{stat.label}</span>
                  <span className="jci-about-hero-stat-detail">{stat.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="jci-about-tabs-section">
        <div className="jci-container">
          <div className="jci-about-tabs-wrapper">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`jci-about-tab ${activeTab === tab.id ? "jci-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span className="jci-about-tab-icon"></span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        id="mission"
        className={`jci-about-mission-section ${activeTab === "mission" ? "jci-active-section" : ""}`}
      >
        <div className="jci-container">
          <div className="jci-about-mission-grid jci-animate-on-scroll">
            <div className="jci-about-mission-card jci-glass-card">
              <div className="jci-about-mission-icon-wrapper">
                {missionData.icon}
              </div>
              <h2 className="jci-about-mission-title">{missionData.title}</h2>
              <p className="jci-about-mission-text">{missionData.description}</p>
              <div className="jci-about-mission-points">
                {missionData.points.map((point, index) => (
                  <div key={index} className="jci-about-mission-point">
                    <FaCheckCircle className="jci-about-mission-check" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="jci-about-vision-card jci-glass-card">
              <div className="jci-about-vision-icon-wrapper">
                {visionData.icon}
              </div>
              <h2 className="jci-about-vision-title">{visionData.title}</h2>
              <p className="jci-about-vision-text">{visionData.description}</p>
              <div className="jci-about-vision-points">
                {visionData.points.map((point, index) => (
                  <div key={index} className="jci-about-vision-point">
                    <FaStar className="jci-about-vision-star" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section
        id="history"
        className={`jci-about-history-section ${activeTab === "history" ? "jci-active-section" : ""}`}
      >
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">Notre Histoire</h2>
            <p className="jci-section-subtitle">
              Un parcours d'engagement et de transformation
            </p>
          </div>
          <div className="jci-about-timeline">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`jci-timeline-item ${index % 2 === 0 ? "jci-left" : "jci-right"} jci-animate-on-scroll`}
              >
                <div className="jci-timeline-content jci-glass-card">
                  <div className="jci-timeline-icon-wrapper">{item.icon}</div>
                  <div className="jci-timeline-year">{item.year}</div>
                  <h3 className="jci-timeline-title">{item.title}</h3>
                  <p className="jci-timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        id="values"
        className={`jci-about-values-section ${activeTab === "values" ? "jci-active-section" : ""}`}
      >
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">Nos Valeurs Fondamentales</h2>
            <p className="jci-section-subtitle">
              Les principes qui guident nos actions
            </p>
          </div>
          <div className="jci-about-values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className="jci-about-value-card jci-animate-on-scroll jci-glass-card"
              >
                <div
                  className="jci-about-value-icon"
                  style={{ background: `${value.color}15`, color: value.color }}
                >
                  {value.icon}
                </div>
                <h3 className="jci-about-value-title">{value.title}</h3>
                <p className="jci-about-value-description">{value.description}</p>
                <div
                  className="jci-about-value-line"
                  style={{ background: value.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="jci-about-achievements-section">
        <div className="jci-container">
          <div className="jci-about-achievements-wrapper jci-animate-on-scroll jci-glass-card">
            <div className="jci-about-achievements-header">
              <h2 className="jci-about-achievements-title">Nos Réalisations</h2>
              <p className="jci-about-achievements-subtitle">
                Un impact mesurable et durable
              </p>
            </div>
            <div className="jci-about-achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="jci-about-achievement-item">
                  <div className="jci-about-achievement-number">
                    {achievement.number}
                  </div>
                  <div className="jci-about-achievement-label">
                    {achievement.label}
                  </div>
                  <div className="jci-about-achievement-description">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        className={`jci-about-team-section ${activeTab === "team" ? "jci-active-section" : ""}`}
      >
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">Notre Équipe</h2>
            <p className="jci-section-subtitle">
              Des leaders passionnés au service de la communauté
            </p>
          </div>
          <div className="jci-about-team-grid">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="jci-about-team-card jci-animate-on-scroll jci-glass-card"
              >
                <div className="jci-about-team-avatar">{member.initials}</div>
                <h3 className="jci-about-team-name">{member.name}</h3>
                <div className="jci-about-team-role">{member.role}</div>
                <p className="jci-about-team-description">{member.description}</p>
                <div className="jci-about-team-social">
                  <button className="jci-about-team-social-btn">
                    <FaLinkedin />
                  </button>
                  <button className="jci-about-team-social-btn">
                    <FaEnvelope />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="jci-about-join-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-about-join-wrapper jci-glass-card">
            <div className="jci-about-join-content">
              <div className="jci-about-join-icon-wrapper">
                <FaUsers className="jci-about-join-icon" />
              </div>
              <h2 className="jci-about-join-title">{joinData.title}</h2>
              <p className="jci-about-join-text">{joinData.description}</p>
              <div className="jci-about-join-benefits">
                {joinData.benefits.map((benefit, index) => (
                  <div key={index} className="jci-about-join-benefit">
                    <FaCheckCircle className="jci-about-join-check" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="jci-about-join-actions">
                <Link
                  to="/join"
                  className="jci-btn jci-btn-primary jci-about-join-btn"
                >
                  Devenir Membre <FaArrowRight className="jci-btn-icon" />
                </Link>
                <Link
                  to="/contact"
                  className="jci-btn jci-btn-secondary jci-about-join-btn-secondary"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;