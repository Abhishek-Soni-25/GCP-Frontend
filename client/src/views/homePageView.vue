<template>
  <div>
    <!-- Include the header component -->
    <Header />

    <!-- Render the API response in a paragraph -->
    <p v-if="message">{{ message }}</p> <!-- This will display the message from the API -->

    <!-- Render the components -->
    <Hero />
    <AppBrand />
    <Dream />
    <NewTestimonials />
    <NewsArticle />
    <FAQ />
    
    <!-- Include the footer component -->
    <Footer />
  </div>
</template>

<script>
// Import components
import Header from '@/components/Homepage/Header.vue';
import Hero from '@/components/Homepage/Hero.vue';
import Dream from '@/components/Homepage/Dream.vue';
import NewsArticle from '@/components/Homepage/NewsArticle.vue';
import AppBrand from '@/components/Homepage/AppBrand.vue';
import NewTestimonials from '@/components/Homepage/NewTestimonials.vue';
import FAQ from '@/components/Homepage/FAQ.vue';
import axios from 'axios';
import Footer from '@/components/Homepage/Footer.vue';

export default {
  name: 'HomePageView',
  components: {
    Hero,
    AppBrand,
    Dream,
    NewTestimonials,
    NewsArticle,
    FAQ,
    Header,
    Footer,
  },
  data() {
    return {
      message: null,
    };
  },
  methods: {
    fetchMessage() {
      axios
        .get('/api/message')
        .then((response) => {
          console.log('API Response:', response.data); // Debug log
          this.message = response.data.message;
        })
        .catch((error) => {
          console.error('Error fetching the message:', error);
        });
    },
  },
  created() {
    this.fetchMessage();
  },
};
</script>

<style scoped>
/* Temporary styles for debugging */
header, footer {
  border: 1px solid red; /* Debug border */
}
</style>
