<template>
  <div>

    <NewsArticle />
  </div>
</template>

<script>
import NewsArticle from './Homepage/NewsArticle.vue';

export default {
  name: 'HelloWorld',
  components: {
    NewsArticle
  },
  props: {
    msg: String
  }
};
</script>

<style></style>
