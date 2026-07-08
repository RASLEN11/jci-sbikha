// Blog.jsx
import React, { useState, useEffect } from "react";
import "./Blog.css";
import {
  FaSearch,
  FaUser,
  FaClock,
  FaArrowRight,
  FaHeart,
  FaComment,
  FaEye,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope
} from "react-icons/fa";
import { MdSend } from "react-icons/md";

// Import all data from Utils/Blog.js
import {
  categories,
  blogPosts,
  heroData,
  sectionHeaders,
  newsletterData,
  paginationConfig,
  shareButtons,
  engagementButtons,
} from "../../Utils/Ressources/Blog";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);
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

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((p) => p.featured);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="jci-blog-page">
      <section className="jci-blog-hero jci-animate-on-scroll">
        <div className="jci-blog-hero-overlay"></div>
        <div className="jci-blog-hero-content">
          <div className="jci-blog-hero-badge">
            {heroData.badge.icon} {heroData.badge.text}
          </div>
          <h1 className="jci-blog-hero-title">
            {heroData.title}
            <br />
            <span className="jci-blog-hero-highlight">{heroData.highlight}</span>
          </h1>
          <p className="jci-blog-hero-description">{heroData.description}</p>
        </div>
      </section>

      {/* Search */}
      <section className="jci-blog-search-section">
        <div className="jci-container">
          <div className="jci-blog-search-wrapper jci-glass-card">
            <div className="jci-blog-search-bar">
              <FaSearch className="jci-blog-search-icon" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="jci-blog-search-input"
              />
              {searchTerm && (
                <button
                  className="jci-blog-search-clear"
                  onClick={() => setSearchTerm("")}
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>
          <div className="jci-blog-categories jci-glass-card jci-animate-on-scroll">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`jci-blog-category-btn ${selectedCategory === category.id ? "jci-active" : ""}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="jci-blog-category-icon">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="jci-blog-featured-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.featured.title}</h2>
            <p className="jci-section-subtitle">{sectionHeaders.featured.subtitle}</p>
          </div>
          <div className="jci-blog-featured-grid">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="jci-blog-featured-card jci-animate-on-scroll jci-glass-card"
              >
                <div className="jci-blog-featured-content">
                  <div className="jci-blog-featured-meta">
                    <span className="jci-blog-featured-category">
                      {categories.find((c) => c.id === post.category)?.label}
                    </span>
                    <span className="jci-blog-featured-date">{post.date}</span>
                  </div>
                  <h3 className="jci-blog-featured-title">{post.title}</h3>
                  <p className="jci-blog-featured-excerpt">{post.excerpt}</p>
                  <div className="jci-blog-featured-author">
                    <FaUser className="jci-blog-featured-author-icon" />
                    <span>{post.author}</span>
                    <span className="jci-blog-featured-readtime">
                      <FaClock className="jci-blog-featured-readtime-icon" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="jci-blog-featured-tags">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="jci-blog-featured-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className="jci-blog-featured-btn"
                    onClick={() => setSelectedPost(post)}
                  >
                    Lire l'article <FaArrowRight className="jci-btn-icon-small" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="jci-blog-grid-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.all.title}</h2>
            <p className="jci-section-subtitle">
              {sectionHeaders.all.subtitle(filteredPosts.length)}
            </p>
          </div>
          {filteredPosts.length > 0 ? (
            <>
              <div className="jci-blog-grid">
                {paginatedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="jci-blog-card jci-animate-on-scroll jci-glass-card"
                  >
                    <div className="jci-blog-card-content">
                      <div className="jci-blog-card-meta">
                        <span className="jci-blog-card-category">
                          {
                            categories.find((c) => c.id === post.category)
                              ?.label
                          }
                        </span>
                        <span className="jci-blog-card-date">{post.date}</span>
                      </div>
                      <h3 className="jci-blog-card-title">{post.title}</h3>
                      <p className="jci-blog-card-excerpt">{post.excerpt}</p>
                      <div className="jci-blog-card-author">
                        <FaUser className="jci-blog-card-author-icon" />
                        <span>{post.author}</span>
                      </div>
                      <div className="jci-blog-card-footer">
                        <div className="jci-blog-card-stats">
                          <span>
                            <FaEye /> {post.views}
                          </span>
                          <span>
                            <FaHeart /> {post.likes}
                          </span>
                          <span>
                            <FaComment /> {post.comments}
                          </span>
                        </div>
                        <button
                          className="jci-blog-card-btn"
                          onClick={() => setSelectedPost(post)}
                        >
                          Lire <FaArrowRight className="jci-btn-icon-small" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {totalPages > 1 && (
                <div className="jci-blog-pagination">
                  <button
                    className="jci-blog-pagination-btn"
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
                        className={`jci-blog-pagination-btn ${currentPage === page ? "jci-active" : ""}`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    ),
                  )}
                  <button
                    className="jci-blog-pagination-btn"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="jci-blog-empty">
              <FaSearch className="jci-blog-empty-icon" />
              <h3>Aucun article trouvé</h3>
              <p>Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="jci-blog-newsletter-section jci-animate-on-scroll">
        <div className="jci-container">
          <div className="jci-blog-newsletter-wrapper jci-glass-card">
            <div className="jci-blog-newsletter-content">
              <div className="jci-blog-newsletter-icon-wrapper">
                <FaEnvelope className="jci-blog-newsletter-icon" />
              </div>
              <h2 className="jci-blog-newsletter-title">{newsletterData.title}</h2>
              <p className="jci-blog-newsletter-text">{newsletterData.text}</p>
              <div className="jci-blog-newsletter-form">
                <input
                  type="email"
                  placeholder={newsletterData.placeholder}
                  className="jci-blog-newsletter-input"
                />
                <button className="jci-btn jci-btn-primary jci-blog-newsletter-btn">
                  <MdSend className="jci-blog-newsletter-btn-icon" /> {newsletterData.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPost && (
        <div
          className="jci-blog-modal-overlay"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="jci-blog-modal jci-glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="jci-blog-modal-close"
              onClick={() => setSelectedPost(null)}
            >
              ×
            </button>
            <div className="jci-blog-modal-content">
              <div className="jci-blog-modal-meta">
                <span className="jci-blog-modal-category">
                  {
                    categories.find((c) => c.id === selectedPost.category)
                      ?.label
                  }
                </span>
                <span className="jci-blog-modal-date">{selectedPost.date}</span>
                <span className="jci-blog-modal-readtime">
                  {selectedPost.readTime} de lecture
                </span>
              </div>
              <h2 className="jci-blog-modal-title">{selectedPost.title}</h2>
              <div className="jci-blog-modal-author">
                <FaUser className="jci-blog-modal-author-icon" />
                <span>Par {selectedPost.author}</span>
              </div>
              <p className="jci-blog-modal-description">{selectedPost.content}</p>
              <div className="jci-blog-modal-tags">
                {selectedPost.tags.map((tag, index) => (
                  <span key={index} className="jci-blog-modal-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="jci-blog-modal-actions">
                <div className="jci-blog-modal-social">
                  {shareButtons.map((button, index) => (
                    <button key={index} className="jci-blog-modal-social-btn">
                      {button.icon}
                    </button>
                  ))}
                </div>
                <div className="jci-blog-modal-engagement">
                  {engagementButtons.map((button, index) => {
                    if (button.label === "Likes") {
                      return (
                        <button key={index} className="jci-blog-modal-engagement-btn">
                          {button.icon} {selectedPost.likes}
                        </button>
                      );
                    } else if (button.label === "Comments") {
                      return (
                        <button key={index} className="jci-blog-modal-engagement-btn">
                          {button.icon} {selectedPost.comments}
                        </button>
                      );
                    } else {
                      return (
                        <button key={index} className="jci-blog-modal-engagement-btn">
                          {button.icon}
                        </button>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;