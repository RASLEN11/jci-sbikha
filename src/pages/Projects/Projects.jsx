import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; /* Imported Link for navigation */
import "./Projects.css";
import {
  FaHandsHelping,
  FaLeaf,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaShare,
  FaTrophy,
  FaRocket,
  FaBook,
  FaUserGraduate,
  FaFilter,
  FaSearch,
  FaTimes,
  FaQuoteLeft,
  FaLaptop,
  FaPaintBrush,
  FaDumbbell
} from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdEco,
} from "react-icons/md";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  // Categories
  const categories = [
    { id: "all", label: "Tous", icon: <FaRocket /> },
    { id: "leadership", label: "Leadership", icon: <FaUserGraduate /> },
    { id: "education", label: "Éducation", icon: <FaBook /> },
    { id: "environment", label: "Environnement", icon: <FaLeaf /> },
    { id: "social", label: "Social", icon: <FaHandsHelping /> },
    { id: "innovation", label: "Innovation", icon: <FaLightbulb /> },
  ];

  // Projects data
  const projectsData = [
    {
      id: 1,
      title: "Leadership Academy",
      category: "leadership",
      icon: <FaUserGraduate />,
      description:
        "Programme intensif de développement des compétences de leadership pour les jeunes de Sbikha.",
      fullDescription:
        "Leadership Academy est un programme de 8 semaines conçu pour développer les compétences de leadership, la communication et la gestion de projet chez les jeunes participants. Le programme combine des ateliers pratiques, des conférences avec des leaders d'opinion, des projets communautaires et du coaching personnalisé.",
      impact: "150+ jeunes formés depuis 2020",
      beneficiaries: "Jeunes âgés de 18 à 35 ans",
      location: "Sbikha, Tunisie",
      duration: "8 semaines",
      status: "En cours",
      image: "leadership",
      color: "#4CC4D1",
      achievements: [
        "85% des participants ont développé leurs compétences en leadership",
        "45+ projets communautaires initiés par les diplômés",
        "Taux de satisfaction de 92%",
        "3 éditions organisées avec succès",
      ],
      testimonials: [
        {
          name: "Ahmed Ben Ali",
          role: "Diplômé 2024",
          text: "Leadership Academy a transformé ma façon de penser et de agir. J'ai acquis des compétences précieuses qui m'ont permis de lancer mon propre projet communautaire.",
        },
      ],
      featured: true,
    },
    {
      id: 2,
      title: "Solidarité Scolaire",
      category: "social",
      icon: <FaHandsHelping />,
      description:
        "Distribution de fournitures scolaires et soutien éducatif pour les élèves défavorisés.",
      fullDescription:
        "Solidarité Scolaire est une initiative annuelle qui vise à soutenir les élèves de familles défavorisées en leur fournissant des kits scolaires complets et un accompagnement éducatif. Le programme inclut également des ateliers de soutien scolaire et des activités éducatives.",
      impact: "200+ enfants aidés chaque année",
      beneficiaries: "Élèves du primaire et du secondaire",
      location: "Sbikha et ses environs",
      duration: "Annuel (Septembre)",
      status: "Terminé",
      image: "solidarity",
      color: "#ff3b30",
      achievements: [
        "200+ kits scolaires distribués par édition",
        "50+ bourses d'études attribuées",
        "15 ateliers de soutien scolaire organisés",
        "Taux de réussite scolaire amélioré de 30%",
      ],
      testimonials: [
        {
          name: "Fatma Ben Ahmed",
          role: "Mère d'élève bénéficiaire",
          text: "Grâce à JCI Sbikha, mes enfants ont pu commencer l'année scolaire avec tout le matériel nécessaire. Cela a fait une énorme différence pour notre famille.",
        },
      ],
      featured: true,
    },
    {
      id: 3,
      title: "Innovation Hub",
      category: "innovation",
      icon: <FaLightbulb />,
      description:
        "Espace de co-working et d'innovation pour les entrepreneurs et startups locaux.",
      fullDescription:
        "Innovation Hub est un espace de co-working moderne dédié aux jeunes entrepreneurs et porteurs de projets innovants. L'espace offre des bureaux équipés, des salles de réunion, un réseau de mentors et un accès à des opportunités de financement.",
      impact: "15+ startups incubées",
      beneficiaries: "Entrepreneurs, startups, innovateurs",
      location: "Sbikha, Tunisie",
      duration: "Permanent",
      status: "Actif",
      image: "innovation",
      color: "#ff9500",
      achievements: [
        "15 startups accompagnées",
        "50+ emplois créés",
        "3 levées de fonds réussies",
        "Partenariats avec 10 entreprises locales",
      ],
      testimonials: [
        {
          name: "Karim Saadi",
          role: "Fondateur de TechStart",
          text: "L'Innovation Hub nous a fourni l'espace et le soutien nécessaires pour faire décoller notre startup. Un véritable catalyseur de croissance.",
        },
      ],
      featured: true,
    },
    {
      id: 4,
      title: "Sbikha Verte",
      category: "environment",
      icon: <FaLeaf />,
      description:
        "Campagne de reboisement et de sensibilisation à l'environnement.",
      fullDescription:
        "Sbikha Verte est une initiative environnementale qui vise à reboiser la région et à sensibiliser la population à l'importance de la protection de l'environnement. Le projet inclut des campagnes de plantation d'arbres, des ateliers éducatifs et des actions de nettoyage.",
      impact: "500+ arbres plantés",
      beneficiaries: "Communauté locale, écoles, associations",
      location: "Sbikha et ses environs",
      duration: "En cours (2024-2025)",
      status: "En cours",
      image: "green",
      color: "#34c759",
      achievements: [
        "500+ arbres plantés",
        "10 ateliers de sensibilisation organisés",
        "200+ participants aux activités",
        "Partenariat avec 5 associations locales",
      ],
      testimonials: [
        {
          name: "Leila Bouazizi",
          role: "Volontaire",
          text: "Participer à Sbikha Verte m'a permis de contribuer à un avenir plus vert pour notre région. Voir les arbres pousser est une récompense en soi.",
        },
      ],
      featured: false,
    },
    {
      id: 5,
      title: "Leadership Digital",
      category: "education",
      icon: <FaLaptop />,
      description:
        "Formation aux compétences numériques et au leadership digital.",
      fullDescription:
        "Leadership Digital est un programme de formation qui combine les compétences numériques avec le leadership. Les participants apprennent à utiliser les outils numériques, à gérer des communautés en ligne et à développer des stratégies de marketing digital.",
      impact: "50+ jeunes formés",
      beneficiaries: "Jeunes de 18 à 30 ans",
      location: "Sbikha, Tunisie",
      duration: "3 mois",
      status: "Terminé",
      image: "digital",
      color: "#007aff",
      achievements: [
        "50 jeunes certifiés",
        "80% des participants ont amélioré leurs compétences digitales",
        "10 projets digitaux lancés",
        "Taux d'insertion professionnelle de 65%",
      ],
      testimonials: [
        {
          name: "Nadia Gharbi",
          role: "Diplômée 2024",
          text: "Ce programme m'a donné les compétences nécessaires pour décrocher mon premier emploi dans le domaine du marketing digital. Une expérience transformative !",
        },
      ],
      featured: false,
    },
    {
      id: 6,
      title: "Santé pour Tous",
      category: "social",
      icon: <MdHealthAndSafety />,
      description:
        "Campagnes de santé publique et sensibilisation au bien-être.",
      fullDescription:
        "Santé pour Tous est un programme de santé publique qui organise des campagnes de sensibilisation, des dépistages gratuits et des ateliers sur la nutrition et le bien-être. Le programme vise à améliorer la santé et le bien-être de la communauté.",
      impact: "300+ bénéficiaires",
      beneficiaries: "Communauté de Sbikha",
      location: "Sbikha, Tunisie",
      duration: "Annuel",
      status: "En cours",
      image: "health",
      color: "#ff3b30",
      achievements: [
        "300+ consultations médicales gratuites",
        "5 campagnes de dépistage",
        "10 ateliers de nutrition",
        "Partenariat avec 3 cliniques locales",
      ],
      testimonials: [
        {
          name: "Dr. Mohamed Ali",
          role: "Médecin partenaire",
          text: "Les campagnes de santé organisées par JCI Sbikha ont permis de toucher des populations qui n'ont pas accès aux soins de santé de base.",
        },
      ],
      featured: false,
    },
    {
      id: 7,
      title: "Culture et Patrimoine",
      category: "innovation",
      icon: <FaPaintBrush />,
      description:
        "Promotion du patrimoine culturel et artistique de la région.",
      fullDescription:
        "Culture et Patrimoine est un projet qui vise à préserver et promouvoir le riche patrimoine culturel et artistique de Sbikha et de la région. Le projet organise des expositions, des festivals et des ateliers créatifs.",
      impact: "15 événements culturels organisés",
      beneficiaries: "Artistes, artisans, communauté locale",
      location: "Sbikha, Tunisie",
      duration: "Permanent",
      status: "Actif",
      image: "culture",
      color: "#ff1493",
      achievements: [
        "15 événements culturels organisés",
        "50+ artistes locaux impliqués",
        "10 ateliers créatifs",
        "Partenariat avec 5 institutions culturelles",
      ],
      testimonials: [
        {
          name: "Sana Mansouri",
          role: "Artiste locale",
          text: "Grâce à ce projet, j'ai pu exposer mon travail et rencontrer d'autres artistes. Une belle opportunité de valoriser notre patrimoine.",
        },
      ],
      featured: false,
    },
    {
      id: 8,
      title: "Sport et Bien-être",
      category: "social",
      icon: <FaDumbbell />,
      description:
        "Programmes sportifs et activités de bien-être pour la communauté.",
      fullDescription:
        "Sport et Bien-être est un programme qui promeut un mode de vie sain à travers des activités sportives, des tournois et des ateliers de bien-être. Le programme est ouvert à tous les âges et niveaux.",
      impact: "200+ participants",
      beneficiaries: "Tous les âges",
      location: "Sbikha, Tunisie",
      duration: "Annuel",
      status: "Terminé",
      image: "sport",
      color: "#007aff",
      achievements: [
        "200+ participants aux activités",
        "5 tournois sportifs organisés",
        "10 ateliers de bien-être",
        "Partenariat avec 3 clubs sportifs",
      ],
      testimonials: [
        {
          name: "Ali Ben Ahmed",
          role: "Participant",
          text: "Les activités sportives organisées par JCI Sbikha m'ont permis de rester actif et de rencontrer des gens formidables.",
        },
      ],
      featured: false,
    },
    {
      id: 9,
      title: "Entrepreneuriat Jeunesse",
      category: "innovation",
      icon: <FaRocket />,
      description:
        "Programme d'accompagnement à l'entrepreneuriat pour les jeunes.",
      fullDescription:
        "Entrepreneuriat Jeunesse est un programme qui accompagne les jeunes dans la création et le développement de leur entreprise. Le programme offre des formations, du mentorat et un accès à des opportunités de financement.",
      impact: "30+ jeunes entrepreneurs accompagnés",
      beneficiaries: "Jeunes entrepreneurs de 18 à 35 ans",
      location: "Sbikha, Tunisie",
      duration: "6 mois",
      status: "En cours",
      image: "entrepreneurship",
      color: "#34c759",
      achievements: [
        "30 entreprises créées",
        "50+ emplois générés",
        "10 formations dispensées",
        "Partenariat avec 5 institutions financières",
      ],
      testimonials: [
        {
          name: "Mohamed Trabelsi",
          role: "Entrepreneur",
          text: "Le programme d'accompagnement de JCI Sbikha m'a aidé à transformer mon idée en une entreprise viable. Un soutien inestimable.",
        },
      ],
      featured: false,
    },
    {
      id: 10,
      title: "Eco-Responsabilité",
      category: "environment",
      icon: <MdEco />,
      description:
        "Programme de sensibilisation à l'éco-responsabilité et au développement durable.",
      fullDescription:
        "Eco-Responsabilité est un programme qui sensibilise la communauté à l'importance des gestes éco-responsables au quotidien. Le programme inclut des ateliers sur le recyclage, la réduction des déchets et la consommation responsable.",
      impact: "100+ participants",
      beneficiaries: "Communauté de Sbikha",
      location: "Sbikha, Tunisie",
      duration: "En cours",
      status: "Actif",
      image: "eco",
      color: "#34c759",
      achievements: [
        "100+ participants aux ateliers",
        "10 ateliers de sensibilisation",
        "Partenariat avec 3 associations environnementales",
        "200+ kg de déchets recyclés",
      ],
      testimonials: [
        {
          name: "Ahmed Ben Ali",
          role: "Coordinateur",
          text: "L'engagement de la communauté pour l'éco-responsabilité est encourageant. Ensemble, nous faisons une réelle différence.",
        },
      ],
      featured: false,
    },
  ];

  // Filter projects
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projectsData.filter((p) => p.featured);

  const getCategoryIcon = (categoryId) => {
    const cat = categories.find((c) => c.id === categoryId);
    return cat ? cat.icon : <FaRocket />;
  };

  const getCategoryLabel = (categoryId) => {
    const cat = categories.find((c) => c.id === categoryId);
    return cat ? cat.label : categoryId;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "En cours":
        return "#34c759";
      case "Terminé":
        return "#6c757d";
      case "Actif":
        return "#4CC4D1";
      default:
        return "#ff9500";
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case "En cours":
        return "rgba(52, 199, 89, 0.12)";
      case "Terminé":
        return "rgba(108, 117, 125, 0.12)";
      case "Actif":
        return "rgba(76, 196, 209, 0.12)";
      default:
        return "rgba(255, 149, 0, 0.12)";
    }
  };

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero animate-on-scroll">
        <div className="projects-hero-overlay"></div>
        <div className="projects-hero-content">
          <div className="projects-hero-badge">
            <FaRocket className="projects-hero-badge-icon" />
            Nos Projets
          </div>
          <h1 className="projects-hero-title">
            Des Projets Qui
            <br />
            <span className="projects-hero-highlight">
              Transforment la Communauté
            </span>
          </h1>
          <p className="projects-hero-description">
            Découvrez nos initiatives qui créent un impact positif durable à
            Sbikha et dans la région.
          </p>
          <div className="projects-hero-stats">
            <div className="projects-hero-stat">
              <span className="projects-hero-stat-number">10</span>
              <span className="projects-hero-stat-label">Projets Actifs</span>
            </div>
            <div className="projects-hero-stat-divider"></div>
            <div className="projects-hero-stat">
              <span className="projects-hero-stat-number">500+</span>
              <span className="projects-hero-stat-label">Bénéficiaires</span>
            </div>
            <div className="projects-hero-stat-divider"></div>
            <div className="projects-hero-stat">
              <span className="projects-hero-stat-number">120+</span>
              <span className="projects-hero-stat-label">
                Membres Impliqués
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="projects-search-section">
        <div className="jci-container">
          <div className="projects-search-wrapper glass-card">
            <div className="projects-search-bar">
              <FaSearch className="projects-search-icon" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="projects-search-input"
              />
              {searchTerm && (
                <button
                  className="projects-search-clear"
                  onClick={() => setSearchTerm("")}
                >
                  <FaTimes />
                </button>
              )}
            </div>
            <button
              className="projects-filter-toggle"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FaFilter />
              Filtrer
            </button>
          </div>

          {isFilterOpen && (
            <div className="projects-filters glass-card animate-on-scroll">
              <div className="projects-filters-header">
                <span className="projects-filters-title">Catégories</span>
                <button
                  className="projects-filters-close"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="projects-filters-grid">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`projects-filter-btn ${activeCategory === category.id ? "active" : ""}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="projects-filter-icon">
                      {category.icon}
                    </span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-featured-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Projets Phares</h2>
            <p className="section-subtitle">
              Nos initiatives les plus marquantes
            </p>
          </div>

          <div className="projects-featured-grid">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="project-featured-card animate-on-scroll glass-card"
              >
                <div className="project-featured-header">
                  <div
                    className="project-featured-icon"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                    }}
                  >
                    {project.icon}
                  </div>
                  <div
                    className="project-featured-status"
                    style={{
                      background: getStatusBg(project.status),
                      color: getStatusColor(project.status),
                    }}
                  >
                    {project.status}
                  </div>
                </div>
                <h3 className="project-featured-title">{project.title}</h3>
                <p className="project-featured-description">
                  {project.description}
                </p>
                <div className="project-featured-meta">
                  <span>
                    <FaMapMarkerAlt /> {project.location}
                  </span>
                  <span>
                    <FaCalendarAlt /> {project.duration}
                  </span>
                </div>
                <div className="project-featured-impact">
                  <FaChartLine className="project-featured-impact-icon" />
                  <span>{project.impact}</span>
                </div>
                <button
                  className="project-featured-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  En savoir plus
                  <FaArrowRight className="btn-icon-small" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="projects-grid-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Tous Nos Projets</h2>
            <p className="section-subtitle">
              {filteredProjects.length} projets pour transformer la communauté
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card animate-on-scroll glass-card"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-card-header">
                    <div
                      className="project-card-icon"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                      }}
                    >
                      {project.icon}
                    </div>
                    <div
                      className="project-card-status"
                      style={{
                        background: getStatusBg(project.status),
                        color: getStatusColor(project.status),
                      }}
                    >
                      {project.status}
                    </div>
                  </div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-description">
                    {project.description}
                  </p>
                  <div className="project-card-category">
                    {getCategoryIcon(project.category)}
                    <span>{getCategoryLabel(project.category)}</span>
                  </div>
                  <div className="project-card-footer">
                    <span className="project-card-impact">
                      {project.impact}
                    </span>
                    <button className="project-card-details">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="projects-empty">
              <FaSearch className="projects-empty-icon" />
              <h3>Aucun projet trouvé</h3>
              <p>Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Impact Section */}
      <section className="projects-impact-section animate-on-scroll">
        <div className="jci-container">
          <div className="projects-impact-wrapper glass-card">
            <div className="projects-impact-header">
              <div className="projects-impact-icon-wrapper">
                <FaChartLine className="projects-impact-icon" />
              </div>
              <div>
                <h2 className="projects-impact-title">Notre Impact</h2>
                <p className="projects-impact-subtitle">
                  Des résultats concrets pour la communauté
                </p>
              </div>
            </div>
            <div className="projects-impact-grid">
              <div className="projects-impact-item">
                <span className="projects-impact-number">500+</span>
                <span className="projects-impact-label">
                  Bénéficiaires directs
                </span>
              </div>
              <div className="projects-impact-item">
                <span className="projects-impact-number">10</span>
                <span className="projects-impact-label">Projets réalisés</span>
              </div>
              <div className="projects-impact-item">
                <span className="projects-impact-number">120+</span>
                <span className="projects-impact-label">Membres impliqués</span>
              </div>
              <div className="projects-impact-item">
                <span className="projects-impact-number">85%</span>
                <span className="projects-impact-label">
                  Taux de satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="projects-cta-section animate-on-scroll">
        <div className="jci-container">
          <div className="projects-cta-wrapper glass-card">
            <div className="projects-cta-content">
              <div className="projects-cta-icon-wrapper">
                <FaHandsHelping className="projects-cta-icon" />
              </div>
              <h2 className="projects-cta-title">Vous Voulez Contribuer ?</h2>
              <p className="projects-cta-text">
                Rejoignez-nous dans nos projets et faites partie du changement.
                Ensemble, nous pouvons créer un impact durable à Sbikha.
              </p>
              <div className="projects-cta-actions">
                <Link
                  to="/join"
                  className="jci-btn jci-btn-primary projects-cta-btn"
                >
                  Devenir Bénévole
                  <FaArrowRight className="btn-icon" />
                </Link>
                <Link
                  to="/contact"
                  className="jci-btn jci-btn-secondary projects-cta-btn-secondary"
                >
                  Proposer un Projet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <div className="project-modal-content">
              <div className="project-modal-header">
                <div
                  className="project-modal-icon"
                  style={{
                    background: `${selectedProject.color}15`,
                    color: selectedProject.color,
                  }}
                >
                  {selectedProject.icon}
                </div>
                <div className="project-modal-title-area">
                  <h2 className="project-modal-title">
                    {selectedProject.title}
                  </h2>
                  <div className="project-modal-meta">
                    <span className="project-modal-category">
                      {getCategoryIcon(selectedProject.category)}
                      {getCategoryLabel(selectedProject.category)}
                    </span>
                    <span
                      className="project-modal-status"
                      style={{
                        background: getStatusBg(selectedProject.status),
                        color: getStatusColor(selectedProject.status),
                      }}
                    >
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-modal-body">
                <p className="project-modal-description">
                  {selectedProject.fullDescription}
                </p>

                <div className="project-modal-details">
                  <div className="project-modal-detail">
                    <FaMapMarkerAlt className="project-modal-detail-icon" />
                    <div>
                      <span className="project-modal-detail-label">Lieu</span>
                      <span className="project-modal-detail-value">
                        {selectedProject.location}
                      </span>
                    </div>
                  </div>
                  <div className="project-modal-detail">
                    <FaCalendarAlt className="project-modal-detail-icon" />
                    <div>
                      <span className="project-modal-detail-label">Durée</span>
                      <span className="project-modal-detail-value">
                        {selectedProject.duration}
                      </span>
                    </div>
                  </div>
                  <div className="project-modal-detail">
                    <FaUsers className="project-modal-detail-icon" />
                    <div>
                      <span className="project-modal-detail-label">
                        Bénéficiaires
                      </span>
                      <span className="project-modal-detail-value">
                        {selectedProject.beneficiaries}
                      </span>
                    </div>
                  </div>
                  <div className="project-modal-detail">
                    <FaChartLine className="project-modal-detail-icon" />
                    <div>
                      <span className="project-modal-detail-label">Impact</span>
                      <span className="project-modal-detail-value">
                        {selectedProject.impact}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="project-modal-achievements">
                  <h4 className="project-modal-achievements-title">
                    <FaTrophy className="project-modal-achievements-icon" />
                    Réalisations
                  </h4>
                  <ul className="project-modal-achievements-list">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index}>
                        <FaCheckCircle className="project-modal-achievement-check" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.testimonials &&
                  selectedProject.testimonials.length > 0 && (
                    <div className="project-modal-testimonials">
                      <h4 className="project-modal-testimonials-title">
                        <FaQuoteLeft className="project-modal-testimonials-icon" />
                        Témoignages
                      </h4>
                      {selectedProject.testimonials.map(
                        (testimonial, index) => (
                          <div
                            key={index}
                            className="project-modal-testimonial"
                          >
                            <p className="project-modal-testimonial-text">
                              "{testimonial.text}"
                            </p>
                            <div className="project-modal-testimonial-author">
                              <span className="project-modal-testimonial-name">
                                {testimonial.name}
                              </span>
                              <span className="project-modal-testimonial-role">
                                {testimonial.role}
                              </span>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  )}
              </div>

              <div className="project-modal-footer">
                <Link
                  to="/join"
                  className="jci-btn jci-btn-primary project-modal-btn"
                >
                  Participer au Projet
                  <FaArrowRight className="btn-icon" />
                </Link>
                <button className="jci-btn jci-btn-secondary project-modal-btn-secondary">
                  <FaShare /> Partager
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
