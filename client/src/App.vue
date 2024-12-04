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
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Add any global styles here */
</style>

