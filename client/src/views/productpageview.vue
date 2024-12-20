<template>
  <div class="main-container">
    <!-- Render the Header component -->
    <Header />

    <!-- Render the API response in a paragraph -->
    <p v-if="message">{{ message }}</p> <!-- This will display the message from the API -->


    <!-- Render other components -->
    <!-- <ProductDesc /> -->
    <AppProduct />

    <!-- Render the Footer component -->
    <Footer />
  </div>
</template>

<script>
// Import the component
import Header from '@/components/Homepage/Header.vue';
// import ProductDesc from '@/components/Product/ProductDesc.vue';
import Footer from '@/components/Homepage/Footer.vue';
import AppProduct from '@/components/ProductPage/AppProduct.vue';


export default {
  name: 'Productview',
  components: {
    Header,
    // ProductDesc,
    AppProduct,
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
