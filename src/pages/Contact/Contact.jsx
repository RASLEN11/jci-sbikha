// Contact.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import {
  FaArrowRight,
  FaPaperPlane,
  FaInfoCircle,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdSend } from "react-icons/md";

// Import all data from Utils/Contact.js
import {
  contactInfo,
  socialLinks,
  stats,
  faqs,
  heroData,
  contactFormData,
  mapData,
  ctaData,
  successMessage,
  validationMessages,
} from "../../Utils/Pages/Contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) 
      errors.name = validationMessages.name.required;
    if (!formData.email.trim()) 
      errors.email = validationMessages.email.required;
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = validationMessages.email.invalid;
    if (!formData.subject.trim()) 
      errors.subject = validationMessages.subject.required;
    if (!formData.message.trim())
      errors.message = validationMessages.message.required;
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="jci-contact-page">
      <section className="jci-contact-hero jci-animate-on-scroll">
        <div className="jci-contact-hero-overlay"></div>
        <div className="jci-contact-hero-content">
          <div className="jci-contact-hero-badge">
            {heroData.badge.icon} {heroData.badge.text}
          </div>
          <h1 className="jci-contact-hero-title">
            {heroData.title}
            <br />
            <span className="jci-contact-hero-highlight">{heroData.highlight}</span>
          </h1>
          <p className="jci-contact-hero-description">{heroData.description}</p>
          <div className="jci-contact-hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="jci-contact-hero-stat">
                <div className="jci-contact-hero-stat-icon">{stat.icon}</div>
                <div>
                  <span className="jci-contact-hero-stat-number">{stat.value}</span>
                  <span className="jci-contact-hero-stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="jci-contact-grid-section">
        <div className="jci-container">
          <div className="jci-contact-grid-wrapper">
            <div className="jci-contact-info-side jci-animate-on-scroll">
              <div className="jci-contact-info-header">
                <h2 className="jci-contact-info-title">Informations de Contact</h2>
                <p className="jci-contact-info-subtitle">
                  N'hésitez pas à nous joindre par l'un de ces moyens
                </p>
              </div>
              <div className="jci-contact-info-cards">
                {contactInfo.map((item, index) => (
                  <div key={index} className="jci-contact-info-card jci-glass-card">
                    <div className="jci-contact-info-card-icon">{item.icon}</div>
                    <div className="jci-contact-info-card-content">
                      <h4 className="jci-contact-info-card-title">{item.title}</h4>
                      <p className="jci-contact-info-card-details">
                        {item.details}
                      </p>
                      <p className="jci-contact-info-card-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="jci-contact-social-section">
                <h4 className="jci-contact-social-title">Suivez-Nous</h4>
                <div className="jci-contact-social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="jci-contact-social-link"
                      style={{ "--jci-social-color": social.color }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                      <span className="jci-contact-social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="jci-contact-form-side jci-animate-on-scroll">
              <div className="jci-contact-form-wrapper jci-glass-card">
                <div className="jci-contact-form-header">
                  <div className="jci-contact-form-icon-wrapper">
                    <FaPaperPlane className="jci-contact-form-icon" />
                  </div>
                  <h2 className="jci-contact-form-title">{contactFormData.title}</h2>
                  <p className="jci-contact-form-subtitle">{contactFormData.subtitle}</p>
                </div>
                {isSubmitted && (
                  <div className="jci-contact-form-success">
                    <FaCheckCircle className="jci-contact-form-success-icon" />
                    <div>
                      <h4>{successMessage.title}</h4>
                      <p>{successMessage.description}</p>
                    </div>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="jci-contact-form">
                  {contactFormData.fields.map((field) => (
                    <div key={field.id} className="jci-contact-form-group">
                      <label htmlFor={field.id}>
                        {field.icon && (
                          <span className="jci-contact-form-label-icon">
                            {field.icon}
                          </span>
                        )}
                        {field.label}
                        {field.required && (
                          <span className="jci-contact-form-required">*</span>
                        )}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.id}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          rows={field.rows || 5}
                          className={`jci-contact-form-textarea ${
                            formErrors[field.name] ? "jci-error" : ""
                          }`}
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          className={`jci-contact-form-input ${
                            formErrors[field.name] ? "jci-error" : ""
                          }`}
                        />
                      )}
                      {formErrors[field.name] && (
                        <span className="jci-contact-form-error">
                          {formErrors[field.name]}
                        </span>
                      )}
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="jci-btn jci-btn-primary jci-contact-form-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="jci-contact-form-spinner"></span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <MdSend className="jci-contact-form-submit-icon" />
                        Envoyer le Message{" "}
                        <FaArrowRight className="jci-btn-icon" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="jci-contact-map-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-contact-map-wrapper jci-glass-card">
            <div className="jci-contact-map-header">
              <div className="jci-contact-map-icon-wrapper">
                <FaMapMarkerAlt className="jci-contact-map-icon" />
              </div>
              <div>
                <h2 className="jci-contact-map-title">{mapData.title}</h2>
                <p className="jci-contact-map-subtitle">{mapData.subtitle}</p>
              </div>
            </div>
            <div className="jci-contact-map-container">
              <div className="jci-contact-map-placeholder">
                <div className="jci-contact-map-placeholder-content">
                  <div className="jci-contact-map-pin">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="jci-contact-map-placeholder-info">
                    <h4>{mapData.location.name}</h4>
                    <p>{mapData.location.address}</p>
                    <button className="jci-contact-map-direction-btn">
                      Itinéraire{" "}
                      <FaExternalLinkAlt className="jci-btn-icon-small" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="jci-contact-faq-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-section-header-wrapper">
            <h2 className="jci-section-title-modern">Questions Fréquentes</h2>
            <p className="jci-section-subtitle">
              Trouvez rapidement une réponse à vos questions
            </p>
          </div>
          <div className="jci-contact-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="jci-contact-faq-card jci-glass-card">
                <div className="jci-contact-faq-question">
                  <FaInfoCircle className="jci-contact-faq-icon" />
                  <h4>{faq.question}</h4>
                </div>
                <p className="jci-contact-faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="jci-contact-cta-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-contact-cta-wrapper jci-glass-card">
            <div className="jci-contact-cta-content">
              <div className="jci-contact-cta-icon-wrapper">
                {ctaData.icon}
              </div>
              <h2 className="jci-contact-cta-title">{ctaData.title}</h2>
              <p className="jci-contact-cta-text">{ctaData.description}</p>
              <div className="jci-contact-cta-actions">
                {ctaData.buttons.map((button, index) => (
                  <Link
                    key={index}
                    to={button.link}
                    className={`jci-btn ${
                      button.variant === "primary"
                        ? "jci-btn-primary jci-contact-cta-btn"
                        : "jci-btn-secondary jci-contact-cta-btn-secondary"
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
    </div>
  );
};

export default Contact;