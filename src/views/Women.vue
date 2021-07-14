<template>
  <div>
    <Header />
    <div class="store-title">
    <router-link to="/home" class="new">-Women-</router-link>
    </div>
     <div class="move">
     <router-link to="/new" class="move-list">-NEW ARRIVALS-</router-link>
     <router-link to="/men" class="move-list">-MEN-</router-link>
     <router-link to="/sale" class="move-list">-SALE-</router-link>
   </div>

    <Sidenav />
    <div class="store">
      <ul class="store-list">
        <li v-for="(image, index) in images" :key="index" class="store-img">
          <img :src="image" alt="">
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Sidenav from "../components/Sidenav.vue"
import Footer from "../components/Footer.vue"
export default {
  data() {
    return {
      images :[
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      require("../assets/img/sea.png"),
      ]
    }
  },
  components: {
    Header,
    Sidenav,
    Footer
  }
}
</script>

<style scoped>
  .store {
    margin-left: 15%;
    width: 80%;
    margin-bottom: 3%;
  }
  .move {
    display: flex;
    margin-bottom: 2%;
  }
 .store-list {
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
 } 
.store-img {
  list-style: none;
  width: 25%;

}
.store-img img {
  display: block;
  width: 90%;
  margin-bottom: 10px;
}
</style>