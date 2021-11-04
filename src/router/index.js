import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import(/* webpackChunkName: "about" */ '../views/RulesPage.vue')
  },
  {
    path: '/question',
    name: 'Question',
    component: () => import(/* webpackChunkName: "about" */ '../views/QuestionPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
