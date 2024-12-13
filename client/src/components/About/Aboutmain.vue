<template>
  <div class="about">
    <!-- <img src="path/to/your/image.png" class="floating-image">-->
    <div class="elliptical-gradient"></div>
    <!-- about Section -->
      <div class="about-section">
        <span class="text-wrapper-4">About</span><br />
        <span class="text-wrapper-3">Innovating packaging, sustaining tomorrow.<i class="fa fa-star floating-star-1"></i></span>
        <p class="about-txt">
          <i class="fa fa-star floating-star-3"></i>
          Discover, design and buy packaging that respects the planet
          <i class="fa fa-star floating-star-2"></i>
        </p>
      </div>
      <div class="box-container">
        <div class="box">
          <div class="space">
            <img class="p-photo" alt="Ai generated" src="../../assets/About/person1.png" />
          </div>
          <div class="text-wrapper">Pooja Gupta</div>
          <div class="text-wrapper-2">Custom SEO Services</div>
          <p class="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div class="box-m">
          <div class="space">
            <img class="p-photo" alt="Ai generated" src="../../assets/About/person1.png" />
          </div>
          <div class="text-wrapper">Pooja Gupta</div>
          <div class="text-wrapper-2">Custom SEO Services</div>
          <p class="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div class="box">
          <div class="space">
            <img class="p-photo" alt="Ai generated" src="../../assets/About/person1.png" />
          </div>
          <div class="text-wrapper">Pooja Gupta</div>
          <div class="text-wrapper-2">Custom SEO Services</div>
          <p class="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
  </div>
  <div class="vm">
    <div class="vm-box-container">
      <div class="vm-box"><div class="box-top"><img class="vm-image" alt="Vision" src="../../assets/About/vision.png" /></div>
        <p class="vm-box-txt">Our Vision</p>
        <p class="p2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div class="vm-box">
        <div class="box-top"><img class="vm-image" alt="Mission" src="../../assets/About/target.png" /></div>
          <p class="vm-box-txt">Our Mission</p>
          <p class="p2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
      </div>
    </div>
    <div class="vm-main">
      <p class="vm-txt-head">Excellence In Printing And Packaging</p>
      <p class="vm-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
      <div class="vm-partner">
        <p>Our Partners:</p>
        <p><img class="partner-icon" src="../../assets/About/target.png">MC Donald’s</p>
        <p><img class="partner-icon" src="../../assets/About/target.png">Nestle</p>
        <p><img class="partner-icon" src="../../assets/About/target.png">Organic Food</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'about',
};
</script>

