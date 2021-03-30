import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      console.log("add product to cart");

      let product = null;

      for (let item of state.cartList) {
        if (item.asin === payload.asin) {
          item.count += payload.count;
          product = item;
          console.log("already has 1 existing product");
        }
      }

      if (product == null) {
        state.cartList.push(payload);
      }

    }
  },
  actions: {
  },
  modules: {
  }
})
