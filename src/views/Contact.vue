<template>
<div>
  <Header />
<div id="contact">
  <h1 class="contact-title">
    -Contact Us-
  </h1>
        <form class="contact-form" method="post" @submit.prevent="sendContact()">
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="user_name" v-model="text" />
          </div>
          <div>
            <label for="mail">E-mail:</label>
            <input type="email" id="mail" name="user_mail" v-model="email" />
          </div>
          <div>
            <label for="tel">Tell:</label>
            <input type="tel" id="tel" name="user_tel" v-model="tel" />
          </div>
          <div>
            <label for="msg">Message:</label>
            <textarea id="msg" name="user_message" v-model="msg"></textarea>
          </div>
          <div class="button-submit">
            <button class="button" type="submit">Button</button>
          </div>
        </form>
        
 </div>
  <div class="message-wrapper">
            <div id="message-contents">
                <a href="#" class="logo facebook">
                    FACEBOOK
                </a>
                <a href="#" class="logo twitter">
                     TWITTER
                </a>
                <a href="#" class="logo instagram">
                     INSTAGRAM
                </a>
                <a href="#" class="logo youtube">
                     YOUTUBE
                </a>
            </div>
        </div>
        <Footer />
</div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
  data()
 {
   return{
     text: "",
      email: "",
      tel: "",
      msg: ""
   }
 },
 components:{
    Header,
    Footer
  },
   methods: {
    sendContact() {
      if (
        this.text == "" ||
        this.email == "" ||
        this.tel == "" ||
        this.msg == ""
      ) {
        alert("入力されていない項目があります");
      } else {
        this.text = "";
        this.email = "";
        this.tel = "";
        this.msg = "";
        alert("送信しました");
      }
    }
  }
};
</script>

<style>
.contact-title {
  text-align: center;
  font-size: 30px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 3% 0;
}
.contact-form {
  width: 70%;
  margin: 0 auto;
}

.contact-form label {
  display: inline-block;
  width: 30%;
}

input,
textarea {
  box-sizing: border-box;
  border: 1px solid #999;
  width: 65%;
}

input {
  margin-bottom: 20px;
  padding: 7px;
}

textarea {
  vertical-align: top;
  height: 200px;
}

.button-submit {
  text-align: center;
}

.button {
  padding: 2% 5%;
  background-color: #000;
  color: #fff;
  margin: 5% ;
}

.message-wrapper {
  background-color:rgb(220, 220, 220);
  padding-top: 3%;
}
.logo {
  margin:0 2%;
}
.logo {
  color: #fff;
  display: block;
  text-decoration: none;
}
#message-contents  {
  display: flex;
  justify-content: center;
  padding-bottom: 3%;
}

</style>