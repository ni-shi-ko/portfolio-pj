<template>
 <div class="card">
   <img src="../assets/img/collection16.png" alt="" class="card-img" >
   <div class="card-content">
  <h1 class="card-title">{{news}}</h1>
</div>
<div class="card-link">
    <a @click="$router.push({ name:'Maninnews' })">
      News記事へ
    </a>
</div>
 </div>

</template>

<script>
export default {
  props:["news"],
};
</script>

<style scoped>
.card {
  width: 27%;
  margin: 30px 0;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card li {
  list-style: none;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-link {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 20px;
}
.card-link a {
  text-decoration: none;
  color: #0bd;
  margin: 0 10px;
  cursor: pointer;
}
.card-link a:hover {
  color: #0090aa;
}
 @media screen and (max-width: 768px)  {
   .card {
     width: 90%;
   }
 }
</style>