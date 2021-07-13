<template>
  <div>
    <Header />
    <div id="main-news">
      <div class="title">-News-</div>
      <div class="border"></div>
    </div>
    <div class="news-card">
      <News v-for="(data, index ) in newses" :key="index" :news="data.news" :img="data.img" />
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
  .news-card {
      display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 5%;
  }

</style>