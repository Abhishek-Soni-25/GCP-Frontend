<template>
  <div class="container contact-section">
    <div class="row align-items-center">
      <!-- Left Image -->
      <div class="col-md-4 text-center">
        <img
          :src="require('@/assets/About/image444.png')"
          alt="Box Image"
          class="img-fluid"
        />
      </div>

      <!-- Right Content -->
      <div class="col-md-7 content">
        <h2 class="contact-heading">
          Did Not Find Your Questions? Contact Us!
        </h2>
        <p class="contact-subtext">
          Didn’t find the answers you were looking for? No worries! Our team is
          here to help. Whether you have specific questions or need more
          information, feel free to contact us. We’re dedicated to providing
          prompt and thorough assistance to ensure all your queries are
          addressed. Reach out today, and we’ll provide the support you need to
          move forward with confidence!
        </p>
        <div class="contact-info">
          <!-- Phone Info -->
          <div class="info-box phone" style="background-color: #f9f9f9f9">
            <div class="imagephoto">
              <img
                src="@/assets/About/call.png"
                alt="Phone Icon"
                class="phone-icon"
              />
            </div>
            <div class="info-content">
              <strong>+91 9269572229</strong><br />
              <small
                >Contact us at 91 9269572229 for any inquiries or
                support.</small
              >
            </div>
          </div>

          <!-- Email Info -->
          <div class="info-box email" style="background-color: yellow">
            <div class="imagephoto">
              <img
                src="@/assets/About/email.png"
                alt="Email Icon"
                class="phone-icon"
              />
            </div>
            <div class="info-content">
              <strong>mail@pack.com</strong><br />
              <small>
                Mail us at mail@pack.com for any inquiries or support.</small
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css");

.contact-section {
  padding: 40px 20px;
  border-radius: 10px;
  margin-bottom: 0;
}

.contact-heading {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #343a40;
  margin-top: 0;
  margin-bottom: 20px;
}

.contact-subtext {
  color: #6c757d;
  margin-bottom: 20px;
  text-align: justify;
}

.contact-info {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 0;
}

.contact-info .info-box {
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  flex: 1;
  min-width: 250px;
}

.imagephoto {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.phone-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: white;
  border-radius: 50%;
}

.info-content {
  color: black;
}

.info-content strong {
  font-size: 1rem;
}

.info-content small {
  font-size: 0.875rem;
  color: #6c757d;
}

/* Responsive Styles */

/* Tablet View */
@media (max-width: 1024px) {
  .contact-heading {
    font-size: 1.8rem;
  }

  .info-box {
    padding: 10px;
  }
}

/* Mobile View */
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .contact-heading {
    font-size: 1.6rem;
    text-align: center;
  }

  .contact-subtext {
    font-size: 0.9rem;
    text-align: center;
  }

  .contact-info {
    flex-direction: column;
  }

  .info-box {
    padding: 12px;
    width: 100%;
  }

  .phone-icon {
    width: 90%;
    height: 90%;
  }
}
</style>
