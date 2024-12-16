<template>
    <Header />
    <FAQ />
    <Footer />
</template>

<script>
// Import Axios
import axios from 'axios';
import Header from '@/components/Homepage/Header.vue';
import Footer from '@/components/Homepage/Footer.vue';
import FAQ from '@/components/Homepage/FAQ.vue';

export default {
  name: 'HomePageView',
  components: {
    Header,
    FAQ,
    Footer
  },
  
};
</script>

<style>

</style>