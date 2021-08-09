<template>
  <header>
  <div class="header-wrap">
       <router-link to="/"  class="header-title brand-name" >Coloris </router-link>
        
        <ul class="menu-list">
         <router-link to="/" class="brand-nav">top</router-link>
         <router-link to="/collection" class="brand-nav">collectiom</router-link>
         <router-link to="/home" class="brand-nav">online store</router-link>
         <router-link to="/mainnews"  class="brand-nav">news</router-link>
         <router-link to="/detail" class="brand-nav">about us</router-link>
         <router-link to="/contact" class="brand-nav">contact</router-link>
         <li class="line"></li>
        <router-link to="/login" class="login">Login</router-link>
        <router-link to="/signup" class="enter">SignUp</router-link>
       <li class="enter">Cart</li>
       <li class="line"></li>
       <li>
         <div class="search-form">
         <input type="text" placeholder="Serch" class="search" v-model="item_name">
       </div>
       </li>
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
        <li @click="$router.push({name: 'Login'})">-Login-</li>
        <li @click="$router.push({name:'Signup'})">-Signup-</li>
          </ul>
      </div>
  </transition>
</div>
 </header>
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
header {
  line-height: 5vh;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
}
li {
  list-style: none;
}
.brand-nav:hover  {
  transform: scale(1.2);
  font-weight: bold;
}
.login:hover {
  transform: scale(1.2);
  font-weight: bold;
}
.enter:hover {
  transform: scale(1.2);
  font-weight: bold;
}
.line {
  margin: 10px 15px;
  width: 1px;
  background-color: #000;

}
.header-title {
  cursor: pointer;
  font-size: 50px;
  text-decoration: none;
  color: #000;
  margin: 20px;
}
.header-wrap {
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
}
.header-list {
  display: flex;
  justify-content: left;
}
.menu-list {
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
  margin: 20px;
}
.login {
  margin-left: 2px;
  color: #000;
  text-decoration: none;
}
.brand-nav {
  cursor: pointer;
  text-decoration: none;
  color: #000;
  margin-left: 50px;
}
.enter{
  cursor: pointer;
  text-decoration: none;
  color: #000;
  margin-left: 50px;
}
.search {
  margin-left: 2px;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
}
input {
 margin-bottom: 0;
}
 .menu {
   display: none;
 }
 .hamburger_btn {
   display: none;
 }

 @media screen and (max-width: 768px)  {
header {
     line-height: 1.0;
   }
   .menu-list {
     display: none;
   }
 .hamburger_btn {
  display: inherit; 
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
  padding:16px;
}
.menu {
  display: inherit;
  background-color: #ffff;
  z-index: 30;
  padding: 32px 16px;
  position: fixed;
  width: 100%;
  height: 1260px;
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
  margin:16px;
  padding: 0;
}


 }
</style>