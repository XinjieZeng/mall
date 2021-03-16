import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import swiper from "@/components/common/swiper";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  swiper,
  render: h => h(App)
}).$mount('#app')
