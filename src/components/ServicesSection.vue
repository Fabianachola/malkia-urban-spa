<template>
  <section class="services-section" id="services">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Signature Services</h2>
        <p class="section-subtitle">Experience the best in beauty and wellness</p>
      </div>

      <!-- Services Grid – 3 per row -->
      <div class="services-grid">
        <div 
          v-for="(service, index) in services" 
          :key="index" 
          class="service-card"
        >
          <div class="service-image-wrapper">
            <img 
              :src="service.image" 
              :alt="service.title" 
              loading="lazy"
              decoding="async"
              class="service-image"
            />
          </div>
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <div class="button-group">
              <a 
                :href="service.whatsappLink" 
                target="_blank" 
                class="btn-whatsapp"
              >
                <i class="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a 
                href="tel:+254707264253" 
                class="btn-call"
              >
                <i class="fas fa-phone"></i> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          title: 'Waxing',
          description: 'Flawless, painless hair removal for all skin types. From eyebrows to full body – we\'ve got you covered.',
          image: '/images/services/waxing.jpg',
          whatsappLink: 'https://wa.me/254707264253?text=Hello%20Malkia%20Urban%20Spa%2C%20I%20would%20like%20to%20book%20a%20WAXING%20appointment.%20Please%20let%20me%20know%20your%20availability.%20Thank%20you!',
        },
        {
          title: 'Massage',
          description: 'Relax and unwind with therapeutic massages that ease tension, improve circulation, and restore balance.',
          image: '/images/services/massage.jpg',
          whatsappLink: 'https://wa.me/254707264253?text=Hello%20Malkia%20Urban%20Spa%2C%20I%20would%20like%20to%20book%20a%20MASSAGE%20appointment.%20Please%20let%20me%20know%20your%20availability.%20Thank%20you!',
        },
        {
          title: 'Waxing Training',
          description: 'Professional waxing training courses. Learn the art of flawless hair removal from industry experts.',
          image: '/images/services/waxing-training.jpg',
          whatsappLink: 'https://wa.me/254707264253?text=Hello%20Malkia%20Urban%20Spa%2C%20I%20am%20interested%20in%20your%20WAXING%20TRAINING%20course.%20Please%20share%20more%20details%20and%20pricing.%20Thank%20you!',
        },
        {
          title: 'Microblading / Microshading',
          description: 'Perfect your brows with semi‑permanent techniques that look natural and last for months.',
          image: '/images/services/microblading.jpg',
          whatsappLink: 'https://wa.me/254707264253?text=Hello%20Malkia%20Urban%20Spa%2C%20I%20would%20like%20to%20book%20a%20MICROBLADING%20%2F%20MICROSHADING%20appointment.%20Please%20let%20me%20know%20your%20availability.%20Thank%20you!',
        },
        {
          title: 'Facial Treatment',
          description: 'Rejuvenating facials with LED light therapy. Deep cleansing, hydration, and a radiant glow.',
          image: '/images/services/facial.jpg',
          whatsappLink: 'https://wa.me/254707264253?text=Hello%20Malkia%20Urban%20Spa%2C%20I%20would%20like%20to%20book%20a%20FACIAL%20TREATMENT%20appointment.%20Please%20let%20me%20know%20your%20availability.%20Thank%20you!',
        },
        {
          title: 'Skin Tag Removal',
          description: 'Safe and effective removal of skin tags using advanced techniques – quick, painless, and with minimal downtime.',
          image: '/images/services/skin-tag-removal.jpg',
          whatsappLink: 'https://wa.me/254707264253?text=Hello%20Malkia%20Urban%20Spa%2C%20I%20would%20like%20to%20book%20a%20SKIN%20TAG%20REMOVAL%20appointment.%20Please%20let%20me%20know%20your%20availability.%20Thank%20you!',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* ===== SECTION BASE ===== */
.services-section {
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
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.section-subtitle {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: #666;
  font-weight: 400;
}

/* ===== SERVICES GRID – 3 PER ROW ===== */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* ===== SERVICE CARD ===== */
.service-card {
  background: #fafafa;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

/* ===== CARD IMAGE – HIGH QUALITY ===== */
.service-image-wrapper {
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #e8e8e8;
  flex-shrink: 0;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.5s ease;
  /* Cross-browser image quality */
  image-rendering: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: transform;
}

.service-card:hover .service-image {
  transform: scale(1.05);
}

/* ===== CARD CONTENT – CENTERED ===== */
.service-content {
  padding: 1.5rem 1.5rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fafafa;
}

.service-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.6rem;
  line-height: 1.3;
}

.service-description {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  flex: 1;
  max-width: 100%;
}

/* ===== BUTTON GROUP ===== */
.button-group {
  display: flex;
  gap: 0.6rem;
  width: 100%;
}

/* ===== WHATSAPP BUTTON ===== */
.btn-whatsapp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: #25d366;
  color: #fafafa;
  padding: 0.6rem 0.8rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
  flex: 1;
  text-align: center;
}

.btn-whatsapp:hover {
  background: #1ebe5a;
  transform: scale(1.02);
  box-shadow: 0 6px 25px rgba(37, 211, 102, 0.4);
  color: #ffffff;
}

.btn-whatsapp i {
  font-size: 1rem;
}

/* ===== CALL BUTTON ===== */
.btn-call {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: #e91e63;
  color: #fafafa;
  padding: 0.6rem 0.8rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
  flex: 1;
  text-align: center;
}

.btn-call:hover {
  background: #c2185b;
  transform: scale(1.02);
  box-shadow: 0 6px 25px rgba(233, 30, 99, 0.4);
  color: #fafafa;
}

.btn-call i {
  font-size: 1rem;
}

/* ===== CROSS-BROWSER QUALITY FIXES ===== */

/* Safari */
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .service-image {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      image-rendering: -webkit-optimize-contrast;
    }
  }
}

