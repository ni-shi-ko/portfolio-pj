<template>
  <header>
  <div class="header-wrap">
       <router-link to="/"  class="header-title brand-name" >Coloris </router-link>
        
        <ul class="menu-list">
         <router-link to="/" class="menu">top</router-link>
         <router-link to="/collection" class="menu">collectiom</router-link>
         <router-link to="/home" class="menu">online store</router-link>
         <router-link to="/mainnews"  class="menu">news</router-link>
         <router-link to="/detail" class="menu">about us</router-link>
         <router-link to="/contact" class="menu">contact</router-link>
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
       
       <!-- <ul class="header-list"> 
        <li @click="$router.push({ name: 'Login'})" class="enter">Login</li>
        <li @click="$router.push({name :'Signup'})" class="enter">SignUp</li>
       <li class="enter">Cart</li>
      </ul> -->

    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      item_name:''
    }
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
.menu:hover  {
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
.menu {
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
</style>