<template>
  <footer class="bg-dark text-white pt-4">
    <div class="container">
      <!-- Top Section -->
      <div class="row">
        <!-- Left Section -->
        <div class="col-md-6">
          <div class="d-flex align-items-center mb-3">
            <img src="@/assets/logo.png" alt="Logo" style="height: 60px; margin-right: 15px;" />
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
            <a href="mailto:info@gripchain.com" class="text-white text-decoration-none d-flex align-items-center justify-content-md-end">
              <i class="bi bi-envelope-fill me-2"></i> info@gripchain.com
            </a>
          </div>
          <!-- Phone -->
          <div class="mb-3">
            <a href="tel:+00112313435" class="text-white text-decoration-none d-flex align-items-center justify-content-md-end">
              <i class="bi bi-telephone-fill me-2"></i> (001) 1231 3435
            </a>
          </div>
          <!-- Social Icons -->
          <div class="d-flex justify-content-md-end">
            <a href="#" class="text-white text-decoration-none me-3 social-icon">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="text-white text-decoration-none me-3 social-icon">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="text-white text-decoration-none me-3 social-icon">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="#" class="text-white text-decoration-none social-icon">
              <i class="bi bi-gear-fill"></i>
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
              <a href="#" class="text-white text-decoration-none">Home</a>
            </li>
            <li class="list-inline-item me-4">
              <a href="#" class="text-white text-decoration-none">About</a>
            </li>
            <li class="list-inline-item me-4">
              <a href="#" class="text-white text-decoration-none">Products</a>
            </li>
            <li class="list-inline-item me-4">
              <a href="#" class="text-white text-decoration-none">Services</a>
            </li>
            <li class="list-inline-item me-4">
              <a href="#" class="text-white text-decoration-none">Contact</a>
            </li>
            <li class="list-inline-item">
              <a href="#" class="text-white text-decoration-none">FAQ</a>
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
}

footer a {
  transition: color 0.3s, transform 0.3s;
}

footer a:hover {
  color: #ffc107;
  transform: scale(1.1);
}

.social-icon {
  font-size: 1.5rem;
  transition: color 0.3s, transform 0.3s;
}

.social-icon:hover {
  color: #007bff;
  transform: scale(1.2);
}

.footer-bottom-space {
  height: 40px; /* Extra spacing at the bottom */
}

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
