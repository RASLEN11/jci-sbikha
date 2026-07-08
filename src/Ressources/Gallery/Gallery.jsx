import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { 
  FaImages,
  FaCamera,
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaEye,
  FaUsers,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaDownload,
  FaShare
} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Albums
  const albums = [
    { id: 'all', label: 'Tous', icon: <FaImages /> },
    { id: 'events', label: 'Événements', icon: <FaCalendarAlt /> },
    { id: 'projects', label: 'Projets', icon: <FaUser /> },
    { id: 'community', label: 'Communauté', icon: <FaUsers /> },
    { id: 'training', label: 'Formations', icon: <FaGraduationCap /> }
  ];

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      title: "Leadership Academy 2026",
      description: "Session de formation en leadership avec 50 participants",
      category: 'events',
      date: '15 Juin 2026',
      location: 'Sbikha, Tunisie',
      photographer: 'Ahmed Ben Ali',
      likes: 45,
      views: 234,
      tags: ['Leadership', 'Formation', 'Jeunesse']
    },
    {
      id: 2,
      title: "Distribution de fournitures scolaires",
      description: "Campagne de solidarité avec les enfants de Sbikha",
      category: 'projects',
      date: '1 Septembre 2026',
      location: 'Écoles de Sbikha',
      photographer: 'Sana Mansouri',
      likes: 67,
      views: 189,
      tags: ['Solidarité', 'Éducation', 'Enfants']
    },
    {
      id: 3,
      title: "Innovation Hub - Inauguration",
      description: "Ouverture du nouvel espace de co-working à Sbikha",
      category: 'events',
      date: '20 Juillet 2026',
      location: 'Innovation Hub, Sbikha',
      photographer: 'Mohamed Trabelsi',
      likes: 89,
      views: 312,
      tags: ['Innovation', 'Entrepreneuriat', 'Co-working']
    },
    {
      id: 4,
      title: "Sbikha Verte - Plantation d'arbres",
      description: "Campagne de reboisement avec 200 bénévoles",
      category: 'projects',
      date: '10 Mai 2026',
      location: 'Parc de Sbikha',
      photographer: 'Leila Bouazizi',
      likes: 112,
      views: 456,
      tags: ['Environnement', 'Écologie', 'Bénévolat']
    },
    {
      id: 5,
      title: "Atelier de leadership digital",
      description: "Formation aux compétences numériques pour les jeunes",
      category: 'training',
      date: '5 Août 2026',
      location: 'Centre Culturel de Sbikha',
      photographer: 'Karim Saadi',
      likes: 56,
      views: 278,
      tags: ['Digital', 'Formation', 'Leadership']
    },
    {
      id: 6,
      title: "Journée de solidarité",
      description: "Distribution de repas aux familles vulnérables",
      category: 'community',
      date: '25 Juin 2026',
      location: 'Sbikha, Tunisie',
      photographer: 'Nadia Gharbi',
      likes: 78,
      views: 156,
      tags: ['Solidarité', 'Communauté', 'Entraide']
    },
    {
      id: 7,
      title: "Gala de reconnaissance JCI Sbikha",
      description: "Célébration des 8 ans d'impact de JCI Sbikha",
      category: 'events',
      date: '5 Janvier 2026',
      location: 'Salle des Fêtes, Sbikha',
      photographer: 'Ahmed Ben Ali',
      likes: 134,
      views: 389,
      tags: ['Célébration', 'Reconnaissance', 'Anniversaire']
    },
    {
      id: 8,
      title: "Atelier environnement dans les écoles",
      description: "Sensibilisation des élèves à la protection de l'environnement",
      category: 'training',
      date: '15 Mars 2026',
      location: 'Écoles primaires de Sbikha',
      photographer: 'Sana Mansouri',
      likes: 45,
      views: 201,
      tags: ['Éducation', 'Environnement', 'Enfants']
    },
    {
      id: 9,
      title: "Forum des jeunes leaders",
      description: "Rencontre des jeunes leaders de la région de Sbikha",
      category: 'events',
      date: '15 Octobre 2026',
      location: 'Centre Culturel de Sbikha',
      photographer: 'Mohamed Trabelsi',
      likes: 92,
      views: 345,
      tags: ['Leadership', 'Jeunesse', 'Réseautage']
    },
    {
      id: 10,
      title: "Campagne de nettoyage de la ville",
      description: "Action citoyenne pour une ville plus propre",
      category: 'community',
      date: '20 Avril 2026',
      location: 'Sbikha, Tunisie',
      photographer: 'Leila Bouazizi',
      likes: 73,
      views: 267,
      tags: ['Environnement', 'Citoyenneté', 'Propreté']
    },
    {
      id: 11,
      title: "Formation en entrepreneuriat",
      description: "Programme d'accompagnement des jeunes entrepreneurs",
      category: 'training',
      date: '10 Novembre 2026',
      location: 'Innovation Hub, Sbikha',
      photographer: 'Karim Saadi',
      likes: 88,
      views: 298,
      tags: ['Entrepreneuriat', 'Formation', 'Innovation']
    },
    {
      id: 12,
      title: "Festival culturel de Sbikha",
      description: "Célébration du patrimoine culturel local",
      category: 'community',
      date: '25 Décembre 2026',
      location: 'Place de la Ville, Sbikha',
      photographer: 'Nadia Gharbi',
      likes: 156,
      views: 523,
      tags: ['Culture', 'Patrimoine', 'Festival']
    }
  ];

  // Filter images
  const filteredImages = selectedAlbum === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedAlbum);

  const openLightbox = (index) => {
    setSelectedImage(filteredImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const navigateImage = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < filteredImages.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    }
  };

  const getAlbumLabel = (albumId) => {
    const album = albums.find(a => a.id === albumId);
    return album ? album.label : albumId;
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero animate-on-scroll">
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <div className="gallery-hero-badge">
            <FaCamera className="gallery-hero-badge-icon" />
            Galerie
          </div>
          <h1 className="gallery-hero-title">
            Nos Moments<br />
            <span className="gallery-hero-highlight">en Images</span>
          </h1>
          <p className="gallery-hero-description">
            Découvrez les moments forts de JCI Sbikha à travers notre galerie photos.
          </p>
        </div>
      </section>

      {/* Album Filter */}
      <section className="gallery-filter-section">
        <div className="jci-container">
          <div className="gallery-albums glass-card animate-on-scroll">
            {albums.map((album) => (
              <button
                key={album.id}
                className={`gallery-album-btn ${selectedAlbum === album.id ? 'active' : ''}`}
                onClick={() => setSelectedAlbum(album.id)}
              >
                <span className="gallery-album-icon">{album.icon}</span>
                {album.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="jci-container">
          <div className="section-header-wrapper animate-on-scroll">
            <h2 className="section-title-modern">Galerie Photos</h2>
            <p className="section-subtitle">{filteredImages.length} photos disponibles</p>
          </div>

          {filteredImages.length > 0 ? (
            <div className="gallery-grid">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="gallery-item animate-on-scroll glass-card"
                  onClick={() => openLightbox(index)}
                >
                  <div className="gallery-item-image">
                    <div className="gallery-item-placeholder">
                      <FaCamera className="gallery-item-icon" />
                    </div>
                    <div className="gallery-item-overlay">
                      <div className="gallery-item-overlay-content">
                        <FaEye className="gallery-item-overlay-icon" />
                        <span>Voir</span>
                      </div>
                    </div>
                  </div>
                  <div className="gallery-item-info">
                    <h4 className="gallery-item-title">{image.title}</h4>
                    <div className="gallery-item-meta">
                      <span><FaCalendarAlt /> {image.date}</span>
                      <span><FaHeart /> {image.likes}</span>
                    </div>
                    <span className="gallery-item-category">{getAlbumLabel(image.category)}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="gallery-empty">
              <FaImages className="gallery-empty-icon" />
              <h3>Aucune photo trouvée</h3>
              <p>Essayez de sélectionner un autre album</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="gallery-lightbox-overlay" onClick={closeLightbox}>
          <div className="gallery-lightbox" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={closeLightbox}>
              <MdClose />
            </button>
            
            <div className="gallery-lightbox-content">
              <div className="gallery-lightbox-image">
                <div className="gallery-lightbox-placeholder">
                  <FaCamera className="gallery-lightbox-icon" />
                </div>
              </div>
              
              <div className="gallery-lightbox-info glass-card">
                <h3 className="gallery-lightbox-title">{selectedImage.title}</h3>
                <p className="gallery-lightbox-description">{selectedImage.description}</p>
                
                <div className="gallery-lightbox-meta">
                  <div className="gallery-lightbox-meta-item">
                    <FaCalendarAlt className="gallery-lightbox-meta-icon" />
                    <span>{selectedImage.date}</span>
                  </div>
                  <div className="gallery-lightbox-meta-item">
                    <FaMapMarkerAlt className="gallery-lightbox-meta-icon" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="gallery-lightbox-meta-item">
                    <FaUser className="gallery-lightbox-meta-icon" />
                    <span>{selectedImage.photographer}</span>
                  </div>
                </div>

                <div className="gallery-lightbox-tags">
                  {selectedImage.tags.map((tag, index) => (
                    <span key={index} className="gallery-lightbox-tag">{tag}</span>
                  ))}
                </div>

                <div className="gallery-lightbox-actions">
                  <div className="gallery-lightbox-stats">
                    <span><FaHeart /> {selectedImage.likes}</span>
                    <span><FaEye /> {selectedImage.views}</span>
                  </div>
                  <div className="gallery-lightbox-buttons">
                    <button className="gallery-lightbox-btn">
                      <FaDownload /> Télécharger
                    </button>
                    <button className="gallery-lightbox-btn">
                      <FaShare /> Partager
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button 
              className="gallery-lightbox-nav gallery-lightbox-prev"
              onClick={() => navigateImage(-1)}
              disabled={currentIndex === 0}
            >
              <FaArrowLeft />
            </button>
            <button 
              className="gallery-lightbox-nav gallery-lightbox-next"
              onClick={() => navigateImage(1)}
              disabled={currentIndex === filteredImages.length - 1}
            >
              <FaArrowRight />
            </button>

            <div className="gallery-lightbox-counter">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;