/* Firefox */
@-moz-document url-prefix() {
  .service-image {
    image-rendering: -moz-crisp-edges;
  }
}

/* ===== RESPONSIVE ===== */

/* Tablets – 2 columns */
@media (max-width: 992px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .service-image-wrapper {
    height: 210px;
  }

  .service-content {
    padding: 1.5rem 1.5rem 1.5rem;
  }

  .service-title {
    font-size: 1.2rem;
  }

  .btn-whatsapp,
  .btn-call {
    font-size: 0.8rem;
    padding: 0.6rem 0.8rem;
  }
}

/* Mobile – 1 column */
@media (max-width: 768px) {
  .services-section {
    padding: 3.5rem 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.8rem;
    max-width: 500px;
  }

  .service-image-wrapper {
    height: 220px;
  }

  .service-content {
    padding: 1.5rem 1.5rem 1.5rem;
  }

  .service-title {
    font-size: 1.3rem;
  }

  .service-description {
    font-size: 0.95rem;
  }

  .btn-whatsapp,
  .btn-call {
    font-size: 0.9rem;
    padding: 0.7rem 1.2rem;
  }
}

/* Small phones */
@media (max-width: 480px) {
  .services-section {
    padding: 2.5rem 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .services-grid {
    gap: 1.2rem;
  }

  .service-image-wrapper {
    height: 180px;
  }

  .service-content {
    padding: 1.2rem 1.2rem 1.2rem;
  }

  .service-title {
    font-size: 1.1rem;
  }

  .service-description {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .button-group {
    flex-direction: column;
    gap: 0.6rem;
  }

  .btn-whatsapp,
  .btn-call {
    font-size: 0.85rem;
    padding: 0.6rem 1rem;
    width: 100%;
  }
}

/* ===== REDUCED MOTION ===== */
@media (prefers-reduced-motion: reduce) {
  .service-card,
  .service-image {
    animation: none;
    transition: none;
  }
  
  .service-card:hover .service-image {
    transform: none;
  }
  
  .service-card:hover {
    transform: none;
  }
}

/* ===== ANIMATION ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card {
  animation: fadeInUp 0.6s ease both;
}

.service-card:nth-child(1) { animation-delay: 0.05s; }
.service-card:nth-child(2) { animation-delay: 0.1s; }
.service-card:nth-child(3) { animation-delay: 0.15s; }
.service-card:nth-child(4) { animation-delay: 0.2s; }
.service-card:nth-child(5) { animation-delay: 0.25s; }
.service-card:nth-child(6) { animation-delay: 0.3s; }
</style>