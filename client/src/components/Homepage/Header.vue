<template>
  <header class="navbar navbar-expand-lg navbar-light bg-white shadow-sm custom-navbar">
    <div class="container">
      <a href="#" class="navbar-brand">
        <img src="@/assets/logo.png" alt="Logo" style="height: 50px" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Products</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Services</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Contact</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* Navbar Styling */
.custom-navbar {
  border-bottom: 3px solid #f8f9fa;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(to right, #ffffff, #f8f9fa);
}

.custom-navbar:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid #007bff;
}

.brand-logo {
  height: 50px;
  transition: transform 0.3s ease;
}

.brand-logo:hover {
  transform: scale(1.1);
}

/* Navbar Links Styling */
.navbar-nav .nav-link {
  font-weight: 500;
  font-size: 16px;
  color: #000;
  transition: color 0.3s ease, background 0.3s ease;
  padding: 8px 12px;
  border-radius: 5px;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  color: #fff;
  background: #007bff;
}

.navbar-nav .nav-item {
  margin: 0 10px;
}

/* Navbar Button Animation */
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23007bff' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280,0,0,0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* Responsive Design */
@media (max-width: 992px) {
  .custom-navbar {
    border-bottom: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .navbar-nav .nav-link {
    font-size: 14px;
    margin: 5px 0;
  }

  .navbar-brand {
    text-align: center;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .brand-logo {
    height: 40px;
  }
}
</style>
