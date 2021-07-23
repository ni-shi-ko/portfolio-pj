<template>
      <div class="about">
        <router-link to="/detail" class="title">-About us-</router-link>
    <div class="about-wrap">
        <div class="img-conte">
          <img src="../assets/img/shop.jpg" alt="">
        </div>
        <p class="about-inner">
            私達は”日常にに彩りを”をコンセプトに2020年にブランドを立ち上げました。<br>
            肌に触れたときの質感やシルエットにこだわり、ものづくりをしています。<br>
            私達のモノが皆さんの日常を彩れるよう、豊かにできるよう<br>
            新しいものを提案していきます。
        </p>
    </div>
    </div>

</template>

<style scoped>
.about {
  padding: 4% 0;
  text-align: center;
}
.img-conte {
  width: 30%;
}
.img-conte img{
  width: 100%;
  display: block;
 object-fit: cover;
}
.about-wrap {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top:3%;
}
.about-inner {
  text-align: center;
  line-height: 2.5;
  margin-left: 5%;
}

</style>