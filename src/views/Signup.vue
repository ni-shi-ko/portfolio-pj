<template>
  <div>
    <Header />
   
    <div class="card">
      <p>SignUp</p>
      <form class="form" method="post"   @submit.prevent="sendSignUp()">    
        <input placeholder="name" type="text" v-model="text"/>
        <input placeholder="mail" type="email" v-model="email"/>
        <input placeholder="password" type="password" v-model="pas"/>
        <button @click="signUp">SignUp</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  data() {
    return {
      text : "",
      email : "",
      pas : ""
    }
  },
  components: {
    Header
  },
  methods: {
    sendSignUp() {
      if(
        this.text == "" ||
        this.email == "" ||
        this.pas == "" 
       ) {
        alert("入力されていない項目があります")
      }else{
        this.text = "";
        this.email = "";
        this.pas = "";
        alert("登録完了しました");
      }
    }
  }
};
</script>

<style scoped>
button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #000;
  cursor: pointer;
}
.card {
  margin: 100px auto;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
}
.card p {
  color: black;
  font-weight: bold;
  text-align: center;
}
input {
  margin-top: 15px;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid black;
  color: black;
}
.form {
  text-align: center;
}
.form button {
  margin-top: 15px;
}
</style>