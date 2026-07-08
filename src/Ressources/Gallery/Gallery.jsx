// Gallery.jsx
import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { 
  FaCamera,
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaEye,
  FaImages,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

// Import all data from Utils/Gallery.js
import {
  albums,
  galleryImages,
  heroData,
  sectionHeaders,
  lightboxButtons,
  albumLabelMap,
} from '../../Utils/Ressources/Gallery';

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.jci-animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          el.classList.add('jci-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    return albumLabelMap[albumId] || albumId;
  };

  return (
    <div className="jci-gallery-page">
      {/* Hero Section */}
      <section className="jci-gallery-hero jci-animate-on-scroll">
        <div className="jci-gallery-hero-overlay"></div>
        <div className="jci-gallery-hero-content">
          <div className="jci-gallery-hero-badge">
            {heroData.badge.icon}
            {heroData.badge.text}
          </div>
          <h1 className="jci-gallery-hero-title">
            {heroData.title}<br />
            <span className="jci-gallery-hero-highlight">{heroData.highlight}</span>
          </h1>
          <p className="jci-gallery-hero-description">{heroData.description}</p>
        </div>
      </section>

      {/* Album Filter */}
      <section className="jci-gallery-filter-section">
        <div className="jci-container">
          <div className="jci-gallery-albums jci-glass-card jci-animate-on-scroll">
            {albums.map((album) => (
              <button
                key={album.id}
                className={`jci-gallery-album-btn ${selectedAlbum === album.id ? 'jci-active' : ''}`}
                onClick={() => setSelectedAlbum(album.id)}
              >
                <span className="jci-gallery-album-icon">{album.icon}</span>
                {album.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="jci-gallery-grid-section">
        <div className="jci-container">
          <div className="jci-section-header-wrapper jci-animate-on-scroll">
            <h2 className="jci-section-title-modern">{sectionHeaders.gallery.title}</h2>
            <p className="jci-section-subtitle">
              {sectionHeaders.gallery.subtitle(filteredImages.length)}
            </p>
          </div>

          {filteredImages.length > 0 ? (
            <div className="jci-gallery-grid">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="jci-gallery-item jci-animate-on-scroll jci-glass-card"
                  onClick={() => openLightbox(index)}
                >
                  <div className="jci-gallery-item-image">
                    <div className="jci-gallery-item-placeholder">
                      <FaCamera className="jci-gallery-item-icon" />
                    </div>
                    <div className="jci-gallery-item-overlay">
                      <div className="jci-gallery-item-overlay-content">
                        <FaEye className="jci-gallery-item-overlay-icon" />
                        <span>Voir</span>
                      </div>
                    </div>
                  </div>
                  <div className="jci-gallery-item-info">
                    <h4 className="jci-gallery-item-title">{image.title}</h4>
                    <div className="jci-gallery-item-meta">
                      <span><FaCalendarAlt /> {image.date}</span>
                      <span><FaHeart /> {image.likes}</span>
                    </div>
                    <span className="jci-gallery-item-category">{getAlbumLabel(image.category)}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="jci-gallery-empty">
              <FaImages className="jci-gallery-empty-icon" />
              <h3>Aucune photo trouvée</h3>
              <p>Essayez de sélectionner un autre album</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="jci-gallery-lightbox-overlay" onClick={closeLightbox}>
          <div className="jci-gallery-lightbox" onClick={(e) => e.stopPropagation()}>
            <button className="jci-gallery-lightbox-close" onClick={closeLightbox}>
              <MdClose />
            </button>
            
            <div className="jci-gallery-lightbox-content">
              <div className="jci-gallery-lightbox-image">
                <div className="jci-gallery-lightbox-placeholder">
                  <FaCamera className="jci-gallery-lightbox-icon" />
                </div>
              </div>
              
              <div className="jci-gallery-lightbox-info jci-glass-card">
                <h3 className="jci-gallery-lightbox-title">{selectedImage.title}</h3>
                <p className="jci-gallery-lightbox-description">{selectedImage.description}</p>
                
                <div className="jci-gallery-lightbox-meta">
                  <div className="jci-gallery-lightbox-meta-item">
                    <FaCalendarAlt className="jci-gallery-lightbox-meta-icon" />
                    <span>{selectedImage.date}</span>
                  </div>
                  <div className="jci-gallery-lightbox-meta-item">
                    <FaMapMarkerAlt className="jci-gallery-lightbox-meta-icon" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="jci-gallery-lightbox-meta-item">
                    <FaUser className="jci-gallery-lightbox-meta-icon" />
                    <span>{selectedImage.photographer}</span>
                  </div>
                </div>

                <div className="jci-gallery-lightbox-tags">
                  {selectedImage.tags.map((tag, index) => (
                    <span key={index} className="jci-gallery-lightbox-tag">{tag}</span>
                  ))}
                </div>

                <div className="jci-gallery-lightbox-actions">
                  <div className="jci-gallery-lightbox-stats">
                    <span><FaHeart /> {selectedImage.likes}</span>
                    <span><FaEye /> {selectedImage.views}</span>
                  </div>
                  <div className="jci-gallery-lightbox-buttons">
                    {lightboxButtons.map((button, index) => (
                      <button key={index} className="jci-gallery-lightbox-btn">
                        {button.icon} {button.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button 
              className="jci-gallery-lightbox-nav jci-gallery-lightbox-prev"
              onClick={() => navigateImage(-1)}
              disabled={currentIndex === 0}
            >
              <FaArrowLeft />
            </button>
            <button 
              className="jci-gallery-lightbox-nav jci-gallery-lightbox-next"
              onClick={() => navigateImage(1)}
              disabled={currentIndex === filteredImages.length - 1}
            >
              <FaArrowRight />
            </button>

            <div className="jci-gallery-lightbox-counter">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;