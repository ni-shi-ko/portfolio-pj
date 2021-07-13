<template>
  <div class="detail">
    <Header />
    <h1 class="title">-BRAND PROFILE-</h1>
    <div class="about-detail">
      <p class="inner-title"> 
        2020年にSPRING/SUMMER COLLECTIONより、N.Koを設立。
      </p>
      <p>
        <span>”普段の日常に彩りを”</span><br>
        着ていただいた皆様がいつもと違う日常を過ごせるようなモノをデザインし、<br>
        繊維王国である福井県で企画、デザイン、素材調達、裁断、縫製、全てを行っており、<br>
        made in fukuiを全国へ、そして世界へと発信します。
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style>
  .about-detail {
    text-align: center;
    padding-bottom:17% ;
  }
  .inner-title  {
    font-size: 20px;
    margin-bottom: 3%;
  }
  .about-detail p:not(:nth-child(1)) {
    font-size: 20px;
    line-height: 2.0;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  span {
    font-family: 'Courier New', Courier, monospace;
    font-size: 25px;
  }
</style>
