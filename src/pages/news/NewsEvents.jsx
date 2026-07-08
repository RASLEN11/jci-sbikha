// NewsEvents.jsx
import React, { useState, useEffect } from "react";
import "./NewsEvents.css";
import {
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
  FaCalendarCheck,
  FaBell,
  FaTicketAlt,
  FaNewspaper,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";

// Import all data from Utils/NewsEvents.js
import {
  categories,
  newsData,
  eventsData,
  heroData,
  sectionHeaders,
  tabs,
  newsletterData,
  paginationConfig,
  statusColors,
} from "../../Utils/Pages/NewsEvents";

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = paginationConfig.itemsPerPage;

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
    <div className="jci-news-events-page">
      <section className="jci-news-hero jci-animate-on-scroll">
        <div className="jci-news-hero-overlay"></div>
        <div className="jci-news-hero-content">
          <div className="jci-news-hero-badge">
            {heroData.badge.icon} {heroData.badge.text}
          </div>
          <h1 className="jci-news-hero-title">
            {heroData.title}
            <br />
            <span className="jci-news-hero-highlight">{heroData.highlight}</span>
          </h1>
          <p className="jci-news-hero-description">{heroData.description}</p>
          <div className="jci-news-hero-stats">
            {heroData.stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="jci-news-hero-stat">
                  <span className="jci-news-hero-stat-icon">{stat.icon}</span>
                  <div>
                    <span className="jci-news-hero-stat-number">{stat.value}</span>
                    <span className="jci-news-hero-stat-label">{stat.label}</span>
                  </div>
                </div>
                {index < heroData.stats.length - 1 && (
                  <div className="jci-news-hero-stat-divider"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="jci-news-search-section">
        <div className="jci-container">
          <div className="jci-news-search-wrapper jci-glass-card">
            <div className="jci-news-search-bar">
              <FaSearch className="jci-news-search-icon" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="jci-news-search-input"
              />
              {searchTerm && (
                <button
                  className="jci-news-search-clear"
                  onClick={() => setSearchTerm("")}
                >
                  <FaTimes />
                </button>
              )}
            </div>
            <button
              className="jci-news-filter-toggle"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FaFilter /> Filtrer
            </button>
          </div>
          {isFilterOpen && (
            <div className="jci-news-filters jci-glass-card jci-animate-on-scroll">
              <div className="jci-news-filters-header">
                <span className="jci-news-filters-title">Catégories</span>
                <button
                  className="jci-news-filters-close"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="jci-news-filters-grid">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`jci-news-filter-btn ${selectedCategory === category.id ? "jci-active" : ""}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="jci-news-filter-icon">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured */}
      <section className="jci-news-featured-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.featured.title}</h2>
            <p className="jci-section-subtitle">{sectionHeaders.featured.subtitle}</p>
          </div>
          <div className="jci-news-featured-grid">
            {newsData
              .filter((n) => n.featured)
              .slice(0, 2)
              .map((news) => (
                <div
                  key={news.id}
                  className="jci-news-featured-card jci-animate-on-scroll jci-glass-card"
                >
                  <div className="jci-news-featured-image">
                    <div className="jci-news-featured-image-placeholder">
                      <FaNewspaper />
                    </div>
                    <div className="jci-news-featured-badge">À la Une</div>
                  </div>
                  <div className="jci-news-featured-content">
                    <div className="jci-news-featured-meta">
                      <span className="jci-news-featured-category">
                        {categories.find((c) => c.id === news.category)?.label}
                      </span>
                      <span className="jci-news-featured-date">{news.date}</span>
                    </div>
                    <h3 className="jci-news-featured-title">{news.title}</h3>
                    <p className="jci-news-featured-excerpt">{news.excerpt}</p>
                    <div className="jci-news-featured-tags">
                      {news.tags.map((tag, index) => (
                        <span key={index} className="jci-news-featured-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className="jci-news-featured-btn"
                      onClick={() => setSelectedNews(news)}
                    >
                      Lire l'article <FaArrowRight className="jci-btn-icon-small" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="jci-news-tabs-section">
        <div className="jci-container">
          <div className="jci-news-tabs-wrapper">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`jci-news-tab ${activeTab === tab.id ? "jci-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="jci-news-tab-icon">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      {(activeTab === "all" || activeTab === "news") && (
        <section className="jci-news-grid-section">
          <div className="jci-container">
            <div className="jci-news-grid">
              {paginatedNews.map((news) => (
                <div
                  key={news.id}
                  className="jci-news-card jci-animate-on-scroll jci-glass-card"
                >
                  <div className="jci-news-card-image">
                    <div className="jci-news-card-image-placeholder">
                      <FaNewspaper />
                    </div>
                    {news.featured && (
                      <div className="jci-news-card-badge">À la Une</div>
                    )}
                  </div>
                  <div className="jci-news-card-content">
                    <div className="jci-news-card-meta">
                      <span className="jci-news-card-category">
                        {categories.find((c) => c.id === news.category)?.label}
                      </span>
                      <span className="jci-news-card-date">{news.date}</span>
                    </div>
                    <h3 className="jci-news-card-title">{news.title}</h3>
                    <p className="jci-news-card-excerpt">{news.excerpt}</p>
                    <div className="jci-news-card-footer">
                      <div className="jci-news-card-stats">
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
                        className="jci-news-card-btn"
                        onClick={() => setSelectedNews(news)}
                      >
                        Lire <FaArrowRight className="jci-btn-icon-small" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="jci-news-pagination">
                <button
                  className="jci-news-pagination-btn"
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
                      className={`jci-news-pagination-btn ${currentPage === page ? "jci-active" : ""}`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ),
                )}
                <button
                  className="jci-news-pagination-btn"
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
        <section className="jci-events-grid-section">
          <div className="jci-container">
            <div className="jci-events-grid">
              {filteredEvents.map((event) => {
                const statusStyle = statusColors[event.status] || {
                  bg: "rgba(0,0,0,0.08)",
                  color: "#666",
                };
                return (
                  <div
                    key={event.id}
                    className="jci-event-card jci-animate-on-scroll jci-glass-card"
                  >
                    <div className="jci-event-card-header">
                      <div className="jci-event-card-date">
                        <span className="jci-event-card-day">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="jci-event-card-month">
                          {event.date.split(" ")[1]}
                        </span>
                      </div>
                      <div
                        className="jci-event-card-status"
                        style={{
                          background: statusStyle.bg,
                          color: statusStyle.color,
                        }}
                      >
                        {event.status}
                      </div>
                    </div>
                    <div className="jci-event-card-body">
                      <h3 className="jci-event-card-title">{event.title}</h3>
                      <p className="jci-event-card-description">
                        {event.description}
                      </p>
                      <div className="jci-event-card-details">
                        <div className="jci-event-card-detail">
                          <FaClock className="jci-event-card-detail-icon" />
                          <span>{event.time}</span>
                        </div>
                        <div className="jci-event-card-detail">
                          <FaMapMarkerAlt className="jci-event-card-detail-icon" />
                          <span>{event.location}</span>
                        </div>
                        <div className="jci-event-card-detail">
                          <FaUsers className="jci-event-card-detail-icon" />
                          <span>
                            {event.registered}/{event.capacity} inscrits
                          </span>
                        </div>
                      </div>
                      <div className="jci-event-card-tags">
                        {event.tags.map((tag, index) => (
                          <span key={index} className="jci-event-card-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="jci-event-card-footer">
                      <button
                        className="jci-event-card-btn"
                        onClick={() => setSelectedEvent(event)}
                        disabled={event.status === "Complet"}
                      >
                        {event.status === "Complet" ? "Complet" : "S'inscrire"}
                        {event.status !== "Complet" && (
                          <FaArrowRight className="jci-btn-icon-small" />
                        )}
                      </button>
                      <span className="jci-event-card-price">{event.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Highlight */}
      <section className="jci-events-highlight-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-events-highlight-wrapper jci-glass-card">
            <div className="jci-events-highlight-header">
              <div className="jci-events-highlight-icon">
                <FaCalendarCheck />
              </div>
              <div>
                <h2 className="jci-events-highlight-title">Prochains Événements</h2>
                <p className="jci-events-highlight-subtitle">
                  Ne manquez pas nos prochaines activités
                </p>
              </div>
            </div>
            <div className="jci-events-highlight-list">
              {eventsData
                .filter((e) => e.featured)
                .map((event) => (
                  <div key={event.id} className="jci-events-highlight-item">
                    <div className="jci-events-highlight-date">
                      <span className="jci-events-highlight-day">
                        {event.date.split(" ")[0]}
                      </span>
                      <span className="jci-events-highlight-month">
                        {event.date.split(" ")[1]}
                      </span>
                    </div>
                    <div className="jci-events-highlight-info">
                      <h4 className="jci-events-highlight-name">{event.title}</h4>
                      <div className="jci-events-highlight-meta">
                        <span>
                          <FaClock /> {event.time}
                        </span>
                        <span>
                          <FaMapMarkerAlt /> {event.location}
                        </span>
                      </div>
                    </div>
                    <button
                      className="jci-events-highlight-btn"
                      onClick={() => setSelectedEvent(event)}
                    >
                      Détails <FaArrowRight className="jci-btn-icon-small" />
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="jci-news-newsletter-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-news-newsletter-wrapper jci-glass-card">
            <div className="jci-news-newsletter-content">
              <div className="jci-news-newsletter-icon-wrapper">
                <FaBell className="jci-news-newsletter-icon" />
              </div>
              <h2 className="jci-news-newsletter-title">{sectionHeaders.newsletter.title}</h2>
              <p className="jci-news-newsletter-text">{sectionHeaders.newsletter.text}</p>
              <div className="jci-news-newsletter-form">
                <input
                  type="email"
                  placeholder={newsletterData.placeholder}
                  className="jci-news-newsletter-input"
                />
                <button className="jci-btn jci-btn-primary jci-news-newsletter-btn">
                  {newsletterData.buttonText} <FaArrowRight className="jci-btn-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals - News Modal */}
      {selectedNews && (
        <div
          className="jci-news-modal-overlay"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="jci-news-modal jci-glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="jci-news-modal-close"
              onClick={() => setSelectedNews(null)}
            >
              ×
            </button>
            <div className="jci-news-modal-content">
              <div className="jci-news-modal-image">
                <div className="jci-news-modal-image-placeholder">
                  <FaNewspaper />
                </div>
              </div>
              <div className="jci-news-modal-body">
                <div className="jci-news-modal-meta">
                  <span className="jci-news-modal-category">
                    {
                      categories.find((c) => c.id === selectedNews.category)
                        ?.label
                    }
                  </span>
                  <span className="jci-news-modal-date">{selectedNews.date}</span>
                  <span className="jci-news-modal-readtime">
                    {selectedNews.readTime} de lecture
                  </span>
                </div>
                <h2 className="jci-news-modal-title">{selectedNews.title}</h2>
                <div className="jci-news-modal-author">
                  <FaUser className="jci-news-modal-author-icon" />
                  <span>Par {selectedNews.author}</span>
                </div>
                <p className="jci-news-modal-description">{selectedNews.content}</p>
                <div className="jci-news-modal-tags">
                  {selectedNews.tags.map((tag, index) => (
                    <span key={index} className="jci-news-modal-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="jci-news-modal-actions">
                  <div className="jci-news-modal-social">
                    <button className="jci-news-modal-social-btn">
                      <FaFacebook />
                    </button>
                    <button className="jci-news-modal-social-btn">
                      <FaTwitter />
                    </button>
                    <button className="jci-news-modal-social-btn">
                      <FaLinkedin />
                    </button>
                    <button className="jci-news-modal-social-btn">
                      <FaWhatsapp />
                    </button>
                    <button className="jci-news-modal-social-btn">
                      <FaLink />
                    </button>
                  </div>
                  <div className="jci-news-modal-engagement">
                    <button className="jci-news-modal-engagement-btn">
                      <FaHeart /> {selectedNews.likes}
                    </button>
                    <button className="jci-news-modal-engagement-btn">
                      <FaComment /> {selectedNews.comments}
                    </button>
                    <button className="jci-news-modal-engagement-btn">
                      <FaBookmark />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Modal */}
      {selectedEvent && (
        <div
          className="jci-event-modal-overlay"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="jci-event-modal jci-glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="jci-event-modal-close"
              onClick={() => setSelectedEvent(null)}
            >
              ×
            </button>
            <div className="jci-event-modal-content">
              <div className="jci-event-modal-header">
                <div className="jci-event-modal-date-large">
                  <span className="jci-event-modal-day-large">
                    {selectedEvent.date.split(" ")[0]}
                  </span>
                  <span className="jci-event-modal-month-large">
                    {selectedEvent.date.split(" ")[1]}
                  </span>
                </div>
                <div className="jci-event-modal-title-area">
                  <h2 className="jci-event-modal-title">{selectedEvent.title}</h2>
                  <div
                    className="jci-event-modal-status"
                    style={{
                      background: statusColors[selectedEvent.status]?.bg || "rgba(0,0,0,0.08)",
                      color: statusColors[selectedEvent.status]?.color || "#666",
                    }}
                  >
                    {selectedEvent.status}
                  </div>
                </div>
              </div>
              <div className="jci-event-modal-body">
                <p className="jci-event-modal-description">
                  {selectedEvent.description}
                </p>
                <div className="jci-event-modal-details">
                  <div className="jci-event-modal-detail">
                    <FaClock className="jci-event-modal-detail-icon" />
                    <div>
                      <span className="jci-event-modal-detail-label">Horaire</span>
                      <span className="jci-event-modal-detail-value">
                        {selectedEvent.time}
                      </span>
                    </div>
                  </div>
                  <div className="jci-event-modal-detail">
                    <FaMapMarkerAlt className="jci-event-modal-detail-icon" />
                    <div>
                      <span className="jci-event-modal-detail-label">Lieu</span>
                      <span className="jci-event-modal-detail-value">
                        {selectedEvent.location}
                      </span>
                    </div>
                  </div>
                  <div className="jci-event-modal-detail">
                    <FaUsers className="jci-event-modal-detail-icon" />
                    <div>
                      <span className="jci-event-modal-detail-label">
                        Participants
                      </span>
                      <span className="jci-event-modal-detail-value">
                        {selectedEvent.registered}/{selectedEvent.capacity}
                      </span>
                    </div>
                  </div>
                  <div className="jci-event-modal-detail">
                    <FaTicketAlt className="jci-event-modal-detail-icon" />
                    <div>
                      <span className="jci-event-modal-detail-label">Tarif</span>
                      <span className="jci-event-modal-detail-value">
                        {selectedEvent.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="jci-event-modal-speakers">
                  <h4 className="jci-event-modal-speakers-title">Intervenants</h4>
                  <div className="jci-event-modal-speakers-list">
                    {selectedEvent.speakers.map((speaker, index) => (
                      <span key={index} className="jci-event-modal-speaker">
                        {speaker}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="jci-event-modal-tags">
                  {selectedEvent.tags.map((tag, index) => (
                    <span key={index} className="jci-event-modal-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="jci-event-modal-footer">
                <button
                  className="jci-btn jci-btn-primary jci-event-modal-btn"
                  disabled={selectedEvent.status === "Complet"}
                >
                  {selectedEvent.status === "Complet"
                    ? "Événement Complet"
                    : "S'inscrire Maintenant"}
                  {selectedEvent.status !== "Complet" && (
                    <FaArrowRight className="jci-btn-icon" />
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