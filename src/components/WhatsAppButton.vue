<template>
  <div class="whatsapp-wrapper">
    <!-- Pulse Ring 1 -->
    <div class="pulse-ring ring-1"></div>
    <!-- Pulse Ring 2 -->
    <div class="pulse-ring ring-2"></div>
    <!-- Pulse Ring 3 -->
    <div class="pulse-ring ring-3"></div>
    <!-- Main Button -->
    <a href="https://wa.me/254707264253" target="_blank" class="whatsapp-float">
      <i class="fab fa-whatsapp"></i>
    </a>
  </div>
</template>

<script>
export default { name: 'WhatsAppButton' };
</script>

<style scoped>
/* ===== WRAPPER ===== */
.whatsapp-wrapper {
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===== MAIN BUTTON ===== */
.whatsapp-float {
  background: #25d366;
  color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  position: relative;
  z-index: 2;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
}

/* ===== PULSE RINGS ===== */
.pulse-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid #25d366;
  animation: pulse 2s ease-out infinite;
  pointer-events: none;
}

.ring-1 {
  width: 60px;
  height: 60px;
  animation-delay: 0s;
}

.ring-2 {
  width: 60px;
  height: 60px;
  animation-delay: 0.6s;
}

.ring-3 {
  width: 60px;
  height: 60px;
  animation-delay: 1.2s;
}

/* ===== PULSE ANIMATION ===== */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 600px) {
  .whatsapp-wrapper {
    bottom: 18px;
    right: 18px;
  }

  .whatsapp-float {
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
  }

  .pulse-ring {
    width: 50px;
    height: 50px;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
}
</style>