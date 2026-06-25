<template>
  <header class="header-wrapper">
    <!-- TOP HEADER BAR -->
    <div class="top-header">
      <div class="container">
        <div class="contact-info">
          <a href="tel:+254707264253" class="contact-item">
            <i class="fas fa-phone"></i>
            <span>0707 264253</span>
          </a>
          <a href="mailto:info@malkiaurbanspa.com" class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>info@malkiaurbanspa.com</span>
          </a>
        </div>
      </div>
    </div>

    <!-- MAIN NAVBAR -->
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/">
            <img 
              src="/images/logo/logo.png" 
              alt="Malkia Urban Spa" 
              class="logo-img"
            />
            <span class="logo-text">Malkia Urban Spa</span>
          </router-link>
        </div>

        <!-- Navigation links -->
        <ul class="nav-links" :class="{ 'active': isMenuOpen }">
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/services" @click="closeMenu">Services</router-link></li>
          <li><router-link to="/about" @click="closeMenu">About Us</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">Contact Us</router-link></li>
          <li class="cta-item">
            <a href="https://wa.me/254707264253" target="_blank" class="cta-button">
              Book Now
            </a>
          </li>
        </ul>

        <!-- Hamburger menu toggle (mobile) -->
        <button class="hamburger" @click="toggleMenu" :class="{ 'active': isMenuOpen }" aria-label="Toggle navigation">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
/* ===== HEADER WRAPPER ===== */
.header-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* ===== TOP HEADER BAR ===== */
.top-header {
  background: #fafafa;
  padding: 0.5rem 0;
  border-bottom: 2px solid #e91e63;
}

.top-header .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #e91e63;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.2s ease;
}

.contact-item:hover {
  color: #c2185b;
  transform: scale(1.02);
}

.contact-item i {
  font-size: 1rem;
  color: #e91e63;
}

/* ===== MAIN NAVBAR ===== */
.navbar {
  background: #fafafa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  padding: 0.8rem 0;
}

.navbar .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.8rem;
}

.logo-img {
  height: 50px;
  width: auto;
  display: block;
}

/* ===== BRIGHT PINK ITALIC LOGO TEXT ===== */
.logo-text {
  font-size: 1.3rem;
  font-weight: 700;
  color: #e91e63;
  font-style: italic;
  letter-spacing: -0.5px;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
}

.nav-links li a:hover,
.nav-links li a.router-link-active {
  color: #e91e63;
  border-bottom-color: #e91e63;
}

.cta-item {
  margin-left: 0.5rem;
}

/* ===== LARGE PINK BOOKING BUTTON ===== */
.cta-button {
  background: #e91e63;
  color: #ffffff !important;
  padding: 0.8rem 2.2rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.5px;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  border-bottom: none !important;
  box-shadow: 0 4px 20px rgba(233, 30, 99, 0.35);
  display: inline-block;
  text-align: center;
}

.cta-button:hover {
  background: #c2185b;
  transform: scale(1.06);
  box-shadow: 0 6px 30px rgba(233, 30, 99, 0.5);
  color: #ffffff !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.hamburger .bar {
  width: 28px;
  height: 3px;
  background: #1a1a1a;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}
.hamburger.active .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .top-header .container {
    padding: 0.3rem 1rem;
  }

  .contact-info {
    gap: 1.5rem;
  }

  .contact-item {
    font-size: 0.8rem;
  }

  .contact-item i {
    font-size: 0.85rem;
  }

  .hamburger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fafafa;
    flex-direction: column;
    padding: 1.5rem 2rem;
    gap: 1.2rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-120%);
    transition: transform 0.3s ease;
    opacity: 0;
    pointer-events: none;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-links li a {
    font-size: 1.1rem;
    display: block;
    width: 100%;
    text-align: center;
  }

  .cta-item {
    margin: 0;
    width: 100%;
  }

  .cta-button {
    display: block;
    text-align: center;
    padding: 0.9rem;
    font-size: 1.1rem;
    width: 100%;
  }

  .logo-img {
    height: 40px;
  }

  .logo-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .contact-info {
    gap: 0.8rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .contact-item {
    font-size: 0.7rem;
  }

  .contact-item i {
    font-size: 0.75rem;
  }

  .logo-img {
    height: 35px;
  }

  .logo-text {
    font-size: 0.85rem;
  }

  .cta-button {
    padding: 0.8rem;
    font-size: 1rem;
  }
}
</style>