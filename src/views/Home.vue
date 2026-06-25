<template>
  <div class="home">
    <HeroSection />
    <ServicesSection />
    <PackagesSection />
    <GallerySection />
    <TestimonialsSection />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import PackagesSection from '@/components/PackagesSection.vue';
import GallerySection from '@/components/GallerySection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ServicesSection,
    PackagesSection,
    GallerySection,
    TestimonialsSection,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>