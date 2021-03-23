import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=> import('@/views/home/Home')
const Category = ()=> import('@/views/category/Category')
const Cart = ()=> import('@/views/cart/Cart')
const Profile = ()=> import('@/views/profile/Profile')
const Detail = () =>import('@/views/detail/Detail')
const routes = [
  {
    path: '/',
    name: '',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/detail/:asin',
    name:'product-detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
