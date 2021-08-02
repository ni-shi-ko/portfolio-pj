<template>
      <div id="item-wrap">
        <div class="container">
            <h1 class="title">-Brand Items-</h1>
           <div class="tabs">
             <input type="radio" id="tab1" value="1" v-model="isActive">
             <label class="tab" for="tab1">NEW</label>
              <input type="radio" id="tab2" value="2" v-model="isActive">
             <label class="tab" for="tab2"> WOMEN</label>
              <input type="radio" id="tab3" value="3" v-model="isActive">
             <label class="tab" for="tab3">MEN</label>
              <input type="radio" id="tab4" value="4" v-model="isActive">
             <label class="tab" for="tab4">SALE</label>
           </div>
            <div class="tab-inner">
                <div v-if="isActive === '1'"  class="inner new ">
                   <h3>NEW</h3>
                   <ul class="imgs">
                        <li><a href="#"><img src="../assets/img/huku7.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/huku6.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/hukuw12.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/hukuw11.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/huku10.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/huku11.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/hukuw3.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/hukuw1.jpg" alt="snap1" /></a></li>
                    </ul>
                      <p class="item-more"><router-link to="/new" class="view">VIEW MORE</router-link></p> 
                </div>
                <div v-else-if="isActive === '2'" class="inner women">
                    <h3>WOMEN</h3>
                    <ul class="imgs">
                        <li><a href="#"><img src="../assets/img/hukuw4.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/hukuw11.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/hukuw12.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/hukuw6.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/hukuw1.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/hukuw2.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/hukuw3.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/hukuw5.jpg" alt="snap1" /></a></li>
                    </ul>
                      <p class="item-more"><router-link to="/women" class="view">VIEW MORE</router-link></p> 
                </div>
                <div v-else-if="isActive === '3'" class="inner men">
                    <h3>MEN</h3>
                    <ul class="imgs">
                       <li><a href="#"><img src="../assets/img/huku7.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/huku6.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/huku8.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/huku5.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/huku10.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/huku11.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/huku13.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/huku12.jpg" alt="snap1" /></a></li>
                    </ul>
                      <p class="item-more"><router-link to="/men" class="view">VIEW MORE</router-link></p> 
                </div>
                <div v-else-if="isActive === '4'" class="inner sale">
                    <h3>SALE</h3>
                    <ul class="imgs">
                        <li><a href="#"><img src="../assets/img/fashion.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/fashion.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/fashion.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/fashion.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/fashion.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/fashion.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/fashion.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/fashion.jpg" alt="snap1" /></a></li>
                    </ul>
                    <p class="item-more"><router-link to="/sale" class="view">VIEW MORE</router-link></p> 
                </div>
            </div>
           
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return  {
      isActive: "1",
    };
  }
}
</script>

<style scoped>

.tabs label {
  padding: 15px 20px;
  cursor: pointer;
}
.tabs :checked + label {
  background-color: #000;
  color: #fff;
}
.tabs input {
  display: none;
} 
.tab-inner {
  width: 80%;
  margin: 0 auto;
}
.tabs {
  flex-grow: 1;
  border: 1px solid #000000;
  padding: 3%;
  text-align: center;
}
.inner ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.inner li {
  width: 25%;
  list-style: none;
}
.inner h3 {
  text-align: center;
  margin: 3% 0;
  font-size: 20px;
  font-weight: bold;
}
.inner img {
  width: 85%;
}
.item-more {
  text-align: center;
  padding:3% 0;
  margin: 1% 40%;
  border: 1px solid rgb(220, 220, 220);
  cursor: pointer;
}
.view {
  color: #000;
  text-decoration: none;
  font-size:20px ;
}
.item-more:hover {
  background-color: rgb(220, 220, 220);
  transition: all 0.4s ease-out;
}
.view:hover {
  color: #fff;
}

</style>