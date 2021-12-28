import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Product from '@/views/Product'
import Video from '@/views/Video'
import Documentation from '@/views/Documentation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:product',
    name: 'Product',
    component: Product
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: Documentation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
