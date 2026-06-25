<template>
  <section class="gallery-section" id="gallery">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Services and Products</h2>
        <p class="section-subtitle">Take a peek at our recent transformations</p>
      </div>

      <div class="gallery-grid">
        <div 
          v-for="(image, index) in galleryImages" 
          :key="index" 
          class="gallery-item"
          @click="openLightbox(index)"
        >
          <img 
            :src="image.thumb" 
            :alt="image.alt" 
            loading="lazy"
            decoding="async"
            class="gallery-thumb"
          />
          <div class="gallery-overlay">
            
            <span class="image-name">{{ image.name }}</span>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="lightbox-close" @click.stop="closeLightbox">✕</button>
        <button class="lightbox-prev" @click.stop="prevImage">‹</button>
        <img 
          :src="galleryImages[currentIndex].full" 
          :alt="galleryImages[currentIndex].alt" 
          class="lightbox-image" 
        />
        <button class="lightbox-next" @click.stop="nextImage">›</button>
        <div class="lightbox-caption">
          {{ galleryImages[currentIndex].name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GallerySection',
  data() {
    return {
      lightboxOpen: false,
      currentIndex: 0,
      galleryImages: [
        {
          thumb: '/images/gallery/facial-treatment.jpg',
          full: '/images/gallery/facial-treatment.jpg',
          alt: 'Facial treatment at Malkia Urban Spa',
          name: 'Facial Treatment',
        },
        {
          thumb: '/images/gallery/glow-up.jpg',
          full: '/images/gallery/glow-up.jpg',
          alt: 'Glow up transformation',
          name: 'Glow Up',
        },
        {
          thumb: '/images/gallery/luxury-spa-setup.jpg',
          full: '/images/gallery/luxury-spa-setup.jpg',
          alt: 'Luxury spa setup',
          name: 'Luxury Spa Setup',
        },
        {
          thumb: '/images/gallery/machine-facial.jpg',
          full: '/images/gallery/machine-facial.jpg',
          alt: 'Machine facial treatment',
          name: 'Machine Facial',
        },
        {
          thumb: '/images/gallery/massage.jpg',
          full: '/images/gallery/massage.jpg',
          alt: 'Relaxing massage therapy',
          name: 'Massage',
        },
        {
          thumb: '/images/gallery/waxing.jpg',
          full: '/images/gallery/waxing.jpg',
          alt: 'Professional waxing service',
          name: 'Waxing',
        },
        {
          thumb: '/images/gallery/waxing-kit.jpg',
          full: '/images/gallery/waxing-kit.jpg',
          alt: 'Waxing kit and tools',
          name: 'Waxing Kit',
        },
        {
          thumb: '/images/gallery/waxing-training.jpg',
          full: '/images/gallery/waxing-training.jpg',
          alt: 'Waxing training session',
          name: 'Waxing Training',
        },
      ],
    };
  },
  methods: {
    openLightbox(index) {
      this.currentIndex = index;
      this.lightboxOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.lightboxOpen = false;
      document.body.style.overflow = '';
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.galleryImages.length;
    },
  },
};
</script>

<style scoped>
/* ===== SECTION BASE ===== */
.gallery-section {
  padding: 5rem 0;
  background: #fafafa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ===== SECTION HEADER ===== */
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-title {
  font-size: clamp(2.2rem, 4.5vw, 3.2rem);
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.section-subtitle {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: #666;
  font-weight: 300;
}

/* ===== GALLERY GRID ===== */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

/* ===== GALLERY ITEM ===== */
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  background: #fafafa;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.10);
}

.gallery-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-thumb {
  transform: scale(1.05);
}

/* ===== GALLERY OVERLAY ===== */
.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.view-icon {
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.image-name {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  letter-spacing: 0.5px;
}

/* ===== LIGHTBOX ===== */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
  flex-direction: column;
}

.lightbox-image {
  max-width: 90%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
}

.lightbox-caption {
  color: #fff;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
  position: absolute;
  background: rgba(255, 255, 255, 0.12);
  border: none;
  color: #fff;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(255, 255, 255, 0.25);
}

.lightbox-close {
  top: 25px;
  right: 30px;
  font-size: 1.8rem;
}

.lightbox-prev {
  left: 25px;
  top: 50%;
  transform: translateY(-50%);
}

.lightbox-next {
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
}

/* ===== RESPONSIVE ===== */

/* Tablets */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
  }
}

/* Mobile landscape */
@media (max-width: 768px) {
  .gallery-section {
    padding: 3rem 0;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .image-name {
    font-size: 0.75rem;
  }

  .view-icon {
    font-size: 2rem;
  }

  .lightbox-image {
    max-width: 95%;
    max-height: 70vh;
  }

  .lightbox-close {
    top: 15px;
    right: 20px;
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
  }

  .lightbox-prev,
  .lightbox-next {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .lightbox-prev {
    left: 10px;
  }
  .lightbox-next {
    right: 10px;
  }

  .lightbox-caption {
    font-size: 0.95rem;
    margin-top: 1rem;
  }
}

/* Mobile portrait */
@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }

  .image-name {
    font-size: 0.65rem;
  }

  .view-icon {
    font-size: 1.6rem;
  }

  .lightbox {
    padding: 1rem;
  }

  .lightbox-image {
    max-width: 98%;
    max-height: 65vh;
  }

  .lightbox-close {
    top: 12px;
    right: 15px;
    font-size: 1.2rem;
    width: 35px;
    height: 35px;
  }

  .lightbox-prev,
  .lightbox-next {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }

  .lightbox-caption {
    font-size: 0.8rem;
    margin-top: 0.8rem;
  }
}
</style>