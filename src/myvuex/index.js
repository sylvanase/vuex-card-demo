// 创建一个store类和函数
let _Vue = null
class Store {
  constructor (options) {
    const {
      state = {},
      getters = {},
      mustations = {},
      actions = {}
    } = options
    this.state = _Vue.observable(state)
    this.getters = Object.create(null)
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => getters[key](state)
      })
    })
    this._mutations = mustations
    this._actions = actions
  }

  commit (type, payload) {
    this._mutations[type](this.state, payload)
  }

  dispatch (type, payload) {
    this._actions[type](this, payload)
  }
}

function install (Vue) {
  _Vue = Vue
  // 通过混入beforeCreate来获取vue实例
  _Vue.minxin({
    beforeCreate () {
      if (this.$options.store) {
        _Vue.prototype.store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}
