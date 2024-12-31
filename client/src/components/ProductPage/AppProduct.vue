<template>
  <!-- <div class="search-bar-container">
    <input
      type="text"
      placeholder="Search products..."
      class="search-bar"
      v-model="searchQuery"
      @input="filterProducts"
    />
    <i class="far fa-user-circle" style="font-size: 5vh; margin-left: 6px"></i>
  </div> -->

  <div class="head">Product</div>
  <section class="container">
    <div
      class="Product"
      v-for="product in filteredProducts"
      :key="product.id"
      @click="navigateToProduct(product.id)"
    >
      <div class="Productimage">
        <img
          :src="`https://gcp.agratasinfotech.com/${product.images[0]}`"
          :alt="product.name"
        />
      </div>
      <div class="Productcontent">
        <h3>{{ product.name }}</h3>
        <p>{{ product.stock }}</p>
        <div class="rating">
          <span>{{ product.rating }} ★</span>
        </div>
        <div class="price">
          <span class="amount">₹{{ product.mrp }}</span>
          <span class="original">₹{{ product.original_price }}</span>
          <span class="discount"
            >{{
              ((1 - product.mrp / product.original_price) * 100).toFixed(0)
            }}% Off</span
          >
        </div>
        <p class="delivery">{{ product.delivery }}</p>
      </div>
    </div>
  </section>

  <div class="pagination">
    <div class="pagination-left">
      <span>Page 1 of 12</span>
    </div>

    <div class="pagination-center">
      <div class="page-numbers">
        <span class="page-number">1</span>
        <span class="page-number">2</span>
        <span class="page-number">3</span>
        <span class="page-number">4</span>
        <span class="page-number">5</span>
        <span class="page-number">6</span>
        <span class="next">Next</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchQuery: "",
      products: [],
      filteredProducts: [],
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get(
          "https://gcp.agratasinfotech.com/api/product/"
        );
        this.products = response.data.products; // Adjust according to the API response structure
        this.filteredProducts = this.products; // Initially show all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    filterProducts() {
      const query = this.searchQuery.toLowerCase();
      this.filteredProducts = this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    },
    navigateToProduct(id) {
      this.$router.push(`/products/${id}`);
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.search-bar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 20px 0; */
  /* margin: auto; */
  padding: auto;
  margin-top: 20px;
}

.search-bar {
  width: 50%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 25px;
}

.search-button {
  padding: 10px 20px;
  font-size: 16px;
  /* margin-left: 10px; */
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #218838;
}

/* Centered Header Styling */
.head {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
  text-decoration: underline;
}

/* Centered Container Styling */
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: auto;
  margin: auto;
}

/* Product Card Styling */
.Product {
  cursor: pointer;
  width: 23%;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* align-items: center;
    text-align: center; */
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.Productimage img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 10px;
}

.Productcontent h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: blue;
}

.Productcontent p {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
}

.rating {
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  border: 1px solid #28a745;
  border-radius: 5px;
  display: inline-block;
  background-color: #28a745;
}
.rating span {
  color: white;
  font-size: 14px;
  font-weight: bold;
}

.price {
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.price .amount {
  font-size: 18px;
  font-weight: bold;
  color: #000;
}

.price .original {
  font-size: 14px;
  text-decoration: line-through;
  color: #888;
  margin-top: 5px;
}

.price .discount {
  font-size: 14px;
  color: #e53935;
  font-weight: bold;
  margin-top: 5px;
}

.delivery {
  font-size: 14px;
  color: black;
  font-weight: bold;
}

/* Pagination */

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
  margin-top: 20px;
}
.pagination-left {
  text-align: center;
  /* align-items: center; */
  flex: 1;
  font-size: 18px;
  font-weight: bold;
}

.pagination-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
  font-size: 18px;
  font-weight: bold;
  /* margin-left: 10px; */
}

.page-numbers {
  display: flex;
}

.page-number {
  margin: 0px 15px;
  cursor: pointer;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
}

.page-number:hover {
  text-decoration: underline;
  background-color: #28a745;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
}

.next {
  cursor: pointer;
  font-weight: bold;
}

.next:hover {
  text-decoration: underline;
  background-color: #28a745;
  width: auto;
  height: auto;
  border-radius: 10%;
  text-align: center;
}

/* Responsive Design for Mobile */
@media (max-width: 768px) {
  .Product {
    width: 48%; /* Show two products per row */
  }

  .container {
    padding: 10px;
    margin: 10px;
  }

  .pagination {
    flex-direction: column; /* Stack pagination elements vertically on small screens */
    align-items: center;
  }

  .pagination-left,
  .pagination-center {
    text-align: center;
    font-size: 14px; /* Adjust font size for mobile view */
  }

  .page-number {
    font-size: 16px; /* Smaller font size for mobile view */
    /* margin: 0px 10px; */
  }

  .next {
    font-size: 14px; /* Adjust font size for mobile view */
  }
}

/* Responsive Design for Smaller Devices */
@media (max-width: 480px) {
  .Product {
    width: 100%; /* Show one product per row on very small screens */
  }

  .pagination {
    flex-direction: column;
  }

  .pagination-left,
  .pagination-center {
    font-size: 12px; /* Further reduce font size for very small screens */
  }

  .page-number {
    font-size: 12px; /* Further reduce font size for very small screens */
  }

  .next {
    font-size: 12px; /* Further reduce font size for very small screens */
  }
}
</style>
