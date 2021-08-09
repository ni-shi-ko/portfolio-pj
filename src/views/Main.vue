<template>
  <div class="main">
    <router-link to="/"> <p class="main-title brand-name">-Coloris-</p></router-link>
    <p class="sab-text">
      ”日常に彩りを”
    </p>
    <div class="main-menu">
      <div class="menu-img_sec">
        <img src="../assets/img/top.jpg" alt="">
      </div>
      <ul class="main-list">
        <li @click="$router.push({name: 'Collection'})">-Collection-</li>
        <li @click="$router.push({name: 'Home'})">-Online Store-</li>
        <li @click="$router.push({name:'Maninnews'})">-News-</li>
        <li @click="$router.push({name:'Detail'})">-About us-</li>
        <li @click="$router.push({name:'Contact' })">-Contact us-</li>
      </ul>

      <!-- <div id="nav">
        <ul>
        <li @click="$router.push({name: 'Collection'})">-Collection-</li>
        <li @click="$router.push({name: 'Home'})">-Online Store-</li>
        <li @click="$router.push({name:'Maninnews'})">-News-</li>
        <li @click="$router.push({name:'Detail'})">-About us-</li>
        <li @click="$router.push({name:'Contact' })">-Contact us-</li>
      </ul>
      </div>

         <div id="hamburger">
            <span class="inner_line" id="line1"></span>
            <span class="inner_line" id="line2"></span>
            <span class="inner_line" id="line3"></span>
        </div>
 -->
       <div class="menu-img">
        <img src="../assets/img/top.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
  function hamburger() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click',() => {
  hamburger();
});

  }
}
</script>

<style scoped>
*{
   color: black;
   text-decoration: none;
}
li:hover {
  transform: scale(1.5);
}
.main {
  margin-top: 5%;
}
 .main-title {
   cursor: pointer;
   font-size: 55px;
   text-align: center;
   padding: 5% 0 1% 0;
 }
 .sab-text {
   text-align: center;
   font-size: 20px;
   padding-bottom: 3%;
 }
 .main-menu {
   display: flex;
   justify-content: center;
 }
 .main-list {
   margin-right: 5%;
 }
 .main-list li {
   font-family: Georgia, 'Times New Roman', Times, serif;
   cursor: pointer;
   list-style: none;
   margin-bottom: 80%;
   font-size: 20px;
   text-align: center;
 }
.menu-img {
  width: 50%;
}
.menu-img_sec {
  display: none;
}
 .menu-img img {
   width: 100%;
   height: 80%;
   display: block;
 }
 #nav {
   display: none;
 }
 #hamburger {
   display: none;
 }
 
 @media screen and (max-width: 768px)  {
   .main-menu {
    display: inline;
   }
  /* .main-list {
    display: none;
  } */
   .menu-img {
     display: none;
   }
   .menu-img_sec {
     display: block;
     width: 100%;
   } 
   .menu-img_sec img {
     width: 100%;
     display: block;
   }
   #hamburger {
  top: 20px;
  left: 15px;
  width: 50px;
  height: 44px;
  position: absolute;
  cursor: pointer;
  z-index: 100;
  transition: 0.4s;
  display: block;
  }
.inner_line {
  display: block;
  position: absolute;
  width: 35px;
  height: 2px;
  background-color: #000;
  transition: 0.8s;
}
#line1 {
  top: 0;
}
#line2 {
  top: 10px;
}
#line3 {
  bottom: 20px;
}
#nav{
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  transition: .7s;
  display: block;
}
#nav ul{
  padding-top: 80px;
}
#nav ul li{
  list-style-type: none;
  font-size: 20px;
}
#nav a{
  display: block;
  text-decoration: none;
  color: #000000;
  margin: 0 20px;
  padding: 10px;
  transition: .5s;
}
#nav li a:hover{
  border-bottom: none;
}
.in{ 
  color: #ffffff;
  background:dodgerblue;
  transform: translateX(100%);
}
.line_1,.line_2,.line_3{
  background: #000000;
}
.line_1 {
  transform: rotate(-45deg);
  top: 0;
}
.line_2 {
  opacity: 0;
}
.line_3 {
  transform: rotate(45deg);
  top: 0;
}

 }
</style>