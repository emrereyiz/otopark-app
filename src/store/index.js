import Vue from 'vue'
import Vuex from 'vuex'
import parkList from './modules/parklist'
import modal from './modules/modal'
import detail from './modules/detail'
import location from './modules/location'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    parkList,
    modal,
    detail,
    location
  }
})
