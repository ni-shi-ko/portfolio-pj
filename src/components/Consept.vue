<template>
      <div class="about">
        <h1 @click="$router.push({name:'Detail'})">-About us-</h1>
    <div class="about-wrap">
        <div class="img-conte">
          <img src="../assets/img/momizi.png" alt="">
        </div>
        <p class="about-inner">
            私達は”日常にに彩りを”をコンセプトに2020年にブランドを立ち上げました。<br>
            肌に触れたときの質感やシルエットにこだわり、ものづくりをしています。<br>
            私達のモノが皆さんの日常を彩れるよう、<br>
            豊かにできるよう新しいものをていあんしてい提案していきます。
        </p>
    </div>
    </div>

</template>

<style>
.about {
  padding: 5% 0;
}
.about h1 {
  text-align: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 30px;
  margin-bottom: 3%;
  cursor: pointer;
}
.img-conte {
  width: 30%;
}
.img-conte img{
  width: 100%;
  display: block;
 
}
.about-wrap {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.about-inner {
  text-align: center;
  line-height: 2.5;
  margin-left: 5%;
}
.border {
  border-bottom: 1px solid #000000;
  margin: 0 auto;
  width: 40%;
}
.news {
  margin:3% 0 ;
  text-align: center;
}
.news h1 {
  margin-bottom: 1%;
  font-size: 30px;
  font-weight: bold;
}

</style>