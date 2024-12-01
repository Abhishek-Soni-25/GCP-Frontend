<template>
  <div class="hero">
    <!-- Hero Section -->
      <div class="hero-section">
          <!-- Hero Content -->
          <div class="hero-content">
            <p class="building-brand-image">
            <span class="text-wrapper-3">
              Building Brand Image
            </span><br />
            <span class="text-wrapper-4">Passionately</span>
          </p>
              <p>Empowering businesses to reach new heights with innovative strategies and creative solutions.</p>
              <button class="cta-button" @click="exploreMore">Explore More</button>
          </div>
      </div>

    <!-- Brand Box -->
      <div class="brand-txt">TRUSTED BY AMAZING BRANDS</div>
      <div class="brand-box">
        <img src="@/assets/homepage/Hero/1.png"><span class="box-txt">Dabur</span>
        <img src="@/assets/homepage/Hero/2.png"><span class="box-txt">Amul</span>
        <img src="@/assets/homepage/Hero/3.png"><span class="box-txt">Britannia</span>
        <img src="@/assets/homepage/Hero/4.png"><span class="box-txt">Mother Dairy</span>
        <img src="@/assets/homepage/Hero/5.png"><span class="box-txt">GSK</span>
      </div>

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
}

.hero-section{ 
width: 100%; 
height: 24vw;
background: radial-gradient(ellipse 160px 120px at center, #A1CDFF99 , #111204);
backdrop-filter: blur(134.36666870117188px);
opacity: 0px;
padding: 1px;
}

.hero-section{
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
align-self: center;
justify-content: space-between;
justify-content: center;
gap: 20px;
padding: 1px;
}
.hero-section2 {
flex: 1;
display: flex;
flex-direction: row;
align-items: center;
align-content: center;
align-self: center;
justify-content: space-between;
justify-content: center;
gap: 20px;
padding: 1px;
}

.hero-content .building-brand-image {
  font-family: "Outfit-Bold", Helvetica;
  font-size: 57.1px;
  font-weight: 700;
  left: auto;
  letter-spacing: -1.71px;
  line-height: 59.8px;
  text-align: center;
  top: 7%;
  width: auto;
}
.hero-content .text-wrapper-3 {
  font-size: 57.1px;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: -0.98px;
}

.hero-content .text-wrapper-4 {
  font-size: 57.1px;
  color: #F0E002;
  font-family: "Plus Jakarta Sans-ExtraBoldItalic", Helvetica;
  font-style: italic;
  font-weight: bold;
  letter-spacing: -0.98px;
}

.hero-content {
flex: 1;
max-width: 600px;
text-align: center;
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
background: #F0E002;
transition: all 0.3s ease;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

.cta-button:hover {
background: #F0E002;
}


 .brand-txt {
  color: #ffffff;
  font-family: "Outfit-Bold", Helvetica;
  font-size: 17.8px;
  font-weight: 700;
  left: auto;
  letter-spacing: 1.69px;
  line-height: 9.3px;
  top: 10px;
  width: auto;
  padding: 1px;
}
img { 
  margin-right: 0px; /* Space between image and text */ 
  size: 80px;
  padding-inline: 2%;
  padding-top: 5px;
  padding-bottom: 5px;
}


/* Brand Box */
.brand-box {
flex: 1;
text-align: center;
align-items: center;
align-content: center;
width: 90%;
background-color: #222222;
border: 1px solid #333;
padding: 2px;
margin: 0 4%;
border-radius: 20px;
}
.box-txt{ 
color: #ffffff;
  font-family: "Outfit-Bold", Helvetica;
  font-size: 17.8px;
  font-weight: 700;
  margin: 1px;
  letter-spacing: 1px;
  padding-right: 2%;
}

/* Divider Line */
.line {
border-bottom: 3px solid #F0E002;
margin: 20px 0;
width: 90%;
}

/* Second Hero Section */
.half {
flex: 1;
padding: 20px;
}

.hero-section2 h5 {
font-size: 0.8rem;
font-weight: bold;
color: #F0E002;
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
@media (max-width: 568px) {
.hero-content .building-brand-image { font-size: calc(57.1px * 0.8); /* Reduce by 20% */ line-height: calc(59.8px * 0.8); } 
.hero-content .text-wrapper-4, .text-wrapper-3 { font-size: calc(57.1px * 0.8); /* Adjust if necessary */ } 
.brand-txt { font-size: calc(17.8px * 0.8); line-height: calc(9.3px * 0.8); } 
.hero-section2 h5 { font-size: calc(1.5rem * 0.8); /* Reduce by 20% */ } 
.big { font-size: calc(2rem * 0.8); } /* Reduce by 20% */

.hero-section, .hero-section2 {
  flex-direction: column;
  gap: 15px;
}

.hero-content h1 {
  font-size: 2rem;
}

.hero-content p, .normal {
  font-size: 1rem;
}

.hero-carousel {
  max-width: 100%;
}
.brand-box{
  display: flex;
  flex-direction: column;
  text-align: center;
}
img {
  max-width: 70px;
  max-height: 70px;
  text-align: center;
}
}
</style>