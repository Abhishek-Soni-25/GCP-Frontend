<template>
  <footer class="bg-dark text-white pt-4">
    <div class="container">
      <div class="row">
        <!-- Footer Left Section -->
        <div class="col-md-6">
          <img src="path-to-logo.png" alt="Logo" style="height: 50px" />
          <p class="mt-2">
            Address: Plot No-91, B-Block, Phase 2,
            <br />
            Roorkee Road, Modipuram, Meerut, 250001
          </p>
        </div>
        <!-- Footer Right Section -->
        <div class="col-md-6 text-md-end mt-3 mt-md-0">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a href="#" class="text-white text-decoration-none">
                <i class="bi bi-envelope-fill"></i> info@gripchain.com
              </a>
            </li>
            <li class="list-inline-item ms-3">
              <a href="#" class="text-white text-decoration-none">
                <i class="bi bi-telephone-fill"></i> (001) 1231 3435
              </a>
            </li>
          </ul>
          <ul class="list-inline mt-3">
            <li class="list-inline-item">
              <a href="#" class="text-white text-decoration-none">
                <i class="bi bi-facebook"></i>
              </a>
            </li>
            <li class="list-inline-item ms-3">
              <a href="#" class="text-white text-decoration-none">
                <i class="bi bi-instagram"></i>
              </a>
            </li>
            <li class="list-inline-item ms-3">
              <a href="#" class="text-white text-decoration-none">
                <i class="bi bi-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="border-secondary my-4" />
      <div class="text-center">
        <small>
          © 2023 Companyname - All Rights Reserved
        </small>
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
}

footer a:hover {
  color: #ffc107;
}
</style>
