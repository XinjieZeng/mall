import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=> import('@/views/home/Home')
const Category = ()=> import('@/views/category/Category')
const Cart = ()=> import('@/views/cart/Cart')
const Profile = ()=> import('@/views/profile/Profile')
const Detail = () =>import('@/views/detail/Detail')
const Purchase = () => import('@/views/purchase/Purchase');
const CustomerService = () => import('@/views/service/CustomerService')
const SaveProduct = () => import('@/views/service/SaveProduct')

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
  },
  {
    path: '/customer-service',
    name:'customer-service',
    component: CustomerService
  },
  {
    path: '/purchase',
    name:'purchase',
    component: Purchase
  },
  {
    path: '/save-product',
    name:'save-product',
    component: SaveProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
