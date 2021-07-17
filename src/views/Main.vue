<template>
  <div class="main">
    <router-link to="/"> <p class="main-title">-Coloris-</p></router-link>
    <p class="sab-text">
      ”日常に彩りを”
    </p>
    <div class="main-menu">
      <ul class="main-list">
        <li @click="$router.push({name: 'Collection'})">-Collection-</li>
        <li @click="$router.push({name: 'Home'})">-Online Store-</li>
        <li @click="$router.push({name:'Maninnews'})">-News-</li>
        <li @click="$router.push({name:'Detail'})">-About us-</li>
        <li @click="$router.push({name:'Contact' })">-Contact us-</li>
      </ul>
       <div class="menu-img">
        <img src="../assets/img/sea.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
   font-family: Georgia, 'Times New Roman', Times, serif;
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
   cursor: pointer;
   list-style: none;
   margin-bottom: 80%;
   font-size: 20px;
   text-align: center;
 }
.menu-img {
  width: 50%;
}
 .menu-img img {
   width: 100%;
   height: 80%;
   display: block;
 }
</style>