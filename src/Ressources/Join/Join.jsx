// Join.jsx
import React, { useState, useEffect } from 'react';
import './Join.css';
import { 
  FaUserPlus,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaInfoCircle,
} from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

// Import all data from Utils/Join.js
import {
  benefits,
  testimonials,
  faqs,
  heroData,
  sectionHeaders,
  formData,
  emailRegex,
} from '../../Utils/Ressources/Join';

const Join = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    profession: '',
    motivation: '',
    skills: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    
    // Find required fields and validate
    formData.fields.forEach(field => {
      if (field.required) {
        const value = formState[field.name]?.trim() || '';
        if (!value) {
          errors[field.name] = field.validationMessage || 'Ce champ est requis';
        }
        if (field.name === 'email' && value && !emailRegex.test(value)) {
          errors[field.name] = field.invalidMessage || 'Email invalide';
        }
      }
    });
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        fullName: '',
        email: '',
        phone: '',
        birthDate: '',
        profession: '',
        motivation: '',
        skills: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  // Render form field based on type
  const renderField = (field) => {
    const value = formState[field.name] || '';
    const error = formErrors[field.name];
    const baseClassName = field.type === 'textarea' ? 'jci-join-form-textarea' : 'jci-join-form-input';
    const className = `${baseClassName} ${error ? 'jci-error' : ''}`;

    if (field.type === 'textarea') {
      return (
        <textarea
          id={field.id}
          name={field.name}
          value={value}
          onChange={handleInputChange}
          placeholder={field.placeholder}
          rows={field.rows || 3}
          className={className}
        />
      );
    }

    return (
      <input
        type={field.type}
        id={field.id}
        name={field.name}
        value={value}
        onChange={handleInputChange}
        placeholder={field.placeholder}
        className={className}
      />
    );
  };

  return (
    <div className="jci-join-page">
      {/* Hero Section */}
      <section className="jci-join-hero jci-animate-on-scroll">
        <div className="jci-join-hero-overlay"></div>
        <div className="jci-join-hero-content">
          <div className="jci-join-hero-badge">
            {heroData.badge.icon}
            {heroData.badge.text}
          </div>
          <h1 className="jci-join-hero-title">
            {heroData.title}<br />
            <span className="jci-join-hero-highlight">{heroData.highlight}</span>
          </h1>
          <p className="jci-join-hero-description">{heroData.description}</p>
          <div className="jci-join-hero-stats">
            {heroData.stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="jci-join-hero-stat">
                  <span className="jci-join-hero-stat-number">{stat.value}</span>
                  <span className="jci-join-hero-stat-label">{stat.label}</span>
                </div>
                {index < heroData.stats.length - 1 && (
                  <div className="jci-join-hero-stat-divider"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="jci-join-benefits-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-section-header-wrapper">
            <h2 className="jci-section-title-modern">{sectionHeaders.benefits.title}</h2>
            <p className="jci-section-subtitle">{sectionHeaders.benefits.subtitle}</p>
          </div>

          <div className="jci-join-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="jci-join-benefit-card jci-glass-card">
                <div className="jci-join-benefit-icon-wrapper">
                  {benefit.icon}
                </div>
                <h3 className="jci-join-benefit-title">{benefit.title}</h3>
                <p className="jci-join-benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="jci-join-form-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-join-form-wrapper jci-glass-card">
            <div className="jci-join-form-header">
              <div className="jci-join-form-icon-wrapper">
                <FaUserPlus className="jci-join-form-icon" />
              </div>
              <h2 className="jci-join-form-title">{formData.title}</h2>
              <p className="jci-join-form-subtitle">{formData.subtitle}</p>
            </div>

            {isSubmitted && (
              <div className="jci-join-form-success">
                <FaCheckCircle className="jci-join-form-success-icon" />
                <div>
                  <h4>{formData.successMessage.title}</h4>
                  <p>{formData.successMessage.description}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="jci-join-form">
              {/* Group fields in rows of 2 */}
              {formData.fields.reduce((rows, field, index) => {
                // Fields that should be full width
                const fullWidthFields = ['motivation', 'message'];
                if (fullWidthFields.includes(field.name)) {
                  rows.push({ type: 'full', field });
                  return rows;
                }
                
                // Group in pairs
                if (index % 2 === 0) {
                  const nextField = formData.fields[index + 1];
                  // Check if next field is full width
                  if (nextField && !fullWidthFields.includes(nextField.name)) {
                    rows.push({ type: 'row', fields: [field, nextField] });
                  } else if (nextField) {
                    rows.push({ type: 'full', field });
                    rows.push({ type: 'full', field: nextField });
                  } else {
                    rows.push({ type: 'row', fields: [field] });
                  }
                } else if (!fullWidthFields.includes(field.name)) {
                  // Skip if already added in previous row
                  const prevField = formData.fields[index - 1];
                  if (prevField && !fullWidthFields.includes(prevField.name)) {
                    // Already added in row
                    return rows;
                  }
                  rows.push({ type: 'full', field });
                }
                return rows;
              }, []).map((row, rowIndex) => {
                if (row.type === 'full') {
                  const field = row.field;
                  return (
                    <div key={field.id} className="jci-join-form-group">
                      <label htmlFor={field.id}>
                        {field.icon && (
                          <span className="jci-join-form-label-icon">{field.icon}</span>
                        )}
                        {field.label}
                        {field.required && (
                          <span className="jci-join-form-required">*</span>
                        )}
                      </label>
                      {renderField(field)}
                      {formErrors[field.name] && (
                        <span className="jci-join-form-error">{formErrors[field.name]}</span>
                      )}
                    </div>
                  );
                }

                return (
                  <div key={rowIndex} className="jci-join-form-row">
                    {row.fields.map((field) => (
                      <div key={field.id} className="jci-join-form-group">
                        <label htmlFor={field.id}>
                          {field.icon && (
                            <span className="jci-join-form-label-icon">{field.icon}</span>
                          )}
                          {field.label}
                          {field.required && (
                            <span className="jci-join-form-required">*</span>
                          )}
                        </label>
                        {renderField(field)}
                        {formErrors[field.name] && (
                          <span className="jci-join-form-error">{formErrors[field.name]}</span>
                        )}
                      </div>
                    ))}
                  </div>
                );
              })}

              <button 
                type="submit" 
                className="jci-btn jci-btn-primary jci-join-form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="jci-join-form-spinner"></span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <MdSend className="jci-join-form-submit-icon" />
                    Envoyer ma candidature
                    <FaArrowRight className="jci-btn-icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="jci-join-testimonials-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-section-header-wrapper">
            <h2 className="jci-section-title-modern">{sectionHeaders.testimonials.title}</h2>
            <p className="jci-section-subtitle">{sectionHeaders.testimonials.subtitle}</p>
          </div>

          <div className="jci-join-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="jci-join-testimonial-card jci-glass-card">
                <FaQuoteLeft className="jci-join-testimonial-quote" />
                <p className="jci-join-testimonial-text">{testimonial.text}</p>
                <div className="jci-join-testimonial-author">
                  <div className="jci-join-testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <span className="jci-join-testimonial-name">{testimonial.name}</span>
                    <span className="jci-join-testimonial-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="jci-join-faq-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-section-header-wrapper">
            <h2 className="jci-section-title-modern">{sectionHeaders.faq.title}</h2>
            <p className="jci-section-subtitle">{sectionHeaders.faq.subtitle}</p>
          </div>

          <div className="jci-join-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="jci-join-faq-card jci-glass-card">
                <div className="jci-join-faq-question">
                  <FaInfoCircle className="jci-join-faq-icon" />
                  <h4>{faq.question}</h4>
                </div>
                <p className="jci-join-faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;