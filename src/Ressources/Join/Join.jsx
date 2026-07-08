import React, { useState, useEffect } from 'react';
import './Join.css';
import { 
  FaUserPlus,
  FaHandsHelping,
  FaTrophy,
  FaGlobe,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaUser,
  FaRegEnvelope,
  FaInfoCircle,
  FaRegComment,
  FaStar,
  FaNetworkWired,
  FaQuoteLeft,
  FaCalendarAlt,
  FaUserGraduate,
  FaHeart
} from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

const Join = () => {
  const [formData, setFormData] = useState({
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
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          el.classList.add('visible');
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
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Veuillez entrer votre nom complet';
    if (!formData.email.trim()) errors.email = 'Veuillez entrer votre email';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email invalide';
    if (!formData.phone.trim()) errors.phone = 'Veuillez entrer votre numéro de téléphone';
    if (!formData.motivation.trim()) errors.motivation = 'Veuillez expliquer votre motivation';
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
      setFormData({
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

  // Benefits
  const benefits = [
    {
      icon: <FaUserGraduate />,
      title: 'Développement Personnel',
      description: 'Accédez à des formations en leadership, communication et gestion de projet.'
    },
    {
      icon: <FaNetworkWired />,
      title: 'Réseautage',
      description: 'Rejoignez un réseau de 120+ jeunes leaders engagés et connectés.'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Impact Social',
      description: 'Participez à des projets communautaires qui font la différence.'
    },
    {
      icon: <FaGlobe />,
      title: 'Réseau International',
      description: 'Faites partie du réseau JCI présent dans plus de 100 pays.'
    },
    {
      icon: <FaTrophy />,
      title: 'Reconnaissance',
      description: 'Valorisez votre engagement avec des certifications et des prix.'
    },
    {
      icon: <FaRocket />,
      title: 'Innovation',
      description: 'Développez des projets innovants avec le soutien de la communauté.'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Ahmed Ben Ali',
      role: 'Président JCI Sbikha',
      text: 'Rejoindre JCI Sbikha a été une décision transformative. J\'ai développé des compétences de leadership et rencontré des personnes exceptionnelles.'
    },
    {
      name: 'Sana Mansouri',
      role: 'Membre Active',
      text: 'JCI Sbikha m\'a offert une plateforme pour contribuer à ma communauté et grandir en tant que leader. Une expérience inoubliable.'
    }
  ];

  return (
    <div className="join-page">
      {/* Hero Section */}
      <section className="join-hero animate-on-scroll">
        <div className="join-hero-overlay"></div>
        <div className="join-hero-content">
          <div className="join-hero-badge">
            <FaUserPlus className="join-hero-badge-icon" />
            Rejoignez-Nous
          </div>
          <h1 className="join-hero-title">
            Devenez Membre de<br />
            <span className="join-hero-highlight">JCI Sbikha</span>
          </h1>
          <p className="join-hero-description">
            Rejoignez une communauté dynamique de jeunes leaders engagés 
            pour un changement positif à Sbikha et dans la région.
          </p>
          <div className="join-hero-stats">
            <div className="join-hero-stat">
              <span className="join-hero-stat-number">120+</span>
              <span className="join-hero-stat-label">Membres Actifs</span>
            </div>
            <div className="join-hero-stat-divider"></div>
            <div className="join-hero-stat">
              <span className="join-hero-stat-number">24+</span>
              <span className="join-hero-stat-label">Événements/An</span>
            </div>
            <div className="join-hero-stat-divider"></div>
            <div className="join-hero-stat">
              <span className="join-hero-stat-number">8</span>
              <span className="join-hero-stat-label">Années d\'Impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="join-benefits-section animate-on-scroll">
        <div className="jci-container">
          <div className="section-header-wrapper">
            <h2 className="section-title-modern">Pourquoi Rejoindre JCI Sbikha ?</h2>
            <p className="section-subtitle">Les avantages d'être membre de notre communauté</p>
          </div>

          <div className="join-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="join-benefit-card glass-card">
                <div className="join-benefit-icon-wrapper">
                  {benefit.icon}
                </div>
                <h3 className="join-benefit-title">{benefit.title}</h3>
                <p className="join-benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="join-form-section animate-on-scroll">
        <div className="jci-container">
          <div className="join-form-wrapper glass-card">
            <div className="join-form-header">
              <div className="join-form-icon-wrapper">
                <FaUserPlus className="join-form-icon" />
              </div>
              <h2 className="join-form-title">Formulaire d'Adhésion</h2>
              <p className="join-form-subtitle">
                Remplissez ce formulaire pour rejoindre JCI Sbikha. 
                Nous vous contacterons dans les plus brefs délais.
              </p>
            </div>

            {isSubmitted && (
              <div className="join-form-success">
                <FaCheckCircle className="join-form-success-icon" />
                <div>
                  <h4>Inscription envoyée avec succès !</h4>
                  <p>Nous vous contacterons dans les 48 heures pour la suite du processus.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="join-form">
              <div className="join-form-row">
                <div className="join-form-group">
                  <label htmlFor="fullName">
                    <FaUser className="join-form-label-icon" />
                    Nom complet
                    <span className="join-form-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Votre nom et prénom"
                    className={`join-form-input ${formErrors.fullName ? 'error' : ''}`}
                  />
                  {formErrors.fullName && (
                    <span className="join-form-error">{formErrors.fullName}</span>
                  )}
                </div>

                <div className="join-form-group">
                  <label htmlFor="email">
                    <FaRegEnvelope className="join-form-label-icon" />
                    Email
                    <span className="join-form-required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    className={`join-form-input ${formErrors.email ? 'error' : ''}`}
                  />
                  {formErrors.email && (
                    <span className="join-form-error">{formErrors.email}</span>
                  )}
                </div>
              </div>

              <div className="join-form-row">
                <div className="join-form-group">
                  <label htmlFor="phone">
                    <FaPhone className="join-form-label-icon" />
                    Téléphone
                    <span className="join-form-required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+216 XX XXX XXX"
                    className={`join-form-input ${formErrors.phone ? 'error' : ''}`}
                  />
                  {formErrors.phone && (
                    <span className="join-form-error">{formErrors.phone}</span>
                  )}
                </div>

                <div className="join-form-group">
                  <label htmlFor="birthDate">
                    <FaCalendarAlt className="join-form-label-icon" />
                    Date de naissance
                  </label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="join-form-input"
                  />
                </div>
              </div>

              <div className="join-form-group">
                <label htmlFor="profession">
                  <FaInfoCircle className="join-form-label-icon" />
                  Profession / Études
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  placeholder="Votre profession ou domaine d'études"
                  className="join-form-input"
                />
              </div>

              <div className="join-form-group">
                <label htmlFor="motivation">
                  <FaHeart className="join-form-label-icon" />
                  Pourquoi souhaitez-vous rejoindre JCI Sbikha ?
                  <span className="join-form-required">*</span>
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="Dites-nous ce qui vous motive à rejoindre notre communauté..."
                  rows="3"
                  className={`join-form-textarea ${formErrors.motivation ? 'error' : ''}`}
                />
                {formErrors.motivation && (
                  <span className="join-form-error">{formErrors.motivation}</span>
                )}
              </div>

              <div className="join-form-group">
                <label htmlFor="skills">
                  <FaStar className="join-form-label-icon" />
                  Compétences et intérêts
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="Vos compétences, centres d'intérêt..."
                  className="join-form-input"
                />
              </div>

              <div className="join-form-group">
                <label htmlFor="message">
                  <FaRegComment className="join-form-label-icon" />
                  Message supplémentaire
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Un message ou une question..."
                  rows="3"
                  className="join-form-textarea"
                />
              </div>

              <button 
                type="submit" 
                className="jci-btn jci-btn-primary join-form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="join-form-spinner"></span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <MdSend className="join-form-submit-icon" />
                    Envoyer ma candidature
                    <FaArrowRight className="btn-icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="join-testimonials-section animate-on-scroll">
        <div className="jci-container">
          <div className="section-header-wrapper">
            <h2 className="section-title-modern">Témoignages de Membres</h2>
            <p className="section-subtitle">Ils ont rejoint JCI Sbikha et témoignent</p>
          </div>

          <div className="join-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="join-testimonial-card glass-card">
                <FaQuoteLeft className="join-testimonial-quote" />
                <p className="join-testimonial-text">{testimonial.text}</p>
                <div className="join-testimonial-author">
                  <div className="join-testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <span className="join-testimonial-name">{testimonial.name}</span>
                    <span className="join-testimonial-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="join-faq-section animate-on-scroll">
        <div className="jci-container">
          <div className="section-header-wrapper">
            <h2 className="section-title-modern">Questions Fréquentes</h2>
            <p className="section-subtitle">Tout ce que vous devez savoir sur l'adhésion</p>
          </div>

          <div className="join-faq-grid">
            <div className="join-faq-card glass-card">
              <div className="join-faq-question">
                <FaInfoCircle className="join-faq-icon" />
                <h4>Qui peut rejoindre JCI Sbikha ?</h4>
              </div>
              <p className="join-faq-answer">
                JCI Sbikha est ouverte à tous les jeunes âgés de 18 à 40 ans, 
                passionnés par le leadership, le développement communautaire 
                et l'innovation sociale.
              </p>
            </div>

            <div className="join-faq-card glass-card">
              <div className="join-faq-question">
                <FaInfoCircle className="join-faq-icon" />
                <h4>Y a-t-il des frais d'adhésion ?</h4>
              </div>
              <p className="join-faq-answer">
                L'adhésion à JCI Sbikha est gratuite. Nous croyons que le leadership 
                et l'engagement communautaire doivent être accessibles à tous.
              </p>
            </div>

            <div className="join-faq-card glass-card">
              <div className="join-faq-question">
                <FaInfoCircle className="join-faq-icon" />
                <h4>Quels sont les engagements en tant que membre ?</h4>
              </div>
              <p className="join-faq-answer">
                En tant que membre, vous êtes invité à participer aux événements, 
                contribuer aux projets communautaires et vous engager activement 
                dans la vie de l'association.
              </p>
            </div>

            <div className="join-faq-card glass-card">
              <div className="join-faq-question">
                <FaInfoCircle className="join-faq-icon" />
                <h4>Comment se déroule le processus d'adhésion ?</h4>
              </div>
              <p className="join-faq-answer">
                Après avoir rempli le formulaire d'adhésion, un membre de notre 
                équipe vous contactera pour un entretien de motivation. 
                Vous serez ensuite intégré à la communauté.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;