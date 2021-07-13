<template>
      <div id="item-wrap">
        <div class="container">
            <h1 class="title">-Brand Items-</h1>
           <div class="tabs">
             <input type="radio" id="tab1" value="1" v-model="isActive">
             <label class="tab" for="tab1">NEW ARRIVALS</label>
              <input type="radio" id="tab2" value="2" v-model="isActive">
             <label class="tab" for="tab2"> WOMEN</label>
              <input type="radio" id="tab3" value="3" v-model="isActive">
             <label class="tab" for="tab3">MEN</label>
              <input type="radio" id="tab4" value="4" v-model="isActive">
             <label class="tab" for="tab4">SALE</label>
           </div>
            <div class="tab-inner">
                <div v-if="isActive === '1'"  class="inner new ">
                   <h3>NEW ARRIVALS</h3>
                   <ul class="imgs">
                        <li><a href="#"><img src="../assets/img/train.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/train.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/train.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/train.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/train.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/train.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/train.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/train.jpg" alt="snap1" /></a></li>
                    </ul>
                     <p @click="$router.push({name: 'New'})" class="item-more">VIEW MORE</p>
                </div>
                <div v-else-if="isActive === '2'" class="inner women">
                    <h3>WOMEN</h3>
                    <ul class="imgs">
                        <li><a href="#"><img src="../assets/img/sea.png" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/sea.png" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/sea.png" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/sea.png" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/sea.png" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/sea.png" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/sea.png" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/sea.png" alt="snap1" /></a></li>
                    </ul>
                     <p @click="$router.push({name: 'Women'})" class="item-more">VIEW MORE</p>
                </div>
                <div v-else-if="isActive === '3'" class="inner men">
                    <h3>MEN</h3>
                    <ul class="imgs">
                        <li><a href="#"><img src="../assets/img/nara.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/nara.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/nara.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/nara.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/nara.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/nara.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/nara.jpg" alt="snap1" /></a></li>
                        <li><a href="#"><img src="../assets/img/nara.jpg" alt="snap1" /></a></li>
                    </ul>
                     <p @click="$router.push({name: 'Men'})"  class="item-more">VIEW MORE</p>
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
                   <p @click="$router.push({name: 'Sale'})" class="item-more">VIEW MORE</p>
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
.title {
  text-align: center;
  font-size: 30px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 3% 0;
}

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
  padding: 2%;
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
  color: #000000;
  border: 1px solid rgb(220, 220, 220);
  cursor: pointer;
}
.item-more:hover {
  background-color: rgb(220, 220, 220);
  color: #FFF;
  transition: all 0.4s ease-out;
}


</style>