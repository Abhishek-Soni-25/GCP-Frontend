
<template>
  <div id="app">
    <section class="sectioon_container">
      <div class="testimonial-header">
        <h2>TESTIMONIAL</h2>
        <h1 class="fw-bold">Customer is Our Top<br>Priority</h1>
        <p>We survey all of our clients, the results of which go directly<br>to our CEO.</p>
      </div>

      <!-- Testimonial Slider -->
      <div class="testimonial-slider">
        <button class="slider-btn left-btn" @click="goPrev">&lt;</button>

        <div class="card_main">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="container_card"
            :style="{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }"
          >
            <div class="container_card_content">
              <img :src="testimonial.companyLogo" alt="Company Logo" class="company-logo" />
              <h4>{{ testimonial.title }}</h4>
              <p style="text-align: justify;">{{ testimonial.description }}</p>
              <h4 style="font-weight: bold;">{{ testimonial.name }}</h4>
              <p class="position">{{ testimonial.position }}</p>
            </div>
            <div class="container_card_pofilephoto">
              <img :src="testimonial.profileImage" class="profile-img" />
            </div>
          </div>
        </div>

        <button class="slider-btn right-btn" @click="goNext">&gt;</button>
      </div>
    </section>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      testimonials: [
        {
          // companyLogo: require('@/assets/homepage/Brand/testimonial/CompanyLogo.png'),
          companyLogo: require('@/assets/homepage/testimonial/CompanyLogo.png'),
          title: "Ideapeel Is The Best Digital Agency I Have Ever Seen! Highly Recommended!",
          description:
            "Ideapeel is an exceptional digital agency that delivers innovative, results-driven solutions. Their expertise in web design, branding, and digital marketing ensures your business stands out. Highly recommended for anyone seeking top-notch digital services!.",
          name: "Shivam Tripathi 1",
          position: "Director of COMPANY NAME",
          profileImage:require('@/assets/homepage/testimonial/shivam.png'),

        },
        {
          companyLogo: require('@/assets/homepage/testimonial/CompanyLogo.png'),
          title: "Ideapeel Is The Best Digital Agency I Have Ever Seen! Highly Recommended!",
          description:
            "Ideapeel is an exceptional digital agency that delivers innovative, results-driven solutions. Their expertise in web design, branding, and digital marketing ensures your business stands out. Highly recommended for anyone seeking top-notch digital services!.",
          name: "Shivam Tripathi 2",
          position: "Director of COMPANY NAME",
          profileImage:require('@/assets/homepage/testimonial/shivam.png'),
        },
        {
          companyLogo: require('@/assets/homepage/testimonial/CompanyLogo.png'),
          title: "Ideapeel Is The Best Digital Agency I Have Ever Seen! Highly Recommended!",
          description:
            "Ideapeel is an exceptional digital agency that delivers innovative, results-driven solutions. Their expertise in web design, branding, and digital marketing ensures your business stands out. Highly recommended for anyone seeking top-notch digital services!.",
          name: "Shivam Tripathi 3",
          position: "Director of COMPANY NAME",
          profileImage:require('@/assets/homepage/testimonial/shivam.png'),
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    goPrev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    },
    goNext() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    },
  },
};
</script>


<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css');
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

.sectioon_container {
  text-align: center;
  margin: 50px;
}

.testimonial-header h2 {
  font-size: 16px;
  color: #777;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.testimonial-header h1 {
  font-size: 30px;
  color: #000;
  font-weight: bold;
  margin: 10px 0;
}

.testimonial-header p {
  font-size: 14px;
  color: black;
  margin-bottom: 30px;
}

.testimonial-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  max-width: 1450px;
  margin: 0 auto;
  width: 100%;
  gap: 10px;
  border-radius: 30px;
}

.slider-btn {
  background: hsl(0, 0%, 96%);
  border: none;
  font-size: 30px;
  color: rgb(7, 0, 0);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* font-weight: bold; */
}
.right-btn {
  font-weight: bold;
}

.left-btn {
  font-weight: bold;
}

.slider-btn:hover {
  background: rgb(55, 53, 53);
}

.card_main {
  display: flex;
  width: 100%;
  overflow: hidden;
  height: 60vh;
  border-radius: 30px;
}

.container_card {
  background-color: #f9f9f9;
  flex: 0 0 100%;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
}

.container_card_content {
  width: 60%;
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 50px;
}

.company-logo {
  width: 80px;
}

.container_card_pofilephoto {
  width: 35%;
  padding: 30px;
  box-sizing: border-box;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .card_main {
    height: 100%;
  }

  .container_card {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .container_card_content,
  .container_card_pofilephoto {
    width: 100%;
  }

  .container_card_pofilephoto {
    height: auto;
  }

  .profile-img {
    width: 250px;
    height: 250px;
    margin-bottom: 100px;
  }

  .slider-btn {
    width: 35px;
    height: 35px;
    font-size: 30px;
  }
}

@media screen and (max-width: 480px) {
  .testimonial-header h1 {
    font-size: 22px;
  }
  /* .sectioon_container
  {
    height: 230vh;
  } */
  .card_main{
    height: 230vh;
  }
.container_card
{
  height: 230vh;
}
  
  .container_card_pofilephoto {
    height: 300px;
  }

  .profile-img {
    /* width: 150px;
    height: 200px; */
    width: 100%;
    height: 50%;
    margin-bottom: 50px;
  }

  .slider-btn {
    width: 15px;
    height: 30px;
    font-size: 15px;
  }
}
</style>
