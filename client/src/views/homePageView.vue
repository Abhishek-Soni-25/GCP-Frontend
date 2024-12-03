<template>
  <div>
 
    <!-- Render the API response in a paragraph -->
    <p v-if="message">{{ message }}</p> <!-- This will display the message from the API -->

    <!-- Render the component -->
    <Hero />
    <AppBrand />
    <Dream />
    <NewTestimonials/>
    <NewsArticle />
    <FAQ />
  </div>
</template>

<script>
// Import the component
import Hero from '@/components/Homepage/Hero.vue';
import Dream from '@/components/Homepage/Dream.vue';
import NewsArticle from '@/components/Homepage/NewsArticle.vue';
import AppBrand from '@/components/Homepage/AppBrand.vue';
import NewTestimonials from '@/components/Homepage/NewTestimonials.vue';

// Import Axios
import axios from 'axios';
import FAQ from '@/components/Homepage/FAQ.vue';

export default {
  name: 'HomePageView',
  components: {
    Hero,
    AppBrand,
    Dream,
    NewTestimonials,
    NewsArticle,
    FAQ
    // Register component
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
