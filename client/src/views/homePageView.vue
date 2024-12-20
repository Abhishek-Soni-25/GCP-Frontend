<template>
  <div class="main-container">
    <!-- Render the Header component -->
    <Header />

    <!-- Render the API response in a paragraph -->
    <p v-if="message">{{ message }}</p> <!-- This will display the message from the API -->

    <!-- Render other components -->
    <Hero />
    <AppBrand />
    <Dream />
    <NewTestimonials />
    <NewsArticle />
    <FAQ />

    <!-- Render the Footer component -->
    <Footer />
  </div>
</template>

<script>
// Import the component
import Header from '@/components/Homepage/Header.vue';
import Hero from '@/components/Homepage/Hero.vue';
import Dream from '@/components/Homepage/Dream.vue';
import NewsArticle from '@/components/Homepage/NewsArticle.vue';
import AppBrand from '@/components/Homepage/AppBrand.vue';
import NewTestimonials from '@/components/Homepage/NewTestimonials.vue';
import Footer from '@/components/Homepage/Footer.vue';
import FAQ from '@/components/Homepage/FAQ.vue';

export default {
  name: 'HomePageView',
  components: {
    Header,
    Hero,
    AppBrand,
    Dream,
    NewTestimonials,
    NewsArticle,
    FAQ,
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
