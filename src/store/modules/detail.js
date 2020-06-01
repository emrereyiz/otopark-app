import axios from 'axios'
const state = {
  detailID: null,
  contentType: null,
  detail: {}
}
const getters = {
  getContentType (state) {
    return state.contentType
  },
  getDetail (state) {
    return state.detail
  }
}
const mutations = {
  setDetail (state, payload) {
    state.detail = payload
  },
  setContentType (state, payload) {
    state.contentType = payload
  }
}
const actions = {
  setDetail ({commit}, payload) {
    axios.get(`https://api.ibb.gov.tr/ispark/ParkDetay?id=${payload}`)
    .then(response =>{
      commit('setLoading', false)
      commit('setDetail', response.data)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}