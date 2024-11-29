<!-- src/views/HomePageView.vue -->

<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <p>This is where your main content goes.</p>

    <!-- Render the NewsArticle component -->
    <NewsArticle />
  </div>
</template>

<script>
// Import the NewsArticle component
import NewsArticle from '@/components/Homepage/NewsArticle.vue'

export default {
  name: 'HomePageView',
  components: {
    NewsArticle  // Register NewsArticle component
  }
}
</script>

<style scoped>
/* You can add styles specific to this page */
</style>
