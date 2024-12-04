<template>
  <div id="app">
    <Header />
    <router-view />
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
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

router-view {
  flex: 1; /* Ensures content between Header and Footer takes available space */
}
</style>
