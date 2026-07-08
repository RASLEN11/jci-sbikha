import React, { useState, useEffect } from 'react';
import './Trainings.css';
import { 
  FaGraduationCap,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaArrowRight,
  FaTrophy,
  FaUsers,
  FaCertificate,
  FaBook,
  FaLaptop,
  FaLightbulb,
  FaHandsHelping,
  FaSearch,
  FaTimes,
  FaFilter,
  FaRocket
} from 'react-icons/fa';

const Trainings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  // Categories
  const categories = [
    { id: 'all', label: 'Tous', icon: <FaGraduationCap /> },
    { id: 'leadership', label: 'Leadership', icon: <FaTrophy /> },
    { id: 'digital', label: 'Digital', icon: <FaLaptop /> },
    { id: 'entrepreneurship', label: 'Entrepreneuriat', icon: <FaRocket /> },
    { id: 'softskills', label: 'Soft Skills', icon: <FaHandsHelping /> },
    { id: 'professional', label: 'Professionnel', icon: <FaCertificate /> }
  ];

  // Trainings data
  const trainingsData = [
    {
      id: 1,
      title: "Leadership Academy",
      category: "leadership",
      icon: <FaTrophy />,
      description: "Programme de développement du leadership pour les jeunes de 18 à 35 ans.",
      fullDescription: "Leadership Academy est un programme intensif de 8 semaines conçu pour développer les compétences de leadership, la communication et la gestion de projet. Les participants bénéficient d'ateliers pratiques, de coaching individuel et de projets concrets.",
      duration: "8 semaines",
      schedule: "Samedis 9h-17h",
      location: "Centre Culturel de Sbikha",
      format: "Présentiel",
      capacity: 30,
      registered: 25,
      price: "Gratuit",
      instructor: "Ahmed Ben Ali",
      level: "Débutant à Intermédiaire",
      skills: ["Leadership", "Communication", "Gestion de projet", "Travail d'équipe"],
      certification: "Certificat JCI Sbikha",
      status: "Inscriptions Ouvertes",
      featured: true,
      startDate: "15 Octobre 2026",
      image: "leadership"
    },
    {
      id: 2,
      title: "Marketing Digital pour Entrepreneurs",
      category: "digital",
      icon: <FaLaptop />,
      description: "Maîtrisez les outils du marketing digital pour développer votre activité.",
      fullDescription: "Ce programme de 6 semaines vous apprend à utiliser les outils du marketing digital : réseaux sociaux, SEO, email marketing, publicité en ligne et analytics. Idéal pour les entrepreneurs et porteurs de projets.",
      duration: "6 semaines",
      schedule: "Mercredis 18h-21h",
      location: "Innovation Hub - Sbikha",
      format: "Mixte (Présentiel + En ligne)",
      capacity: 25,
      registered: 18,
      price: "Gratuit",
      instructor: "Nadia Gharbi",
      level: "Intermédiaire",
      skills: ["Marketing digital", "Réseaux sociaux", "SEO", "Analytics"],
      certification: "Certificat JCI Sbikha",
      status: "Inscriptions Ouvertes",
      featured: true,
      startDate: "5 Novembre 2026",
      image: "digital"
    },
    {
      id: 3,
      title: "Entrepreneuriat & Innovation",
      category: "entrepreneurship",
      icon: <FaRocket />,
      description: "Transformez votre idée en projet entrepreneurial viable.",
      fullDescription: "Ce programme d'accompagnement vous guide à travers toutes les étapes de la création d'entreprise : validation d'idée, business plan, financement, marketing et gestion. Un mentorat personnalisé est proposé.",
      duration: "12 semaines",
      schedule: "Jeudis 18h-21h",
      location: "Innovation Hub - Sbikha",
      format: "Présentiel",
      capacity: 20,
      registered: 12,
      price: "Gratuit",
      instructor: "Karim Saadi",
      level: "Tous niveaux",
      skills: ["Business plan", "Financement", "Marketing", "Gestion"],
      certification: "Certificat JCI Sbikha",
      status: "Inscriptions Ouvertes",
      featured: false,
      startDate: "20 Novembre 2026",
      image: "entrepreneurship"
    },
    {
      id: 4,
      title: "Communication & Prise de Parole",
      category: "softskills",
      icon: <FaHandsHelping />,
      description: "Développez vos compétences en communication et prise de parole en public.",
      fullDescription: "Ce programme de 4 semaines vous aide à maîtriser l'art de la communication : expression orale, langage corporel, gestion du stress et persuasion. Des exercices pratiques et des mises en situation sont proposés.",
      duration: "4 semaines",
      schedule: "Lundis 18h-21h",
      location: "Centre Culturel de Sbikha",
      format: "Présentiel",
      capacity: 25,
      registered: 20,
      price: "Gratuit",
      instructor: "Sana Mansouri",
      level: "Débutant",
      skills: ["Communication", "Prise de parole", "Persuasion", "Confiance en soi"],
      certification: "Certificat JCI Sbikha",
      status: "Complet",
      featured: false,
      startDate: "10 Septembre 2026",
      image: "communication"
    },
    {
      id: 5,
      title: "Gestion de Projet pour Leaders",
      category: "leadership",
      icon: <FaTrophy />,
      description: "Apprenez les méthodologies de gestion de projet appliquées au leadership.",
      fullDescription: "Ce programme de 6 semaines vous initie aux méthodologies de gestion de projet (Agile, Scrum, Waterfall) et à leur application dans le contexte du leadership et du management d'équipe.",
      duration: "6 semaines",
      schedule: "Mardis 18h-21h",
      location: "Centre Culturel de Sbikha",
      format: "Présentiel",
      capacity: 25,
      registered: 15,
      price: "Gratuit",
      instructor: "Mohamed Trabelsi",
      level: "Intermédiaire",
      skills: ["Gestion de projet", "Agile", "Scrum", "Leadership"],
      certification: "Certificat JCI Sbikha",
      status: "Inscriptions Ouvertes",
      featured: false,
      startDate: "15 Janvier 2027",
      image: "project"
    },
    {
      id: 6,
      title: "Compétences Numériques Avancées",
      category: "digital",
      icon: <FaLaptop />,
      description: "Perfectionnez vos compétences numériques pour le monde professionnel.",
      fullDescription: "Ce programme avancé couvre les outils numériques essentiels : analyse de données, automatisation, intelligence artificielle, et cybersécurité. Idéal pour les professionnels souhaitant se perfectionner.",
      duration: "8 semaines",
      schedule: "Vendredis 18h-21h",
      location: "Innovation Hub - Sbikha",
      format: "En ligne",
      capacity: 30,
      registered: 10,
      price: "Gratuit",
      instructor: "Expert en Digital",
      level: "Avancé",
      skills: ["Data Analysis", "AI", "Cybersécurité", "Automatisation"],
      certification: "Certificat JCI Sbikha",
      status: "Inscriptions Ouvertes",
      featured: false,
      startDate: "1 Mars 2027",
      image: "digital-advanced"
    },
    {
      id: 7,
      title: "Leadership & Développement Personnel",
      category: "leadership",
      icon: <FaTrophy />,
      description: "Un programme complet pour développer votre potentiel de leader.",
      fullDescription: "Ce programme de 10 semaines explore les dimensions du leadership personnel : intelligence émotionnelle, gestion du stress, prise de décision et développement de la résilience. Une approche holistique du leadership.",
      duration: "10 semaines",
      schedule: "Samedis 9h-13h",
      location: "Centre Culturel de Sbikha",
      format: "Présentiel",
      capacity: 25,
      registered: 22,
      price: "Gratuit",
      instructor: "Ahmed Ben Ali",
      level: "Tous niveaux",
      skills: ["Intelligence émotionnelle", "Résilience", "Décision", "Gestion du stress"],
      certification: "Certificat JCI Sbikha",
      status: "Complet",
      featured: false,
      startDate: "5 Avril 2026",
      image: "personal-leadership"
    },
    {
      id: 8,
      title: "Entrepreneuriat Social",
      category: "entrepreneurship",
      icon: <FaRocket />,
      description: "Créez un projet entrepreneurial à impact social positif.",
      fullDescription: "Ce programme vous guide dans la création d'un projet entrepreneurial qui répond à un besoin social. Découvrez les modèles d'entreprises sociales, le financement alternatif et la mesure d'impact.",
      duration: "8 semaines",
      schedule: "Mercredis 18h-21h",
      location: "Innovation Hub - Sbikha",
      format: "Mixte (Présentiel + En ligne)",
      capacity: 20,
      registered: 8,
      price: "Gratuit",
      instructor: "Leila Bouazizi",
      level: "Intermédiaire",
      skills: ["Entrepreneuriat social", "Impact", "Financement", "Modèles d'affaires"],
      certification: "Certificat JCI Sbikha",
      status: "Inscriptions Ouvertes",
      featured: false,
      startDate: "10 Mars 2027",
      image: "social-entrepreneurship"
    }
  ];

  // Filter trainings
  const filteredTrainings = trainingsData.filter(training => {
    const matchesCategory = selectedCategory === 'all' || training.category === selectedCategory;
    const matchesSearch = training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          training.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          training.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredTrainings = trainingsData.filter(t => t.featured);

  const getCategoryLabel = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.label : categoryId;
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Inscriptions Ouvertes': return '#34c759';
      case 'Complet': return '#ff3b30';
      default: return '#ff9500';
    }
  };

  const getStatusBg = (status) => {
    switch(status) {
      case 'Inscriptions Ouvertes': return 'rgba(52, 199, 89, 0.12)';
      case 'Complet': return 'rgba(255, 59, 48, 0.12)';
      default: return 'rgba(255, 149, 0, 0.12)';
    }
  };

  return (
    <div className="trainings-page">
      {/* Hero Section */}
      <section className="trainings-hero animate-on-scroll">
        <div className="trainings-hero-overlay"></div>
        <div className="trainings-hero-content">
          <div className="trainings-hero-badge">
            <FaGraduationCap className="trainings-hero-badge-icon" />
            Formations
          </div>
          <h1 className="trainings-hero-title">
            Développez Vos<br />
            <span className="trainings-hero-highlight">Compétences</span>
          </h1>
          <p className="trainings-hero-description">
            Des formations de qualité pour développer votre leadership, 
            vos compétences digitales et votre potentiel professionnel.
          </p>
          <div className="trainings-hero-stats">
            <div className="trainings-hero-stat">
              <span className="trainings-hero-stat-number">{trainingsData.length}</span>
              <span className="trainings-hero-stat-label">Formations</span>
            </div>
            <div className="trainings-hero-stat-divider"></div>
            <div className="trainings-hero-stat">
              <span className="trainings-hero-stat-number">150+</span>
              <span className="trainings-hero-stat-label">Participants</span>
            </div>
            <div className="trainings-hero-stat-divider"></div>
            <div className="trainings-hero-stat">
              <span className="trainings-hero-stat-number">8</span>
              <span className="trainings-hero-stat-label">Formateurs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="trainings-search-section">
        <div className="jci-container">
          <div className="trainings-search-wrapper glass-card">
            <div className="trainings-search-bar">
              <FaSearch className="trainings-search-icon" />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="trainings-search-input"
              />
              {searchTerm && (
                <button className="trainings-search-clear" onClick={() => setSearchTerm('')}>
                  <FaTimes />
                </button>
              )}
            </div>
            <button className="trainings-filter-toggle" onClick={() => setIsFilterOpen(!isFilterOpen)}>
              <FaFilter />
              Filtrer
            </button>
          </div>

          {isFilterOpen && (
            <div className="trainings-filters glass-card animate-on-scroll">
              <div className="trainings-filters-header">
                <span className="trainings-filters-title">Catégories</span>
                <button className="trainings-filters-close" onClick={() => setIsFilterOpen(false)}>
                  <FaTimes />
                </button>
              </div>
              <div className="trainings-filters-grid">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`trainings-filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="trainings-filter-icon">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Trainings */}
      <section className="trainings-featured-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Formations à la Une</h2>
            <p className="section-subtitle">Nos programmes les plus populaires</p>
          </div>

          <div className="trainings-featured-grid">
            {featuredTrainings.map((training) => (
              <div key={training.id} className="training-featured-card animate-on-scroll glass-card">
                <div className="training-featured-header">
                  <div className="training-featured-icon" style={{ background: '#4CC4D115', color: '#4CC4D1' }}>
                    {training.icon}
                  </div>
                  <div className="training-featured-status" style={{
                    background: getStatusBg(training.status),
                    color: getStatusColor(training.status)
                  }}>
                    {training.status}
                  </div>
                </div>
                <h3 className="training-featured-title">{training.title}</h3>
                <p className="training-featured-description">{training.description}</p>
                <div className="training-featured-meta">
                  <span><FaCalendarAlt /> {training.duration}</span>
                  <span><FaClock /> {training.schedule}</span>
                </div>
                <div className="training-featured-info">
                  <span><FaUsers /> {training.registered}/{training.capacity}</span>
                  <span><FaMapMarkerAlt /> {training.location}</span>
                </div>
                <button 
                  className="training-featured-btn"
                  onClick={() => setSelectedTraining(training)}
                >
                  En savoir plus
                  <FaArrowRight className="btn-icon-small" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Trainings Grid */}
      <section className="trainings-grid-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Toutes les Formations</h2>
            <p className="section-subtitle">{filteredTrainings.length} formations disponibles</p>
          </div>

          {filteredTrainings.length > 0 ? (
            <div className="trainings-grid">
              {filteredTrainings.map((training) => (
                <div 
                  key={training.id} 
                  className="training-card animate-on-scroll glass-card"
                  onClick={() => setSelectedTraining(training)}
                >
                  <div className="training-card-header">
                    <div className="training-card-icon" style={{ background: '#4CC4D115', color: '#4CC4D1' }}>
                      {training.icon}
                    </div>
                    <div className="training-card-status" style={{
                      background: getStatusBg(training.status),
                      color: getStatusColor(training.status)
                    }}>
                      {training.status}
                    </div>
                  </div>
                  <h3 className="training-card-title">{training.title}</h3>
                  <p className="training-card-description">{training.description}</p>
                  <div className="training-card-category">
                    {training.icon}
                    <span>{getCategoryLabel(training.category)}</span>
                  </div>
                  <div className="training-card-footer">
                    <div className="training-card-info">
                      <span><FaCalendarAlt /> {training.duration}</span>
                      <span><FaUsers /> {training.registered}/{training.capacity}</span>
                    </div>
                    <button className="training-card-details">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="trainings-empty">
              <FaSearch className="trainings-empty-icon" />
              <h3>Aucune formation trouvée</h3>
              <p>Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Training Modal */}
      {selectedTraining && (
        <div className="training-modal-overlay" onClick={() => setSelectedTraining(null)}>
          <div className="training-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="training-modal-close" onClick={() => setSelectedTraining(null)}>
              ×
            </button>
            <div className="training-modal-content">
              <div className="training-modal-header">
                <div className="training-modal-icon" style={{ background: '#4CC4D115', color: '#4CC4D1' }}>
                  {selectedTraining.icon}
                </div>
                <div className="training-modal-title-area">
                  <h2 className="training-modal-title">{selectedTraining.title}</h2>
                  <div className="training-modal-meta">
                    <span className="training-modal-category">
                      {selectedTraining.icon}
                      {getCategoryLabel(selectedTraining.category)}
                    </span>
                    <span className="training-modal-status" style={{
                      background: getStatusBg(selectedTraining.status),
                      color: getStatusColor(selectedTraining.status)
                    }}>
                      {selectedTraining.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="training-modal-body">
                <p className="training-modal-description">{selectedTraining.fullDescription}</p>

                <div className="training-modal-details">
                  <div className="training-modal-detail">
                    <FaCalendarAlt className="training-modal-detail-icon" />
                    <div>
                      <span className="training-modal-detail-label">Début</span>
                      <span className="training-modal-detail-value">{selectedTraining.startDate}</span>
                    </div>
                  </div>
                  <div className="training-modal-detail">
                    <FaClock className="training-modal-detail-icon" />
                    <div>
                      <span className="training-modal-detail-label">Horaire</span>
                      <span className="training-modal-detail-value">{selectedTraining.schedule}</span>
                    </div>
                  </div>
                  <div className="training-modal-detail">
                    <FaMapMarkerAlt className="training-modal-detail-icon" />
                    <div>
                      <span className="training-modal-detail-label">Lieu</span>
                      <span className="training-modal-detail-value">{selectedTraining.location}</span>
                    </div>
                  </div>
                  <div className="training-modal-detail">
                    <FaUsers className="training-modal-detail-icon" />
                    <div>
                      <span className="training-modal-detail-label">Participants</span>
                      <span className="training-modal-detail-value">{selectedTraining.registered}/{selectedTraining.capacity}</span>
                    </div>
                  </div>
                  <div className="training-modal-detail">
                    <FaUser className="training-modal-detail-icon" />
                    <div>
                      <span className="training-modal-detail-label">Formateur</span>
                      <span className="training-modal-detail-value">{selectedTraining.instructor}</span>
                    </div>
                  </div>
                  <div className="training-modal-detail">
                    <FaCertificate className="training-modal-detail-icon" />
                    <div>
                      <span className="training-modal-detail-label">Certification</span>
                      <span className="training-modal-detail-value">{selectedTraining.certification}</span>
                    </div>
                  </div>
                </div>

                <div className="training-modal-skills">
                  <h4 className="training-modal-skills-title">
                    <FaLightbulb className="training-modal-skills-icon" />
                    Compétences acquises
                  </h4>
                  <div className="training-modal-skills-list">
                    {selectedTraining.skills.map((skill, index) => (
                      <span key={index} className="training-modal-skill">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="training-modal-footer">
                <button 
                  className="jci-btn jci-btn-primary training-modal-btn"
                  disabled={selectedTraining.status === 'Complet'}
                >
                  {selectedTraining.status === 'Complet' ? 'Formation Complète' : "S'inscrire Maintenant"}
                  {selectedTraining.status !== 'Complet' && <FaArrowRight className="btn-icon" />}
                </button>
                <button className="jci-btn jci-btn-secondary training-modal-btn-secondary">
                  <FaBook /> Programme
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="trainings-benefits-section animate-on-scroll">
        <div className="jci-container">
          <div className="trainings-benefits-wrapper glass-card">
            <h2 className="trainings-benefits-title">Pourquoi Choisir nos Formations ?</h2>
            <div className="trainings-benefits-grid">
              <div className="trainings-benefit-item">
                <div className="trainings-benefit-icon-wrapper">
                  <FaTrophy className="trainings-benefit-icon" />
                </div>
                <h4>Formateurs Qualifiés</h4>
                <p>Des experts passionnés et expérimentés dans leur domaine</p>
              </div>
              <div className="trainings-benefit-item">
                <div className="trainings-benefit-icon-wrapper">
                  <FaCertificate className="trainings-benefit-icon" />
                </div>
                <h4>Certification Reconnaue</h4>
                <p>Des certificats reconnus par les institutions et entreprises</p>
              </div>
              <div className="trainings-benefit-item">
                <div className="trainings-benefit-icon-wrapper">
                  <FaUsers className="trainings-benefit-icon" />
                </div>
                <h4>Réseautage</h4>
                <p>Rejoignez une communauté de 120+ jeunes leaders engagés</p>
              </div>
              <div className="trainings-benefit-item">
                <div className="trainings-benefit-icon-wrapper">
                  <FaRocket className="trainings-benefit-icon" />
                </div>
                <h4>100% Gratuit</h4>
                <p>Des formations de qualité accessibles à tous sans frais</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainings;