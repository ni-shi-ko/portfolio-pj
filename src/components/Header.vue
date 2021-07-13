<template>
  <header>
  <div class="header-wrap">
       <div @click="$router.push({ name:'Main' })" class="header-title" >N.Ko</div>
        
        <ul class="menu-list">
        <li @click="$router.push({name: 'Collection'})" class="menu">collectiom</li>
         <li @click="$router.push({name:'Home'})" class="menu">online store</li>
         <li @click="$router.push({name:'Maninnews'})" class="menu">news</li>
         <li @click="$router.push({name:'Detail'})" class="menu">about us</li>
         <li @click="$router.push({name:'Contact' })" class="menu">contact</li>
         <li class="line"></li>
        <li @click="$router.push({ name: 'Login'})" class="login">Login</li>
        <li @click="$router.push({name :'Signup'})" class="enter">SignUp</li>
       <li class="enter">Cart</li>

      </ul>
       
       <!-- <ul class="header-list"> 
        <li @click="$router.push({ name: 'Login'})" class="enter">Login</li>
        <li @click="$router.push({name :'Signup'})" class="enter">SignUp</li>
       <li class="enter">Cart</li>
      </ul> -->

    </div>

  </header>
</template>

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
li:hover {
  transform: scale(1.2);
}
.line {
  margin: 10px 15px;
  width: 1px;
  background-color: #000;

}
.header-title {
  cursor: pointer;
  font-size: 50px;
  font-family: Georgia, 'Times New Roman', Times, serif;
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
</style>