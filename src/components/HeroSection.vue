<template>
  <section class="hero">
    <div class="hero-slider">
      <div class="slide active">
        <video
          ref="heroVideo"
          class="hero-video"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
        >
          <source src="/images/hero/hero1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="slide-overlay">
          <h1>Premium Beauty & Wellness Services in Nairobi</h1>
          <p>Waxing • Massage • Microblading/Microshading • Facials • Skin Tag Removal • Waxing Training</p>
          <a href="https://wa.me/254707264253" target="_blank" class="cta-button">
            Book Now
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
/* ===== HERO SECTION – FULLY RESPONSIVE ===== */
.hero {
  width: 100%;
  height: 100vh;
  min-height: 500px;
  max-height: 1000px;
  background: #1a1a1a;
  position: relative;
  overflow: hidden;
}

.hero-slider {
  width: 100%;
  height: 100%;
  position: relative;
}

/* ===== VIDEO SLIDE ===== */
.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* HIGH‑QUALITY VIDEO RENDERING – CROSS‑BROWSER */
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: transform;
  background: #1a1a1a;
}

/* Overlay with semi‑transparent background for text readability */
.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  color: #fafafa;
  pointer-events: none;
}

.slide-overlay a {
  pointer-events: auto;
}

/* ===== TEXT & BUTTONS – RESPONSIVE SIZING ===== */
.slide-overlay h1 {
  font-size: clamp(2rem, 6vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.6);
  line-height: 1.2;
  max-width: 900px;
}

.slide-overlay p {
  font-size: clamp(1rem, 2vw, 1.6rem);
  margin-bottom: 1.8rem;
  opacity: 0.95;
  max-width: 700px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

/* ===== PINK BOOK BUTTON ===== */
.slide-overlay .cta-button {
  display: inline-block;
  background: #e91e63;
  color: #ffffff;
  padding: 0.9rem 3rem;
  border-radius: 50px;
  font-size: clamp(1rem, 1.3vw, 1.3rem);
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  white-space: nowrap;
  box-shadow: 0 4px 20px rgba(233, 30, 99, 0.35);
  pointer-events: auto;
}

.slide-overlay .cta-button:hover {
  background: #c2185b;
  transform: scale(1.05);
  box-shadow: 0 6px 30px rgba(233, 30, 99, 0.5);
}

/* ===== RESPONSIVE FINE‑TUNING ===== */

/* Tablets and smaller laptops */
@media (max-width: 1024px) {
  .hero {
    height: 90vh;
    min-height: 450px;
    max-height: 900px;
  }
}

/* Mobile landscape & small tablets */
@media (max-width: 768px) {
  .hero {
    height: 85vh;
    min-height: 400px;
    max-height: 800px;
  }

  .slide-overlay h1 {
    font-size: clamp(1.8rem, 5vw, 2.5rem);
  }

  .slide-overlay p {
    font-size: clamp(0.9rem, 1.8vw, 1.1rem);
  }

  .slide-overlay .cta-button {
    padding: 0.7rem 2rem;
    font-size: 0.9rem;
    white-space: normal;
  }
}

/* Mobile portrait */
@media (max-width: 480px) {
  .hero {
    height: 80vh;
    min-height: 350px;
    max-height: 700px;
  }

  .slide-overlay {
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.55);
  }

  .slide-overlay h1 {
    font-size: clamp(1.4rem, 4.5vw, 2rem);
  }

  .slide-overlay p {
    font-size: clamp(0.8rem, 1.5vw, 0.95rem);
    margin-bottom: 1.2rem;
  }

  .slide-overlay .cta-button {
    padding: 0.6rem 1.6rem;
    font-size: 0.8rem;
  }
}

/* Small phones (320px) */
@media (max-width: 360px) {
  .hero {
    height: 75vh;
    min-height: 300px;
  }

  .slide-overlay h1 {
    font-size: 1.3rem;
  }

  .slide-overlay p {
    font-size: 0.75rem;
  }

  .slide-overlay .cta-button {
    padding: 0.5rem 1.2rem;
    font-size: 0.75rem;
  }
}

/* Large screens (4K+) */
@media (min-width: 1920px) {
  .hero {
    max-height: 1100px;
  }

  .slide-overlay h1 {
    font-size: 5.5rem;
  }

  .slide-overlay p {
    font-size: 2rem;
  }
}

/* ===== SAFARI & FIREFOX SPECIFIC FIXES ===== */

/* Safari: Prevent video scaling issues */
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .hero-video {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  }
}

/* Firefox: Ensure smooth rendering */
@-moz-document url-prefix() {
  .hero-video {
    object-fit: cover;
  }
}

/* ===== REDUCED MOTION PREFERENCE ===== */
@media (prefers-reduced-motion: reduce) {
  .slide-overlay h1,
  .slide-overlay p,
  .slide-overlay .cta-button {
    animation: none;
  }
}
</style>