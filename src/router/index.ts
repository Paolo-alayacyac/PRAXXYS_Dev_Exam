import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../Views/Homepage/HomePage.vue';
import ProductProduct from '../Views/Product/ProductPopular.vue';
import FoodSummary from '../Views/FoodInformation/FoodSummary.vue';
import LoyaltyPoints from '../Views/Loyalty/LoyaltyPoints.vue';
import OrderSummary from '../Views/Ordersummary/OrderSummary.vue';
import OrderReceived from '../Views/Order/OrderReceived.vue';
import LoginPage from '../Views/Loginpage/LoginPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },

  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },

  {
    path: '/product',
    name: 'Product',
    component: ProductProduct
  },
  {
    path: '/summary',
    name: 'Summary',
    component: FoodSummary
  },
  {
    path: '/loyalty',
    name: 'Loyalty',
    component: LoyaltyPoints
  },
  {
    path: '/ordersummary',
    name: 'OrderSummary',
    component: OrderSummary
  },
  {
    path: '/orderreceived',
    name: 'Orderreceived',
    component: OrderReceived
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
