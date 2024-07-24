import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
	  redirect: '/'
    },
  ]
})

export default router

