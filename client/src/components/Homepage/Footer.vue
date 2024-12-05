<template>
  <footer class="bg-dark text-white pt-5 custom-footer">
    <div class="container">
      <!-- Top Section -->
      <div class="row">
        <!-- Left Section -->
        <div class="col-md-6">
          <div class="d-flex align-items-center mb-3">
            <a href="/" class="footer-logo-link">
              <img
                src="@/assets/logo.png"
                alt="Logo"
                class="footer-logo"
              />
            </a>
          </div>
          <p class="mb-2">
            Address: Plot No-91, B-Block, Phase 2, <br />
            Roorkee Road, Modipuram, Meerut, 250001
          </p>
        </div>

        <!-- Right Section -->
        <div class="col-md-6 text-md-end">
          <!-- Email -->
          <div class="mb-3">
            <a
              href="mailto:info@gripchain.com"
              class="text-white text-decoration-none d-flex align-items-center justify-content-md-end"
            >
              <i class="bi bi-envelope-fill me-2"></i> info@gripchain.com
            </a>
          </div>
          <!-- Phone -->
          <div class="mb-3">
            <a
              href="tel:+00112313435"
              class="text-white text-decoration-none d-flex align-items-center justify-content-md-end"
            >
              <i class="bi bi-telephone-fill me-2"></i> (001) 1231 3435
            </a>
          </div>
          <!-- Social Icons -->
          <div class="d-flex justify-content-md-end">
            <a href="https://www.facebook.com" class="text-white text-decoration-none me-3 social-icon facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com" class="text-white text-decoration-none me-3 social-icon instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" class="text-white text-decoration-none me-3 social-icon linkedin">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://www.x.com" class="text-white text-decoration-none social-icon twitter">
              <i class="bi bi-twitter"></i> <!-- Changed X to Twitter icon -->
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="border-secondary my-4" />

      <!-- Bottom Section -->
      <div class="row">
        <!-- Pages Links -->
        <div class="col-md-6">
          <ul class="list-inline mb-0">
            <li class="list-inline-item me-4">
              <a href="#" class="text-white text-decoration-none page-link">Home</a>
            </li>
            <li class="list-inline-item me-4">
              <a href="#" class="text-white text-decoration-none page-link">About</a>
            </li>
            <li class="list-inline-item me-4">
              <a href="#" class="text-white text-decoration-none page-link">Products</a>
            </li>
            <li class="list-inline-item me-4">
              <a href="#" class="text-white text-decoration-none page-link">Services</a>
            </li>
            <li class="list-inline-item me-4">
              <a href="#" class="text-white text-decoration-none page-link">Contact</a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-white text-decoration-none page-link">FAQ</a>
            </li>
          </ul>
        </div>

        <!-- Copyright -->
        <div class="col-md-6 text-md-end">
          <small>© 2024 Companyname - All Rights Reserved</small>
        </div>
      </div>
    </div>
    <div class="footer-bottom-space"></div>
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
  background: #22220d; /* Same as header background */
}

/* Increased Upper Space */
.custom-footer {
  padding-top: 5rem; /* Increased padding on top */
}

/* Logo Hover Effect */
.footer-logo {
  height: 60px;
  transition: transform 0.3s ease;
}

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
  color: #3b5998 !important; /* Facebook color */
}

/* Instagram Hover Color */
.social-icon.instagram:hover {
  color: #e1306c !important; /* Instagram color */
}

/* LinkedIn Hover Color */
.social-icon.linkedin:hover {
  color: #0077b5 !important; /* LinkedIn color */
}

/* Twitter Hover Color */
.social-icon.twitter:hover {
  color: #1da1f2 !important; /* Twitter color */
}

/* Divider Styling */
.footer-bottom-space {
  height: 40px; /* Extra spacing at the bottom */
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
