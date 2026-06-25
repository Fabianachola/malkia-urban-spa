<template>
  <section class="hero">
    <div class="hero-slider">
      <div class="slide active">
        <video
          ref="heroVideo"
          class="hero-video"
          autoplay
          muted
          playsinline
          preload="metadata"
          @timeupdate="onTimeUpdate"
        >
          <source src="/images/hero/hero1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="slide-overlay">
          <h1>Premium Beauty & Wellness Services in Nairobi</h1>
          <p>Waxing • Massage • Microblading • Facials • Skin Tag Removal • Professional Training</p>
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
  data() {
    return {
      videoDuration: 32,
    };
  },
  methods: {
    onTimeUpdate() {
      const video = this.$refs.heroVideo;
      if (video && video.currentTime >= this.videoDuration) {
        video.currentTime = 0;
        video.play();
      }
    }
  }
};
</script>