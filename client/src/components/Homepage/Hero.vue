<template>
    <div class="hero">
      <!-- Hero Section -->
      <div class="hero-section">
        <!-- Hero Content -->
        <div class="hero-content">
          <h1>Build Your Brand Image Passionately</h1>
          <p>
            Empowering businesses to reach new heights with innovative strategies and creative solutions.
          </p>
          <button class="cta-button" @click="exploreMore">Explore More</button>
        </div>
  
        <!-- Hero Image Carousel -->
        <div class="hero-carousel">
          <div class="carousel-image-container">
            <img :src="images[currentImageIndex]" alt="Hero Image" loading="lazy" />
          </div>
          <div class="carousel-controls">
            <button @click="prevImage" aria-label="Previous image">❮</button>
            <button @click="nextImage" aria-label="Next image">❯</button>
          </div>
        </div>
      </div>
  
      <!-- Brand Box -->
      <div class="brand-box"></div>
  
      <!-- Divider Line -->
      <div class="line"></div>
  
      <!-- Second Hero Section -->
      <div class="hero-section2">
        <div class="half">
          <h5>How we Work</h5>
          <p class="big">Get a dedicated design team at a fraction of the cost.</p>
        </div>
        <div class="half">
          <p class="normal">
            Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. Subscribe and make as many requests as you need - no limits.
          </p>
          <button class="cta-button" @click="exploreMore">See More</button>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  methods: {
    exploreMore() {
      const target = document.querySelector('.hero-section2');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    }
  },
  data() {
    return {
      images: [
        require('../../assets/homepage/newsarticle_four.jpeg'),
        require('../../assets/homepage/newsarticle_two.jpeg'),
        require('../../assets/homepage/newsarticle_three.jpeg')
      ],
      currentImageIndex: 0
    };
  }
};
</script>

<style scoped>
/* Hero Section Styles */
.hero {
  background: radial-gradient(ellipse at center, #47578c, #1e53af, #000000);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  box-sizing: border-box;
}

.hero-section, .hero-section2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 15px;
  color: #f6ff00;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #ffffff;
}

.cta-button {
  color: #000000;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  background: linear-gradient(90deg, #fff700, #42b300);
  transition: all 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

.cta-button:hover {
  background: linear-gradient(90deg, #42b300, #fff700);
}

/* Carousel Styles */
.hero-carousel {
  flex: 1;
  position: relative;
  max-width: 600px;
}

.carousel-image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.carousel-controls button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-controls button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Brand Box */
.brand-box {
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
  padding: 35px;
  margin: 0 5%;
  border-radius: 10px;
}

/* Divider Line */
.line {
  border-bottom: 3px solid #fff700;
  margin: 20px 0;
}

/* Second Hero Section */
.half {
  flex: 1;
  padding: 20px;
}

.hero-section2 h5 {
  font-size: 1.5rem;
  color: #dbe20f;
  margin-bottom: 10px;
}

.big {
  font-size: 1.7rem;
  color: #ffffff;
  margin-bottom: 15px;
}

.normal {
  font-size: 1rem;
  color: #ffffff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section, .hero-section2 {
    flex-direction: column;
    gap: 15px;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p, .big, .normal {
    font-size: 1rem;
  }

  .hero-carousel {
    max-width: 100%;
  }
}
</style>
