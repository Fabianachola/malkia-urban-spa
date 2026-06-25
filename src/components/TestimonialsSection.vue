<template>
  <section class="testimonials-section" id="testimonials">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">What Our Clients Say</h2>
      </div>

      <!-- Scrolling Testimonials -->
      <div class="testimonials-scroll-wrapper">
        <div class="testimonials-track">
          <!-- Single set of testimonials (no duplicate) -->
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <!-- Message at the top -->
            <div class="testimonial-body">
              <p>{{ testimonial.text }}</p>
            </div>
            <!-- Bottom: Avatar + Name + Google + Stars + Date -->
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
          text: 'I did waxing at that place and it was very top notch, I did my legs and underarms and it was very professional, flawless and painless. I really appreciate their gentle service and would advice anyone to go and have their own service.',
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
          text: 'So far the best place I have done my waxing in town, very friendly lady and she makes sure you are very comfortable during the whole service. They also did my brows and I\'m now slaying.',
          avatar: '/images/testimonials/avatar-sheila.jpg',
        },
        {
          name: 'Khainga Anyanje',
          date: '4 months ago',
          text: 'Great services, great customer service, high level of discipline and handling of customers. Accurate in details with intent of customer satisfaction.',
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
          text: 'The level of cleanliness at this spa is exceptional. The room, tools and overall environment were spotless, which made the experience very relaxing.',
          avatar: '/images/testimonials/avatar-rachael.jpg',
        },
        {
          name: 'Martha Brian',
          date: '4 months ago',
          text: 'Recommendable job done here at malkia urban spa; talk of timely, commensurate and top notch services offered. You\'re my forever place.',
          avatar: '/images/testimonials/avatar-brian.jpg',
        },
        {
          name: 'Fridah Ngaywa',
          date: '4 months ago',
          text: 'A place to be. A one time recreation of oneself and rebuild of self esteem. What\'s confidence without malkia beauty? 💗💕💗💕💕💗',
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

/* ===== TESTIMONIALS TRACK – EDGE TO EDGE ===== */
.testimonials-track {
  display: flex;
  gap: 2rem;
  animation: scrollRightToLeft 60s linear infinite;
  width: max-content;
  padding: 1rem 0;
  padding-left: 0;
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
  min-height: 270px;
  max-height: 310px;
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
  padding-bottom: 0.8rem;
}

.testimonial-body p {
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  margin: 0;
  font-style: italic;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  quotes: "“" "”" "‘" "’";
}

.testimonial-body p::before {
  content: "“";
  font-size: 1.2rem;
  color: #e91e63;
  margin-right: 2px;
}

.testimonial-body p::after {
  content: "”";
  font-size: 1.2rem;
  color: #e91e63;
  margin-left: 2px;
}

/* ===== TESTIMONIAL BOTTOM (Avatar + Name + Google + Stars + Date) ===== */
.testimonial-bottom {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: auto;
}

.avatar-wrapper {
  flex-shrink: 0;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2.5px solid #e91e63;
  background: #fafafa;
}

.bottom-info {
  flex: 1;
  min-width: 0;
}

.bottom-info h4 {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.2rem 0;
}

.bottom-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.google-badge {
  height: 16px;
  width: auto;
}

.bottom-meta .stars {
  color: #fbbc04;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.bottom-meta .date {
  font-size: 0.7rem;
  color: #999;
}

/* ===== SCROLL ANIMATION – RIGHT TO LEFT ===== */
@keyframes scrollRightToLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* ===== RESPONSIVE ===== */

/* Large screens – edge to edge */
@media (min-width: 1200px) {
  .testimonials-track {
    padding-left: 0;
    gap: 2rem;
  }
  
  .testimonial-card {
    min-width: 380px;
    max-width: 380px;
    min-height: 270px;
    max-height: 310px;
  }
}

/* Tablets & small laptops */
@media (max-width: 1024px) {
  .testimonial-card {
    min-width: 340px;
    max-width: 340px;
    min-height: 250px;
    max-height: 290px;
    padding: 1.5rem 1.8rem 1.3rem;
  }
  
  .testimonial-body p {
    -webkit-line-clamp: 5;
  }
  
  .testimonials-track {
    gap: 1.8rem;
    animation-duration: 50s;
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
    min-height: 230px;
    max-height: 270px;
    padding: 1.3rem 1.5rem 1.1rem;
  }

  .testimonials-track {
    gap: 1.5rem;
    animation-duration: 45s;
  }
  
  .testimonial-body p {
    font-size: 0.92rem;
    -webkit-line-clamp: 5;
  }
  
  .avatar {
    width: 44px;
    height: 44px;
  }
  
  .bottom-info h4 {
    font-size: 0.95rem;
  }
}

/* Mobile portrait */
@media (max-width: 480px) {
  .testimonial-card {
    min-width: 270px;
    max-width: 270px;
    min-height: 200px;
    max-height: 240px;
    padding: 1.2rem 1.2rem 1rem;
  }

  .avatar {
    width: 38px;
    height: 38px;
  }

  .bottom-info h4 {
    font-size: 0.88rem;
  }

  .testimonial-body p {
    font-size: 0.85rem;
    -webkit-line-clamp: 4;
  }

  .testimonials-track {
    gap: 1rem;
    animation-duration: 35s;
  }
  
  .google-badge {
    height: 13px;
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