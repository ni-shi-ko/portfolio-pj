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

    <div class="hamburger_btn" v-on:click='ActiveBtn=!ActiveBtn'>
      <span class="line line_01" :class="{'btn_line01':ActiveBtn}"></span>
      <span class="line line_02" :class="{'btn_line02':ActiveBtn}"></span>
      <span class="line line_03" :class="{'btn_line03':ActiveBtn}"></span>
    </div>

      <transition name="menu">
      <div class="menu" v-show="ActiveBtn">
          <ul>
        <li @click="$router.push({name: 'Collection'})">-Collection-</li>
        <li @click="$router.push({name: 'Home'})">-Online Store-</li>
        <li @click="$router.push({name:'Maninnews'})">-News-</li>
        <li @click="$router.push({name:'Detail'})">-About us-</li>
        <li @click="$router.push({name:'Contact' })">-Contact us-</li>
          </ul>
      </div>
  </transition>

       <div class="menu-img">
        <img src="../assets/img/top.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       ActiveBtn: false
    };
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
 #menu {
   display: none;
 }
 #hamburger_btn {
   display: none;
 }
 
 @media screen and (max-width: 768px)  {
   .main-menu {
    display: inline;
   }
  .main-list {
    display: none;
  }
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

.hamburger_btn {
  position: fixed; 
  top: 0;
  right: 0;
  width: 70px;
  height: 72px;
  cursor: pointer;
  z-index: 50;
}

.hamburger_btn .line {
  position: absolute;
  top: 0;
  left: 20px;
  width: 32px;
  height: 2px;
  background: #000;
  text-align: center;
}

.hamburger_btn .line_01 {
  top: 16px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 26px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 36px;
  transition: 0.4s ease;
}


.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}

.menu-enter-active, .menu-leave-active {
  transition: opacity 0.4s;
}
.menu-enter, .menu-leave-to {
  opacity: 0;
}
.menu-leave, .menu-enter-to{
  opacity: 1;
}

.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;
}
.menu {
  background-color: #ffff;
  z-index: 30;
  padding: 2rem 1rem;
  position: fixed;
  width: 100%;
  height: 80rem;
  top: 0;
  left: 0;
}
.menu a {
  color: #000;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 2rem;
}
.menu ul{
  margin: 1rem;
  padding: 0;
}

 }
</style>