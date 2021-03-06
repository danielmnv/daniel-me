import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import (/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import (/* webpackChunkName: "experience" */ '../views/Experience.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import (/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 800)
    })
  }
})

export default router
