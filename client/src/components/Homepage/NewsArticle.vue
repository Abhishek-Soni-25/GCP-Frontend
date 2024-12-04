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
                        <img :src="require('@/assets/homepage/News_&_Articles/newsarticle_one.jpeg')"
                            class="card-img flex-shrink-0 rounded-3 me-4" alt="Sample Image">
                        <div class="card-body">
                            <h5 class="text-warning">BRANDING</h5>
                            <h4 class="card-title">What is branding, and why do we need it?</h4>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card d-flex flex-row align-items-center custom-border bg-transparent">
                        <img :src="require('@/assets/homepage/News_&_Articles/newsarticle_two.jpeg')"
                            class="card-img flex-shrink-0 rounded-3 me-4" alt="Sample Image">
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
                        <img :src="require('@/assets/homepage/News_&_Articles/newsarticle_three.jpeg')"
                            class="card-img flex-shrink-0 rounded-3 me-4" alt="Sample Image">
                        <div class="card-body">
                            <h5 class="text-warning">DESIGNING</h5>
                            <h4 class="card-title">Innovative designs for a competitive edge.</h4>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card d-flex flex-row align-items-center custom-border bg-transparent">
                        <img :src="require('@/assets/homepage/News_&_Articles/newsarticle_four.jpeg')"
                            class="card-img flex-shrink-0 rounded-3 me-4" alt="Sample Image">
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
            <button class="btn btn-outline-warning px-5 py-2">LOAD MORE</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsArticle',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Love+Light&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.main {
    font-family: 'Outfit', sans-serif;
    background-color: #111204;
    color: #ffffff;
}

.section-one,
.card-title {
    font-family: 'Outfit', sans-serif;
}

.card-text {
    font-family: 'Outfit', sans-serif;
    font-weight: 400;
    color: #ABAAB2
}



.text-warning {
    color: #F0E002 !important;
    font-family: 'Outfit', sans-serif !important;

}

.btn {
    color: #F0E002 !important;
    font-family: 'Outfit', sans-serif !important;
    border: 1px solid #F0E002;

}

.btn:hover {
    color: #000 !important;
    background-color: #F0E002;
}

.text-white {
    color: #ffffff;
}

.card {
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: stretch;
}

.card:hover {
    transform: scale(1.02);
}

.card-img {
    object-fit: cover;
    height: 125px;
    width: 130px;
    border-radius: 10px 0 0 10px;
}

.card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
}

.custom-border {
    border: 1px solid #ffffff;
    border-radius: 10px;
    overflow: hidden;
}

@media (max-width: 768px) {
    .card {
        width: auto;
        height: auto;
    }

    .card-img {
        height: 305px;
        width: 135px;

    }
}

@media (width: 1024px) {
    .card-img {
        height: 175px;
        width: 160px;
    }
}
</style>
