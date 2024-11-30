@ -5,13 +5,19 @@
    <!-- Render the API response in a paragraph -->
    <p v-if="message">{{ message }}</p> <!-- This will display the message from the API -->

    <!-- Render the NewsArticle component -->
    <!-- Render the component -->
    <Hero />
    <NewsArticle />
  </div>
</template>




<script>
// Import the NewsArticle component
// Import the component
import Hero from '@/components/Homepage/Hero.vue';
//import Hero2 from '@/components/Homepage/Hero2.vue';
import NewsArticle from '@/components/Homepage/NewsArticle.vue';

// Import Axios
@ -20,6 +26,8 @@ import axios from 'axios';
export default {
  name: 'HomePageView',
  components: {
    Hero,  // Register Hero/Landing page component
    NewsArticle,  // Register NewsArticle component
  },
  data() {
