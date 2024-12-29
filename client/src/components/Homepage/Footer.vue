<template>
  <footer class="bg-dark text-white py-5">
    <div class="container">
      <!-- Top Section -->
      <div class="row">
        <!-- Left Section -->
        <div class="col-md-6 mb-4">
          <div class="d-flex align-items-center">
            <router-link to="/" class="d-inline-block">
              <img
                src="@/assets/logo.png"
                alt="Logo"
                class="img-fluid"
                style="height: 60px"
              />
            </router-link>
          </div>
          <p class="mt-3">
            Address: Plot No-91, B-Block, Phase 2, <br />
            Roorkee Road, Modipuram, Meerut, 250001
          </p>
        </div>

        <!-- Right Section -->
        <div class="col-md-6 text-md-end mb-4">
          <p class="mb-2">
            <a
              href="mailto:info@gripchain.com"
              class="text-white text-decoration-none d-flex align-items-center justify-content-md-end"
            >
              <i class="bi bi-envelope-fill me-2"></i> info@gripchain.com
            </a>
          </p>
          <p class="mb-2">
            <a
              href="tel:+00112313435"
              class="text-white text-decoration-none d-flex align-items-center justify-content-md-end"
            >
              <i class="bi bi-telephone-fill me-2"></i> +91 9269572229
            </a>
          </p>
          <div class="d-flex justify-content-md-end">
            <a
              href="https://www.justdial.com/jdmart/Greater-Noida/Grip-Chain-Packtech-Pvt-Ltd-Kasna/011P1218036037F6G8R8_BZDET/catalogue?trkid=2300031412&newAddress=Kasna&galtype=All&cname=Grip+Chain+Packtech+Pvt+Ltd&paid=0&ds=0&datacity=&catalogueType="
              target="_blank"
              rel="noopener noreferrer"
              class="text-white text-decoration-none me-3"
            >
              <i class="bi bi-telephone fs-4"></i>
            </a>
            <a
              href="https://m.indiamart.com/grip-chain-packtech-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white text-decoration-none me-3"
            >
              <i class="bi bi-shop fs-4"></i>
            </a>
            <a
              href=https://www.tofler.in/grip-chain-packtech-private-limited/company/U74999UP2017PTC091079
              target="_blank"
              rel="noopener noreferrer"
              class="text-white text-decoration-none me-3"
            >
              <i class="bi bi-gear fs-4"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="border-secondary my-4" />

      <!-- Bottom Section -->
      <div class="row">
        <!-- Pages Links -->
        <div class="col-md-6 mb-3">
          <ul class="list-inline mb-0 text-center">
            <li class="list-inline-item me-3">
              <router-link to="/" class="text-white text-decoration-none"
                >Home</router-link
              >
            </li>
            <li class="list-inline-item me-3">
              <router-link to="/about" class="text-white text-decoration-none"
                >About</router-link
              >
            </li>
            <li class="list-inline-item me-3">
              <router-link
                to="/products"
                class="text-white text-decoration-none"
                >Products</router-link
              >
            </li>
            <li class="list-inline-item me-3">
              <router-link
                to="/services"
                class="text-white text-decoration-none"
                >Services</router-link
              >
            </li>
            <li class="list-inline-item me-3">
              <router-link to="/contact" class="text-white text-decoration-none"
                >Contact</router-link
              >
            </li>
            <li class="list-inline-item">
              <router-link to="/faq" class="text-white text-decoration-none"
                >FAQ</router-link
              >
            </li>
            <li class="list-inline-item">
              <router-link
                to="/blog"
                class="text-white text-decoration-none"
                exact
                >Blog</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Copyright -->
        <div class="col-md-6 text-md-end">
          <small>© 2024 Grip Chain Packtech - All Rights Reserved</small>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  font-size: 0.9rem;
  background: #22220d;
}

/* Increased Upper Space */
.custom-footer {
  padding-top: 5rem;
}

/* Logo Hover Effect */

.footer-logo:hover {
  transform: scale(1.1);
}

.footer-logo-link {
  text-decoration: none;
}

/* Page Links Hover Effect */
.page-link {
  transition: color 0.3s, border-bottom 0.3s;
  position: relative;
}

.page-link:hover {
  color: #ffc107;
  border-bottom: 2px solid #ffc107;
}

/* Social Icons Styling */
.social-icon {
  font-size: 1.5rem;
  transition: color 0.3s, transform 0.3s;
}

.social-icon:hover {
  transform: scale(1.2);
}

/* Facebook Hover Color */
.social-icon.facebook:hover {
  color: #3b5998 !important;
}

/* Instagram Hover Color */
.social-icon.instagram:hover {
  color: #e1306c !important;
}

/* LinkedIn Hover Color */
.social-icon.linkedin:hover {
  color: #0077b5 !important;
}

/* Twitter Hover Color */
.social-icon.twitter:hover {
  color: #1da1f2 !important;
}

/* Divider Styling */
.footer-bottom-space {
  height: 40px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .social-icon {
    font-size: 1.2rem;
  }

  footer p {
    font-size: 0.85rem;
  }

  .text-md-end {
    text-align: center !important;
  }
}
</style>
