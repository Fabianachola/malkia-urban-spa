<template>
  <section class="packages-section" id="packages">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Packages</h2>
        <p class="section-subtitle">Professional beauty & wellness services at competitive prices</p>
      </div>

      <div class="packages-grid">
        <!-- Package 1: Waxing -->
        <div class="package-card">
          <div class="package-header">
            <h3>Waxing</h3>
          </div>
          <div class="package-body">
            <table class="price-table">
              <tbody>
                <tr>
                  <td>Underarms</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>Brazilian</td>
                  <td>1,200</td>
                </tr>
                <tr>
                  <td>Bikini</td>
                  <td>900</td>
                </tr>
                <tr>
                  <td>Manzillien</td>
                  <td>2,000</td>
                </tr>
                <tr>
                  <td>Face Waxing</td>
                  <td>700</td>
                </tr>
                <tr>
                  <td>Upper Lip</td>
                  <td>250</td>
                </tr>
                <tr>
                  <td>Chin</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>Half Legs</td>
                  <td>1,500</td>
                </tr>
                <tr>
                  <td>Full Legs</td>
                  <td>3,000</td>
                </tr>
                <tr>
                  <td>Half Hands</td>
                  <td>1,000</td>
                </tr>
                <tr>
                  <td>Full Hands</td>
                  <td>1,500</td>
                </tr>
                <tr>
                  <td>Chest</td>
                  <td>1,500</td>
                </tr>
                <tr>
                  <td>Tummy</td>
                  <td>1,000</td>
                </tr>
                <tr>
                  <td>Back</td>
                  <td>2,500</td>
                </tr>
                <tr>
                  <td>Bandeau</td>
                  <td>1,200</td>
                </tr>
                <tr>
                  <td>Vocal</td>
                  <td>1,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Package 2: Brows -->
        <div class="package-card">
          <div class="package-header">
            <h3>Brows</h3>
          </div>
          <div class="package-body">
            <table class="price-table">
              <tbody>
                <tr>
                  <td>Microshading / Ombre Brows</td>
                  <td>8,000</td>
                </tr>
                <tr>
                  <td>Microblading</td>
                  <td>15,000</td>
                </tr>
                <tr>
                  <td>Combo Brows</td>
                  <td>13,000</td>
                </tr>
                <tr>
                  <td>Retouch (6 months to 1 yr)</td>
                  <td>4,000</td>
                </tr>
                <tr>
                  <td>Retouch (1 year and above)</td>
                  <td>6,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Package 3: Massage & Training -->
        <div class="package-card">
          <div class="package-header">
            <h3>Massage & Training</h3>
          </div>
          <div class="package-body">
            <table class="price-table">
              <tbody>
                <tr>
                  <td>Waxing Training</td>
                  <td>20,000</td>
                </tr>
                <tr>
                  <td>Deep Tissue Massage</td>
                  <td>6,000</td>
                </tr>
                <tr>
                  <td>Aromatherapy Massage</td>
                  <td>4,500</td>
                </tr>
                <tr>
                  <td>Sports Massage</td>
                  <td>4,500</td>
                </tr>
                <tr>
                  <td>Reflexology Massage</td>
                  <td>4,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PackagesSection',
};
</script>

<style scoped>
/* ===== SECTION BASE ===== */
.packages-section {
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

/* ===== PACKAGES GRID ===== */
.packages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: stretch;
}

/* ===== PACKAGE CARD ===== */
.package-card {
  background: #fce4ec; /* Light pink card */
  border-radius: 12px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(233, 30, 99, 0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.package-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 35px rgba(233, 30, 99, 0.12);
}

/* ===== PACKAGE HEADER ===== */
.package-header {
  padding: 1.5rem 2rem 1rem;
  border-bottom: 2px solid rgba(233, 30, 99, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.package-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: 0.5px;
}

/* ===== PACKAGE BODY ===== */
.package-body {
  padding: 0.5rem 1.8rem 1.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* ===== PRICE TABLE ===== */
.price-table {
  width: 100%;
  border-collapse: collapse;
  flex: 1;
}

.price-table tbody tr {
  border-bottom: 1px solid rgba(233, 30, 99, 0.08);
}

.price-table tbody tr:last-child {
  border-bottom: none;
}

.price-table td {
  padding: 0.6rem 0.3rem;
  font-size: 0.9rem;
  color: #1a1a1a;
}

.price-table td:first-child {
  text-align: left;
  font-weight: 500;
  color: #1a1a1a;
}

.price-table td:last-child {
  text-align: right;
  font-weight: 600;
  color: #1a1a1a;
}

/* ===== RESPONSIVE ===== */

@media (max-width: 992px) {
  .packages-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .packages-section {
    padding: 3rem 0;
  }
  
  .packages-grid {
    grid-template-columns: 1fr;
    max-width: 450px;
  }
  
  .package-header {
    padding: 1.2rem 1.5rem 0.8rem;
  }
  
  .package-header h3 {
    font-size: 1.2rem;
  }
  
  .package-body {
    padding: 0.3rem 1.2rem 1.2rem;
  }
  
  .price-table td {
    font-size: 0.85rem;
    padding: 0.5rem 0.2rem;
  }
}

@media (max-width: 480px) {
  .packages-grid {
    max-width: 100%;
  }
  
  .package-header {
    padding: 1rem 1.2rem 0.6rem;
  }
  
  .package-header h3 {
    font-size: 1.1rem;
  }
  
  .package-body {
    padding: 0.2rem 1rem 1rem;
  }
  
  .price-table td {
    font-size: 0.8rem;
    padding: 0.4rem 0.15rem;
  }
}
</style>