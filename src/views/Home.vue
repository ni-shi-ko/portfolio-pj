<template>
  <div id="app">
    <Header />
    <Top />
    <div class="border"></div>
    <Consept />
   <div class="border"></div> 
   
   <div class="news">
     <router-link to="/mainnews" class="title">-News-</router-link>
     <div class="news-wrap">
         <ul>
             <li>2021/6/1 2021 collection</li>
             <li>2021/5/6 Blog.01</li>
             <li>2020/10/8 ブランド設立</li>
         </ul>
     </div>
 </div>

<div class="border"></div>
   <Items />

    <Footer />
   
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Items from "../components/Items.vue"
import Consept from "../components/Consept.vue"
import Top from "../components/Top.vue"
export default {
  components: {
    Header,
    Top,
    Items,
    Consept,
    Footer
  }
}
</script>

<style>
.news {
  text-align: center;
  padding: 3% 0;
}

.news-wrap {
  margin-top: 2%;
  line-height: 3.0;
}
 @media screen and (max-width: 768px)  {
   .news {
     margin: 3% 0;
   }
 }
</style>