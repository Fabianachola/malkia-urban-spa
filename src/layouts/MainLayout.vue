<template>
  <div class="app-wrapper">
    <!-- Fixed Navbar -->
    <Navbar />
    
    <!-- Main Content Area (pages render here) -->
    <main class="main-content">
      <router-view />
    </main>
    
    <!-- Footer -->
    <Footer />
    
    <!-- Floating WhatsApp Button (visible on all pages) -->
    <WhatsAppButton />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import WhatsAppButton from '@/components/WhatsAppButton.vue';

export default {
  name: 'MainLayout',
  components: {
    Navbar,
    Footer,
    WhatsAppButton,
  },
};
</script>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1 0 auto; /* Pushes footer to the bottom */
  padding-top: 1rem; /* Gives a tiny gap below the navbar */
}
</style>