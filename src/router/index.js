import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Collection from '../views/Collection.vue'
import Contact from '../views/Contact.vue'
import MainNews from '../views/MainNews.vue'
import Detail from '../views/Detail.vue'
import Women from '../views/Women.vue'
import Men from '../views/Men.vue'
import New from '../views/New.vue'
import Sale from '../views/Sale.vue'

Vue.use(VueRouter)

const routes = [
{
path: '/',
 name: 'Main',
component: Main
}, 
{
path: '/login',
 name: 'Login',
component: Login
},
  {
  path: '/signup',
 name: 'Signup',
 component: Signup
 },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/collection',
    name: 'Collection',
    component: Collection
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/mainnews',
    name: 'Maninnews',
    component: MainNews
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/women',
    name: 'Women',
    component: Women
  },
  {
    path: '/men',
    name: 'Men',
    component: Men
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
  {
    path: '/sale',
    name: 'Sale',
    component: Sale
  }

]

const scrollBehavior = (to, from, savedPosition) => {
   if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
})


export default router
