<template>
  <header>
  <div class="header-wrap">
       <div @click="$router.push({ name:'Main' })" class="header-title" >N.Ko</div>
       <ul class="header-list"> 
        <li @click="$router.push({ name: 'Login'})" class="enter">Login</li>
        <li @click="$router.push({name :'Signup'})" class="enter">SignUp</li>
       <li class="enter">Cart</li>
      </ul>
    </div>


    <ul class="menu-list">
        <li @click="$router.push({name: 'Collection'})" class="menu">collectiom</li>
         <li @click="$router.push({name:'Home'})" class="menu">online store</li>
         <li @click="$router.push({name:'Maninnews'})" class="menu">news</li>
         <li @click="$router.push({name:'Detail'})" class="menu">about us</li>
         <li @click="$router.push({name:'Contact' })" class="menu">contact</li>
      </ul>

  </header>
</template>

<style scoped> 
header {
  line-height: 10vh;
}
li:hover {
  transform: scale(1.2);
}
.header-title {
  cursor: pointer;
  font-size: 50px;
  margin-left: 5%;
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-decoration: none;
  color: #000;
}
.header-wrap {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
}
.header-list {
  display: flex;
}
.header-list li {
  margin-right: 80px;
  list-style: none;
}
.menu-list {
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
}
.menu {
  cursor: pointer;
  margin-right: 3%;
  list-style: none;
  text-decoration: none;
  color: #000;
  
}
.enter{
  cursor: pointer;
  text-decoration: none;
  color: #000;
  margin-left: 50px;
}
</style>