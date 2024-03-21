import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductList
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartList.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
