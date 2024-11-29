<template>
  <div>
    <h1>Welcome to the Home Page</h1>

    <!-- Render the API response in a paragraph -->
    <p v-if="message">{{ message }}</p> <!-- This will display the message from the API -->

    <!-- Render the NewsArticle component -->
    <NewsArticle />
  </div>
</template>

<script>
// Import the NewsArticle component
import NewsArticle from '@/components/Homepage/NewsArticle.vue';

// Import Axios
import axios from 'axios';

export default {
  name: 'HomePageView',
  components: {
    NewsArticle,  // Register NewsArticle component
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
