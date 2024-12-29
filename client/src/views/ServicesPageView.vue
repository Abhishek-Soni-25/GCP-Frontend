<template>
  <div class="main-container">
    <!-- Render the Header component -->
    <Header />

    <!-- Render the API response in a paragraph -->
    <p v-if="message">{{ message }}</p>
    <!-- This will display the message from the API -->

    <Servicesmain />
    <Services2 />

    <!-- Render the Footer component -->
    <Footer />
  </div>
</template>

<script>
// Import the component
import Header from "@/components/Homepage/Header.vue";
import Servicesmain from "@/components/Servicespage/Servicesmain.vue";
import Services2 from "@/components/Servicespage/Services2.vue";
import Footer from "@/components/Homepage/Footer.vue";

// Import Axios
import axios from "axios";

export default {
  name: "ServicesPageView",
  components: {
    Header,
    Servicesmain,
    Services2,
    Footer,
  },
  data() {
    return {
      message: null, // This will hold the message fetched from the API
    };
  },
};
</script>

<style scoped>
/* Ensuring the footer stays at the bottom */
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Ensures the container takes up full height */
}

footer {
  margin-top: auto;
  /* Pushes the footer to the bottom */
}
</style>
