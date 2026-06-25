<template>
  <footer class="footer">
    <div class="container">
      <!-- Main Footer Grid -->
      <div class="footer-grid">
        <!-- Column 1: Business Info -->
        <div class="footer-column">
          <h3 class="footer-heading">Malkia Urban Spa</h3>
          <p class="footer-description">
            Premium waxing hair removal services in the heart of Nairobi. 
            Experience flawless, painless, and professional care.
          </p>
          
            
          
          <div class="social-links">
            <a 
              href="https://www.instagram.com/malkia_urban__spa/" 
              target="_blank" 
              class="social-link" 
              aria-label="Instagram"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a 
              href="https://www.tiktok.com/@malkiaurbanspa/video/7641110321767271698" 
              target="_blank" 
              class="social-link" 
              aria-label="TikTok"
            >
              <i class="fab fa-tiktok"></i>
            </a>
            <a 
              href="https://www.facebook.com/61564784498866/videos/2105754990341981/" 
              target="_blank" 
              class="social-link" 
              aria-label="Facebook"
            >
              <i class="fab fa-facebook"></i>
            </a>
            <a 
              href="https://wa.me/254707264253" 
              target="_blank" 
              class="social-link" 
              aria-label="WhatsApp"
            >
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <!-- Column 2: Contact Info -->
        <div class="footer-column">
          <h4 class="footer-heading">Contact Us</h4>
          <ul class="contact-list">
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <span>Kenya Cinema Plaza, 4th Floor 403, Moi Ave, Nairobi</span>
            </li>
            <li>
              <i class="fas fa-phone"></i>
              <a href="tel:+254707264253">0707 264253</a>
            </li>
            <li>
              <i class="fas fa-clock"></i>
              <span>Open 8am · Close 8pm</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <a href="mailto:info@malkiaurbanspa.com">info@malkiaurbanspa.com</a>
            </li>
          </ul>
        </div>

        <!-- Column 3: Quick Links -->
        <div class="footer-column">
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="quick-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
          </ul>
        </div>

        <!-- Column 4: Map -->
        <div class="footer-column map-column">
          <h4 class="footer-heading">Find Us</h4>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8535!2d36.8219!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d9b0a8f5b5%3A0x8e5a2b7c9d3f4a1e!2sKenya%20Cinema%20Plaza%2C%20Moi%20Ave%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000"
              width="100%"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Malkia Urban Spa Location"
            ></iframe>
          </div>
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Kenya+Cinema+Plaza,+Moi+Ave,+Nairobi" 
            target="_blank" 
            class="directions-link"
          >
            <i class="fas fa-directions"></i> Get Directions
          </a>
        </div>
      </div>

      <!-- Bottom Bar - Centered -->
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Malkia Urban Spa. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
/* ===== FOOTER BASE ===== */
.footer {
  background: #1a2a3a;
  color: #fafafa;
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ===== GRID LAYOUT ===== */
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

/* ===== FOOTER COLUMNS ===== */
.footer-heading {
  color: #fafafa;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.footer-description {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #b0b0b0;
}

/* ===== RATING ===== */
.rating {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.rating-text {
  font-size: 0.9rem;
  color: #b0b0b0;
}

/* ===== SOCIAL LINKS ===== */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  color: #e0e0e0;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #e91e63;
  color: #fafafa;
  transform: translateY(-3px);
}

/* ===== CONTACT LIST ===== */
.contact-list,
.quick-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-list li,
.quick-links li {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  font-size: 0.9rem;
  color: #b0b0b0;
}

.contact-list i {
  color: #e91e63;
  width: 18px;
  margin-top: 3px;
}

.contact-list a,
.quick-links a {
  color: #b0b0b0;
  text-decoration: none;
  transition: color 0.2s;
}

.contact-list a:hover,
.quick-links a:hover {
  color: #e91e63;
}

.quick-links li {
  display: block;
  margin-bottom: 0.6rem;
}

/* ===== MAP ===== */
.map-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.8rem;
}

.map-container iframe {
  display: block;
}

.directions-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #e91e63;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}

.directions-link:hover {
  color: #ffffff;
}

/* ===== BOTTOM BAR - CENTERED ===== */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
  color: #888;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .map-column {
    order: -1;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style>