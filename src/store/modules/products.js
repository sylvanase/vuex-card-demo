import axios from 'axios'
const state = {
  // 记录所有商品
  products: []
}
const getters = {}
const mutations = {
  // 修改状态 products 值
  setProducts (state, payload) {
    state.products = payload
  }
}
const actions = {
  // 异步获取接口数据
  async getProducts ({ commit }) {
    const { data } = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/products'
    })
    // 提交mutation
    commit('setProducts', data)
  }
}

export default {
  // 开启命名空间
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
