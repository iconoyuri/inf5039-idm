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
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },

    {
      path: '/registerpage',
      name: 'RegisterPage',
      component: RegisterPage
    },

    {
      path: '/loginpage',
      name: 'LoginPage',
      component: LoginPage
    },

    {
      path: '/productlistpage',
      name: 'ProductListPage',
      component: ProductListPage
    },

    {
      path: '/productdetailpage',
      name: 'ProductDetailPage',
      component: ProductDetailPage
    },

    {
      path: '/cartpage',
      name: 'CartPage',
      component: CartPage
    },

    {
      path: '/checkoutpage',
      name: 'CheckoutPage',
      component: CheckoutPage
    },

    {
      path: '/orderconfirmationpage',
      name: 'OrderConfirmationPage',
      component: OrderConfirmationPage
    },
    {
      path: '/:catchAll(.*)',
	  redirect: '/'
    },
    {
     path: '/',
	  redirect: {name : '404'}
    }
  ]
})

export default router

