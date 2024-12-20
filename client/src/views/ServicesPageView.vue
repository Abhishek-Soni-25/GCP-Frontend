<template>
  <div class="main-container">
    <!-- Render the Header component -->
    <Header />

    <!-- Render the API response in a paragraph -->
    <p v-if="message">{{ message }}</p> <!-- This will display the message from the API -->

    <!-- Render other components -->
    <last_section />

    <!-- Render the Footer component -->
    <Footer />
  </div>
</template>

<script>
// Import the component
import Header from '@/components/Homepage/Header.vue';
import last_section from '@/components/Service_component/last_section.vue';
import Footer from '@/components/Homepage/Footer.vue';



export default {
  name: 'HomePageView',
  components: {
    Header,
    last_section,
    Footer
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
