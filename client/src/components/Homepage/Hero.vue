<template>
  <div class="hero">
    <div class="elliptical-gradient"></div>
    <!-- Hero Section -->
    <div class="hero-section">
      <span class="text-wrapper-3"> Building Brand Image </span>
      <span class="text-wrapper-4"
        >Passionately
        <i class="floating-star-1">
          <img
            src="../../assets/Star.png"
            class="floating-star"
            width="80"
            height="80"
          />
        </i>
      </span>
      <p class="hero-txt">
        We increase revenue and ensure sustainable long-term growth for your
        business through powerful Webflow websites.
      </p>
      <button class="cta-button" @click="exploreMore">
        <i class="floating-star-3"
          ><img
            src="../../assets/Star.png"
            class="floating-star"
            width="50"
            height="50"
        /></i>
        Explore More
        <i class="floating-star-2"
          ><img
            src="../../assets/Star.png"
            class="floating-star"
            width="30"
            height="30"
        /></i>
      </button>
    </div>

    <!-- Brand Box -->
    <div class="brand-container">
    <div class="brand-txt">
      <div class="line-small"></div>
      TRUSTED BY AMAZING BRANDS
      <div class="line-small"></div>
    </div>
    <div class="brand-box">
      <button class="slider-btn left" @click="prevSlide">‹</button>
      <div class="brand-images">
        <img
          v-for="(logo, index) in visibleLogos"
          :key="index"
          :src="logo"
          class="brand-logo"
          alt="Brand Logo"
        />
      </div>
      <button class="slider-btn right" @click="nextSlide">›</button>
    </div>
  </div>

    <!-- Divider Line -->
    <div class="line"></div>

    <!-- Second Hero Section -->
    <div class="hero-section2">
      <div class="half">
        <h5>How we Work</h5>
        <p class="big">
          Get a dedicated design team at a fraction of the cost.
        </p>
      </div>
      <div class="half">
        <p class="normal">
          Grow your brand with high-quality design for a flat monthly fee. Work
          with senior designers. Subscribe and make as many requests as you need
          - no limits.
        </p>
        <button class="cta-button" @click="exploreMore">See More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      logos: [
        require("@/assets/homepage/Hero/1.png"),
        require("@/assets/homepage/Hero/2.png"),
        require("@/assets/homepage/Hero/3.png"),
        require("@/assets/homepage/Hero/4.png"),
        require("@/assets/homepage/Hero/5.png"),
      ],
      currentIndex: 0,
      visibleCount: 5, // Number of visible logos at a time
    };
  },
  computed: {
    visibleLogos() {
      return this.logos
        .concat(this.logos) // Duplicate the array for seamless wrapping
        .slice(this.currentIndex, this.currentIndex + this.visibleCount);
    },
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.logos.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.logos.length) % this.logos.length;
    },
    updateVisibleCount() {
      this.visibleCount = window.innerWidth < 520 ? 3 : 5;
    },
    startAutoSlide() {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000); // 5 seconds
    },
    stopAutoSlide() {
      clearInterval(this.slideInterval);
    },
  },
  mounted() {
    this.updateVisibleCount(); // Set initial visibleCount based on screen size
    window.addEventListener("resize", this.updateVisibleCount);
    this.startAutoSlide();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateVisibleCount);
    this.stopAutoSlide();
  },
};
</script>

<style scoped>
/* Hero Section Styles */
.hero {
  background: #111204;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  box-sizing: border-box;
  align-items: center;
  position: relative;
}

.elliptical-gradient {
  position: absolute;
  top: 0px;
  left: 0%;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse 25vw 25vw at 50% 23%, #a1cdff99, #111204);
  z-index: 3;
  opacity: 0.6;
}

.floating-star-1 {
  position: absolute;
  left: 100%;
  margin-left: 5px;
  z-index: 10;
}
.floating-star-2 {
  position: absolute;
  left: 100%;
  margin-left: 10vw;
  z-index: 10;
}
.floating-star-3 {
  position: absolute;
  right: 100%;
  margin-right: 10vw;
  z-index: 10;
}

.hero-section {
  width: 100%;
  height: 24vw;
  background: #11120400;
  padding: 1px;
  z-index: 10;
  margin-top: 60px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-content: space-between;
  justify-content: center;
  padding: 1px;
}

