import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAthx9i_kEs0wopnnTFKjvFgYKBRAjdHNA",
  authDomain: "portfoliovue-1b878.firebaseapp.com",
  projectId: "portfoliovue-1b878",
  storageBucket: "portfoliovue-1b878.appspot.com",
  messagingSenderId: "202996729058",
  appId: "1:202996729058:web:655a9b2e4dc0ceca160abb",
  measurementId: "G-6J352T391S"
};

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
