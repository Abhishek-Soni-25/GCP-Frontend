<template>
  <div class="container text-center mt-2" >
    <h1 class="fw-bold">Our Beautiful Brands</h1>
    <p>We help our client s to grow their bottom line with clear and <br>professional website</p>

    <!-- <button class="btn px-3" v-if="visibleCount < images.length" @click="loadMore"</button> >Load More</button> -->

    <button class="btn px-3">Load more</button>

    <div class="brand_image">
    <div class="row mt-5" style="max-width: 1300px; margin-top: 20px">
      <div class=" col-6 col-md-3 mb-4"> 
        <!-- first row ke liye -->
      <div>
        <img :src="require('@/assets/homepage/Brand/lays225.jpg')" class="img-fluid mt-5" alt="Brand 1">
      </div>
      <div class="mt-2">
        <img :src="require('@/assets/homepage/Brand/chri2.jpeg')" class="img-fluid" alt="Brand 2">
      </div>
    </div>

    <div class="col-6 col-md-3 mb-4">
      <!-- second row ke liye -->
      <div>
        <img :src="require('@/assets/homepage/Brand/fishchips.png')" class="img-fluid" alt="Brand 3">
      </div>
      <div class="mt-2">
        <img :src="require('@/assets/homepage/Brand/plant4.jpeg')" class="img-fluid" alt="Brand 4">
      </div>
      </div>

      <div class="col-6 col-md-3 mb-4">
        <!-- third row ke liye -->
        <div>
        <img :src="require('@/assets/homepage/Brand/organic51.jpeg.jpg')" class="img-fluid mt-5" alt="Brand 5">
      </div>
      <div class="mt-2">
        <img :src="require('@/assets/homepage/Brand/cold6.jpeg')" class="img-fluid" alt="Brand 6">
      </div>
</div>
      <div class="col-6 col-md-3 mb-4">
        <!-- first row ke liye -->
        <div>
        <img :src="require('@/assets/homepage/Brand/mac71.jpeg')" class="img-fluid" alt="Brand 3">
      </div>
      <div class="mt-2">
        <img :src="require('@/assets/homepage/Brand/nes8.jpeg')" class="img-fluid" alt="Brand 2">
      </div>
      </div>

      
    </div>
  </div>

   <!-- This is the code which will be shown when we click on the button. his only desgn page  -->

  <!-- ************* **************************************************************************-->
   
  <!-- <div class="row mt-5" style="max-width: 1300px; margin-top: 20px"> -->
        <!-- Loop through the images to display them -->
        <!-- <div class="col-6 col-md-3 mb-4" v-for="(image, index) in visibleImages" :key="index"> -->
          <!-- <div> -->
            <!-- Use the dynamic binding for image source -->
            <!-- <img :src="image.src" class="img-fluid mt-5" :alt="'Brand ' + (index + 1)"> -->
          <!-- </div> -->
        <!-- </div> -->
      <!-- </div> -->

  <!-- ************************************************************************************************************* -->

  </div>
</template>

<!-- This is the code which will be shown when we click on the button. his only java script code  --> 
<!-- 
<script>
export default {
  data() {
    return {
      
      images: [
        { src: require('@/assets/homepage/Brand/lays225.jpg') },
        { src: require('@/assets/homepage/Brand/lays225.jpg') },
        { src: require('@/assets/homepage/Brand/lays225.jpg') },
        { src: require('@/assets/homepage/Brand/lays225.jpg') },
        { src: require('@/assets/homepage/Brand/lays225.jpg')},
        { src:require('@/assets/homepage/Brand/lays225.jpg') },
        { src: require('@/assets/homepage/Brand/lays225.jpg') },
        { src: require('@/assets/homepage/Brand/lays225.jpg') }
      ],
      visibleCount: 0, // Initial images to show
    };
  },
  computed: {
    
    visibleImages() {
      
      if (this.images && Array.isArray(this.images)) {
        return this.images.slice(0, this.visibleCount);
      }
      return [];
    }
  },
  methods: {
    
    loadMore() {
      if (this.visibleCount < this.images.length) {
        this.visibleCount += 8; // Show 4 more images
      }
    }
  }
};
</script> -->
<script>

</script>


<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css');

.container{
  background-color:rgb(255,255,255);
 
}
h2 {
  margin-bottom: 10px;
}

p {
  /* color: #666; */
  color: black;
}

img {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.brand_image{
  
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
}

.btn{
    background-color: #f0f0f0;
    border-radius: 40px;
    border: 1px solid rgb(0, 0, 0);
 }
</style>