<style scoped>
  /* about Section Styles */
  .about {
    background: #000000;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    box-sizing: border-box;
    align-items: center;
    position:relative;
  }

  .elliptical-gradient { 
    position: absolute; /* Absolute positioning within the parent */ 
    top: 0px; /* Adjust top position relative to the parent */ 
    left: 0%; /* Adjust left position relative to the parent */ 
    width: 100%; /* Width of the gradient area */ 
    height: 100%; /* Height of the gradient area */ 
    background: radial-gradient(ellipse 25vw 25vw at 50% 23%, #A1CDFF99, #000000); 
    z-index: 3; /* Ensure it appears on top */ 
    opacity: 0.6; /* Optional: Set opacity for blending effect */ 
  }

  .floating-star-1 { 
    position: absolute;
    right: 0px;
    top: -30px;
    font-size: 40px; /* Size of the icon */ 
    color: gold; /* Color of the icon */ 
    z-index: 10; /* Ensure it is on top */ 
  }
  .floating-star-2 { 
    position: absolute;
    right: 0px ;
    font-size: 15px; /* Size of the icon */ 
    color: gold; /* Color of the icon */ 
    z-index: 10; /* Ensure it is on top */ 
  }
  .floating-star-3 { 
    position: absolute;
    left: 0px;
    font-size: 11px; /* Size of the icon */ 
    color: gold; /* Color of the icon */ 
    z-index: 10; /* Ensure it is on top */ 
  }

  .about-section{ 
    width: 100%; 
    height: 24vw;
    background: #11120400;
    opacity: 0px;
    padding: 1px;
    z-index: 10;
    margin-top: 60px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    align-self: center;
    justify-content: space-between;
    justify-content: center;
    padding: 1px;
    }

  .text-wrapper-3 {
    font-size: 40.1px;
    color: #ffffff;
    font-family: Outfit;
    font-weight: 700;
    line-height: 65.77px;
    letter-spacing: -0.03em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    position: relative; /* Relative positioning for the parent */
  }

  .text-wrapper-4 {
    font-size: 40.1px;
    color: #F0E002;
    font-family: Outfit;
    text-decoration: underline;
    font-weight: 500;
    line-height: 65.77px;
    letter-spacing: -0.03em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .about-txt{
    font-family: Outfit;
    color: #FFFFFFCC;
    width: 100%;
    max-width: 550px;
    font-size: 16.95px;
    font-weight: 400;
    line-height: 15.73px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    padding: 40px;
    position: relative;
  }
  
  /* Person BOX */
  .box-container {
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    z-index: 10;
    column-gap: 3dvw;
    justify-content: space-between; /* Distributes the space between the boxes */ 
    align-items: center; /* Aligns items at the top of the container */ 
  }
  
  .box, .box-m{
    width: 250px;
    background-color: #D9D9D9;
    border-radius: 20px;
    text-align: center;
  }

  .box-m{
    margin-top: 60px;
  }

  .p-photo{
    top: -100px;
    right: 20px;
    width: 200px;
    position: absolute;
  }

  .space{ 
    border-radius: 20px;
    height: 159.05px;  
    background-color: #D9D9D9;
    position: relative;   
  }

  .text-wrapper {
    color: #000000;
    background-color: #B9B9B9;
    font-family: Outfit;
    font-size: 23px;
    font-weight: 500;
    letter-spacing: 0.01em;
    text-align: center;
    padding-block: 5px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .text-wrapper-2 {
    color: #000000;
    font-family: Outfit;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0.01em;
    text-align: center;
    padding-top: 4px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  .p{
    color: #4e4e4e;
    font-family: Outfit;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.01em;
    padding-inline: 10px;
    padding-bottom: 0px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
  
  /*vision & Mission */
    .vm{
      display: flex;
      flex-direction: row;
      justify-content: center; 
    }

    .vm-box-container{
      display: flex;
      flex-direction: row;
      column-gap: 1.5vw;
      padding-top: 80px;
      padding-left: 2vw;
      padding-bottom: 30px;
      padding-right: 1vw;
    }

    .vm-main{
      padding-top: 80px;
      padding-left: 1vw;
      padding-bottom: 30px;
      padding-right: 2vw;
    }

    .vm-txt-head{
      color: #000000;
      font-family: Outfit;
      font-size: 46px;
      font-weight: 700;
      letter-spacing: 0.02em;
      line-height: 48px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }
    
    .vm-txt{
      color: #4E4E4E;
      font-family: Outfit;
      font-size: 23px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.02em;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }

    .vm-partner{
      display: flex;
      flex-direction: row;
      border-top: 2px dashed black;
      padding-top: 7px;
      border-color: #9593A4;
      color: #000000;
      column-gap: 0.5vw;
      font-family: Outfit;
      font-size: 22px;
      line-height: 30px;
      font-weight: 700;
      text-align: left;
      align-content: center;
      align-items: center;
      align-self: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }

    .vm-box{
      background-color: #000000;
      border-radius: 20px;
      width: 300px;
      position: relative;
      text-align: center;
      align-content: center;
      align-items: center;
    }

    .box-top {
      width: 100.03px;
      height: 100.03px;
      top: -50px;
      right: 100px;
      background-color: #D9D9D9;
      box-shadow: 0px 3.52px 3.52px 0px #00000040;
      box-shadow: 0px 3.52px 3.52px 0px #00000040 inset;
      border-radius: 100%;
      position: absolute;
      z-index: 100;
    }

    .partner-icon{ width: 30px; height: 30px; }

    .vm-image{
      top: 18px;
      left: 18px;
      position: absolute;
      height: 65%;
      width: 65%;
    }

    .vm-box-txt{
      width: 100%;
      margin-top: 60px;
      color: #FFFFFF;
      font-family: Outfit;
      font-size: 30.57px;
      font-weight: 500;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }
    
    .p2{
      color: #9593A4;
      font-family: Outfit;
      font-size: 17.05px;
      font-weight: 400;
      padding-inline: 30px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    }

  /* Responsive Design */
  @media (min-width: 921px) and (max-width: 1150px) {
    .vm-box{  width: 200px;  } 
    .box-top{  right: 50px;  }
  }

  @media (min-width: 800px) and (max-width: 920px) {
    .vm-box{  width: 200px;  } 
    .box-top{  right: 50px;  }
    .vm-txt-head{ font-size: 35px; }
    .vm-txt{ font-size: 20px; }
    .vm-main{ padding-top: 30px;  }
    .vm-partner{  flex-direction: column; width: 60%; }
  }

  @media (max-width: 799px) {
    .about { padding: 8px; }
    .elliptical-gradient {  background: radial-gradient(ellipse 70vw 70vw at 50% 23%, #A1CDFF99, #111204);  }
    .text-wrapper-4 { font-size: 42px; line-height: 43.77px;  /* Adjust if necessary */ } 
    .text-wrapper-3 { font-size: 45px; line-height: 44.77px;  /* Adjust if necessary */ }
    .about-txt{ padding-bottom: 10px; }
    .about-section { width: 100%;  flex-direction: column; }
    .box-container{ flex-direction: column; padding-top: 0px;}
    .box, .box-m{ margin-top: 100px; }
    .vm{ flex-direction: column; text-align: center; justify-content: center; }
    .vm-box-container{ text-align: center;  justify-content: center;   }
    .vm-main{ justify-content: center; align-self: center; padding-top: 20px; padding-left:20px; }
    .vm-partner{  flex-direction: row;  width: 90%; }
  }

  @media (max-width: 450px){
    .box-container{ flex-direction: column; padding-top: 0px;}
    .vm { flex-direction: column; text-align: center; justify-content: center; }
    .vm-box-container { 
      flex-direction: column; 
      justify-content: center; 
      align-items: center; /* Ensures content inside is centered horizontally */ 
      margin: 0 auto; /* Centers the container itself */ 
      padding-left: 0; /* Removes padding to ensure proper centering */ 
      gap: 60px; 
    }    
    .vm-box{   text-align: center;  justify-content: center;  align-content: center;}
    .vm-partner{  flex-direction: column; }

  }
</style>