import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import {
  FaUsers,
  FaHandsHelping,
  FaAward,
  FaGlobe,
  FaBullseye,
  FaEye,
  FaHeart,
  FaShieldAlt,
  FaCalendarCheck,
  FaUserGraduate,
  FaLeaf,
  FaLightbulb,
  FaRocket,
  FaStar,
  FaEnvelope,
  FaArrowRight,
  FaCheckCircle,
  FaLinkedin,
  FaHistory,
} from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

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

  const timelineData = [
    {
      year: "2018",
      title: "Fondation de JCI Sbikha",
      description:
        "Création de la Jeune Chambre Internationale de Sbikha par un groupe de jeunes leaders visionnaires.",
      icon: <FaHistory />,
    },
    {
      year: "2019",
      title: "Premier Projet Communautaire",
      description:
        'Lancement du projet "Solidarité Scolaire" avec la distribution de fournitures aux élèves défavorisés.',
      icon: <FaHandsHelping />,
    },
    {
      year: "2020",
      title: "Adaptation et Résilience",
      description:
        "Transition vers des programmes virtuels pour maintenir l'engagement pendant la pandémie.",
      icon: <FaRocket />,
    },
    {
      year: "2021",
      title: "Expansion des Projets",
      description:
        "Lancement de Leadership Academy et Innovation Hub, touchant plus de 200 bénéficiaires.",
      icon: <FaUserGraduate />,
    },
    {
      year: "2022",
      title: "Reconnaissance Régionale",
      description:
        'JCI Sbikha reçoit le prix du "Meilleur Projet Communautaire" au niveau de la zone.',
      icon: <FaAward />,
    },
    {
      year: "2023",
      title: "Impact Environnemental",
      description:
        'Lancement de la campagne "Sbikha Verte" avec plus de 500 arbres plantés.',
      icon: <FaLeaf />,
    },
    {
      year: "2024",
      title: "Nouveaux Horizons",
      description:
        "Partenariats stratégiques et projets d'envergure pour un impact durable.",
      icon: <FaGlobe />,
    },
    {
      year: "2025",
      title: "Innovation Continue",
      description:
        "Développement de nouveaux programmes et renforcement de la communauté.",
      icon: <FaLightbulb />,
    },
    {
      year: "2026",
      title: "8 Ans d'Impact",
      description:
        "Une communauté de 120+ membres actifs, 24+ événements annuels et 500+ bénéficiaires.",
      icon: <MdCelebration />,
    },
  ];

  const values = [
    {
      icon: <FaUsers />,
      title: "Leadership",
      description:
        "Nous formons des leaders responsables, capables de faire la différence dans leur communauté.",
      color: "#4CC4D1",
    },
    {
      icon: <FaHandsHelping />,
      title: "Solidarité",
      description:
        "L'entraide et la coopération sont au cœur de toutes nos actions et projets.",
      color: "#089DC3",
    },
    {
      icon: <FaGlobe />,
      title: "Ouverture",
      description:
        "Nous valorisons la diversité et l'ouverture aux autres cultures et perspectives.",
      color: "#121245",
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description:
        "Nous encourageons la créativité et l'innovation pour relever les défis actuels.",
      color: "#3B6B7A",
    },
    {
      icon: <FaShieldAlt />,
      title: "Intégrité",
      description:
        "Nous agissons avec transparence, éthique et responsabilité dans toutes nos actions.",
      color: "#2F9DB2",
    },
  ];

  const teamMembers = [
    {
      name: "Ahmed Ben Ali",
      role: "Président",
      description:
        "Leader passionné avec 5 ans d'expérience dans le développement communautaire.",
      initials: "AB",
    },
    {
      name: "Sana Mansouri",
      role: "Vice-Présidente",
      description:
        "Experte en gestion de projets et développement des compétences.",
      initials: "SM",
    },
    {
      name: "Mohamed Trabelsi",
      role: "Secrétaire Général",
      description:
        "Organisateur hors pair, coordinateur de tous les événements majeurs.",
      initials: "MT",
    },
    {
      name: "Leila Bouazizi",
      role: "Trésorière",
      description:
        "Spécialiste en finance et gestion des ressources pour les projets.",
      initials: "LB",
    },
    {
      name: "Karim Saadi",
      role: "Responsable Projets",
      description:
        "Coordinateur des projets communautaires et programmes de formation.",
      initials: "KS",
    },
    {
      name: "Nadia Gharbi",
      role: "Responsable Communication",
      description:
        "Stratège en communication et relations publiques pour JCI Sbikha.",
      initials: "NG",
    },
  ];

  const achievements = [
    {
      number: "120+",
      label: "Membres Actifs",
      description: "Une communauté de jeunes leaders engagés",
    },
    {
      number: "24+",
      label: "Événements Annuels",
      description: "Formations, ateliers et actions solidaires",
    },
    {
      number: "8",
      label: "Projets Structurants",
      description: "Initiatives à impact durable",
    },
    {
      number: "500+",
      label: "Bénéficiaires",
      description: "Communauté touchée positivement",
    },
    {
      number: "2000+",
      label: "Heures de Bénévolat",
      description: "Engagement et dévouement des membres",
    },
    {
      number: "3",
      label: "Prix et Reconnaissances",
      description: "Excellence reconnue au niveau régional",
    },
  ];

  const coreStats = [
    {
      icon: <FaUsers />,
      value: "120+",
      label: "Membres",
      detail: "Jeunes leaders engagés",
    },
    {
      icon: <FaCalendarCheck />,
      value: "8",
      label: "Années",
      detail: "D'impact continu",
    },
    {
      icon: <FaAward />,
      value: "3",
      label: "Prix",
      detail: "Reconnaissance régionale",
    },
    {
      icon: <FaHandsHelping />,
      value: "500+",
      label: "Bénéficiaires",
      detail: "Communauté servie",
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero animate-on-scroll">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <div className="about-hero-badge">Qui Sommes-Nous</div>
          <h1 className="about-hero-title">
            Ensemble pour un
            <br />
            <span className="about-hero-highlight">Sbikha Meilleur</span>
          </h1>
          <p className="about-hero-description">
            JCI Sbikha est une organisation de jeunes leaders dédiée au
            développement personnel, professionnel et communautaire dans la
            région de Sbikha.
          </p>
          <div className="about-hero-stats">
            {coreStats.map((stat, index) => (
              <div key={index} className="about-hero-stat">
                <div className="about-hero-stat-icon">{stat.icon}</div>
                <div className="about-hero-stat-content">
                  <span className="about-hero-stat-value">{stat.value}</span>
                  <span className="about-hero-stat-label">{stat.label}</span>
                  <span className="about-hero-stat-detail">{stat.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="about-tabs-section">
        <div className="jci-container">
          <div className="about-tabs-wrapper">
            {[
              {
                id: "mission",
                icon: <FaBullseye />,
                label: "Mission & Vision",
              },
              { id: "history", icon: <FaHistory />, label: "Notre Histoire" },
              { id: "team", icon: <FaUsers />, label: "Équipe" },
              { id: "values", icon: <FaHeart />, label: "Valeurs" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`about-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span className="about-tab-icon"></span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        id="mission"
        className={`about-mission-section ${activeTab === "mission" ? "active-section" : ""}`}
      >
        <div className="jci-container">
          <div className="about-mission-grid animate-on-scroll">
            <div className="about-mission-card glass-card">
              <div className="about-mission-icon-wrapper">
                <FaBullseye className="about-mission-icon" />
              </div>
              <h2 className="about-mission-title">Notre Mission</h2>
              <p className="about-mission-text">
                Développer les compétences de leadership des jeunes de Sbikha et
                de la région pour créer un impact positif durable dans la
                communauté.
              </p>
              <div className="about-mission-points">
                <div className="about-mission-point">
                  <FaCheckCircle className="about-mission-check" />
                  <span>Former des leaders responsables</span>
                </div>
                <div className="about-mission-point">
                  <FaCheckCircle className="about-mission-check" />
                  <span>Réaliser des projets communautaires</span>
                </div>
                <div className="about-mission-point">
                  <FaCheckCircle className="about-mission-check" />
                  <span>Promouvoir la solidarité</span>
                </div>
              </div>
            </div>
            <div className="about-vision-card glass-card">
              <div className="about-vision-icon-wrapper">
                <FaEye className="about-vision-icon" />
              </div>
              <h2 className="about-vision-title">Notre Vision</h2>
              <p className="about-vision-text">
                Être une communauté de référence de jeunes leaders qui inspirent
                et transforment leur environnement par l'innovation,
                l'engagement et la solidarité.
              </p>
              <div className="about-vision-points">
                <div className="about-vision-point">
                  <FaStar className="about-vision-star" />
                  <span>Communauté inspirante</span>
                </div>
                <div className="about-vision-point">
                  <FaStar className="about-vision-star" />
                  <span>Innovation constante</span>
                </div>
                <div className="about-vision-point">
                  <FaStar className="about-vision-star" />
                  <span>Impact durable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section
        id="history"
        className={`about-history-section ${activeTab === "history" ? "active-section" : ""}`}
      >
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Notre Histoire</h2>
            <p className="section-subtitle">
              Un parcours d'engagement et de transformation
            </p>
          </div>
          <div className="about-timeline">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"} animate-on-scroll`}
              >
                <div className="timeline-content glass-card">
                  <div className="timeline-icon-wrapper">{item.icon}</div>
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        id="values"
        className={`about-values-section ${activeTab === "values" ? "active-section" : ""}`}
      >
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Nos Valeurs Fondamentales</h2>
            <p className="section-subtitle">
              Les principes qui guident nos actions
            </p>
          </div>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className="about-value-card animate-on-scroll glass-card"
              >
                <div
                  className="about-value-icon"
                  style={{ background: `${value.color}15`, color: value.color }}
                >
                  {value.icon}
                </div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
                <div
                  className="about-value-line"
                  style={{ background: value.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="about-achievements-section">
        <div className="jci-container">
          <div className="about-achievements-wrapper animate-on-scroll glass-card">
            <div className="about-achievements-header">
              <h2 className="about-achievements-title">Nos Réalisations</h2>
              <p className="about-achievements-subtitle">
                Un impact mesurable et durable
              </p>
            </div>
            <div className="about-achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="about-achievement-item">
                  <div className="about-achievement-number">
                    {achievement.number}
                  </div>
                  <div className="about-achievement-label">
                    {achievement.label}
                  </div>
                  <div className="about-achievement-description">
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
        className={`about-team-section ${activeTab === "team" ? "active-section" : ""}`}
      >
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Notre Équipe</h2>
            <p className="section-subtitle">
              Des leaders passionnés au service de la communauté
            </p>
          </div>
          <div className="about-team-grid">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="about-team-card animate-on-scroll glass-card"
              >
                <div className="about-team-avatar">{member.initials}</div>
                <h3 className="about-team-name">{member.name}</h3>
                <div className="about-team-role">{member.role}</div>
                <p className="about-team-description">{member.description}</p>
                <div className="about-team-social">
                  <button className="about-team-social-btn">
                    <FaLinkedin />
                  </button>
                  <button className="about-team-social-btn">
                    <FaEnvelope />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-join-section animate-on-scroll">
        <div className="jci-container">
          <div className="about-join-wrapper glass-card">
            <div className="about-join-content">
              <div className="about-join-icon-wrapper">
                <FaUsers className="about-join-icon" />
              </div>
              <h2 className="about-join-title">Rejoignez JCI Sbikha</h2>
              <p className="about-join-text">
                Devenez partie prenante d'une communauté dynamique de jeunes
                leaders engagés pour un avenir meilleur à Sbikha et dans la
                région.
              </p>
              <div className="about-join-benefits">
                <div className="about-join-benefit">
                  <FaCheckCircle className="about-join-check" />
                  <span>Développez vos compétences de leadership</span>
                </div>
                <div className="about-join-benefit">
                  <FaCheckCircle className="about-join-check" />
                  <span>Participez à des projets d'impact</span>
                </div>
                <div className="about-join-benefit">
                  <FaCheckCircle className="about-join-check" />
                  <span>Rejoignez un réseau international</span>
                </div>
              </div>
              <div className="about-join-actions">
                <Link
                  to="/join"
                  className="jci-btn jci-btn-primary about-join-btn"
                >
                  Devenir Membre <FaArrowRight className="btn-icon" />
                </Link>
                <Link
                  to="/contact"
                  className="jci-btn jci-btn-secondary about-join-btn-secondary"
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
