<template>
  <div class="main pb-4">
    <!-- Section One -->
    <div class="section-one text-center py-4">
      <h3 class="text-warning">BLOGS</h3>
    </div>

    <!-- Section Two -->
    <div class="container section-two">
      <div class="row g-4">
        <!-- Blog 1 -->
        <div class="col-12">
          <div
            class="card d-flex flex-column flex-md-row align-items-center custom-border bg-transparent"
          >
            <div class="card-body text-justify text-md-start">
              <h1 class="card-title">
                Innovative Packaging Solutions for a Greener Tomorrow
              </h1>
              <p class="card-text">
                Innovative packaging solutions are key to reducing environmental
                impact. By adopting eco-friendly materials and cutting-edge
                designs, businesses can minimize waste while maintaining product
                integrity. These sustainable practices not only drive innovation
                but also contribute to a greener future, promoting a responsible
                approach to packaging in industries worldwide.
              </p>
              <button class="btn btn-outline-warning">Read More</button>
            </div>
            <img
              :src="
                require('@/assets/homepage/News_&_Articles/newsarticle_one.jpeg')
              "
              class="card-img rounded-3 mb-3 mb-md-0 me-md-4"
              alt="Sample Image"
            />
          </div>
        </div>

        <!-- Blog 2 -->
        <div class="col-12">
          <div
            class="card d-flex flex-column flex-md-row align-items-center custom-border bg-transparent"
          >
            <div class="card-body text-justify text-md-start">
              <h1 class="card-title">
                Grip Chain Packtech : Driving Innovation in Sustainable
                Packaging Tomorrow
              </h1>
              <p class="card-text">
                Grip Chain Packtech leads the way in innovative, eco-friendly
                packaging solutions. Committed to reducing environmental impact,
                they offer cutting-edge designs and biodegradable materials that
                set a new standard for sustainability. Driving change today,
                Grip Chain Packtech is shaping a greener, more responsible
                future for the packaging industry.
              </p>
              <button class="btn btn-outline-warning">Read More</button>
            </div>
            <img
              :src="require('@/assets/homepage/News_&_Articles/one.gif')"
              class="card-img rounded-3 mb-3 mb-md-0 me-md-4"
              alt="Sample Image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsArticle",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");

.main {
  font-family: "Outfit", sans-serif;
  background-color: #111204;
  color: #ffffff;
}

.section-one h3 {
  font-family: "Outfit", sans-serif;
}

.card {
  transition: transform 0.3s ease-in-out;
}

/* .card:hover {
  transform: scale(1.02);
} */

.card-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  /* max-width: 200px; */
}

.card-body {
  flex: 1;
}

.card-text {
  font-weight: 400;
  color: #ffff;
}

.text-warning {
  color: #f0e002 !important;
}

.btn {
  color: #f0e002 !important;
  border: 1px solid #f0e002;
}

.btn:hover {
  color: #000 !important;
  background-color: #f0e002;
}

@media (max-width: 768px) {
  .card {
    flex-direction: column;
    text-align: justify;
  }

  .card-img {
    margin-bottom: 1rem;
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 769px) {
  .card {
    flex-direction: row;
    text-align: left;
  }

  .card-img {
    width: 200px;
    height: auto;
  }
}
</style>
