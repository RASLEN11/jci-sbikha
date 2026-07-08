import React, { useState, useEffect } from "react";
import "./NewsEvents.css";
import {
  FaNewspaper,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaArrowRight,
  FaSearch,
  FaFilter,
  FaTimes,
  FaHeart,
  FaComment,
  FaEye,
  FaBookmark,
  FaChevronLeft,
  FaChevronRight,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaLink,
  FaUsers,
  FaHandsHelping,
  FaGlobe,
  FaLightbulb,
  FaTrophy,
  FaCalendarCheck,
  FaBell,
  FaTicketAlt,
} from "react-icons/fa";

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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
    { id: "all", label: "Tous", icon: <FaNewspaper /> },
    { id: "community", label: "Communauté", icon: <FaUsers /> },
    { id: "leadership", label: "Leadership", icon: <FaTrophy /> },
    { id: "education", label: "Éducation", icon: <FaLightbulb /> },
    { id: "environment", label: "Environnement", icon: <FaGlobe /> },
    { id: "social", label: "Social", icon: <FaHandsHelping /> },
  ];

  const newsData = [
    {
      id: 1,
      title: "JCI Sbikha lance la 4ème édition de Leadership Academy",
      excerpt:
        "Un programme intensif de développement des compétences de leadership pour les jeunes de la région de Sbikha et ses environs.",
      content:
        "La Jeune Chambre Internationale de Sbikha est fière d'annoncer le lancement de la 4ème édition de Leadership Academy. Ce programme intensif de 8 semaines vise à développer les compétences de leadership, la communication et la gestion de projet chez les jeunes participants.\n\nAu programme : ateliers pratiques, conférences avec des leaders d'opinion, projets communautaires et coaching personnalisé. Les participants auront l'opportunité de mettre en pratique leurs apprentissages à travers des projets concrets au service de la communauté.",
      category: "leadership",
      date: "15 Juin 2026",
      author: "Ahmed Ben Ali",
      readTime: "5 min",
      views: 234,
      likes: 45,
      comments: 12,
      tags: ["Leadership", "Formation", "Jeunesse"],
      featured: true,
    },
    {
      id: 2,
      title: "Campagne de solidarité : Distribution de fournitures scolaires",
      excerpt:
        "Plus de 200 enfants de familles défavorisées ont reçu des kits scolaires complets pour la rentrée.",
      content:
        "Dans le cadre de son engagement social, JCI Sbikha a organisé une campagne de distribution de fournitures scolaires au profit des enfants de familles défavorisées de la région.\n\nCette initiative a permis de distribuer plus de 200 kits scolaires complets incluant cartables, cahiers, stylos, et autres fournitures essentielles. La campagne a été réalisée en partenariat avec des entreprises locales et des donateurs généreux.",
      category: "social",
      date: "1 Septembre 2026",
      author: "Sana Mansouri",
      readTime: "4 min",
      views: 189,
      likes: 67,
      comments: 8,
      tags: ["Solidarité", "Éducation", "Enfants"],
      featured: true,
    },
    {
      id: 3,
      title:
        "Innovation Hub : Un espace de co-working pour les jeunes entrepreneurs",
      excerpt:
        "Ouverture d'un espace moderne de travail collaboratif pour les startups et entrepreneurs locaux.",
      content:
        "JCI Sbikha a inauguré son Innovation Hub, un espace de co-working moderne dédié aux jeunes entrepreneurs et porteurs de projets de la région.\n\nL'espace dispose de bureaux équipés, de salles de réunion, d'un espace de conférence et d'un réseau de mentors pour accompagner les startups. Déjà 15 projets ont trouvé refuge dans ce nouvel espace d'innovation.",
      category: "community",
      date: "20 Juillet 2026",
      author: "Mohamed Trabelsi",
      readTime: "6 min",
      views: 312,
      likes: 89,
      comments: 23,
      tags: ["Innovation", "Entrepreneuriat", "Co-working"],
      featured: false,
    },
    {
      id: 4,
      title: "JCI Sbikha remporte le prix du meilleur projet communautaire",
      excerpt:
        "Le projet 'Sbikha Verte' récompensé lors de la conférence régionale de JCI.",
      content:
        "Lors de la conférence régionale JCI, le projet 'Sbikha Verte' de JCI Sbikha a été récompensé par le prix du meilleur projet communautaire.\n\nCe projet de reboisement et de sensibilisation environnementale a permis de planter plus de 500 arbres et d'organiser des ateliers de sensibilisation dans les écoles de la région. Une reconnaissance bien méritée pour l'engagement de l'équipe.",
      category: "environment",
      date: "10 Mai 2026",
      author: "Leila Bouazizi",
      readTime: "3 min",
      views: 456,
      likes: 112,
      comments: 34,
      tags: ["Environnement", "Prix", "Régional"],
      featured: true,
    },
    {
      id: 5,
      title: "Formation en leadership digital pour 50 jeunes",
      excerpt:
        "Un programme de formation aux compétences numériques et au leadership pour préparer l'avenir.",
      content:
        "JCI Sbikha a lancé un programme de formation en leadership digital destiné à 50 jeunes de la région. Ce programme de 3 mois combine des modules sur les compétences numériques, le leadership et la gestion de projets.\n\nLes participants ont suivi des formations sur les outils numériques, le marketing digital, la gestion de communauté et le leadership. Un programme qui prépare les jeunes aux défis du monde professionnel moderne.",
      category: "education",
      date: "5 Août 2026",
      author: "Karim Saadi",
      readTime: "4 min",
      views: 278,
      likes: 56,
      comments: 15,
      tags: ["Digital", "Formation", "Leadership"],
      featured: false,
    },
    {
      id: 6,
      title: "Grande collecte de sang organisée à Sbikha",
      excerpt:
        "Plus de 100 donneurs ont participé à la campagne de don du sang organisée par JCI Sbikha.",
      content:
        "JCI Sbikha a organisé une grande campagne de don du sang en collaboration avec le centre de transfusion sanguine de la région. Plus de 100 donneurs ont participé à cette action humanitaire.\n\nCette initiative s'inscrit dans le cadre des actions de santé publique menées par l'organisation pour sensibiliser à l'importance du don du sang et sauver des vies.",
      category: "social",
      date: "25 Juin 2026",
      author: "Nadia Gharbi",
      readTime: "3 min",
      views: 156,
      likes: 78,
      comments: 9,
      tags: ["Santé", "Solidarité", "Don du sang"],
      featured: false,
    },
    {
      id: 7,
      title: "Atelier de sensibilisation à l'environnement dans les écoles",
      excerpt:
        "JCI Sbikha sensibilise les élèves à l'importance de la protection de l'environnement.",
      content:
        "Dans le cadre de son engagement environnemental, JCI Sbikha a organisé des ateliers de sensibilisation dans les écoles primaires de Sbikha.\n\nLes élèves ont participé à des activités ludiques et éducatives sur le tri des déchets, le recyclage et l'importance de préserver la nature. Des centaines d'enfants ont été touchés par ce programme.",
      category: "environment",
      date: "15 Mars 2026",
      author: "Ahmed Ben Ali",
      readTime: "4 min",
      views: 201,
      likes: 45,
      comments: 7,
      tags: ["Éducation", "Environnement", "Enfants"],
      featured: false,
    },
    {
      id: 8,
      title: "JCI Sbikha célèbre 8 ans d'impact",
      excerpt:
        "Un événement pour célébrer 8 ans d'engagement au service de la communauté de Sbikha.",
      content:
        "JCI Sbikha a célébré son 8ème anniversaire lors d'un événement réunissant membres, partenaires et amis de l'organisation.\n\nL'occasion de revenir sur les réalisations de ces 8 années, de récompenser les membres méritants et de projeter les ambitions futures de l'organisation pour la région.",
      category: "community",
      date: "5 Janvier 2026",
      author: "Sana Mansouri",
      readTime: "5 min",
      views: 389,
      likes: 134,
      comments: 28,
      tags: ["Anniversaire", "Célébration", "Impact"],
      featured: false,
    },
  ];

  const eventsData = [
    {
      id: 1,
      title: "Leadership Academy 2026 - Session d'Automne",
      description:
        "Rejoignez notre programme de leadership de 8 semaines avec des ateliers pratiques et des mentors experts.",
      date: "15 Octobre 2026",
      time: "09:00 - 17:00",
      location: "Centre Culturel de Sbikha",
      category: "leadership",
      type: "Formation",
      capacity: 50,
      registered: 38,
      price: "Gratuit",
      speakers: ["Ahmed Ben Ali", "Sana Mansouri", "Karim Saadi"],
      tags: ["Leadership", "Formation", "Développement"],
      featured: true,
      status: "Inscriptions Ouvertes",
    },
    {
      id: 2,
      title: "Journée de Solidarité : Distribution Alimentaire",
      description:
        "Distribution de colis alimentaires aux familles vulnérables de Sbikha et ses environs.",
      date: "20 Octobre 2026",
      time: "08:00 - 14:00",
      location: "Salle Polyvalente de Sbikha",
      category: "social",
      type: "Action Sociale",
      capacity: 100,
      registered: 72,
      price: "Gratuit",
      speakers: ["Nadia Gharbi", "Mohamed Trabelsi"],
      tags: ["Solidarité", "Aide", "Communauté"],
      featured: true,
      status: "Inscriptions Ouvertes",
    },
    {
      id: 3,
      title: "Conférence : L'Innovation au Service du Développement Local",
      description:
        "Une conférence sur les innovations qui transforment les communautés locales.",
      date: "5 Novembre 2026",
      time: "14:00 - 18:00",
      location: "Innovation Hub - Sbikha",
      category: "community",
      type: "Conférence",
      capacity: 80,
      registered: 45,
      price: "Gratuit",
      speakers: ["Dr. Karim Saadi", "Leila Bouazizi", "Expert invité"],
      tags: ["Innovation", "Développement", "Technologie"],
      featured: false,
      status: "Inscriptions Ouvertes",
    },
    {
      id: 4,
      title: "Campagne de Reboisement 'Sbikha Verte'",
      description:
        "Journée de plantation d'arbres et de sensibilisation à l'environnement.",
      date: "15 Novembre 2026",
      time: "09:00 - 13:00",
      location: "Parc de la Ville de Sbikha",
      category: "environment",
      type: "Action Environnementale",
      capacity: 60,
      registered: 55,
      price: "Gratuit",
      speakers: ["Ahmed Ben Ali", "Sana Mansouri"],
      tags: ["Environnement", "Écologie", "Solidarité"],
      featured: false,
      status: "Complet",
    },
    {
      id: 5,
      title: "Gala de Reconnaissance des Membres",
      description:
        "Cérémonie annuelle de reconnaissance des membres et partenaires de JCI Sbikha.",
      date: "10 Décembre 2026",
      time: "19:00 - 23:00",
      location: "Salle des Fêtes - Sbikha",
      category: "community",
      type: "Célébration",
      capacity: 120,
      registered: 95,
      price: "Gratuit",
      speakers: ["Équipe JCI Sbikha"],
      tags: ["Reconnaissance", "Célébration", "Partenaires"],
      featured: true,
      status: "Inscriptions Ouvertes",
    },
    {
      id: 6,
      title: "Atelier : Marketing Digital pour Entrepreneurs",
      description:
        "Apprenez les bases du marketing digital pour développer votre activité.",
      date: "25 Novembre 2026",
      time: "10:00 - 16:00",
      location: "Innovation Hub - Sbikha",
      category: "education",
      type: "Formation",
      capacity: 30,
      registered: 18,
      price: "Gratuit",
      speakers: ["Nadia Gharbi", "Expert en Marketing"],
      tags: ["Marketing", "Digital", "Entrepreneuriat"],
      featured: false,
      status: "Inscriptions Ouvertes",
    },
  ];

  const getFilteredNews = () => {
    let filtered = newsData;
    if (selectedCategory !== "all")
      filtered = filtered.filter((news) => news.category === selectedCategory);
    if (searchTerm)
      filtered = filtered.filter(
        (news) =>
          news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          news.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    return filtered;
  };

  const getFilteredEvents = () => {
    let filtered = eventsData;
    if (selectedCategory !== "all")
      filtered = filtered.filter(
        (event) => event.category === selectedCategory,
      );
    if (searchTerm)
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    return filtered;
  };

  const filteredNews = getFilteredNews();
  const filteredEvents = getFilteredEvents();
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="news-events-page">
      <section className="news-hero animate-on-scroll">
        <div className="news-hero-overlay"></div>
        <div className="news-hero-content">
          <div className="news-hero-badge">
            <FaNewspaper className="news-hero-badge-icon" /> Actualités &
            Événements
          </div>
          <h1 className="news-hero-title">
            Au Cœur de l'
            <br />
            <span className="news-hero-highlight">Actualité JCI Sbikha</span>
          </h1>
          <p className="news-hero-description">
            Restez informé des dernières nouvelles, événements et initiatives de
            la communauté JCI Sbikha.
          </p>
          <div className="news-hero-stats">
            <div className="news-hero-stat">
              <FaNewspaper className="news-hero-stat-icon" />
              <div>
                <span className="news-hero-stat-number">{newsData.length}</span>
                <span className="news-hero-stat-label">Articles</span>
              </div>
            </div>
            <div className="news-hero-stat-divider"></div>
            <div className="news-hero-stat">
              <FaCalendarAlt className="news-hero-stat-icon" />
              <div>
                <span className="news-hero-stat-number">
                  {eventsData.length}
                </span>
                <span className="news-hero-stat-label">Événements</span>
              </div>
            </div>
            <div className="news-hero-stat-divider"></div>
            <div className="news-hero-stat">
              <FaUsers className="news-hero-stat-icon" />
              <div>
                <span className="news-hero-stat-number">120+</span>
                <span className="news-hero-stat-label">Membres Actifs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="news-search-section">
        <div className="jci-container">
          <div className="news-search-wrapper glass-card">
            <div className="news-search-bar">
              <FaSearch className="news-search-icon" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="news-search-input"
              />
              {searchTerm && (
                <button
                  className="news-search-clear"
                  onClick={() => setSearchTerm("")}
                >
                  <FaTimes />
                </button>
              )}
            </div>
            <button
              className="news-filter-toggle"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FaFilter /> Filtrer
            </button>
          </div>
          {isFilterOpen && (
            <div className="news-filters glass-card animate-on-scroll">
              <div className="news-filters-header">
                <span className="news-filters-title">Catégories</span>
                <button
                  className="news-filters-close"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="news-filters-grid">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`news-filter-btn ${selectedCategory === category.id ? "active" : ""}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="news-filter-icon">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured */}
      <section className="news-featured-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">À la Une</h2>
            <p className="section-subtitle">
              Les actualités et événements marquants
            </p>
          </div>
          <div className="news-featured-grid">
            {newsData
              .filter((n) => n.featured)
              .slice(0, 2)
              .map((news) => (
                <div
                  key={news.id}
                  className="news-featured-card animate-on-scroll glass-card"
                >
                  <div className="news-featured-image">
                    <div className="news-featured-image-placeholder">
                      <FaNewspaper />
                    </div>
                    <div className="news-featured-badge">À la Une</div>
                  </div>
                  <div className="news-featured-content">
                    <div className="news-featured-meta">
                      <span className="news-featured-category">
                        {categories.find((c) => c.id === news.category)?.label}
                      </span>
                      <span className="news-featured-date">{news.date}</span>
                    </div>
                    <h3 className="news-featured-title">{news.title}</h3>
                    <p className="news-featured-excerpt">{news.excerpt}</p>
                    <div className="news-featured-tags">
                      {news.tags.map((tag, index) => (
                        <span key={index} className="news-featured-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className="news-featured-btn"
                      onClick={() => setSelectedNews(news)}
                    >
                      Lire l'article <FaArrowRight className="btn-icon-small" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="news-tabs-section">
        <div className="jci-container">
          <div className="news-tabs-wrapper">
            <button
              className={`news-tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              <FaNewspaper className="news-tab-icon" /> Toutes
            </button>
            <button
              className={`news-tab ${activeTab === "news" ? "active" : ""}`}
              onClick={() => setActiveTab("news")}
            >
              <FaNewspaper className="news-tab-icon" /> Actualités
            </button>
            <button
              className={`news-tab ${activeTab === "events" ? "active" : ""}`}
              onClick={() => setActiveTab("events")}
            >
              <FaCalendarAlt className="news-tab-icon" /> Événements
            </button>
          </div>
        </div>
      </section>

      {/* News Grid */}
      {(activeTab === "all" || activeTab === "news") && (
        <section className="news-grid-section">
          <div className="jci-container">
            <div className="news-grid">
              {paginatedNews.map((news) => (
                <div
                  key={news.id}
                  className="news-card animate-on-scroll glass-card"
                >
                  <div className="news-card-image">
                    <div className="news-card-image-placeholder">
                      <FaNewspaper />
                    </div>
                    {news.featured && (
                      <div className="news-card-badge">À la Une</div>
                    )}
                  </div>
                  <div className="news-card-content">
                    <div className="news-card-meta">
                      <span className="news-card-category">
                        {categories.find((c) => c.id === news.category)?.label}
                      </span>
                      <span className="news-card-date">{news.date}</span>
                    </div>
                    <h3 className="news-card-title">{news.title}</h3>
                    <p className="news-card-excerpt">{news.excerpt}</p>
                    <div className="news-card-footer">
                      <div className="news-card-stats">
                        <span>
                          <FaEye /> {news.views}
                        </span>
                        <span>
                          <FaHeart /> {news.likes}
                        </span>
                        <span>
                          <FaComment /> {news.comments}
                        </span>
                      </div>
                      <button
                        className="news-card-btn"
                        onClick={() => setSelectedNews(news)}
                      >
                        Lire <FaArrowRight className="btn-icon-small" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="news-pagination">
                <button
                  className="news-pagination-btn"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <FaChevronLeft />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`news-pagination-btn ${currentPage === page ? "active" : ""}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ),
                )}
                <button
                  className="news-pagination-btn"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Events Grid */}
      {(activeTab === "all" || activeTab === "events") && (
        <section className="events-grid-section">
          <div className="jci-container">
            <div className="events-grid">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="event-card animate-on-scroll glass-card"
                >
                  <div className="event-card-header">
                    <div className="event-card-date">
                      <span className="event-card-day">
                        {event.date.split(" ")[0]}
                      </span>
                      <span className="event-card-month">
                        {event.date.split(" ")[1]}
                      </span>
                    </div>
                    <div
                      className="event-card-status"
                      style={{
                        background:
                          event.status === "Complet"
                            ? "rgba(255, 59, 48, 0.12)"
                            : "rgba(52, 199, 89, 0.12)",
                        color:
                          event.status === "Complet" ? "#ff3b30" : "#34c759",
                      }}
                    >
                      {event.status}
                    </div>
                  </div>
                  <div className="event-card-body">
                    <h3 className="event-card-title">{event.title}</h3>
                    <p className="event-card-description">
                      {event.description}
                    </p>
                    <div className="event-card-details">
                      <div className="event-card-detail">
                        <FaClock className="event-card-detail-icon" />
                        <span>{event.time}</span>
                      </div>
                      <div className="event-card-detail">
                        <FaMapMarkerAlt className="event-card-detail-icon" />
                        <span>{event.location}</span>
                      </div>
                      <div className="event-card-detail">
                        <FaUsers className="event-card-detail-icon" />
                        <span>
                          {event.registered}/{event.capacity} inscrits
                        </span>
                      </div>
                    </div>
                    <div className="event-card-tags">
                      {event.tags.map((tag, index) => (
                        <span key={index} className="event-card-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="event-card-footer">
                    <button
                      className="event-card-btn"
                      onClick={() => setSelectedEvent(event)}
                      disabled={event.status === "Complet"}
                    >
                      {event.status === "Complet" ? "Complet" : "S'inscrire"}
                      {event.status !== "Complet" && (
                        <FaArrowRight className="btn-icon-small" />
                      )}
                    </button>
                    <span className="event-card-price">{event.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlight */}
      <section className="events-highlight-section animate-on-scroll">
        <div className="jci-container">
          <div className="events-highlight-wrapper glass-card">
            <div className="events-highlight-header">
              <div className="events-highlight-icon">
                <FaCalendarCheck />
              </div>
              <div>
                <h2 className="events-highlight-title">Prochains Événements</h2>
                <p className="events-highlight-subtitle">
                  Ne manquez pas nos prochaines activités
                </p>
              </div>
            </div>
            <div className="events-highlight-list">
              {eventsData
                .filter((e) => e.featured)
                .map((event) => (
                  <div key={event.id} className="events-highlight-item">
                    <div className="events-highlight-date">
                      <span className="events-highlight-day">
                        {event.date.split(" ")[0]}
                      </span>
                      <span className="events-highlight-month">
                        {event.date.split(" ")[1]}
                      </span>
                    </div>
                    <div className="events-highlight-info">
                      <h4 className="events-highlight-name">{event.title}</h4>
                      <div className="events-highlight-meta">
                        <span>
                          <FaClock /> {event.time}
                        </span>
                        <span>
                          <FaMapMarkerAlt /> {event.location}
                        </span>
                      </div>
                    </div>
                    <button
                      className="events-highlight-btn"
                      onClick={() => setSelectedEvent(event)}
                    >
                      Détails <FaArrowRight className="btn-icon-small" />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="news-newsletter-section animate-on-scroll">
        <div className="jci-container">
          <div className="news-newsletter-wrapper glass-card">
            <div className="news-newsletter-content">
              <div className="news-newsletter-icon-wrapper">
                <FaBell className="news-newsletter-icon" />
              </div>
              <h2 className="news-newsletter-title">Restez Informé</h2>
              <p className="news-newsletter-text">
                Abonnez-vous à notre newsletter pour recevoir les dernières
                actualités et événements de JCI Sbikha directement dans votre
                boîte mail.
              </p>
              <div className="news-newsletter-form">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="news-newsletter-input"
                />
                <button className="jci-btn jci-btn-primary news-newsletter-btn">
                  S'abonner <FaArrowRight className="btn-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {selectedNews && (
        <div
          className="news-modal-overlay"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="news-modal glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="news-modal-close"
              onClick={() => setSelectedNews(null)}
            >
              ×
            </button>
            <div className="news-modal-content">
              <div className="news-modal-image">
                <div className="news-modal-image-placeholder">
                  <FaNewspaper />
                </div>
              </div>
              <div className="news-modal-body">
                <div className="news-modal-meta">
                  <span className="news-modal-category">
                    {
                      categories.find((c) => c.id === selectedNews.category)
                        ?.label
                    }
                  </span>
                  <span className="news-modal-date">{selectedNews.date}</span>
                  <span className="news-modal-readtime">
                    {selectedNews.readTime} de lecture
                  </span>
                </div>
                <h2 className="news-modal-title">{selectedNews.title}</h2>
                <div className="news-modal-author">
                  <FaUser className="news-modal-author-icon" />
                  <span>Par {selectedNews.author}</span>
                </div>
                <p className="news-modal-description">{selectedNews.content}</p>
                <div className="news-modal-tags">
                  {selectedNews.tags.map((tag, index) => (
                    <span key={index} className="news-modal-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="news-modal-actions">
                  <div className="news-modal-social">
                    <button className="news-modal-social-btn">
                      <FaFacebook />
                    </button>
                    <button className="news-modal-social-btn">
                      <FaTwitter />
                    </button>
                    <button className="news-modal-social-btn">
                      <FaLinkedin />
                    </button>
                    <button className="news-modal-social-btn">
                      <FaWhatsapp />
                    </button>
                    <button className="news-modal-social-btn">
                      <FaLink />
                    </button>
                  </div>
                  <div className="news-modal-engagement">
                    <button className="news-modal-engagement-btn">
                      <FaHeart /> {selectedNews.likes}
                    </button>
                    <button className="news-modal-engagement-btn">
                      <FaComment /> {selectedNews.comments}
                    </button>
                    <button className="news-modal-engagement-btn">
                      <FaBookmark />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedEvent && (
        <div
          className="event-modal-overlay"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="event-modal glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="event-modal-close"
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>
            <div className="event-modal-content">
              <div className="event-modal-header">
                <div className="event-modal-date-large">
                  <span className="event-modal-day-large">
                    {selectedEvent.date.split(" ")[0]}
                  </span>
                  <span className="event-modal-month-large">
                    {selectedEvent.date.split(" ")[1]}
                  </span>
                </div>
                <div className="event-modal-title-area">
                  <h2 className="event-modal-title">{selectedEvent.title}</h2>
                  <div
                    className="event-modal-status"
                    style={{
                      background:
                        selectedEvent.status === "Complet"
                          ? "rgba(255, 59, 48, 0.12)"
                          : "rgba(52, 199, 89, 0.12)",
                      color:
                        selectedEvent.status === "Complet"
                          ? "#ff3b30"
                          : "#34c759",
                    }}
                  >
                    {selectedEvent.status}
                  </div>
                </div>
              </div>
              <div className="event-modal-body">
                <p className="event-modal-description">
                  {selectedEvent.description}
                </p>
                <div className="event-modal-details">
                  <div className="event-modal-detail">
                    <FaClock className="event-modal-detail-icon" />
                    <div>
                      <span className="event-modal-detail-label">Horaire</span>
                      <span className="event-modal-detail-value">
                        {selectedEvent.time}
                      </span>
                    </div>
                  </div>
                  <div className="event-modal-detail">
                    <FaMapMarkerAlt className="event-modal-detail-icon" />
                    <div>
                      <span className="event-modal-detail-label">Lieu</span>
                      <span className="event-modal-detail-value">
                        {selectedEvent.location}
                      </span>
                    </div>
                  </div>
                  <div className="event-modal-detail">
                    <FaUsers className="event-modal-detail-icon" />
                    <div>
                      <span className="event-modal-detail-label">
                        Participants
                      </span>
                      <span className="event-modal-detail-value">
                        {selectedEvent.registered}/{selectedEvent.capacity}
                      </span>
                    </div>
                  </div>
                  <div className="event-modal-detail">
                    <FaTicketAlt className="event-modal-detail-icon" />
                    <div>
                      <span className="event-modal-detail-label">Tarif</span>
                      <span className="event-modal-detail-value">
                        {selectedEvent.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="event-modal-speakers">
                  <h4 className="event-modal-speakers-title">Intervenants</h4>
                  <div className="event-modal-speakers-list">
                    {selectedEvent.speakers.map((speaker, index) => (
                      <span key={index} className="event-modal-speaker">
                        {speaker}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="event-modal-tags">
                  {selectedEvent.tags.map((tag, index) => (
                    <span key={index} className="event-modal-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="event-modal-footer">
                <button
                  className="jci-btn jci-btn-primary event-modal-btn"
                  disabled={selectedEvent.status === "Complet"}
                >
                  {selectedEvent.status === "Complet"
                    ? "Événement Complet"
                    : "S'inscrire Maintenant"}
                  {selectedEvent.status !== "Complet" && (
                    <FaArrowRight className="btn-icon" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsEvents;
