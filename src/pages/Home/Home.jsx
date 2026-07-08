import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  FaUsers,
  FaCalendarAlt,
  FaAward,
  FaHandsHelping,
  FaArrowRight,
  FaGlobe,
  FaShieldAlt,
  FaQuoteLeft,
  FaChevronRight,
  FaStar,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { MdEmojiEvents, MdLightbulb } from "react-icons/md";
import jciShieldLogo from "../../Images/Home/JCI_Logo.png";

const Home = () => {
  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      icon: <FaUsers />,
      value: "120+",
      label: "Membres Actifs",
      description: "Jeunes leaders engagés",
    },
    {
      icon: <FaCalendarAlt />,
      value: "24+",
      label: "Événements 2026",
      description: "Programmes et formations",
    },
    {
      icon: <FaAward />,
      value: "8",
      label: "Projets Communautaires",
      description: "Impact positif durable",
    },
    {
      icon: <FaHandsHelping />,
      value: "500+",
      label: "Bénéficiaires",
      description: "Communauté touchée",
    },
  ];

  const projects = [
    {
      icon: <MdEmojiEvents />,
      title: "Leadership Academy",
      description:
        "Programme de développement des compétences de leadership pour les jeunes de Sbikha.",
      impact: "+45 participants",
      color: "#4CC4D1",
    },
    {
      icon: <FaHandsHelping />,
      title: "Solidarité Scolaire",
      description:
        "Distribution de fournitures scolaires et soutien éducatif pour les élèves défavorisés.",
      impact: "200 enfants aidés",
      color: "#089DC3",
    },
    {
      icon: <MdLightbulb />,
      title: "Innovation Hub",
      description:
        "Espace de co-working et d'innovation pour les entrepreneurs locaux de la région.",
      impact: "15 startups",
      color: "#121245",
    },
    {
      icon: <FaGlobe />,
      title: "Impact Environnemental",
      description:
        "Campagnes de sensibilisation et actions écologiques pour un Sbikha plus vert.",
      impact: "500 arbres plantés",
      color: "#3B6B7A",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Ben Ali",
      role: "Ancien Président",
      quote:
        "JCI Sbikha m'a donné les outils pour devenir un leader dans ma communauté. Une expérience transformative.",
    },
    {
      name: "Sana Mansouri",
      role: "Membre Active",
      quote:
        "L'engagement et la solidarité au sein de JCI Sbikha sont exceptionnels. Chaque projet est une aventure humaine.",
    },
  ];

  const events = [
    {
      date: "15 Juil 2026",
      title: "Forum des Leaders",
      location: "Sbikha Center",
      type: "Formation",
    },
    {
      date: "20 Juil 2026",
      title: "Journée de Solidarité",
      location: "Écoles de Sbikha",
      type: "Action Sociale",
    },
    {
      date: "5 Août 2026",
      title: "Gala de Reconnaissance",
      location: "Salle des Fêtes",
      type: "Célébration",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section animate-on-scroll">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-logo-wrapper">
            <div className="hero-badge">
              <span className="hero-badge-text">JCI Sbikha Officiel</span>
            </div>
          </div>
          <h1 className="hero-title">
            <span className="hero-title-highlight">JCI Sbikha</span>
            <br />
            <span className="hero-title-sub">Leadership & Impact</span>
          </h1>
          <p className="hero-description">
            Rejoignez une communauté de jeunes leaders engagés pour un
            changement positif à Sbikha et dans la région. Ensemble, nous
            construisons l'avenir.
          </p>
          <div className="hero-actions">
            <Link
              to="/join"
              className="jci-btn jci-btn-primary hero-btn-primary"
            >
              Rejoindre JCI <FaArrowRight className="btn-icon" />
            </Link>
            <Link
              to="/about"
              className="jci-btn jci-btn-secondary hero-btn-secondary"
            >
              En Savoir Plus
            </Link>
          </div>
          <div className="hero-stats-mini">
            {stats.map((stat, index) => (
              <div key={index} className="hero-stat-mini">
                <span className="hero-stat-mini-value">{stat.value}</span>
                <span className="hero-stat-mini-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">L'Impact de JCI Sbikha</h2>
            <p className="section-subtitle">
              Des chiffres qui témoignent de notre engagement
            </p>
          </div>
          <div className="stats-grid-modern">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card-modern animate-on-scroll glass-card"
              >
                <div className="stat-icon-wrapper">{stat.icon}</div>
                <div className="stat-value-modern">{stat.value}</div>
                <div className="stat-label-modern">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section animate-on-scroll">
        <div className="jci-container">
          <div className="mission-grid">
            <div className="mission-content">
              <div className="mission-badge">Notre Mission</div>
              <h2 className="mission-title">
                Créer des Leaders pour un
                <br />
                <span className="mission-highlight">Monde Meilleur</span>
              </h2>
              <p className="mission-text">
                JCI Sbikha est une organisation de jeunes leaders dédiée au
                développement personnel, professionnel et communautaire. Nous
                croyons que chaque jeune a le potentiel de faire une différence.
              </p>
              <div className="mission-values">
                <div className="mission-value">
                  <div
                    className="mission-value-dot"
                    style={{ background: "#4CC4D1" }}
                  ></div>
                  <span>Leadership</span>
                </div>
                <div className="mission-value">
                  <div
                    className="mission-value-dot"
                    style={{ background: "#089DC3" }}
                  ></div>
                  <span>Innovation</span>
                </div>
                <div className="mission-value">
                  <div
                    className="mission-value-dot"
                    style={{ background: "#121245" }}
                  ></div>
                  <span>Solidarité</span>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="mission-circle">
                <div className="mission-circle-inner">
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
      <section className="projects-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Nos Projets</h2>
            <p className="section-subtitle">
              Des initiatives qui transforment la communauté
            </p>
            <Link
              to="/projects"
              className="jci-btn jci-btn-secondary view-all-btn"
            >
              Voir Tous les Projets{" "}
              <FaChevronRight className="btn-icon-small" />
            </Link>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card animate-on-scroll glass-card"
              >
                <div
                  className="project-icon"
                  style={{
                    background: `${project.color}15`,
                    color: project.color,
                  }}
                >
                  {project.icon}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-impact">
                  <FaStar className="project-impact-icon" />
                  <span>{project.impact}</span>
                </div>
                <Link to="/projects" className="project-link">
                  En savoir plus <FaArrowRight className="btn-icon-small" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section animate-on-scroll">
        <div className="jci-container">
          <div className="events-wrapper glass-card">
            <div className="events-header">
              <div className="events-header-icon">
                <FaCalendarAlt />
              </div>
              <div>
                <h2 className="events-title">Prochains Événements</h2>
                <p className="events-subtitle">
                  Rejoignez-nous pour ces moments forts
                </p>
              </div>
            </div>
            <div className="events-list">
              {events.map((event, index) => (
                <div key={index} className="event-item">
                  <div className="event-date">
                    <span className="event-day">
                      {event.date.split(" ")[0]}
                    </span>
                    <span className="event-month">
                      {event.date.split(" ")[1]}
                    </span>
                  </div>
                  <div className="event-info">
                    <h4 className="event-title">{event.title}</h4>
                    <div className="event-meta">
                      <span className="event-location">
                        <FaMapMarkerAlt className="event-meta-icon" />{" "}
                        {event.location}
                      </span>
                      <span className="event-type">{event.type}</span>
                    </div>
                  </div>
                  <Link to="/news-events" className="event-rsvp">
                    S'inscrire <FaArrowRight className="btn-icon-small" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Témoignages</h2>
            <p className="section-subtitle">
              Ils ont fait l'expérience JCI Sbikha
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card animate-on-scroll glass-card"
              >
                <FaQuoteLeft className="testimonial-quote" />
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="testimonial-author-info">
                    <span className="testimonial-name">{testimonial.name}</span>
                    <span className="testimonial-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section animate-on-scroll">
        <div className="jci-container">
          <div className="cta-wrapper glass-card">
            <div className="cta-content">
              <h2 className="cta-title">Prêt à Faire la Différence ?</h2>
              <p className="cta-text">
                Rejoignez JCI Sbikha et devenez un acteur du changement dans
                votre communauté. Ensemble, nous pouvons construire un avenir
                meilleur.
              </p>
              <div className="cta-buttons">
                <Link
                  to="/join"
                  className="jci-btn jci-btn-primary cta-btn-primary"
                >
                  Devenir Membre <FaArrowRight className="btn-icon" />
                </Link>
                <Link
                  to="/contact"
                  className="jci-btn jci-btn-secondary cta-btn-secondary"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
            <div className="cta-quick-links">
              {[
                { name: "À Propos", icon: <FaShieldAlt />, to: "/about" },
                {
                  name: "Nos Projets",
                  icon: <FaHandsHelping />,
                  to: "/projects",
                },
                { name: "Adhérer", icon: <FaUsers />, to: "/join" },
                {
                  name: "Actualités",
                  icon: <FaCalendarAlt />,
                  to: "/news-events",
                },
                { name: "Contact", icon: <FaEnvelope />, to: "/contact" },
              ].map((link, index) => (
                <Link key={index} to={link.to} className="cta-link-item">
                  <span className="cta-link-icon">{link.icon}</span>
                  <span className="cta-link-name">{link.name}</span>
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
