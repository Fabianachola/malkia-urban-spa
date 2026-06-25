<template>
  <section class="testimonials-section" id="testimonials">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">What Our Clients Say</h2>
      </div>

      <!-- Scrolling Testimonials -->
      <div class="testimonials-scroll-wrapper">
        <div class="testimonials-track">
          <!-- Single set of testimonials -->
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-body">
              <p>{{ testimonial.text }}</p>
            </div>
            <div class="testimonial-bottom">
              <div class="avatar-wrapper">
                <img 
                  :src="testimonial.avatar" 
                  :alt="testimonial.name" 
                  class="avatar"
                  loading="lazy"
                />
              </div>
              <div class="bottom-info">
                <h4>{{ testimonial.name }}</h4>
                <div class="bottom-meta">
                  <img src="/images/icons/google-logo.png" alt="Google" class="google-badge" loading="lazy" />
                  <span class="stars">★★★★★</span>
                  <span class="date">{{ testimonial.date }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Duplicate set for seamless looping -->
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="'dup-' + index">
            <div class="testimonial-body">
              <p>{{ testimonial.text }}</p>
            </div>
            <div class="testimonial-bottom">
              <div class="avatar-wrapper">
                <img 
                  :src="testimonial.avatar" 
                  :alt="testimonial.name" 
                  class="avatar"
                  loading="lazy"
                />
              </div>
              <div class="bottom-info">
                <h4>{{ testimonial.name }}</h4>
                <div class="bottom-meta">
                  <img src="/images/icons/google-logo.png" alt="Google" class="google-badge" loading="lazy" />
                  <span class="stars">★★★★★</span>
                  <span class="date">{{ testimonial.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          name: 'Anne Kavata',
          date: '3 months ago',
          text: 'I did waxing at that place and it was very top notch, I did my legs and underarms and it was very professional, flawless and painless.',
          avatar: '/images/testimonials/avatar-anne.jpg',
        },
        {
          name: 'Joshua John',
          date: '3 months ago',
          text: 'Your services are amazing. I love the way you handle customers, Its so satisfactory.',
          avatar: '/images/testimonials/avatar-joshua.jpg',
        },
        {
          name: 'sheila Adera',
          date: '3 months ago',
          text: 'So far the best place I have done my waxing in town, very friendly lady and she makes sure you are very comfortable during the whole service.',
          avatar: '/images/testimonials/avatar-sheila.jpg',
        },
        {
          name: 'Khainga Anyanje',
          date: '4 months ago',
          text: 'Great services, great customer service, high level of discipline and handling of customers.',
          avatar: '/images/testimonials/avatar-khainga.jpg',
        },
        {
          name: 'Emily Juma',
          date: '4 months ago',
          text: 'Her Services are amazing. Customer service is top notch. I\'ll definitely come back for waxing and facial.',
          avatar: '/images/testimonials/avatar-emily.jpg',
        },
        {
          name: 'Rachael Wangui',
          date: '4 months ago',
          text: 'The level of cleanliness at this spa is exceptional. The room, tools and overall environment were spotless.',
          avatar: '/images/testimonials/avatar-rachael.jpg',
        },
        {
          name: 'Martha Brian',
          date: '4 months ago',
          text: 'Recommendable job done here at malkia urban spa; talk of timely, commensurate and top notch services offered.',
          avatar: '/images/testimonials/avatar-brian.jpg',
        },
        {
          name: 'Fridah Ngaywa',
          date: '4 months ago',
          text: 'A place to be. A one time recreation of oneself and rebuild of self esteem. What\'s confidence without malkia beauty?',
          avatar: '/images/testimonials/avatar-fridah.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* ===== SECTION BASE ===== */
.testimonials-section {
  padding: 5rem 0;
  background: #fafafa;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
}

/* ===== SECTION HEADER ===== */
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
  padding: 0 1.5rem;
}

.section-title {
  font-size: clamp(2.2rem, 4.5vw, 3.2rem);
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 0;
  letter-spacing: 1px;
}

/* ===== SCROLLING WRAPPER ===== */
.testimonials-scroll-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

/* ===== TESTIMONIALS TRACK – SMOOTH ===== */
.testimonials-track {
  display: flex;
  gap: 2rem;
  width: max-content;
  padding: 1rem 0;
  padding-left: 0;
  will-change: transform;
  animation: scrollSmooth 50s linear infinite;
}

/* Pause animation on hover */
.testimonials-scroll-wrapper:hover .testimonials-track {
  animation-play-state: paused;
}

/* ===== TESTIMONIAL CARD ===== */
.testimonial-card {
  background: #fafafa;
  border-radius: 14px;
  padding: 1.8rem 2rem 1.5rem;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  min-width: 380px;
  max-width: 380px;
  min-height: 240px;
  max-height: 280px;
  flex-shrink: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  justify-content: space-between;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.10);
}

/* ===== TESTIMONIAL BODY (Message) ===== */
.testimonial-body {
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding-bottom: 0.5rem;
}

.testimonial-body p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #333;
  margin: 0;
  font-style: italic;
  /* Remove -webkit-line-clamp for smoother rendering */
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  max-height: 5.5em;
}

