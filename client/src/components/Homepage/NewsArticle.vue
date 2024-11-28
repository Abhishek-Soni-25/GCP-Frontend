<template>
    <div class="main">
        <div class="section-one">
            <div class="blog">
                <h3>BLOGS</h3>
            </div>
            <div class="news">
                <h1>News & Articles</h1>
            </div>
            <div class="tagline">
                <h4>Best Articles to get started</h4>
            </div>
        </div>

        <div class="section-two">

            <!-- First-card -->
            <div class="card-one">
                <div class="image-one">
                    <img :src="require('./newsarticle_one.jpeg')" alt="Sample Image" />
                </div>
                <div class="image-one-description">
                    <h5>BRANDING</h5>
                    <h4>What is the branding, and what we need it?</h4>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, excepturi</h4>
                </div>
            </div>

            <!-- Second-card -->
            <div class="card-two">
                <div class="image-two">
                    <img :src="require('./newsarticle_two.jpeg')" alt="Sample Image" />
                </div>
                <div class="image-two-description">
                    <h5>TIKTOK</h5>
                    <h4>What is the branding, and what we need it?</h4>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, excepturi</h4>
                </div>
            </div>
        </div>





        <div class="section-three">
            <!-- Third-card -->
            <div class="card-three">
                <div class="image-three">
                    <img :src="require('./newsarticle_three.jpeg')" alt="Sample Image" />
                </div>
                <div class="image-three-description">
                    <h5>DESIGNING</h5>
                    <h4>What is the branding, and what we need it?</h4>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, excepturi</h4>
                </div>
            </div>

            <!-- Fourth-card -->
            <div class="card-four">
                <div class="image-four">
                    <img :src="require('./newsarticle_four.jpeg')" alt="Sample Image" />
                </div>
                <div class="image-four-description">
                    <h5>FB</h5>
                    <h4>What is the branding, and what we need it?</h4>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, excepturi</h4>
                </div>
            </div>
        </div>

        <div class="load-more-button">
            <button>Load more</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsArticle',


}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Love+Light&family=Outfit:wght@100..900&display=swap');

body {
    margin: 0;
    padding: 0;
}

.main {
    background-color: black;
    height: auto;
    width: auto;
    padding-bottom: 2%;

}

.section-one {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.section-one .blog h3 {
    width: auto;
    height: auto;
    color: blue;
}

.section-one .news h1,
h4 {
    font-family: "Outfit", sans-serif;
    color: #fff;
}

.section-two {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: auto;
    width: auto;
    margin-top: 1%
}

.section-two .card-one {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: auto;
    width: auto;
    border-radius: 20px;
    border: 1px solid whitesmoke;
}


.section-two .card-one .image-one img {
    position: relative;
    height: 15vh;
    width: 90%;
    border-radius: 20px
}

.section-two .card-one .image-one h5 {
    color: #fff;

}

.section-two .card-one .image-one-description h5 {
    color: blue;

}

.section-two .card-two {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: auto;
    width: auto;
    border-radius: 20px;
    border: 1px solid whitesmoke;
}


.section-two .card-two .image-two img {
    position: relative;
    height: 15vh;
    width: 90%;
    max-width: 300px;
    border-radius: 20px
}

.section-two .card-two .image-two h5 {
    color: #fff;
}

.section-two .card-two .image-two-description h5 {
    color: blue;
}

.section-three {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: auto;
    width: auto;
    margin-top: 2%
}

.section-three .card-three {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: auto;
    width: auto;
    border-radius: 20px;
    border: 1px solid whitesmoke;
}


.section-three .card-three .image-three img {
    position: relative;
    height: 15vh;
    width: 90%;
    max-width: 300px;
    border-radius: 20px
}

.section-three .card-three .image-three h5 {
    color: #fff;
}

.section-three .card-three .image-three-description h5 {
    color: blue;
}

.section-three .card-four {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: auto;
    width: auto;
    border-radius: 20px;
    border: 1px solid whitesmoke;
}


.section-three .card-four .image-four img {
    position: relative;
    height: 15vh;
    width: 90%;
    max-width: 300px;
    border-radius: 20px
}

.section-three .card-four .image-four h5 {
    color: #fff;
}

.section-three .card-four .image-four-description h5 {
    color: blue;
}

.load-more-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;

}

.load-more-button button {
    padding: 20px 40px;
    border: 1px solid blue;
    border-radius: 10%;
    color: blue;
    background: transparent;
    outline: none;
    font-family: "Outfit", sans-serif;
}

@media (max-width: 768px) {


    .section-two,
    .section-three {
        flex-direction: column;
        margin: 3%;
        width: cover;
        margin-top: 2%;

    }

    .section-two .card-one,
    .section-two .card-two {
        width: 90vw;
        flex-direction: column;
        text-align: center;
        margin-bottom: 3%;
    }

    .section-two .card-one .image-one img,
    .section-two .card-two .image-two img,
    .section-three .card-three .image-three img,
    .section-three .card-four .image-four img {

        width: 90vw;
        height: fit-content;

    }


    .section-three .card-three,
    .section-three .card-four {
        width: 90vw;
        flex-direction: column;
        text-align: center;
        margin-bottom: 4%;
    }

    .load-more-button {
        margin-bottom: 5%;
    }


}
</style>