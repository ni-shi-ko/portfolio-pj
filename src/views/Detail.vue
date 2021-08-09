<template>
  <div >
    <Header />
    <div class="detail">
    <div class="detail-wrap">
    <h1 class="title about-title">-BRAND PROFILE-</h1>
    <div class="about-detail">
      <p class="inner-title"> 
        2020年にAUTUMN/WINTER COLLECTIONより、 Coloris(クロリ) を設立。
      </p>
      <p>
        <span>”普段の日常に彩りを”</span><br>
        着ていただいた皆様がいつもと違う日常を過ごせるようなモノをデザインし、<br>
        繊維王国である福井県で企画、デザイン、素材調達、裁断、縫製、全てを行っており、<br>
        made in fukuiを全国へ、そして世界へと発信します。
      </p>
    </div>
    </div>
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
.detail-wrap {
  border: 1px solid #000;
  width: 60%;
  margin: 9% auto;
}
.about-title {
  margin-top: 15%;
  margin-bottom: 5%;
}
  .about-detail {
    text-align: center;
    padding-bottom:17% ;
  }
  .inner-title  {
    font-size: 20px;
    margin-bottom: 7%;
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
   @media screen and (max-width: 768px)  {
     .detail-wrap {
       width: 90%;
     }
   }
</style>