.testimonial-body p::before {
  content: "“";
  font-size: 1.1rem;
  color: #e91e63;
  margin-right: 2px;
}

.testimonial-body p::after {
  content: "”";
  font-size: 1.1rem;
  color: #e91e63;
  margin-left: 2px;
}

/* ===== TESTIMONIAL BOTTOM ===== */
.testimonial-bottom {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: auto;
}

.avatar-wrapper {
  flex-shrink: 0;
}

.avatar {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e91e63;
  background: #fafafa;
}

.bottom-info {
  flex: 1;
  min-width: 0;
}

.bottom-info h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.1rem 0;
}

.bottom-meta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.google-badge {
  height: 14px;
  width: auto;
}

.bottom-meta .stars {
  color: #fbbc04;
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.bottom-meta .date {
  font-size: 0.65rem;
  color: #999;
}

/* ===== SMOOTH SCROLL ANIMATION ===== */
@keyframes scrollSmooth {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* ===== RESPONSIVE ===== */

/* Tablets & small laptops */
@media (max-width: 1024px) {
  .testimonial-card {
    min-width: 340px;
    max-width: 340px;
    min-height: 220px;
    max-height: 260px;
    padding: 1.5rem 1.8rem 1.3rem;
  }
  
  .testimonials-track {
    gap: 1.8rem;
    animation-duration: 45s;
  }
}

/* Mobile landscape & small tablets */
@media (max-width: 768px) {
  .testimonials-section {
    padding: 3rem 0;
  }

  .testimonial-card {
    min-width: 300px;
    max-width: 300px;
    min-height: 200px;
    max-height: 240px;
    padding: 1.3rem 1.5rem 1.1rem;
  }

  .testimonials-track {
    gap: 1.5rem;
    animation-duration: 40s;
  }
  
  .testimonial-body p {
    font-size: 0.88rem;
    max-height: 5em;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
  }
  
  .bottom-info h4 {
    font-size: 0.9rem;
  }
}

/* Mobile portrait */
@media (max-width: 480px) {
  .testimonial-card {
    min-width: 270px;
    max-width: 270px;
    min-height: 180px;
    max-height: 220px;
    padding: 1.2rem 1.2rem 1rem;
  }

  .avatar {
    width: 36px;
    height: 36px;
  }

  .bottom-info h4 {
    font-size: 0.85rem;
  }

  .testimonial-body p {
    font-size: 0.82rem;
    max-height: 4.5em;
  }

  .testimonials-track {
    gap: 1rem;
    animation-duration: 35s;
  }
  
  .google-badge {
    height: 12px;
  }
  
  .bottom-meta .stars {
    font-size: 0.65rem;
  }
  
  .bottom-meta .date {
    font-size: 0.6rem;
  }
}

/* ===== REDUCED MOTION ===== */
@media (prefers-reduced-motion: reduce) {
  .testimonials-track {
    animation-duration: 80s;
  }
}
</style>