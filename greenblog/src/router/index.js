import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
    }
  },
  {
    path: '/board',
    name: 'board',
    component: function () {
      return import('../views/BoardView.vue')
    },
    children : [{
      path : ':page', 
      component : function() { return import ("../components/PageComponent.vue") }
    }]
  },
  {
    path: '/user/:user',
    name: 'user',
    component: function () {
      return import('../views/UserView.vue');
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
