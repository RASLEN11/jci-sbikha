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
  FaUsers,
  FaBook,
  FaLeaf,
  FaHandsHelping,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaLink,
  FaBookmark,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaNewspaper,
  FaEnvelope,
} from "react-icons/fa";
import { MdSend } from "react-icons/md";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);
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
    { id: "leadership", label: "Leadership", icon: <FaUser /> },
    { id: "community", label: "Communauté", icon: <FaUsers /> },
    { id: "education", label: "Éducation", icon: <FaBook /> },
    { id: "environment", label: "Environnement", icon: <FaLeaf /> },
    { id: "social", label: "Social", icon: <FaHandsHelping /> },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Les 5 compétences clés d'un leader moderne",
      excerpt:
        "Découvrez les compétences essentielles que tout leader doit développer pour réussir dans le monde d'aujourd'hui.",
      content:
        "Dans un monde en constante évolution, les qualités d'un leader doivent s'adapter. Voici les 5 compétences clés qui font la différence...",
      category: "leadership",
      author: "Ahmed Ben Ali",
      date: "15 Juin 2026",
      readTime: "5 min",
      image: "leadership",
      tags: ["Leadership", "Développement personnel", "Compétences"],
      views: 234,
      likes: 45,
      comments: 12,
      featured: true,
    },
    {
      id: 2,
      title: "Comment créer un projet communautaire réussi",
      excerpt:
        "Les étapes clés pour mener à bien un projet qui fait la différence dans votre communauté.",
      content:
        "Créer un projet communautaire demande une préparation minutieuse et une exécution rigoureuse. Voici un guide étape par étape...",
      category: "community",
      author: "Sana Mansouri",
      date: "10 Mai 2026",
      readTime: "7 min",
      image: "community",
      tags: ["Communauté", "Projets", "Impact social"],
      views: 189,
      likes: 67,
      comments: 8,
      featured: false,
    },
    {
      id: 3,
      title: "L'importance de l'éducation pour le développement",
      excerpt:
        "Comment l'éducation transforme les communautés et crée des opportunités pour les jeunes.",
      content:
        "L'éducation est le moteur du développement. Elle permet aux individus de s'épanouir et aux communautés de prospérer...",
      category: "education",
      author: "Mohamed Trabelsi",
      date: "5 Avril 2026",
      readTime: "6 min",
      image: "education",
      tags: ["Éducation", "Développement", "Jeunesse"],
      views: 312,
      likes: 89,
      comments: 23,
      featured: true,
    },
    {
      id: 4,
      title: "5 initiatives écologiques pour votre quartier",
      excerpt:
        "Des actions simples pour rendre votre quartier plus vert et plus durable.",
      content:
        "Protéger l'environnement commence par des gestes simples au niveau local. Voici 5 initiatives à mettre en place...",
      category: "environment",
      author: "Leila Bouazizi",
      date: "20 Mars 2026",
      readTime: "4 min",
      image: "environment",
      tags: ["Environnement", "Écologie", "Durabilité"],
      views: 456,
      likes: 112,
      comments: 34,
      featured: false,
    },
    {
      id: 5,
      title: "La solidarité : un pilier de notre communauté",
      excerpt:
        "Pourquoi la solidarité est essentielle pour construire une communauté forte et résiliente.",
      content:
        "La solidarité est le ciment qui lie les membres d'une communauté. Elle permet de surmonter les défis ensemble...",
      category: "social",
      author: "Karim Saadi",
      date: "15 Février 2026",
      readTime: "5 min",
      image: "solidarity",
      tags: ["Solidarité", "Communauté", "Entraide"],
      views: 278,
      likes: 56,
      comments: 15,
      featured: false,
    },
    {
      id: 6,
      title: "Comment développer votre réseau professionnel",
      excerpt:
        "Stratégies efficaces pour construire un réseau professionnel solide et durable.",
      content:
        "Le networking est essentiel pour le développement professionnel. Découvrez comment construire un réseau de qualité...",
      category: "leadership",
      author: "Nadia Gharbi",
      date: "10 Janvier 2026",
      readTime: "6 min",
      image: "network",
      tags: ["Réseau", "Carrière", "Développement"],
      views: 201,
      likes: 45,
      comments: 7,
      featured: false,
    },
    {
      id: 7,
      title: "Les bénéfices du bénévolat pour les jeunes",
      excerpt:
        "Pourquoi le bénévolat est une expérience enrichissante pour le développement personnel et professionnel.",
      content:
        "Le bénévolat offre de nombreux avantages, tant pour la communauté que pour le bénévole. Découvrez les bénéfices...",
      category: "social",
      author: "Ahmed Ben Ali",
      date: "5 Décembre 2025",
      readTime: "4 min",
      image: "volunteer",
      tags: ["Bénévolat", "Engagement", "Jeunesse"],
      views: 389,
      likes: 134,
      comments: 28,
      featured: false,
    },
    {
      id: 8,
      title: "Innovation sociale : les nouvelles tendances",
      excerpt:
        "Les tendances innovantes qui transforment le secteur social et communautaire.",
      content:
        "L'innovation sociale est en pleine expansion. Découvrez les nouvelles tendances qui façonnent le secteur...",
      category: "community",
      author: "Sana Mansouri",
      date: "20 Novembre 2025",
      readTime: "8 min",
      image: "innovation",
      tags: ["Innovation", "Social", "Tendances"],
      views: 156,
      likes: 78,
      comments: 9,
      featured: false,
    },
  ];

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
    <div className="blog-page">
      <section className="blog-hero animate-on-scroll">
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content">
          <div className="blog-hero-badge">
            <FaNewspaper className="blog-hero-badge-icon" /> Blog JCI Sbikha
          </div>
          <h1 className="blog-hero-title">
            Découvrez Nos
            <br />
            <span className="blog-hero-highlight">Articles et Actualités</span>
          </h1>
          <p className="blog-hero-description">
            Des articles inspirants sur le leadership, la communauté,
            l'éducation et l'innovation sociale.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="blog-search-section">
        <div className="jci-container">
          <div className="blog-search-wrapper glass-card">
            <div className="blog-search-bar">
              <FaSearch className="blog-search-icon" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="blog-search-input"
              />
              {searchTerm && (
                <button
                  className="blog-search-clear"
                  onClick={() => setSearchTerm("")}
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>
          <div className="blog-categories glass-card animate-on-scroll">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`blog-category-btn ${selectedCategory === category.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="blog-category-icon">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="blog-featured-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Articles à la Une</h2>
            <p className="section-subtitle">
              Nos contenus les plus récents et pertinents
            </p>
          </div>
          <div className="blog-featured-grid">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="blog-featured-card animate-on-scroll glass-card"
              >
                <div className="blog-featured-content">
                  <div className="blog-featured-meta">
                    <span className="blog-featured-category">
                      {categories.find((c) => c.id === post.category)?.label}
                    </span>
                    <span className="blog-featured-date">{post.date}</span>
                  </div>
                  <h3 className="blog-featured-title">{post.title}</h3>
                  <p className="blog-featured-excerpt">{post.excerpt}</p>
                  <div className="blog-featured-author">
                    <FaUser className="blog-featured-author-icon" />
                    <span>{post.author}</span>
                    <span className="blog-featured-readtime">
                      <FaClock className="blog-featured-readtime-icon" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="blog-featured-tags">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="blog-featured-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    className="blog-featured-btn"
                    onClick={() => setSelectedPost(post)}
                  >
                    Lire l'article <FaArrowRight className="btn-icon-small" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="blog-grid-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Tous les Articles</h2>
            <p className="section-subtitle">
              {filteredPosts.length} articles disponibles
            </p>
          </div>
          {filteredPosts.length > 0 ? (
            <>
              <div className="blog-grid">
                {paginatedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="blog-card animate-on-scroll glass-card"
                  >
                    <div className="blog-card-content">
                      <div className="blog-card-meta">
                        <span className="blog-card-category">
                          {
                            categories.find((c) => c.id === post.category)
                              ?.label
                          }
                        </span>
                        <span className="blog-card-date">{post.date}</span>
                      </div>
                      <h3 className="blog-card-title">{post.title}</h3>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                      <div className="blog-card-author">
                        <FaUser className="blog-card-author-icon" />
                        <span>{post.author}</span>
                      </div>
                      <div className="blog-card-footer">
                        <div className="blog-card-stats">
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
                          className="blog-card-btn"
                          onClick={() => setSelectedPost(post)}
                        >
                          Lire <FaArrowRight className="btn-icon-small" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {totalPages > 1 && (
                <div className="blog-pagination">
                  <button
                    className="blog-pagination-btn"
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
                        className={`blog-pagination-btn ${currentPage === page ? "active" : ""}`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    ),
                  )}
                  <button
                    className="blog-pagination-btn"
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
            <div className="blog-empty">
              <FaSearch className="blog-empty-icon" />
              <h3>Aucun article trouvé</h3>
              <p>Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="blog-newsletter-section animate-on-scroll">
        <div className="jci-container">
          <div className="blog-newsletter-wrapper glass-card">
            <div className="blog-newsletter-content">
              <div className="blog-newsletter-icon-wrapper">
                <FaEnvelope className="blog-newsletter-icon" />
              </div>
              <h2 className="blog-newsletter-title">
                Abonnez-vous à notre Newsletter
              </h2>
              <p className="blog-newsletter-text">
                Recevez nos derniers articles et actualités directement dans
                votre boîte mail.
              </p>
              <div className="blog-newsletter-form">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="blog-newsletter-input"
                />
                <button className="jci-btn jci-btn-primary blog-newsletter-btn">
                  <MdSend className="blog-newsletter-btn-icon" /> S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPost && (
        <div
          className="blog-modal-overlay"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="blog-modal glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="blog-modal-close"
              onClick={() => setSelectedPost(null)}
            >
              ×
            </button>
            <div className="blog-modal-content">
              <div className="blog-modal-meta">
                <span className="blog-modal-category">
                  {
                    categories.find((c) => c.id === selectedPost.category)
                      ?.label
                  }
                </span>
                <span className="blog-modal-date">{selectedPost.date}</span>
                <span className="blog-modal-readtime">
                  {selectedPost.readTime} de lecture
                </span>
              </div>
              <h2 className="blog-modal-title">{selectedPost.title}</h2>
              <div className="blog-modal-author">
                <FaUser className="blog-modal-author-icon" />
                <span>Par {selectedPost.author}</span>
              </div>
              <p className="blog-modal-description">{selectedPost.content}</p>
              <div className="blog-modal-tags">
                {selectedPost.tags.map((tag, index) => (
                  <span key={index} className="blog-modal-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="blog-modal-actions">
                <div className="blog-modal-social">
                  <button className="blog-modal-social-btn">
                    <FaFacebook />
                  </button>
                  <button className="blog-modal-social-btn">
                    <FaTwitter />
                  </button>
                  <button className="blog-modal-social-btn">
                    <FaLinkedin />
                  </button>
                  <button className="blog-modal-social-btn">
                    <FaWhatsapp />
                  </button>
                  <button className="blog-modal-social-btn">
                    <FaLink />
                  </button>
                </div>
                <div className="blog-modal-engagement">
                  <button className="blog-modal-engagement-btn">
                    <FaHeart /> {selectedPost.likes}
                  </button>
                  <button className="blog-modal-engagement-btn">
                    <FaComment /> {selectedPost.comments}
                  </button>
                  <button className="blog-modal-engagement-btn">
                    <FaBookmark />
                  </button>
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
