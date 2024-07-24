import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'

import RegisterPage from '../views/RegisterPage.vue'

import LoginPage from '../views/LoginPage.vue'

import ProductListPage from '../views/ProductListPage.vue'

import ProductDetailPage from '../views/ProductDetailPage.vue'

import CartPage from '../views/CartPage.vue'

import CheckoutPage from '../views/CheckoutPage.vue'

import OrderConfirmationPage from '../views/OrderConfirmationPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },

    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage
    },

    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    },

    {
      path: '/ProductListPage',
      name: 'ProductListPage',
      component: ProductListPage
    },

    {
      path: '/ProductDetailPage',
      name: 'ProductDetailPage',
      component: ProductDetailPage
    },

    {
      path: '/CartPage',
      name: 'CartPage',
      component: CartPage
    },

    {
      path: '/CheckoutPage',
      name: 'CheckoutPage',
      component: CheckoutPage
    },

    {
      path: '/OrderConfirmationPage',
      name: 'OrderConfirmationPage',
      component: OrderConfirmationPage
    },
    {
      path: '*',
	  redirect: '/'
    },
    {
     path: '/',
	  redirect: {name : '404'}
    }
  ]
})

export default router

