<template>
  <div class="dream">
    <!-- dream Section -->
    <div class="dream-section">
      <!-- dream Content -->
      <div class="dream-content">
        <p class="building-brand-image">
          <span class="text-wrapper-4">OUR DREAM</span><br />
          <span class="text-wrapper-3">We Create...</span>
        </p>
        <p>
          At Grip Chain Packtech, we dream of a world where innovation meets
          sustainability, simplicity drives growth, challenges become
          opportunities, and progress is guided by responsibility, creativity,
          and meaningful impact.
        </p>
        <button class="cta-button" @click="exploreMore">
          <i class="fa fa-spinner"></i> Load More
        </button>
      </div>
    </div>

    <!-- Divider Line -->
    <div class="line"></div>

    <!-- Second dream Section -->
    <div class="dream-section2">
      <div class="half">
        <h5>BENEFITS</h5>
        <p class="big">
          The design subscription that connects you to your dream team
        </p>
      </div>
      <div class="half">
        <p class="normal">
          Our design subscription connects you to expert creatives, delivering
          tailored, high-quality visuals, solutions, and user experiences to
          elevate your brand—without the hassle of managing a full team. Your
          vision, realized.
        </p>
        <button class="cta-button" @click="exploreMore">See More</button>
      </div>
    </div>
  </div>

  <div class="matrix-main">
    <div class="matrix-container">
      <div
        v-for="(cell, index) in cells"
        :key="index"
        :class="['cell', getBorderClass(index)]"
      >
        <div class="icon">
          <img :src="cell.logolink" :alt="`Logo ${index + 1}`" class="icon" />
        </div>
        <div class="headline">{{ cell.headline }}</div>
        <div class="message">{{ cell.message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dream",
  methods: {
    exploreMore() {
      const target = document.querySelector(".dream-section2");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    getBorderClass(index) {
      const borderClasses = [
        // First row (index 0 to 2)
        ["border-right", "border-bottom"], // 1st cell
        ["border-left", "border-right", "border-bottom"], // 2nd cell
        ["border-left", "border-bottom"], // 3rd cell

        // Second row (index 3 to 5)
        ["border-top", "border-right", "border-bottom"], // 4th cell
        ["border-all"], // 5th cell
        ["border-top", "border-bottom", "border-left"], // 6th cell

        // Third row (index 6 to 8)
        ["border-top", "border-right"], // 7th cell
        ["border-top", "border-left", "border-right"], // 8th cell
        ["border-top", "border-left"], // 9th cell
      ];

      return borderClasses[index] || [];
    },
  },
  name: "MatrixPage",
  data() {
    return {
      cells: [
        {
          logolink: require("@/assets/homepage/Dream/logo1.png"),
          headline: "1. Any volume is possible",
          message:
            "At Grip Chain Packtech, we believe in limitless possibilities. Whether it's a single unit or bulk production, we are equipped to handle any volume with precision and excellence.",
        },
        {
          logolink: require("@/assets/homepage/Dream/logo2.png"),
          headline: "2. Fastest Product Launch Technology",
          message:
            "At Grip Chain Packtech, speed meets innovation. Our advanced technology ensures your products hit the market faster, enabling you to stay ahead of the competition without compromising on quality.",
        },
        {
          logolink: require("@/assets/homepage/Dream/logo3.png"),
          headline: "3. 3D Prototyping and Digi Sleeve Mock-Ups",
          message:
            "Experience precision like never before with 3D prototyping and digital sleeve mock-ups. Visualize your designs in detail, make informed decisions, and bring your ideas to life effortlessly.",
        },
        {
          logolink: require("@/assets/homepage/Dream/logo4.png"),
          headline: "4. Lower layers of corporate bureaucracy",
          message:
            "Streamline your journey with minimal corporate red tape. We prioritize efficiency and agility, ensuring swift decisions and seamless processes to help you achieve your goals faster and with ease.",
        },

        {
          logolink: require("@/assets/homepage/Dream/logo5.png"),
          headline: "5. Order Auto-Information System",
          message:
            "Streamline your operations with our automated system that ensures quick and accurate order processing, reducing manual intervention and boosting efficiency.",
        },
        {
          logolink: require("@/assets/homepage/Dream/logo6.png"),
          headline: "6. Great Value for Money",
          message:
            "Get more for less with our cost-effective solutions that deliver exceptional value, without compromising on quality or performance.",
        },
        {
          logolink: require("@/assets/homepage/Dream/logo7.png"),
          headline: "7. Customized for You",
          message:
            "Our services are tailored to meet your unique needs, ensuring a personalized experience that aligns with your specific requirements and business goals.",
        },
        {
          logolink: require("@/assets/homepage/Dream/logo8.png"),
          headline: "8. Creative Paying",
          message:
            "Experience innovative payment options that offer flexibility and creativity, making transactions easier and more accessible for your business.",
        },
        {
          logolink: require("@/assets/homepage/Dream/logo9.png"),
          headline: "9. Expert Turnovers",
          message:
            "Leverage the expertise of our team to ensure quick and smooth turnovers, ensuring that your projects are completed on time and exceed expectations.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* dream Section Styles */
.dream {
  background: #111204;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  margin: 0px;
  padding: 0px;
}

.dream-section {
  width: 90%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dream-section2 {
  flex: 1;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 1px;
}

.dream-content .building-brand-image {
  text-align: center;
  margin-top: 40px;
}

.dream-content .text-wrapper-3 {
  font-size: 35.1px;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: -0.98px;
}

.dream-content .text-wrapper-4 {
  font-size: 20.1px;
  color: #f0e002;
  letter-spacing: -0.98px;
}

.dream-content {
  flex: 1;
  text-align: center;
}

.dream-content p {
  font-size: 1.2rem;
  color: #ffffff;
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
}

.cta-button:hover {
  background: #f0e002;
}

/* Divider Line */
.line {
  border-bottom: 3px solid #f0e002;
  margin-top: 60px;
  margin-bottom: 40px;
  width: 90%;
}

/* Second dream Section */
.half {
  flex: 1;
  padding: 20px;
}

.dream-section2 h5 {
  font-size: 1rem;
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
@media (max-width: 568px) {
  .dream-content .building-brand-image {
    font-size: calc(57.1px * 0.8);
    line-height: calc(59.8px * 0.8);
  }
  .dream-content .text-wrapper-4,
  .text-wrapper-3 {
    font-size: calc(57.1px * 0.8);
  }
  .dream-section2 h5 {
    font-size: calc(1.5rem * 0.8);
  }
  .big {
    font-size: calc(2rem * 0.8);
  }

  .dream-section,
  .dream-section2 {
    flex-direction: column;
    gap: 15px;
  }

  .dream-content h1 {
    font-size: 2rem;
  }

  .dream-content p,
  .normal {
    font-size: 1rem;
  }
}

/* Matrix styles */
.matrix-main {
  background: #111204;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 30px;
}

.matrix-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px;
  width: 90%;
  border: 0.39px solid #b8fd5000;
}

.cell {
  padding: 7px;
  background-color: #111204;
  text-align: left;
  display: flex;
  flex-direction: column;
}

/* Icon container styles */
.icon {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 1px;
}

.icon img {
  max-width: 15px;
  max-height: 15px;
  object-fit: contain;
}

/* Headline styles */
.headline {
  color: #ffffff;
  font-size: 1.2em;
  margin-bottom: 8px;
}

/* Message styles */
.message {
  color: #9593a4;
  font-size: 1em;
}

/* Border styles */
.border-right {
  border-right: 1px solid #b9fd5017 !important;
}

.border-left {
  border-left: 1px solid #b9fd5017 !important;
}

.border-top {
  border-top: 1px solid #b9fd5017 !important;
}

.border-bottom {
  border-bottom: 1px solid #b9fd5017 !important;
}

.border-all {
  border: 1px solid #b9fd5017 !important;
}

/* Responsive Design for Matrix */
@media (max-width: 460px) {
  .matrix-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .cell {
    padding: 10px;
    text-align: center;
    border: none;
    border-top: 2px solid #b9fd5017;
    border-bottom: 2px solid #b9fd5017;
  }

  /* Remove additional borders from specific classes */
  .border-right,
  .border-left,
  .border-all {
    border: none !important;
  }
}
</style>
