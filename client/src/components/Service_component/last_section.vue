<template>
    <div id="app">
        <!-- Section 1 -->
        <section style="background-color: black; padding: 30px 20px;">
            <!-- Top Logos -->
            <div
                style="display: flex; justify-content: center; align-items: center; gap: 90px; margin-bottom: 30px; flex-wrap: wrap;">
                <div style="display: flex; align-items: center; gap: 10px; color: white;">
                    <div>
                        <img src="@/assets/slack.png" alt="Slack" style="width: 40px; height: 40px;" />
                    </div>
                    <p style="margin: 0; font-size: 20px; margin-left: 10px;">Slack</p>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; color: white;">
                    <div>
                        <img src="@/assets/dropbox.png" alt="Dropbox" style="width: 40px; height: 40px;" />
                    </div>
                    <p style="margin: 0; font-size: 20px; margin-left: 10px;">Dropbox</p>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; color: white;">
                    <div>
                        <img src="@/assets/shopify.png" alt="Shopify" style="width: 40px; height: 40px;" />
                    </div>
                    <p style="margin: 0; font-size: 20px; margin-left: 10px;">Shopify</p>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; color: white;">
                    <div>
                        <img src="@/assets/blinkit.png" alt="Blinkit" style="width: 40px; height: 40px;" />
                    </div>
                    <p style="margin: 0; font-size: 20px; margin-left: 10px;">Blinkit</p>
                </div>
            </div>

            <!-- Milk Section -->
            <div
                style="display: flex; align-items: center; justify-content: center; padding: 40px; gap: 20px; background: linear-gradient(90deg, pink 50%, #fdf1c1 50%); border-radius: 20px; flex-wrap: wrap; width: 80%; margin: 0 auto; justify-content: center;">
                <div style="flex: 1; text-align: center; max-width: 50%;">
                    <img src="@/assets/milk.png" alt="Milk"
                        style="width: 100%; max-width: 400px; border-radius: 20px;" />
                </div>
                <div style="flex: 1; text-align: left; max-width: 50%;">
                    <h2
                        style="font-size: 42px; font-weight: bold; margin-left: 50px; color: black; margin-bottom: 20px;">
                        Quality You Trust, <br>Purity You Deserve
                    </h2>
                    <p style="font-size: 18px; color: #555; margin-bottom: 20px; margin-left: 50px; width: 90%;">
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                    </p>
                    <button
                        style="background-color: #ffd700; border: none; margin-left: 50px; padding: 10px 20px; font-size: 18px; font-weight: bold; color: black; cursor: pointer; border-radius: 5px;">
                        Add to Cart
                    </button>
                </div>
            </div>

        </section>

        <!-- Section 2 -->
        <section
            style="background-color: white; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
            <!-- Cookies Section -->
            <div style="flex: 1; text-align: center;">
                <img src="@/assets/cookies.png" alt="Cookies"
                    style="width: 100%; max-width: 600px; border-radius: 10px; margin-left: 10px; margin-top: -30px;" />
            </div>

            <!-- Custom Design Section -->
            <div style="flex: 1; max-width: 400px; margin-right: 190px; margin-top: -80px;">
                <h2
                    style="font-size: 40px; font-weight: bold; color: black; max-width: 400px; text-align: left; margin-bottom: 30px;">
                    Custom Design<br />And Print Services
                </h2>
                <div
                    style="display: flex; flex-direction: column; gap: 20px; align-items: center; margin-bottom: 30px;">
                    <div
                        style="display: flex; align-items: center; justify-content: space-between; width: 100%; background-color: black; border-radius: 10px; padding: 10px 15px; color: white;">
                        <div style="text-align: left;">
                            <p style="font-size: 16px; font-weight: bold; margin: 0;">Burger Box</p>
                            <button
                                style="background-color: transparent; border: none; color: white; font-size: 12px; margin-top: 5px; text-decoration: underline; cursor: pointer;">
                                View More...
                            </button>
                        </div>
                        <img src="@/assets/burger.jpg" alt="Burger Box"
                            style="width: 70px; height: 70px; border-radius: 5px;" />
                    </div>
                    <div
                        style="display: flex; align-items: center; justify-content: space-between; width: 100%; background-color: black; border-radius: 10px; padding: 10px 15px; color: white;">
                        <div style="text-align: left;">
                            <p style="font-size: 16px; font-weight: bold; margin: 0;">Pizza Box</p>
                            <button
                                style="background-color: transparent; border: none; color: white; font-size: 12px; margin-top: 5px; text-decoration: underline; cursor: pointer;">
                                View More...
                            </button>
                        </div>
                        <img src="@/assets/pizza.jpg" alt="Pizza Box"
                            style="width: 70px; height: 70px; border-radius: 5px;" />
                    </div>
                </div>
                <div style="text-align: center;">
                    <button
                        style="background-color: #ffd700; border: none; padding: 10px 20px; font-size: 16px; font-weight: bold; color: black; cursor: pointer; border-radius: 5px; margin-right: 290px;">
                        View All
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "last_section",
};
</script>

<style>
body {
    margin: 0;
    font-family: "Arial", sans-serif;
}
</style>