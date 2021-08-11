<template>
  <div>
    <Header />
    <div id="main-news">
      <div class="news-title">-News-</div>
      <div class="news-border"></div>
    </div>
    <div class="news-card">
      <News v-for="(data, index ) in newses" :key="$five-{index}" :news="data.news" :img="data.img" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import News from "../components/News.vue"
import Footer from "../components/Footer.vue"
export default {
  data() {
   return {
      newses: [
     {
       news: "ブランド設立"
     },
     {
       news:"Blog.01"
     },
     {
       news:"2020~2021 collection"
     }
    ],
   }
  },
  components :{
    Header,
    News,
    Footer
  }
}
</script>

<style>
.news-border {
  border-bottom: 1px solid #000000;
  margin: 0 auto;
  width: 40%;
}
.news-card {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 6% 0;
}
.news-title {
  margin: 4% 0;
  text-align: center;
  color: #000;
  font-size: 30px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
 @media screen and (max-width: 768px)  {
   .news-card {
     text-align: center;
     margin: 0;
   }
 }

</style>