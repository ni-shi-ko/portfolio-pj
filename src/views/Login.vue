<template>
 <div>
   <Header />
   <div class="card">
     <p>Login</p>
     <div class="form">
       <input placeholder="メールアドレス" type="email" />
       <input placeholder="パスワード" type="password" />
       <button>Login</button>
     </div>
   </div>
 </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style scoped>
button {
  width: 100px;
  background-color: #fff;
  text-align: center;
  padding: 8px 0 10px;
  color: #000;
  cursor: pointer;
}
.card {
  border: 1px solid #000;
  margin: 100px auto;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  padding: 10%;
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