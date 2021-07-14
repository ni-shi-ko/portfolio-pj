<template>
  <div>
    <Header />
    <div class="collections">
      <h1 class="title">-COLLECTION-</h1>
      <div class="collection-text">
        <p>2020~2021</p>
        <p>[:Color]</p>
        <p>初めてのブランドとしてのコレクションです。"Color"彩りをテーマにパターンを制作。<br>
           日常に刺激を。
        </p>
      </div>
       <div class="category-nav">
    <label>
      <input type="radio" v-model="category" value=""> All
    </label>
    <label>
      <input type="radio" v-model="category" value="women"> WOMEN
    </label>
    <label>
      <input type="radio" v-model="category" value="men"> MEN
    </label>
  </div>
      <ul class="collection-imgs">
        <li v-for="image in filterByCategory" :key="image.index" class="image">
          <img :src="image.src" alt="">
        </li>       
      </ul>
    </div>
 
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
  data() {
    return {
      category:"",
      images:[
         {
           index:1,
           src: require ( "../assets/img/nara.jpg"),
           category: "women"},
         {
           index:2,
           src: require ("../assets/img/tokyostation.jpg"),
           category: "men"},
          {
            index:3,
            src: require ("../assets/img/nara.jpg"),
            category: "women"},  
          {
            index:4,
            src: require ("../assets/img/nara.jpg"),
            category: "women"},
          {
            index:5,
            src: require ("../assets/img/tokyostation.jpg"),
            category: "men"},
          {
            index:5,
             src: require ("../assets/img/tokyostation.jpg"),
            category: "men"},
          {
            index:6,
            src: require ("../assets/img/nara.jpg"),
            category: "women"},
          {
            index:7,
            src: require ("../assets/img/nara.jpg"),
            category: "women"},
          {
            index:8,
            src: require ("../assets/img/tokyostation.jpg"),
            category: "men"},   
          {
            index:9,
            src: require ("../assets/img/tokyostation.jpg"),
            category: "men"},
          {
            index:10,
            src: require ("../assets/img/nara.jpg"),
            category: "women"},
          {
            index:11,
            src: require ("../assets/img/tokyostation.jpg"),
            category: "men"},
          {
            index:12,
            src: require ("../assets/img/nara.jpg"),
            category: "women"},
          {
            index:13,
            src: require ("../assets/img/tokyostation.jpg"),
            category: "men"},
          {
            index:14,
            src: require ("../assets/img/tokyostation.jpg"),
            category:"men"
          },
          {
            index:15,
            src: require ("../assets/img/nara.jpg"),
            category:"women"
          },
          {
            index:16,
            src: require ("../assets/img/nara.jpg"),
            category:"women"
          },
          {
            index:17,
            src: require ("../assets/img/tokyostation.jpg"),
            category:"men"
          }
      ]
    };
  },
  computed: {
    filterByCategory: function () {
      return this.images.filter(
        (image) => !image.category.indexOf(this.category)
      );
    }
  },
  components:{
    Header,
    Footer
  }
}
</script>

<style>
.collection-text {
  font-size: 15px;
  margin-bottom: 5%;
}
.collection-text p {
  margin-bottom: 2%;
}
.collection-text p:nth-child(2) {
  font-weight: bold;
}
.collections {
  width: 80%;
  margin: 0 auto;
}
.category-nav {
  text-align: center;
 padding-bottom: 20px;
}
.category-nav label {
  background: #000;
  color: #fff;
  padding:1% 5%;
  margin: 10px;
  cursor: pointer;
}
.category-nav input[type="radio"] {
  opacity:0;
  appearance: none;
  position: absolute;
}
.collection-imgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.image{
    list-style: none;
     width: 30%;
    margin: 20px 10px;
  }
.image img {
   width: 100%;
   height: 500px;
   display: block;
   overflow: hidden;
}  
</style>