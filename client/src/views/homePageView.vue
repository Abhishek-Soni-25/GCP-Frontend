<template>
  <div>
    <!-- Include the header component -->
    <Header />

    <!-- Render the API response in a paragraph -->
    <p v-if="message">{{ message }}</p> <!-- This will display the message from the API -->

    <!-- Render the component -->
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
// Import the component
import Hero from '@/components/Homepage/Hero.vue';
import Dream from '@/components/Homepage/Dream.vue';
import NewsArticle from '@/components/Homepage/NewsArticle.vue';
import AppBrand from '@/components/Homepage/AppBrand.vue';
import NewTestimonials from '@/components/Homepage/NewTestimonials.vue';
import FAQ from '@/components/Homepage/FAQ.vue';

// Import Axios
import axios from 'axios';

// Import the header and footer components
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomePageView',
  components: {
    Hero,
    AppBrand,
    Dream,
    NewTestimonials,
    NewsArticle,
    FAQ,
    Header,  // Added Header component
    Footer   // Added Footer component
  },
  data() {
    return {
      message: null, // This will hold the message fetched from the API
    };
  },
  methods: {
    // Method to fetch data from the API
    fetchMessage() {
      axios.get('/api/message') // This will be proxied to http://localhost:7000/api/message
        .then(response => {
          this.message = response.data.message; // Set the message data from the API
        })
        .catch(error => {
          console.error('Error fetching the message:', error);
        });
    },
  },
  created() {
    // Call the fetchMessage method when the component is created
    this.fetchMessage();
  },
};
</script>

<style scoped>
/* You can add styles specific to this page */
</style>
