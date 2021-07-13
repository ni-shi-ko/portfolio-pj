<template>
  <div>
    <Header />
    <p class="sale">-Sale-</p>
    <div class="move">
      <p @click="$router.push({name: 'New'})">-NEW ARRIVALS-</p>
     <p @click="$router.push({name: 'Women'})">-Women-</p>
     <p @click="$router.push({name: 'Men'})">-MEN-</p>   
     </div>

    <Sidenav />
    <div class="store">
      <ul class="store-list">
        <li v-for="(image, index) in images" :key="index" class="store-img">
          <img :src="image" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Sidenav from "../components/Sidenav.vue"
export default {
  data() {
    return {
      images :[
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      require("../assets/img/fashion.jpg"),
      ]
    }
  },
  components: {
    Header,
    Sidenav
  }
}
</script>

<style scoped>
  .store {
    margin-left: 15%;
    width: 80%;
  }
  .sale {
    font-size: 20px;
    margin-left: 1%;
    margin-bottom: 3%;
  }
  .move {
    display: flex;
    margin-bottom: 2%;
  }
  .move p {
    margin-left: 2%;
  }
  .move p:hover {
    transform: scale(1.2);
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