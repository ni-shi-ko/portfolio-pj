<template>
  <div class="side"> 
    <div>
        <ul class="side-list">
          <li>-All</li>
          <li>-Tops</li>
          <li>-Outer</li>
          <li>-Bottoms</li>
          <li>-Shoes</li>
          <li>-Accessories</li>
        </ul>
    </div>
  </div>
</template>

<style scoped> 
 .side {
   position: absolute;
   left: 2%;
   width: 40%;
 }
  .side-list li{
    padding-bottom: 20px;
    cursor: pointer;
    list-style: none;
  }
  li:hover {
    font-weight: bold;
  }
   @media screen and (max-width: 768px)  {
     .side {
       position: inherit;
       width: 100%;
     }
     .side-list {
       display: flex;
       justify-content: space-around;
       
     }
   }
</style>