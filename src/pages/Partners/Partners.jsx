import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Partners.css";
import {
  FaHandshake,
  FaBuilding,
  FaUniversity,
  FaUsers,
  FaGlobe,
  FaStar,
  FaHeart,
  FaArrowRight,
  FaCheckCircle,
  FaTrophy,
  FaRocket,
  FaChartLine,
  FaCalendarAlt,
  FaQuoteLeft,
  FaCrown,
  FaAward,
  FaShieldAlt,
  FaNetworkWired,
  FaBookOpen,
  FaLaptop,
  FaHospital,
  FaTools,
  FaDumbbell,
  FaPaintBrush,
  FaLeaf,
  FaGraduationCap,
  FaHandsHelping,
} from "react-icons/fa";

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPartner, setSelectedPartner] = useState(null);

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

  const categories = [
    { id: "all", label: "Tous", icon: <FaGlobe /> },
    { id: "corporate", label: "Entreprises", icon: <FaBuilding /> },
    { id: "institutional", label: "Institutionnel", icon: <FaUniversity /> },
    { id: "community", label: "Communautaire", icon: <FaUsers /> },
    { id: "international", label: "International", icon: <FaNetworkWired /> },
  ];

  const partners = [
    {
      id: 1,
      name: "TechInnov Tunisia",
      category: "corporate",
      icon: <FaLaptop />,
      logo: "TI",
      description:
        "Leader en solutions technologiques et innovation numérique en Tunisie.",
      partnership:
        "Soutien technologique et infrastructure pour les projets numériques.",
      impact: "40+ étudiants formés aux compétences digitales",
      color: "#089DC3",
      years: "2020 - Présent",
      testimonial:
        "JCI Sbikha est un partenaire de confiance pour la formation des jeunes talents technologiques de la région.",
      achievements: [
        "Formation certifiante en développement",
        "Hackathons organisés",
        "Mentorat pour startups",
      ],
    },
    {
      id: 2,
      name: "GreenEnergy SA",
      category: "corporate",
      icon: <FaLeaf />,
      logo: "GE",
      description:
        "Entreprise spécialisée dans les énergies renouvelables et le développement durable.",
      partnership:
        "Soutien aux initiatives environnementales et campagnes de sensibilisation.",
      impact: "500+ arbres plantés, 3 campagnes de sensibilisation",
      color: "#34c759",
      years: "2021 - Présent",
      testimonial:
        "Travailler avec JCI Sbikha pour un avenir plus vert est une expérience enrichissante.",
      achievements: [
        'Campagne "Sbikha Verte"',
        "Ateliers sur les énergies renouvelables",
        "Installation de panneaux solaires",
      ],
    },
    {
      id: 3,
      name: "FinSecure Bank",
      category: "corporate",
      icon: <FaShieldAlt />,
      logo: "FS",
      description:
        "Banque leader dans les services financiers sécurisés et l'éducation financière.",
      partnership:
        "Éducation financière et inclusion bancaire pour les jeunes.",
      impact: "200+ jeunes formés à la gestion financière",
      color: "#ff9500",
      years: "2019 - Présent",
      testimonial:
        "L'engagement de JCI Sbikha pour l'éducation financière est exemplaire.",
      achievements: [
        "Ateliers de gestion financière",
        "Programme d'épargne pour étudiants",
        "Soutien à l'entrepreneuriat",
      ],
    },
    {
      id: 4,
      name: "MediCare Plus",
      category: "corporate",
      icon: <FaHospital />,
      logo: "MC",
      description:
        "Prestataire de services de santé et de bien-être de premier plan.",
      partnership:
        "Campagnes de santé publique et sensibilisation au bien-être.",
      impact: "300+ bénéficiaires de soins gratuits",
      color: "#ff3b30",
      years: "2022 - Présent",
      testimonial:
        "JCI Sbikha nous aide à toucher les communautés qui ont besoin de soins de santé.",
      achievements: [
        "Campagnes de vaccination",
        "Consultations médicales gratuites",
        "Ateliers de nutrition",
      ],
    },
    {
      id: 5,
      name: "Ministère de la Jeunesse",
      category: "institutional",
      icon: <FaUniversity />,
      logo: "MJ",
      description:
        "Ministère dédié au développement de la jeunesse et des sports.",
      partnership:
        "Programmes de leadership et de développement des compétences.",
      impact: "100+ jeunes formés dans le cadre des programmes nationaux",
      color: "#121245",
      years: "2018 - Présent",
      testimonial:
        "JCI Sbikha est un acteur clé dans la formation des jeunes leaders de la région.",
      achievements: [
        "Programme national de leadership",
        "Certification des compétences",
        "Soutien aux initiatives jeunesse",
      ],
    },
    {
      id: 6,
      name: "Municipalité de Sbikha",
      category: "institutional",
      icon: <FaBuilding />,
      logo: "MS",
      description: "Administration locale de la ville de Sbikha.",
      partnership: "Projets urbains, culturels et communautaires.",
      impact: "5 projets d'amélioration urbaine réalisés",
      color: "#4CC4D1",
      years: "2019 - Présent",
      testimonial:
        "Une collaboration fructueuse pour le développement de notre ville.",
      achievements: [
        "Rénovation d'espaces publics",
        "Événements culturels",
        "Projets de nettoyage et embellissement",
      ],
    },
    {
      id: 7,
      name: "Université de Kairouan",
      category: "institutional",
      icon: <FaGraduationCap />,
      logo: "UK",
      description: "Institution académique de référence dans la région.",
      partnership: "Programmes de formation, recherche et innovation.",
      impact: "150+ étudiants impliqués dans des projets JCI",
      color: "#6c757d",
      years: "2020 - Présent",
      testimonial:
        "JCI Sbikha offre une plateforme exceptionnelle pour l'engagement étudiant.",
      achievements: [
        "Conférences académiques",
        "Projets de recherche",
        "Stages et opportunités",
      ],
    },
    {
      id: 8,
      name: "Centre de Formation Professionnelle",
      category: "institutional",
      icon: <FaTools />,
      logo: "CFP",
      description: "Centre dédié à la formation professionnelle et technique.",
      partnership: "Ateliers de formation et perfectionnement des compétences.",
      impact: "80+ jeunes formés aux métiers techniques",
      color: "#ff9500",
      years: "2021 - Présent",
      testimonial:
        "Une collaboration qui prépare les jeunes aux métiers d'avenir.",
      achievements: [
        "Certification en métiers techniques",
        "Stages pratiques",
        "Insertion professionnelle",
      ],
    },
    {
      id: 9,
      name: "Association Solidarité Sbikha",
      category: "community",
      icon: <FaHandsHelping />,
      logo: "SS",
      description: "Association locale dédiée à la solidarité et l'entraide.",
      partnership:
        "Actions sociales et distribution d'aide aux populations vulnérables.",
      impact: "200+ familles aidées pendant les campagnes",
      color: "#ff3b30",
      years: "2019 - Présent",
      testimonial:
        "JCI Sbikha est un partenaire de premier plan pour nos actions sociales.",
      achievements: [
        "Distribution alimentaire",
        "Aide aux familles vulnérables",
        "Programmes de solidarité",
      ],
    },
    {
      id: 10,
      name: "Club Culturel de Sbikha",
      category: "community",
      icon: <FaPaintBrush />,
      logo: "CCS",
      description:
        "Club dédié à la promotion de la culture et des arts à Sbikha.",
      partnership: "Événements culturels, expositions et festivals.",
      impact: "15 événements culturels organisés",
      color: "#ff1493",
      years: "2020 - Présent",
      testimonial: "Un partenariat qui enrichit la vie culturelle de Sbikha.",
      achievements: [
        "Festival de la musique",
        "Expositions d'art",
        "Ateliers créatifs",
      ],
    },
    {
      id: 11,
      name: "ONG Espoir pour Tous",
      category: "community",
      icon: <FaHeart />,
      logo: "ET",
      description:
        "Organisation non gouvernementale dédiée au développement social.",
      partnership: "Projets de développement social et communautaire.",
      impact: "100+ enfants soutenus dans leur éducation",
      color: "#34c759",
      years: "2021 - Présent",
      testimonial:
        "JCI Sbikha apporte une énergie et un engagement précieux à nos projets.",
      achievements: [
        "Programmes éducatifs",
        "Soutien scolaire",
        "Campagnes de sensibilisation",
      ],
    },
    {
      id: 12,
      name: "Collectif Sportif Sbikha",
      category: "community",
      icon: <FaDumbbell />,
      logo: "CSS",
      description:
        "Collectif pour la promotion du sport et d'un mode de vie sain.",
      partnership: "Événements sportifs, tournois et initiatives de santé.",
      impact: "300+ participants aux événements sportifs",
      color: "#007aff",
      years: "2022 - Présent",
      testimonial:
        "Le partenariat avec JCI Sbikha dynamise notre communauté sportive.",
      achievements: [
        "Tournois de football",
        "Courses de solidarité",
        "Ateliers de santé",
      ],
    },
    {
      id: 13,
      name: "JCI International",
      category: "international",
      icon: <FaGlobe />,
      logo: "JCI",
      description:
        "Jeune Chambre Internationale - Réseau mondial de jeunes leaders.",
      partnership: "Programmes internationaux, échanges et formations.",
      impact: "Accès au réseau de 200+ pays",
      color: "#121245",
      years: "2018 - Présent",
      testimonial:
        "JCI Sbikha est un membre actif et inspirant du réseau JCI mondial.",
      achievements: [
        "Participation aux conférences internationales",
        "Échanges interculturels",
        "Programmes globaux",
      ],
    },
    {
      id: 14,
      name: "AIESEC Tunisia",
      category: "international",
      icon: <FaNetworkWired />,
      logo: "AT",
      description:
        "Organisation internationale de développement des compétences en leadership.",
      partnership: "Échanges de jeunes talents et programmes de développement.",
      impact: "50+ échanges internationaux facilités",
      color: "#ff9500",
      years: "2020 - Présent",
      testimonial:
        "Un partenariat qui ouvre des horizons internationaux aux jeunes.",
      achievements: [
        "Programmes d'échange",
        "Formations en leadership",
        "Projets internationaux",
      ],
    },
    {
      id: 15,
      name: "Rotary Club Tunis",
      category: "international",
      icon: <FaCrown />,
      logo: "RC",
      description: "Organisation internationale de service communautaire.",
      partnership: "Projets communautaires et actions humanitaires.",
      impact: "5 projets conjoints réalisés",
      color: "#8b0000",
      years: "2019 - Présent",
      testimonial:
        "La collaboration avec JCI Sbikha renforce notre impact local.",
      achievements: [
        "Projets humanitaires",
        "Campagnes de santé",
        "Événements de sensibilisation",
      ],
    },
    {
      id: 16,
      name: "UNESCO Tunisie",
      category: "international",
      icon: <FaBookOpen />,
      logo: "UN",
      description:
        "Organisation des Nations Unies pour l'éducation, la science et la culture.",
      partnership: "Programmes éducatifs, culturels et scientifiques.",
      impact: "Projets éducatifs touchant 500+ bénéficiaires",
      color: "#003366",
      years: "2021 - Présent",
      testimonial:
        "JCI Sbikha contribue activement à la promotion de l'éducation et de la culture.",
      achievements: [
        "Ateliers éducatifs",
        "Promotion du patrimoine culturel",
        "Programmes scientifiques",
      ],
    },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "corporate":
        return <FaBuilding />;
      case "institutional":
        return <FaUniversity />;
      case "community":
        return <FaUsers />;
      case "international":
        return <FaGlobe />;
      default:
        return <FaHandshake />;
    }
  };

  const filteredPartners =
    activeCategory === "all"
      ? partners
      : partners.filter((p) => p.category === activeCategory);

  return (
    <div className="partners-page">
      <section className="partners-hero animate-on-scroll">
        <div className="partners-hero-overlay"></div>
        <div className="partners-hero-content">
          <div className="partners-hero-badge">
            <FaHandshake className="partners-hero-badge-icon" /> Nos Partenaires
          </div>
          <h1 className="partners-hero-title">
            Construisons ensemble
            <br />
            <span className="partners-hero-highlight">Un Avenir Meilleur</span>
          </h1>
          <p className="partners-hero-description">
            Découvrez les organisations et institutions qui nous accompagnent
            dans notre mission de développement des jeunes leaders à Sbikha.
          </p>
          <div className="partners-hero-stats">
            <div className="partners-hero-stat">
              <span className="partners-hero-stat-number">16+</span>
              <span className="partners-hero-stat-label">
                Partenaires Actifs
              </span>
            </div>
            <div className="partners-hero-stat-divider"></div>
            <div className="partners-hero-stat">
              <span className="partners-hero-stat-number">5</span>
              <span className="partners-hero-stat-label">
                Années de Collaboration
              </span>
            </div>
            <div className="partners-hero-stat-divider"></div>
            <div className="partners-hero-stat">
              <span className="partners-hero-stat-number">2000+</span>
              <span className="partners-hero-stat-label">
                Bénéficiaires Touchés
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="partners-featured-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Partenaires Phares</h2>
            <p className="section-subtitle">
              Des collaborations qui font la différence
            </p>
          </div>
          <div className="partners-featured-grid">
            {partners.slice(0, 4).map((partner) => (
              <div
                key={partner.id}
                className="partner-featured-card animate-on-scroll glass-card"
              >
                <div className="partner-featured-badge">
                  <FaStar className="partner-featured-star" /> Partenaire Clé
                </div>
                <div className="partner-featured-header">
                  <div
                    className="partner-featured-logo"
                    style={{
                      background: `${partner.color}15`,
                      color: partner.color,
                    }}
                  >
                    {partner.logo}
                  </div>
                  <div className="partner-featured-info">
                    <h3 className="partner-featured-name">{partner.name}</h3>
                    <span className="partner-featured-category">
                      {getCategoryIcon(partner.category)}
                      {categories.find((c) => c.id === partner.category)?.label}
                    </span>
                  </div>
                </div>
                <p className="partner-featured-description">
                  {partner.description}
                </p>
                <div className="partner-featured-impact">
                  <FaHandsHelping className="partner-featured-impact-icon" />
                  <span>{partner.impact}</span>
                </div>
                <div className="partner-featured-years">
                  <FaCalendarAlt className="partner-featured-years-icon" />
                  <span>{partner.years}</span>
                </div>
                <button
                  className="partner-featured-btn"
                  onClick={() => setSelectedPartner(partner)}
                >
                  En savoir plus <FaArrowRight className="btn-icon-small" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="partners-categories-section">
        <div className="jci-container">
          <div className="partners-categories-wrapper">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`partners-category-btn ${activeCategory === category.id ? "active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="partners-category-icon">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="partners-grid-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Tous Nos Partenaires</h2>
            <p className="section-subtitle">
              {filteredPartners.length} partenaires engagés à nos côtés
            </p>
          </div>
          <div className="partners-grid">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className="partner-card animate-on-scroll glass-card"
                onClick={() => setSelectedPartner(partner)}
              >
                <div
                  className="partner-card-logo"
                  style={{
                    background: `${partner.color}15`,
                    color: partner.color,
                  }}
                >
                  {partner.logo}
                </div>
                <h3 className="partner-card-name">{partner.name}</h3>
                <div className="partner-card-category">
                  {getCategoryIcon(partner.category)}
                  <span>
                    {categories.find((c) => c.id === partner.category)?.label}
                  </span>
                </div>
                <p className="partner-card-description">
                  {partner.description}
                </p>
                <div className="partner-card-impact">
                  <FaChartLine className="partner-card-impact-icon" />
                  <span>{partner.impact}</span>
                </div>
                <div className="partner-card-footer">
                  <span className="partner-card-years">{partner.years}</span>
                  <button className="partner-card-details">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="partners-benefits-section animate-on-scroll">
        <div className="jci-container">
          <div className="partners-benefits-wrapper glass-card">
            <div className="partners-benefits-content">
              <h2 className="partners-benefits-title">
                Pourquoi Devenir Partenaire ?
              </h2>
              <p className="partners-benefits-subtitle">
                Rejoignez notre réseau de partenaires engagés pour un impact
                durable
              </p>
              <div className="partners-benefits-grid">
                {[
                  {
                    icon: <FaNetworkWired />,
                    title: "Visibilité",
                    desc: "Accès à notre réseau de 120+ membres et notre communauté élargie",
                  },
                  {
                    icon: <FaHandsHelping />,
                    title: "Impact Social",
                    desc: "Contribuez directement au développement de la communauté",
                  },
                  {
                    icon: <FaTrophy />,
                    title: "Reconnaissance",
                    desc: "Valorisation de votre engagement auprès de nos publics",
                  },
                  {
                    icon: <FaRocket />,
                    title: "Innovation",
                    desc: "Accès à des projets innovants et des talents prometteurs",
                  },
                ].map((item, index) => (
                  <div key={index} className="partners-benefit-item">
                    <div className="partners-benefit-icon-wrapper">
                      {item.icon}
                    </div>
                    <h4 className="partners-benefit-item-title">
                      {item.title}
                    </h4>
                    <p className="partners-benefit-item-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="jci-btn jci-btn-primary partners-benefits-btn"
              >
                Devenir Partenaire <FaArrowRight className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="partners-testimonials-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Ils Témoignent</h2>
            <p className="section-subtitle">
              Ce que nos partenaires disent de notre collaboration
            </p>
          </div>
          <div className="partners-testimonials-grid">
            {partners.slice(0, 4).map((partner) => (
              <div
                key={partner.id}
                className="partners-testimonial-card animate-on-scroll glass-card"
              >
                <FaQuoteLeft className="partners-testimonial-quote" />
                <p className="partners-testimonial-text">
                  {partner.testimonial}
                </p>
                <div className="partners-testimonial-author">
                  <div
                    className="partners-testimonial-logo"
                    style={{
                      background: `${partner.color}15`,
                      color: partner.color,
                    }}
                  >
                    {partner.logo}
                  </div>
                  <div className="partners-testimonial-info">
                    <span className="partners-testimonial-name">
                      {partner.name}
                    </span>
                    <span className="partners-testimonial-category">
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
      <section className="partners-cta-section animate-on-scroll">
        <div className="jci-container">
          <div className="partners-cta-wrapper glass-card">
            <div className="partners-cta-content">
              <div className="partners-cta-icon-wrapper">
                <FaHandshake className="partners-cta-icon" />
              </div>
              <h2 className="partners-cta-title">
                Vous Souhaitez Nous Rejoindre ?
              </h2>
              <p className="partners-cta-text">
                Devenez partenaire de JCI Sbikha et contribuez à notre mission
                de développement des jeunes leaders. Ensemble, nous pouvons
                faire une différence durable dans la communauté.
              </p>
              <div className="partners-cta-actions">
                <Link
                  to="/contact"
                  className="jci-btn jci-btn-primary partners-cta-btn"
                >
                  Devenir Partenaire <FaArrowRight className="btn-icon" />
                </Link>
                <Link
                  to="/about"
                  className="jci-btn jci-btn-secondary partners-cta-btn-secondary"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPartner && (
        <div
          className="partner-modal-overlay"
          onClick={() => setSelectedPartner(null)}
        >
          <div
            className="partner-modal glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="partner-modal-close"
              onClick={() => setSelectedPartner(null)}
            >
              ×
            </button>
            <div className="partner-modal-content">
              <div className="partner-modal-header">
                <div
                  className="partner-modal-logo"
                  style={{
                    background: `${selectedPartner.color}15`,
                    color: selectedPartner.color,
                  }}
                >
                  {selectedPartner.logo}
                </div>
                <div className="partner-modal-title">
                  <h2>{selectedPartner.name}</h2>
                  <span className="partner-modal-category">
                    {getCategoryIcon(selectedPartner.category)}
                    {
                      categories.find((c) => c.id === selectedPartner.category)
                        ?.label
                    }
                  </span>
                </div>
              </div>
              <div className="partner-modal-body">
                <p className="partner-modal-description">
                  {selectedPartner.description}
                </p>
                <div className="partner-modal-details">
                  <div className="partner-modal-detail-item">
                    <FaHandshake className="partner-modal-detail-icon" />
                    <div>
                      <span className="partner-modal-detail-label">
                        Partenariat
                      </span>
                      <span className="partner-modal-detail-value">
                        {selectedPartner.partnership}
                      </span>
                    </div>
                  </div>
                  <div className="partner-modal-detail-item">
                    <FaChartLine className="partner-modal-detail-icon" />
                    <div>
                      <span className="partner-modal-detail-label">Impact</span>
                      <span className="partner-modal-detail-value">
                        {selectedPartner.impact}
                      </span>
                    </div>
                  </div>
                  <div className="partner-modal-detail-item">
                    <FaCalendarAlt className="partner-modal-detail-icon" />
                    <div>
                      <span className="partner-modal-detail-label">Durée</span>
                      <span className="partner-modal-detail-value">
                        {selectedPartner.years}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="partner-modal-achievements">
                  <h4 className="partner-modal-achievements-title">
                    <FaAward className="partner-modal-achievements-icon" />{" "}
                    Réalisations
                  </h4>
                  <ul className="partner-modal-achievements-list">
                    {selectedPartner.achievements.map((achievement, index) => (
                      <li key={index}>
                        <FaCheckCircle className="partner-modal-achievement-check" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="partner-modal-testimonial">
                  <FaQuoteLeft className="partner-modal-testimonial-quote" />
                  <p className="partner-modal-testimonial-text">
                    {selectedPartner.testimonial}
                  </p>
                </div>
              </div>
              <div className="partner-modal-footer">
                <button className="jci-btn jci-btn-primary partner-modal-btn">
                  Visiter le Site <FaArrowRight className="btn-icon" />
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
