<template>
  <Header />
  <NewsArticle />
  <Footer />
</template>

<script>
// Import Axios
import Header from "@/components/Homepage/Header.vue";
import Footer from "@/components/Homepage/Footer.vue";
import NewsArticle from "@/components/Homepage/NewsArticle.vue";

export default {
  name: "BlogView",
  components: {
    Header,
    NewsArticle,
    Footer,
  },
};
</script>

<style></style>
