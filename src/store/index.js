import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart,
    products
  }
})

export default store
