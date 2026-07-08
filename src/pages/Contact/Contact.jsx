import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaArrowRight,
  FaCheckCircle,
  FaUser,
  FaPaperPlane,
  FaWhatsapp,
  FaUsers,
  FaHandsHelping,
  FaAward,
  FaCalendarAlt,
  FaInfoCircle,
  FaRegEnvelope,
  FaRegComment,
  FaPhoneAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { MdSend } from "react-icons/md";

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
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85)
          el.classList.add("visible");
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
    if (!formData.name.trim()) errors.name = "Veuillez entrer votre nom";
    if (!formData.email.trim()) errors.email = "Veuillez entrer votre email";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email invalide";
    if (!formData.subject.trim()) errors.subject = "Veuillez entrer un sujet";
    if (!formData.message.trim())
      errors.message = "Veuillez entrer votre message";
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

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Adresse",
      details: "Sbikha, Tunisie",
      description: "Nous sommes situés au cœur de la ville de Sbikha",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Téléphone",
      details: "+216 XX XXX XXX",
      description: "Lun-Ven : 09:00 - 18:00",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "contact@jcisbikha.org",
      description: "Nous répondons dans les 24h",
    },
    {
      icon: <FaClock />,
      title: "Horaires",
      details: "Lun-Ven : 09:00 - 18:00",
      description: "Fermé le week-end",
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: "Facebook", url: "#", color: "#1877f2" },
    { icon: <FaInstagram />, name: "Instagram", url: "#", color: "#e4405f" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "#", color: "#0a66c2" },
    { icon: <FaYoutube />, name: "YouTube", url: "#", color: "#ff0000" },
    { icon: <FaTwitter />, name: "Twitter", url: "#", color: "#1da1f2" },
    { icon: <FaWhatsapp />, name: "WhatsApp", url: "#", color: "#25d366" },
  ];

  const stats = [
    { value: "120+", label: "Membres", icon: <FaUsers /> },
    { value: "8", label: "Années d'impact", icon: <FaAward /> },
    { value: "24+", label: "Événements par an", icon: <FaCalendarAlt /> },
    { value: "500+", label: "Bénéficiaires", icon: <FaHandsHelping /> },
  ];

  const faqs = [
    {
      question: "Comment puis-je devenir membre de JCI Sbikha ?",
      answer:
        "Vous pouvez remplir le formulaire d'adhésion en ligne ou nous contacter directement par email ou téléphone. Un membre de notre équipe vous guidera dans le processus.",
    },
    {
      question: "Quels sont les avantages de rejoindre JCI Sbikha ?",
      answer:
        "En rejoignant JCI Sbikha, vous bénéficiez de formations en leadership, d'opportunités de networking, de participation à des projets communautaires, et d'accès à un réseau international de jeunes leaders.",
    },
    {
      question: "Comment puis-je participer aux événements de JCI Sbikha ?",
      answer:
        "Tous nos événements sont annoncés sur notre site web et nos réseaux sociaux. Vous pouvez vous inscrire directement en ligne ou contacter notre équipe pour plus d'informations.",
    },
    {
      question:
        "JCI Sbikha accepte-t-elle les partenariats avec d'autres organisations ?",
      answer:
        "Absolument ! Nous collaborons activement avec des entreprises, institutions, associations et autres organisations. Contactez-nous pour discuter des opportunités de partenariat.",
    },
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero animate-on-scroll">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <div className="contact-hero-badge">
            <FaEnvelope className="contact-hero-badge-icon" /> Contactez-Nous
          </div>
          <h1 className="contact-hero-title">
            Nous Sommes Là
            <br />
            <span className="contact-hero-highlight">Pour Vous</span>
          </h1>
          <p className="contact-hero-description">
            Une question, une suggestion ou une demande d'information ?
            N'hésitez pas à nous contacter. Nous vous répondrons dans les plus
            brefs délais.
          </p>
          <div className="contact-hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="contact-hero-stat">
                <div className="contact-hero-stat-icon">{stat.icon}</div>
                <div>
                  <span className="contact-hero-stat-number">{stat.value}</span>
                  <span className="contact-hero-stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="contact-grid-section">
        <div className="jci-container">
          <div className="contact-grid-wrapper">
            <div className="contact-info-side animate-on-scroll">
              <div className="contact-info-header">
                <h2 className="contact-info-title">Informations de Contact</h2>
                <p className="contact-info-subtitle">
                  N'hésitez pas à nous joindre par l'un de ces moyens
                </p>
              </div>
              <div className="contact-info-cards">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-info-card glass-card">
                    <div className="contact-info-card-icon">{item.icon}</div>
                    <div className="contact-info-card-content">
                      <h4 className="contact-info-card-title">{item.title}</h4>
                      <p className="contact-info-card-details">
                        {item.details}
                      </p>
                      <p className="contact-info-card-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact-social-section">
                <h4 className="contact-social-title">Suivez-Nous</h4>
                <div className="contact-social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="contact-social-link"
                      style={{ "--social-color": social.color }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                      <span className="contact-social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-side animate-on-scroll">
              <div className="contact-form-wrapper glass-card">
                <div className="contact-form-header">
                  <div className="contact-form-icon-wrapper">
                    <FaPaperPlane className="contact-form-icon" />
                  </div>
                  <h2 className="contact-form-title">
                    Envoyez-nous un Message
                  </h2>
                  <p className="contact-form-subtitle">
                    Nous vous répondrons dans les plus brefs délais
                  </p>
                </div>
                {isSubmitted && (
                  <div className="contact-form-success">
                    <FaCheckCircle className="contact-form-success-icon" />
                    <div>
                      <h4>Message envoyé avec succès !</h4>
                      <p>Nous vous répondrons dans les 24 heures.</p>
                    </div>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-group">
                    <label htmlFor="name">
                      <FaUser className="contact-form-label-icon" /> Nom complet{" "}
                      <span className="contact-form-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom et prénom"
                      className={`contact-form-input ${formErrors.name ? "error" : ""}`}
                    />
                    {formErrors.name && (
                      <span className="contact-form-error">
                        {formErrors.name}
                      </span>
                    )}
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="email">
                      <FaRegEnvelope className="contact-form-label-icon" />{" "}
                      Email <span className="contact-form-required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      className={`contact-form-input ${formErrors.email ? "error" : ""}`}
                    />
                    {formErrors.email && (
                      <span className="contact-form-error">
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="subject">
                      <FaInfoCircle className="contact-form-label-icon" /> Sujet{" "}
                      <span className="contact-form-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Sujet de votre message"
                      className={`contact-form-input ${formErrors.subject ? "error" : ""}`}
                    />
                    {formErrors.subject && (
                      <span className="contact-form-error">
                        {formErrors.subject}
                      </span>
                    )}
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="message">
                      <FaRegComment className="contact-form-label-icon" />{" "}
                      Message <span className="contact-form-required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Votre message..."
                      rows="5"
                      className={`contact-form-textarea ${formErrors.message ? "error" : ""}`}
                    />
                    {formErrors.message && (
                      <span className="contact-form-error">
                        {formErrors.message}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="jci-btn jci-btn-primary contact-form-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="contact-form-spinner"></span>Envoi en
                        cours...
                      </>
                    ) : (
                      <>
                        <MdSend className="contact-form-submit-icon" />
                        Envoyer le Message <FaArrowRight className="btn-icon" />
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
      <section className="contact-map-section animate-on-scroll">
        <div className="jci-container">
          <div className="contact-map-wrapper glass-card">
            <div className="contact-map-header">
              <div className="contact-map-icon-wrapper">
                <FaMapMarkerAlt className="contact-map-icon" />
              </div>
              <div>
                <h2 className="contact-map-title">Retrouvez-Nous</h2>
                <p className="contact-map-subtitle">
                  Notre localisation à Sbikha
                </p>
              </div>
            </div>
            <div className="contact-map-container">
              <div className="contact-map-placeholder">
                <div className="contact-map-placeholder-content">
                  <div className="contact-map-pin">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-map-placeholder-info">
                    <h4>JCI Sbikha</h4>
                    <p>Sbikha, Tunisie</p>
                    <button className="contact-map-direction-btn">
                      Itinéraire{" "}
                      <FaExternalLinkAlt className="btn-icon-small" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq-section animate-on-scroll">
        <div className="jci-container">
          <div className="section-header-wrapper">
            <h2 className="section-title-modern">Questions Fréquentes</h2>
            <p className="section-subtitle">
              Trouvez rapidement une réponse à vos questions
            </p>
          </div>
          <div className="contact-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="contact-faq-card glass-card">
                <div className="contact-faq-question">
                  <FaInfoCircle className="contact-faq-icon" />
                  <h4>{faq.question}</h4>
                </div>
                <p className="contact-faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta-section animate-on-scroll">
        <div className="jci-container">
          <div className="contact-cta-wrapper glass-card">
            <div className="contact-cta-content">
              <div className="contact-cta-icon-wrapper">
                <FaHandsHelping className="contact-cta-icon" />
              </div>
              <h2 className="contact-cta-title">
                Vous Souhaitez Nous Rejoindre ?
              </h2>
              <p className="contact-cta-text">
                Devenez membre de JCI Sbikha et participez à notre mission de
                développement des jeunes leaders. Nous sommes impatients de vous
                accueillir !
              </p>
              <div className="contact-cta-actions">
                <Link
                  to="/join"
                  className="jci-btn jci-btn-primary contact-cta-btn"
                >
                  Devenir Membre <FaArrowRight className="btn-icon" />
                </Link>
                <Link
                  to="/about"
                  className="jci-btn jci-btn-secondary contact-cta-btn-secondary"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
