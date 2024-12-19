<template>
  <header
    class="navbar navbar-expand-lg navbar-dark custom-navbar"
    :class="[navbarBackground, { 'shadow-sm': !isLightBackground }]">
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/logo.png" alt="Logo" class="brand-logo" />
      </router-link>
      <!-- Toggler Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        :class="{ 'toggler-light': isLightBackground }">
        <span
          class="navbar-toggler-icon"
          :style="togglerIconStyle">
        </span>
      </button>
      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" exact>About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" exact>Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link" exact>Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" exact>Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/faq" class="nav-link" exact>FAQ</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navbarBackground: "default-bg",
    };
  },
  computed: {
    isLightBackground() {
      // Determine if the background is light-colored
      return this.navbarBackground.includes("contact-bg") || this.navbarBackground.includes("faq-bg") || this.navbarBackground.includes("products-bg");
    },
    togglerIconStyle() {
      // Adjust toggler icon color dynamically
      return this.isLightBackground
        ? "background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23000000%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27%23000000%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e')"
        : "background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27%23f8f9fa%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27%23f8f9fa%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e')";
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        switch (to.path) {
          case "/":
            this.navbarBackground = "home-bg text-white";
            break;
          case "/about":
            this.navbarBackground = "about-bg text-white";
            break;
          case "/products":
            this.navbarBackground = "products-bg text-black-force";
            break;
          case "/services":
            this.navbarBackground = "services-bg text-white";
            break;
          case "/contact":
            this.navbarBackground = "contact-bg text-black-force";
            break;
          case "/faq":
            this.navbarBackground = "faq-bg text-black-force";
            break;
          default:
            this.navbarBackground = "default-bg text-white";
        }
      },
    },
  },
};
</script>

<style scoped>
/* Navbar Base Styles */
.custom-navbar {
  transition: all 0.3s ease-in-out;
  border-bottom: none; /* Explicitly remove border */
  box-shadow: none; /* Remove box shadow */
}

/* Dynamic Box Shadow */
.custom-navbar.shadow-sm {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Add shadow only if needed */
}

/* Background Colors */
.custom-navbar.home-bg {
  background: radial-gradient(ellipse 160px 120px at center, #111204, #111204);
}

.custom-navbar.about-bg {
  background-color: #000000; /* Black */
}

.custom-navbar.products-bg {
  background-color: #ffffff; /* Bright White */
}

.custom-navbar.services-bg {
  background-color: #0a0a0a; /* Dark Background */
}

.custom-navbar.contact-bg,
.custom-navbar.faq-bg {
  background-color: #ffffff; /* Bright White */
}

.custom-navbar.default-bg {
  background-color: #2c3e50; /* Default Dark Fallback */
}

/* Text Colors */
.text-white {
  color: #ffffff !important;
}

.text-black-force .nav-link {
  color: #000000 !important; /* Force Solid Black */
}

.text-black-force .nav-link:hover {
  color: #000000 !important; /* Maintain Solid Black on Hover */
}

/* Navbar Links Styling */
.navbar-nav .nav-link {
  font-weight: 500;
  font-size: 16px;
  padding: 8px 12px;
}

.navbar-nav .nav-link:hover {
  box-shadow: inset 0 -3px 0 #17a2b8;
  border-radius: 7px;
}

/* Logo Styling */
.brand-logo {
  height: 65px;
  transition: transform 0.3s ease;
}

/* Navbar Items Margin */
.navbar-nav .nav-item {
  margin: 0 10px;
}

/* Navbar Toggler */
.navbar-toggler {
  border: 2px solid transparent;
  transition: border-color 0.3s ease-in-out;
}

.navbar-toggler.toggler-light {
  border: 2px solid #000000 !important; /* Solid black for light backgrounds */
}

.navbar-toggler:not(.toggler-light) {
  border: 2px solid #ffffff !important; /* Solid white for dark backgrounds */
}

.navbar-toggler-icon {
  width: 30px;
  height: 30px;
}

@media (max-width: 992px) {
  .navbar-nav .nav-link {
    font-size: 14px;
    margin: 5px 0;
  }
}

@media (max-width: 768px) {
  .brand-logo {
    height: 40px;
  }
}
</style>
