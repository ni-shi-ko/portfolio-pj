<template>
  <div class="collections">
    <Header />
      <h1 class="title">-COLLECTION-</h1>
      <div id="collection-main"></div>
      <div class="collection-text">
        <p>2020~2021</p>
        <p>[:Color]</p>
        <p>初めてのブランドとしてのコレクションです。"Color"彩りをテーマに作成しました。</p>
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
           src: require ( "../assets/img/wcollection1.jpg"),
           category: "women"},
         {
           index:2,
           src: require ("../assets/img/collection11.jpg"),
           category: "men"},
          {
            index:3,
            src: require ("../assets/img/wcollection2.jpg"),
            category: "women"},  
          {
            index:4,
            src: require ("../assets/img/wcollection5.jpg"),
            category: "women"},
          {
            index:5,
            src: require ("../assets/img/collectiom2.jpg"),
            category: "men"},
          {
            index:6,
             src: require ("../assets/img/collection4.jpg"),
            category: "men"},
          {
            index:7,
            src: require ("../assets/img/wcollection6.jpg"),
            category: "women"},
          {
            index:8,
            src: require ("../assets/img/wcollection4.jpg"),
            category: "women"},
          {
            index:9,
            src: require ("../assets/img/collection4.jpg"),
            category: "men"},   
          {
            index:10,
            src: require ("../assets/img/collection5.jpg"),
            category: "men"},
          {
            index:11,
            src: require ("../assets/img/wcollection8.jpg"),
            category: "women"},
          {
            index:12,
            src: require ("../assets/img/collection1.jpg"),
            category: "men"},
          {
            index:13,
            src: require ("../assets/img/wcollection7.jpg"),
            category: "women"},
          {
            index:14,
            src: require ("../assets/img/collection7.jpg"),
            category: "men"},
          {
            index:15,
            src: require ("../assets/img/collection12.jpg"),
            category:"men"
          },
          {
            index:16,
            src: require ("../assets/img/wcollection3.jpg"),
            category:"women"
          },
          {
            index:17,
            src: require ("../assets/img/wcollection9.jpg"),
            category:"women"
          },
          {
            index:18,
            src: require ("../assets/img/collection8.jpg"),
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
#collection-main {
  width: 100%;
  margin: 0 auto;
  padding: 10% 0;
  margin-bottom: 3%;
  background-image: url("../assets/img/collection16.png");
  background-size: cover;
  background-position: center;
}
.collection-text {
  font-size: 15px;
  margin-bottom: 5%;
  margin-left: 5%;
 
}
.collection-text p {
  margin-bottom: 2%;
}
.collection-text p:nth-child(2) {
  font-weight: bold;
}
.collections {
  width: 100%;
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
.image {
    list-style: none;
    width: 30%;
    margin: 20px 10px;
  }
.image img {
   width: 100%;
   display: block;
   overflow: hidden;
}  
 @media screen and (max-width: 768px)  {
   .collection-imgs {
     justify-content: space-around;
   }
   .image {
     width: 45%;
     margin: 0;
   }
  .image img {
    margin-bottom: 8%;
  }
 }
</style>