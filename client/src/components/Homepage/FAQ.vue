<template>
    <div class="faq-main">
        <div class="faq">
            <div class="faq-title">
                <h1>FAQ's</h1>
            </div>
            <div class="faq-description">
                Providing answers to your questions
            </div>
            <div class="accordion">
                <div v-for="(item, index) in faqs" :key="index" class="accordion-item">
                    <div class="accordion-header" @click="toggleAccordion(index)">
                        <h2>{{ item.question }}</h2>
                        <div class="arrow-icon">
                            <span class="arrow" :class="activeIndex === index ? 'up' : 'down'"></span>
                        </div>
                    </div>
                    <div class="accordion-content" :style="{ maxHeight: activeIndex === index ? '200px' : '0' }">
                        <p>{{ item.answer }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="user-faq">
            <div class="user-form">
                <form @submit.prevent="handleSubmit">
                    <textarea name="" id="" autocomplete="off" placeholder="Ask us what you want to know"></textarea>


                </form>
            </div>
            <div class="form-details">
                <div class="form-description">
                    <h4>What do you want to know? We will answer within 48 hours.</h4>
                </div>

                <!-- Submit button -->
                <button type="submit" class="submit-button">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FAQ",
    data() {
        return {
            activeIndex: null,
            faqs: [
                { question: "What is Vue.js?", answer: "Vue.js is a progressive JavaScript framework for building UI." },
                { question: "How does reactivity work?", answer: "Vue tracks dependencies and updates efficiently." },
                { question: "Is Vue.js suitable for large projects?", answer: "Yes, Vue can be scaled with Vuex and Vue Router." },
                { question: "How can I use Vue with other libraries?", answer: "Vue works seamlessly with other libraries and APIs." },
            ],
        };
    },
    methods: {
        toggleAccordion(index) {
            this.activeIndex = this.activeIndex === index ? null : index;
        },
        handleSubmit() {
            alert("Your question has been submitted!");
        }
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Love+Light&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    margin: 0;
    padding: 0;
    font-family: "Outfit", sans-serif;
}

.faq-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
}

.faq .faq-title h1 {
    font-weight: 700;
    text-align: center;
}

.faq .faq-description {
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
}

.accordion {
    width: 100%;
    max-width: 600px;
    margin: auto;
    border-radius: 70px;
    box-sizing: border-box;
}

.accordion-item {
    border: 1px solid #ddd;
    margin-bottom: 10px;
    border-radius: 20px;
    overflow: hidden;
    font-family: Poppins;
    background-color: #111204;
    padding: 2%;
}

.accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: #111204;
    cursor: pointer;
    min-height: 50px;
    color: #fff;
    border-radius: 10px;
}

.accordion-header h2 {
    font-size: 16px;
    margin: 0;
    font-weight: 500;
}

.arrow-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #F0E002;
    border-radius: 50%;
    padding: 2%
}

.arrow {
    display: block;
    width: 10px;
    height: 10px;
    border: solid black;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.arrow.up {
    transform: rotate(-135deg);
}

.arrow.down {
    transform: rotate(45deg);
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    padding: 0 15px;
    background-color: #111204;
    color: #fff;
    border-radius: 10px;
    border-top: none;
}

.accordion-content p {
    margin: 10px 0;
    font-weight: 400;
    color: #8C8888;
}

.user-faq {
    width: 100%;
    max-width: 600px;
    margin: auto;
    border-radius: 70px;
    box-sizing: border-box;
    padding: 2%;
}

.user-faq .user-form form textarea {
    width: 85%;
    height: 10vh;
    max-width: 600px;
    resize: none;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 10px;
    color: #000;
    font-family: Poppins, sans-serif;
}

.user-faq .user-form form {
    width: 100%;
    display: flex;
    justify-content: center;
}

.form-description h4 {
    font-size: 16px;
    text-align: center;
    color: #8C8888;
    margin-top: 10px;
    text-wrap: wrap;
}

.form-details {
    width: 85%;
    display: flex;
    justify-content: space-between;
}


.submit-button {
    width: 100%;
    max-width: 150px;
    padding: 10px;
    margin-top: 15px;
    background-color: #F0E002;
    color: #111204;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
    font-family: Outfit;
}



@media (max-width: 768px) {
    .faq-main {
        padding: 10px;
    }

    .accordion-header h2 {
        font-size: 14px;
    }

    .submit-button {
        height: 7vh;
    }
}
</style>