.hero-section2 {
  flex: 1;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-content: space-between;
  justify-content: center;
  gap: 20px;
  padding: 1px;
  z-index: 10;
}

.text-wrapper-3 {
  font-size: 77.1px;
  color: #ffffff;
  font-family: Outfit;
  font-weight: 700;
  line-height: 65.77px;
  letter-spacing: -0.03em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.text-wrapper-4 {
  font-size: 77.1px;
  color: #f0e002;
  font-family: Outfit;
  font-style: italic;
  font-weight: 700;
  line-height: 65.77px;
  letter-spacing: -0.03em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  position: relative;
}

.hero-txt {
  font-family: Outfit;
  color: #ffffffcc;
  width: 100%;
  max-width: 550px;
  font-size: 16.95px;
  font-weight: 400;
  line-height: 15.73px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  padding: 40px;
}

.cta-button {
  color: #000000;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  background: #f0e002;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  position: relative;
}

.cta-button:hover {
  background: #f0e002;
}

/* Brand-Box */
.brand-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  z-index: 10;
}

.brand-txt {
  display: flex;
  flex-direction: row;
  color: #ffffff;
  font-family: "Outfit-Bold", Helvetica;
  font-size: 17.8px;
  font-weight: 700;
  align-items: center;
  width: 100%;
  padding: 1px;
  margin-bottom: 20px;
  justify-content: center;
}

.brand-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
}

.brand-images {
  display: flex;
  gap: 10px;
  transition: transform 0.5s ease-in-out;
}

.brand-logo {
  width: 100px;
  height: auto;
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0);
  color: #f0e002;
  border: none;
  font-size: 50px;
  font-weight: 1000;
  cursor: pointer;
  z-index: 10;
  padding: 5px 10px;
}
.slider-btn.left {
  left: 3px;
}
.slider-btn.right {
  right: 3px;
}

.line {
  border-bottom: 3px solid #f0e002;
  margin: 20px 0;
  width: 90%;
  z-index: 10;
}

.line-small {
  border-bottom: 3px solid #f0e002;
  width: 3vw;
  margin-left: 1vw;
  margin-right: 1vw;
  z-index: 10;
}

/* Second Hero Section */
.half {
  flex: 1;
  padding: 20px;
}

.hero-section2 h5 {
  font-size: 0.8rem;
  font-weight: bold;
  color: #f0e002;
  margin-bottom: 10px;
}

.big {
  font-size: 1.9rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 15px;
}

.normal {
  font-size: 1rem;
  color: #ffffff;
}

/* Responsive Design */
@media (min-width: 569px) and (max-width: 1068px) {
  .elliptical-gradient {
    background: radial-gradient(
      ellipse 60vw 60vw at 50% 23%,
      #a1cdff99,
      #111204
    );
  }
}

@media (min-width: 559px) and (max-width: 1068px) {
  .slider-btn.left {  left: 10px; }
  .slider-btn.right {  right: 10px; }
}
@media (max-width: 568px) {
  .hero {
    padding: 8px;
  }
  .elliptical-gradient {
    background: radial-gradient(
      ellipse 80vw 80vw at 50% 23%,
      #a1cdff99,
      #111204
    );
  }
  .text-wrapper-4 {
    font-size: 42px;
    line-height: 43.77px;
  }
  .text-wrapper-3 {
    font-size: 45px;
    line-height: 44.77px;
  }
  .hero-section,
  .brand-container {
    width: 100%;
  }
  /* .brand-box {
    column-gap: 2vw;
  } */
  .brand-box img {
    min-width: 70px;
  }
  .brand-txt {
    font-size: calc(13.2px);
    line-height: calc(9.3px * 0.8);
  }
  
  .hero-section2 h5 {
    font-size: calc(1.5rem * 0.8);
  }
  .big {
    font-size: calc(2rem * 0.8);
  }
  .hero-section,
  .hero-section2 {
    flex-direction: column;
  }

  .normal {
    font-size: 1rem;
  }

  .hero-carousel {
    max-width: 100%;
  }

  img {
    max-width: 70px;
    max-height: 70px;
    text-align: center;
  }
}
@media (max-width: 423px) {
  .floating-star-1 {
  position: absolute;
  left: 100%;
  margin-top: 28px;
  margin-left: -28px;
  z-index: 10;
}

}

</style>
