<template>
  <div class="work-main bg-black text-white py-5">
    <!-- Header Section -->
    <div class="d-flex justify-content-center align-items-center vh-70vh">
      <div>
        <h1 class="fw-bold">How We Work</h1>
      </div>
    </div>

    <!-- Card Section -->
    <div
      class="d-flex justify-content-center align-items-center py-5 flex-wrap"
    >
      <!-- First Card -->
      <div
        class="card text-center border-0 bg-black text-white"
        style="width: 18rem"
      >
        <div
          class="d-flex justify-content-center align-items-center rounded-circle bg-secondary overflow-hidden p-4"
          style="width: 150px; height: 150px; margin: 0 auto"
        >
          <img
            :src="require('@/assets/About/choice_icon.png')"
            class="img-fluid"
            alt="Card Image 1"
          />
        </div>
        <div class="card-body">
          <h4 class="card-title">Choose Your Packaging</h4>
          <p class="card-text">
            Choose the perfect packaging for your Grip Chain Packtech – tailored
            for reliability and precision.
          </p>
        </div>
      </div>

      <!-- Arrow -->
      <div class="arrow-container">
        <i class="bi bi-arrow-right"></i>
      </div>

      <!-- Second Card -->
      <div
        class="card text-center border-0 bg-black text-white"
        style="width: 18rem"
      >
        <div
          class="d-flex justify-content-center align-items-center rounded-circle bg-secondary overflow-hidden p-4"
          style="width: 150px; height: 150px; margin: 0 auto"
        >
          <img
            :src="require('@/assets/About/refresh_icon.png')"
            class="img-fluid"
            alt="Card Image 2"
          />
        </div>
        <div class="card-body">
          <h4 class="card-title">Packaging in process</h4>
          <p class="card-text">
            Optimize your packaging process with Grip Chain Packtech – designed
            for efficiency and excellence
          </p>
        </div>
      </div>

      <!-- Arrow -->
      <div class="arrow-container">
        <i class="bi bi-arrow-right"></i>
      </div>

      <!-- Third Card -->
      <div
        class="card text-center border-0 bg-black text-white"
        style="width: 18rem"
      >
        <div
          class="d-flex justify-content-center align-items-center rounded-circle bg-secondary overflow-hidden p-4"
          style="width: 150px; height: 150px; margin: 0 auto"
        >
          <img
            :src="require('@/assets/About/carton-box.png')"
            class="img-fluid"
            alt="Card Image 2"
          />
        </div>
        <div class="card-body">
          <h4 class="card-title">Packaging ready to use</h4>
          <p class="card-text">
            Grip Chain Packtech: Packaging that's ready to use, straight out of
            the box.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Insights & Blogs Section -->
  <div class="work_two bg-light py-5">
    <div class="container">
      <div class="work_two_body mb-5">
        <h1 class="text-center text-dark mb-3">Recent Insights & Blogs</h1>
        <h5 class="text-dark text-center text-wrap mb-5">
          Stay informed with our latest insights and blogs
        </h5>
      </div>
      <div class="d-flex justify-content-center flex-wrap gap-4">
        <!-- Blog Card 1 -->
        <div
          class="card text-left shadow border-0"
          style="width: 18rem; background-color: #d9d9d9"
        >
          <img
            :src="require('@/assets/About/girl_image.jpg')"
            class="card-img-top p-3 rounded"
            alt="Blog Image 1"
          />
          <div class="card-body">
            <h3 class="card-title">Perfect Packaging</h3>
            <p class="card-text" style="color: #595959">
              Delivering perfection in every pack
            </p>

            <a href="#" class="btn btn-warning">Learn More</a>
          </div>
        </div>
        <!-- Blog Card 2 -->
        <div
          class="card text-left shadow border-0"
          style="width: 18rem; background-color: #d9d9d9"
        >
          <img
            :src="require('@/assets/About/girl_image.jpg')"
            class="card-img-top p-3 rounded"
            alt="Blog Image 2"
          />
          <div class="card-body">
            <h3 class="card-title">Perfect Packaging</h3>
            <p class="card-text" style="color: #595959">
              Delivering perfection in every pack
            </p>
            <a href="#" class="btn btn-warning">Learn More</a>
          </div>
        </div>
        <!-- Blog Card 3 -->
        <div
          class="card text-left shadow border-0"
          style="width: 18rem; background-color: #d9d9d9"
        >
          <img
            :src="require('@/assets/About/girl_image.jpg')"
            class="card-img-top p-3 rounded"
            alt="Blog Image 3"
          />
          <div class="card-body">
            <h3 class="card-title">Perfect Packaging</h3>
            <p class="card-text" style="color: #595959">
              Delivering perfection in every pack
            </p>
            <a href="#" class="btn btn-warning">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* General styling */
.work-main {
  display: flex;
  flex-direction: column;
}

.card {
  margin: 15px;
}

.arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
}

.arrow-container i {
  font-size: 3rem;
  color: #f0e002;
  transition: transform 0.3s ease;
}

/* Minimal custom styles */
.work-main {
  min-height: auto;
  font-family: "Outfit", sans-serif;
}

.work_two {
  font-family: "Outfit", sans-serif;
}

.work_two h3,
.work_two h4 {
  font-family: "Outfit", sans-serif;
}

/* Media Queries */
@media (max-width: 475px) {
  .work-main .d-flex {
    flex-direction: column;
  }

  .card {
    width: 90%;

    margin: 10px auto;
  }

  .arrow-container {
    margin: 10px 0;
  }

  .arrow-container i {
    transform: rotate(90deg);
  }
}
</style>
