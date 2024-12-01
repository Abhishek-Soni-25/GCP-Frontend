<template>
    <div class="main pb-4">
        <!-- Section One -->
        <div class="section-one text-center py-4">
            <h3 class="text-warning">BLOGS</h3>
            <h1 class="fw-bold">News & Articles</h1>
            <h4 class="text-white">Best Articles to get started</h4>
        </div>

        <!-- Section Two -->
        <div class="container section-two">
            <div class="row g-4">
                <!-- First Row -->
                <div class="col-md-6">
                    <div class="card d-flex flex-row align-items-center custom-border bg-transparent">
                        <img :src="require('@/assets/homepage/newsarticle_one.jpeg')"
                            class="card-img flex-shrink-0 rounded-3 me-4" alt="Sample Image"
                            style="width: 120px; height: auto;">
                        <div class="card-body">
                            <h5 class="text-warning">BRANDING</h5>
                            <h4 class="card-title">What is branding, and why do we need it?</h4>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card d-flex flex-row align-items-center custom-border bg-transparent">
                        <img :src="require('@/assets/homepage/newsarticle_two.jpeg')"
                            class="card-img flex-shrink-0 rounded-3 me-4" alt="Sample Image"
                            style="width: 120px; height: auto;">
                        <div class="card-body">
                            <h5 class="text-warning">TIKTOK</h5>
                            <h4 class="card-title">TikTok and its impact on digital branding.</h4>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <!-- Second Row -->
                <div class="col-md-6">
                    <div class="card d-flex flex-row align-items-center custom-border bg-transparent">
                        <img :src="require('@/assets/homepage/newsarticle_three.jpeg')"
                            class="card-img flex-shrink-0 rounded-3 me-4" alt="Sample Image"
                            style="width: 120px; height: auto;">
                        <div class="card-body">
                            <h5 class="text-warning">DESIGNING</h5>
                            <h4 class="card-title">Innovative designs for a competitive edge.</h4>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card d-flex flex-row align-items-center custom-border bg-transparent">
                        <img :src="require('@/assets/homepage/newsarticle_four.jpeg')"
                            class="card-img flex-shrink-0 rounded-3 me-4" alt="Sample Image"
                            style="width: 120px; height: auto;">
                        <div class="card-body">
                            <h5 class="text-warning">FACEBOOK</h5>
                            <h4 class="card-title">Facebook Ads: Do they still work in 2024?</h4>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-4">
            <button class="btn btn-outline-warning px-5 py-2">Load more</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsArticle',
};
</script>

<style scoped>
/* General Styles */
.main {
    font-family: 'Outfit', sans-serif;
    background-color: #111204;
    /* Updated background color */
    color: #ffffff;
    /* Default text color for contrast */
}

.text-white {
    color: #ffffff;
    /* White text color */
}

.card {
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: scale(1.02);
}

.card-img {
    object-fit: cover;
}

/* Custom Border Styling */
.custom-border {
    border: 1px solid #ffffff;
    /* White border */
    border-radius: 10px;
    /* Rounded corners */
    padding: 15px;
    /* Add spacing inside the card */
}
</style>
