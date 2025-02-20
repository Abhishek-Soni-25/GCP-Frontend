<template>
  <div class="product-search">
    <!-- Search Bar
    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search products..."
        @input="filterProducts"
      />
      <button class="search-button" @click="filterProducts">
        <img
          class="search-icon"
          src="https://img.icons8.com/ios/50/000000/search--v1.png"
          alt="Search Icon"
        />
      </button>
    </div> -->

    <!-- Product Title -->
    <h2 class="product-title">Product</h2>

    <!-- Single Product Details -->
    <div class="single-product" v-if="product">
      <div class="left-half">
        <img
          :src="`https://gripchain.in/${product.images[0]}`"
          alt="Product Image"
          class="product-image"
        />
        <div class="button-container">
          <button class="cart-button">Add to Cart</button>
          <button class="buy-button">Buy Now</button>
        </div>
      </div>
      <div class="right-half">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="qty">{{ product.stock }}</p>
        <p class="rating">{{ product.rating }}★</p>
        <div class="p-box">
          <p class="price">₹ {{ product.mrp }}</p>
          <p class="MRP">₹ {{ product.original_price }}</p>
          <p class="discount">
            {{ ((1 - product.mrp / product.original_price) * 100).toFixed(0) }}%
            off
          </p>
        </div>

        <div class="offer">
          <h4>Available Offers:</h4>
          <ul>
            <li>&nbsp Offer 1</li>
            <li>&nbsp Offer 2</li>
          </ul>
        </div>

        <div class="row-kit">
          <h4>Delivery</h4>
          <div class="pin-box">
            <input type="text" placeholder="PIN code" class="pin-input" />
            <p class="pin-change">Change</p>
          </div>
        </div>

        <div class="row-kit">
          <p class="expected">Delivery by 22 Dec 2024, Sunday</p>
        </div>

        <div class="row-kit1">
          <h4>Highlights</h4>
          <ul>
            <li>Highlight 1</li>
            <li>Highlight 2</li>
            <li>Highlight 3</li>
            <li>Highlight 4</li>
            <li>Highlight 5</li>
          </ul>
        </div>

        <div class="row-kit2">
          <h4>Easy<br />Payment<br />Options</h4>
          <ul>
            <li>Cash on Delivery</li>
            <li>Credit/Debit Card</li>
            <li>Net Banking/UPI</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading product details...</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetails",
  data() {
    return {
      product: null, // To store the specific product details
    };
  },
  async created() {
    const productId = this.$route.params.id; // Get product ID from route
    try {
      // Fetch all products
      const response = await axios.get(
        "https://gripchain.in/api/product"
      );
      console.log("API Response:", response.data); // Log the API response

      const allProducts = response.data.products; // Access the 'products' array

      // Find the specific product by ID
      this.product = allProducts.find((p) => p.id === parseInt(productId, 10));

      if (!this.product) {
        console.error("Product not found");
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  },
};
</script>



<style scoped>
.product-search {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f3f3;
  justify-items: center;
}

.search-bar {
  margin-bottom: 20px;
  width: 90%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.search-bar input {
  width: 80%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-button {
  padding: 10px 11px;
  font-size: 18px;
  background-color: #00000000;
  color: #fff;
  border: none;
  border-radius: 100%;
  cursor: pointer;
}

.search-icon {
  width: 30px;
  height: 30px;
}

.search-button:hover {
  background-color: #0000004d;
}

.product-title {
  width: 85%;
  text-align: center;
  justify-content: center;
  text-decoration: underline;
  margin-bottom: 20px;
  border-radius: 10px;
}

.single-product {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 85%;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;
  background-color: #ffffff;
  border: 3px solid #dcdcdc;
}

.left-half {
  flex: 0 0 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
}

.right-half {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
}

.product-image {
  width: 100%;
  max-height: 800px;
  border-color: #ebebeb;
  border-style: solid;
  border-radius: 10px;
  border-width: 3px;
  object-fit: contain;
}

.button-container {
  margin-top: 10px;
}

.cart-button,
.buy-button {
  padding: 10px 20px;
  margin-top: 20px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
  border: none;
  border-radius: 5px;
}

.cart-button {
  background-color: #ff9f00;
  color: white;
}

.buy-button {
  background-color: #fb641b;
  color: white;
}

.product-name {
  font-size: 24px;
  font-weight: bold;
  color: #2b06ff;
  margin-bottom: 5px;
  text-align: left;
}

.qty {
  color: #7e7e7e;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: left;
}

.rating {
  color: #ffffff;
  background-color: #388e3c;
  border-radius: 5px;
  width: 56px;
  padding-left: 9px;
  margin-bottom: 12px;
  font-size: 16px;
}

.p-box {
  color: #000000;
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 0px;
  font-size: 22px;
  font-weight: bold;
}

.MRP {
  text-decoration: line-through;
  color: #a1a0a0;
  margin-top: 6px;
  font-size: 14px;
}

.discount {
  color: #388e3c;
}

.row-kit,
.row-kit1,
.row-kit2 {
  color: #7e7e7e;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  align-content: center;
  gap: 15px;
  margin-bottom: 0px;
}
.row-kit2 {
  gap: 25px;
}

.row-kit h4,
.row-kit1 h4,
.row-kit2 h4 {
  font-family: Outfit;
  font-size: 17.26px;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}

.offer h4 {
  font-family: Outfit;
  font-size: 17.26px;
  letter-spacing: 0.05em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}
.offer {
  font-weight: 600;
  padding-bottom: 0px;
  margin-bottom: 0px;
}
.offer ul {
  margin-left: 15px;
}
.offer li {
  margin: 0px;
  padding: 0px;
  text-align: left;
}

.row-kit ul {
  list-style-type: disc;
  padding-left: 20px;
}

.row-kit ul li {
  margin: 0px;
  padding: 0px;
}

.see-more {
  color: #0000ff;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 5px;
}

.pin-input {
  padding: 10px;
  margin-bottom: 20px;
  font-size: 13px;
  height: 40px;
  width: 200px;
  max-width: 300px;
  border-color: #00000000;
  border-bottom: 3px solid #000000;
  border-radius: 5px;
}
.pin-change {
  position: absolute;
  left: 140px;
  top: 10px;
  font-weight: 500;
  color: #2b06ff;
}
.pin-box {
  position: relative;
}

@media (max-width: 720px) {
  .single-product {
    flex-direction: column;
  }
}
@media (max-width: 455px) {
  .row-kit {
    flex-direction: column;
  }
  .cart-button,
  .buy-button {
    width: 150px;
  }
}
</style>
