import Vue from 'vue'
import Vuex from '../myvuex'
// import Vuex from 'vuex'
// 引入模块的 store
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

const myPlugin = store => {
  // store初始化后调用
  // 订阅 store 中的 mutation
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    if (mutation.type.startsWith('cart/')) {
      window.localStorage.setItem('cart-products', JSON.stringify(state.cart.cartProducts))
    }
  })
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    cart
  },
  plugins: [myPlugin]
})
