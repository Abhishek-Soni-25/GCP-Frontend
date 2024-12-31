<template>
  <Hero />
  <div class="vm">
    <div class="vm-box-container">
      <div class="vm-box">
        <div class="box-top">
          <img
            class="vm-image"
            alt="Vision"
            src="../../assets/About/vision.png"
          />
        </div>
        <p class="vm-box-txt">Our Vision</p>
        <p class="p2">
          Our vision is to be the leading design partner, delivering creative,
          impactful solutions that transform businesses and inspire innovation.
        </p>
      </div>
      <div class="vm-box">
        <div class="box-top">
          <img
            class="vm-image"
            alt="Mission"
            src="../../assets/About/target.png"
          />
        </div>
        <p class="vm-box-txt">Our Mission</p>
        <p class="p2">
          Our mission is to empower businesses with innovative, sustainable
          design solutions that drive growth, creativity, and exceptional user
          experiences.
        </p>
      </div>
    </div>
    <div class="vm-main">
      <p class="vm-txt-head">Excellence In Printing And Packaging</p>
      <p class="vm-txt">
        We strive for excellence in printing and packaging, delivering
        high-quality, durable solutions that enhance brand presence and ensure
        customer satisfaction. Every detail is crafted to perfection.
      </p>
      <div class="vm-partner">
        <p>Our Partners:</p>
        <p>
          <img class="partner-icon" src="../../assets/About/mcd.png" />MC
          Donald’s
        </p>
        <p>
          <img class="partner-icon" src="../../assets/About/nest.png" />Nestle
        </p>
        <p>
          <img class="partner-icon" src="../../assets/About/OF.png" />Organic
          Food
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "../Homepage/Hero.vue";
export default {
  name: "about",
  components: {
    Hero,
  },
};
</script>

<style scoped>
/* about Section Styles */
.about {
  background: #000000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  background: radial-gradient(ellipse 25vw 25vw at 50% 23%, #a1cdff99, #000000);
  z-index: 3;
  opacity: 0.6;
}

.floating-star-1 {
  position: absolute;
  right: 0px;
  top: -30px;
  font-size: 40px;
  color: gold;
  z-index: 10;
}
.floating-star-2 {
  position: absolute;
  right: 0px;
  font-size: 15px;
  color: gold;
  z-index: 10;
}
.floating-star-3 {
  position: absolute;
  left: 0px;
  font-size: 11px;
  color: gold;
  z-index: 10;
}

.about-section {
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

.text-wrapper-3 {
  font-size: 40.1px;
  color: #ffffff;
  font-family: Outfit;
  font-weight: 700;
  line-height: 65.77px;
  letter-spacing: -0.03em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  position: relative;
}

.text-wrapper-4 {
  font-size: 40.1px;
  color: #f0e002;
  font-family: Outfit;
  text-decoration: underline;
  font-weight: 500;
  line-height: 65.77px;
  letter-spacing: -0.03em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.about-txt {
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
  position: relative;
}

/* Person BOX */
.box-container {
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  z-index: 10;
  column-gap: 3dvw;
  justify-content: space-between;
  align-items: center;
}

.box,
.box-m {
  width: 250px;
  background-color: #d9d9d9;
  border-radius: 20px;
  text-align: center;
}

.box-m {
  margin-top: 60px;
}

.p-photo {
  top: -100px;
  right: 20px;
  width: 200px;
  position: absolute;
}

.space {
  border-radius: 20px;
  height: 159.05px;
  background-color: #d9d9d9;
  position: relative;
}

.text-wrapper {
  color: #000000;
  background-color: #b9b9b9;
  font-family: Outfit;
  font-size: 23px;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-align: center;
  padding-block: 5px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.text-wrapper-2 {
  color: #000000;
  font-family: Outfit;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-align: center;
  padding-top: 4px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.p {
  color: #4e4e4e;
  font-family: Outfit;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.01em;
  padding-inline: 10px;
  padding-bottom: 0px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

/*vision & Mission */
.vm {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.vm-box-container {
  display: flex;
  flex-direction: row;
  column-gap: 1.5vw;
  padding-top: 80px;
  padding-left: 2vw;
  padding-bottom: 30px;
  padding-right: 1vw;
}

.vm-main {
  padding-top: 80px;
  padding-left: 1vw;
  padding-bottom: 30px;
  padding-right: 2vw;
}

.vm-txt-head {
  color: #000000;
  font-family: Outfit;
  font-size: 46px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 48px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.vm-txt {
  color: #4e4e4e;
  font-family: Outfit;
  font-size: 23px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.vm-partner {
  display: flex;
  flex-direction: row;
  border-top: 2px dashed black;
  padding-top: 7px;
  border-color: #9593a4;
  color: #000000;
  column-gap: 0.5vw;
  font-family: Outfit;
  font-size: 22px;
  line-height: 30px;
  font-weight: 700;
  text-align: left;
  align-content: center;
  align-items: center;
  align-self: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.vm-box {
  background-color: #000000;
  border-radius: 20px;
  width: 300px;
  position: relative;
  text-align: center;
  align-content: center;
  align-items: center;
}

.box-top {
  width: 100.03px;
  height: 100.03px;
  top: -50px;
  right: 100px;
  background-color: #d9d9d9;
  box-shadow: 0px 3.52px 3.52px 0px #00000040;
  box-shadow: 0px 3.52px 3.52px 0px #00000040 inset;
  border-radius: 100%;
  position: absolute;
  z-index: 100;
}

.partner-icon {
  width: 30px;
  height: 30px;
}

.vm-image {
  top: 18px;
  left: 18px;
  position: absolute;
  height: 65%;
  width: 65%;
}

.vm-box-txt {
  width: 100%;
  margin-top: 60px;
  color: #ffffff;
  font-family: Outfit;
  font-size: 30.57px;
  font-weight: 500;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.p2 {
  color: #9593a4;
  font-family: Outfit;
  font-size: 17.05px;
  font-weight: 400;
  padding-inline: 30px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

/* Responsive Design */
@media (min-width: 921px) and (max-width: 1150px) {
  .vm-box {
    width: 200px;
  }
  .box-top {
    right: 50px;
  }
}

@media (min-width: 800px) and (max-width: 920px) {
  .vm-box {
    width: 200px;
  }
  .box-top {
    right: 50px;
  }
  .vm-txt-head {
    font-size: 35px;
  }
  .vm-txt {
    font-size: 20px;
  }
  .vm-main {
    padding-top: 30px;
  }
  .vm-partner {
    flex-direction: column;
    width: 60%;
  }
}

@media (max-width: 799px) {
  .about {
    padding: 8px;
  }
  .elliptical-gradient {
    background: radial-gradient(
      ellipse 70vw 70vw at 50% 23%,
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
  .about-txt {
    padding-bottom: 10px;
  }
  .about-section {
    width: 100%;
    flex-direction: column;
  }
  .box-container {
    flex-direction: column;
    padding-top: 0px;
  }
  .box,
  .box-m {
    margin-top: 100px;
  }
  .vm {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  .vm-box-container {
    text-align: center;
    justify-content: center;
  }
  .vm-main {
    justify-content: center;
    align-self: center;
    padding-top: 20px;
    padding-left: 20px;
  }
  .vm-partner {
    flex-direction: row;
    width: 90%;
  }
}

@media (max-width: 450px) {
  .box-container {
    flex-direction: column;
    padding-top: 0px;
  }
  .vm {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  .vm-box-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-left: 0;
    gap: 60px;
  }
  .vm-box {
    text-align: center;
    justify-content: center;
    align-content: center;
  }
  .vm-partner {
    flex-direction: column;
  }
}
</style>
