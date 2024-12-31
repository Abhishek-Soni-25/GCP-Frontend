<template>
  <div class="work-main bg-black text-white py-4">
    <div class="container">
      <div class="header">
        <h1>Grip Chain Packtech Private Limited</h1>
        <p>
          Grip Chain Packtech Limited is a pioneering force in the packaging and
          printing industry, specializing in providing innovative, sustainable,
          and high-quality solutions. With a strong focus on customer
          satisfaction, we deliver tailored packaging services that enhance
          brand visibility, protect products, and streamline business
          operations. Our advanced technologies, expertise, and dedication to
          excellence ensure every project meets the highest standards. By
          continuously adapting to industry trends, we offer cutting-edge
          solutions that drive growth and efficiency. Grip Chain Packtech is the
          trusted partner businesses rely on for premium packaging and printing
          that makes a lasting impact in the marketplace.
        </p>
      </div>
      <div class="stats">
        <div class="stat">
          <img
            :src="require('@/assets/About/carton-box.png')"
            alt="Experience Icon"
          />
          <div class="text">
            <h2>10</h2>
            <p>Years of Experience</p>
          </div>
        </div>
        <div class="stat">
          <img
            :src="require('@/assets/About/customer-review.png')"
            alt="Customer Rating Icon"
          />
          <div class="text">
            <h2>4.5+</h2>
            <p>Customer Rating</p>
          </div>
        </div>
        <div class="stat">
          <img
            :src="require('@/assets/About/check.png')"
            alt="Customer Rating Icon"
          />
          <div class="text">
            <h2>4.5+</h2>
            <p>Customer Rating</p>
          </div>
        </div>
      </div>
      <div class="dotted-divider"></div>

      <section class="why-choose-us">
        <div class="left-section">
          <h2>Why <span>Choose Us</span></h2>
          <p>
            Grip Chain Packtech offers innovative, sustainable packaging
            solutions that reduce environmental impact, ensuring quality,
            reliability, and eco-conscious practices.
          </p>
          <button class="learn-more-btn">Learn More</button>
        </div>
        <div class="middle-section">
          <img
            :src="require('@/assets/About/imagemiddle.png')"
            alt="Box Image"
          />
        </div>
        <div class="right-section">
          <div class="feature">
            <div class="imagefeature">
              <img
                :src="require('@/assets/About/like.png')"
                alt="Premium Quality Icon"
              />
            </div>
            <div>
              <h3>Premium Quality</h3>
              <p>
                Delivering exceptional products with unmatched quality for
                ultimate satisfaction.
              </p>
            </div>
          </div>
          <div class="feature">
            <img
              :src="require('@/assets/About/customer-care.png')"
              alt="24/7 Support Icon"
            />
            <div>
              <h3>24/7 Support</h3>
              <p>
                Available anytime, providing reliable support whenever you need
                assistance.
              </p>
            </div>
          </div>

          <div class="feature" style="background-color: yellow">
            <img
              :src="
                require('@/assets/About/recycle-symbol-of-three-arrows.png')
              "
              alt="Eco Friendly Icon"
            />
            <div>
              <h3>Eco Friendly</h3>
              <p>
                Sustainable solutions that prioritize the environment for a
                greener future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script></script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Love+Light&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.work-main {
  background-color: black;
  color: white;
  font-family: "Outfit", sans-serif;
}

.container {
  /* padding: 20px; */
  max-width: 1200px;
  margin: auto;
}

.header {
  text-align: center;
  /* margin-bottom: 20px; */
}

.header h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.header p {
  font-size: 1rem;
  color: #ccc;
  text-align: justify;
}

.stats {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 50px;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left;
  flex: 1 1 200px;
}

.stat img {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
}

.stat .text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.stat h2 {
  margin: 0;
  font-size: 1.5rem;
  color: white;
}

.stat p {
  margin: 0;
  color: #fff;
}

.dotted-divider {
  border-top: 2px dotted white;
  margin: 20px 0;
  width: 100%;
  margin-top: 20px;
}

.why-choose-us {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  /* gap: 20px; */
  flex-wrap: wrap;

  background: radial-gradient(ellipse 20% 35% at 50% 50%, #443f02, black);
}

.left-section {
  flex: 1;
  max-width: 30%;
}

.left-section h2 {
  font-size: 2rem;
  /* Golden color */
  margin-bottom: 20px;
}

.left-section span {
  color: #fff;
}

.left-section p {
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6;
  text-align: justify;
}

.learn-more-btn {
  padding: 10px 20px;
  background-color: #ffd700;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
.middle-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;

  /* height: 400px; Adjust height as needed */
  /* width: 100%;  */
}

.middle-section img {
  max-width: 350px;
  height: 300px;
  /* display: block; */
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.right-section {
  flex: 1;
  max-width: 30%;
}

.feature {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #f9f9f9f9;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.imagefeature {
  background-color: black;
}

.feature img {
  width: 40px;
  height: 40px;
  color: rgb(207, 207, 207);
  background-color: white;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.feature h3 {
  margin: 0;
  font-size: 1.2rem;
  /* color: #ffd700; */
  color: black;
  /* background-color: #ccc; */
  font-weight: bold;
}

.feature p {
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: #4d4a4a;
  text-align: justify;
}

/* Responsive Styles */

/* Tablet View: max-width 768px */
@media (max-width: 768px) {
  .container {
    width: 100%;
    margin: 0 auto;
  }

  .left-section,
  .right-section {
    max-width: 100%;
  }

  .why-choose-us {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px;
  }

  .stats {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .stat {
    justify-content: center;
    text-align: center;
    margin-bottom: 15px;
  }

  .middle-section img {
    max-width: 250px;
    height: auto;
  }

  .learn-more-btn {
    padding: 10px 20px;
    font-size: 1rem;
  }
}

/* Mobile View: max-width 480px */
@media (max-width: 480px) {
  .header h1 {
    font-size: 1.2rem;
  }

  .header p {
    font-size: 0.8rem;
  }

  .stats {
    flex-direction: row;
    gap: 10px;
  }

  .stat img {
    max-width: 100%;
    height: auto;
  }

  .stat h2 {
    font-size: 1rem;
  }

  .why-choose-us {
    padding: 10px;
    gap: 8px;
  }

  .learn-more-btn {
    padding: 8px 14px;
    font-size: 0.8rem;
  }
  .middle-section {
    width: 90%;
  }

  .feature img {
    max-width: 100%;
    height: auto;
  }

  .feature h3 {
    font-size: 0.9rem;
  }

  .feature p {
    font-size: 0.7rem;
  }

  .container {
    max-width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }

  /* Ensure all images within the container remain responsive */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
}

/* HD Tablet View: max-width 1366px */
@media (max-width: 1366px) {
  .container {
    max-width: 90%;
  }

  .stats {
    gap: 15px;
  }

  .why-choose-us {
    padding: 20px;
  }
}
</style>
