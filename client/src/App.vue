<template>
  <div id="app">
    <!-- Include the header component -->
    <Header />
    
    <!-- This will dynamically render the active route component -->
    <router-view />
    
    <!-- Include the footer component -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Homepage/Header.vue';
import Footer from '@/components/Homepage/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Global layout styles */
#app {
  margin: 0;
  padding: 0;
  min-height: 100vh; /* Full-page layout */
  display: flex;
  flex-direction: column;
}

router-view {
  flex: 1; /* Makes the main content expand between Header and Footer */
}
</style>
