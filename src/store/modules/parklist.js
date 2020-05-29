import axios from 'axios'
const state = {
  parkList: [],
  resultClass: '',
  key: null,
}
const getters = {
  getParkList (state) {
    return state.parkList.data
  },
  getClass (state) {
    return state.resultClass
  },
  getKey (state) {
    return state.key
  }
}
const mutations = {
  setParkList (state, payload) {
    state.parkList = payload
  },
  setClass (state) {
    state.resultClass = 'animate__fadeIn'
  },
  setKey (state, payload) {
    state.key = payload
  }
}
const actions = {
  setParkList ({commit}) {
    
    axios.get('https://api.ibb.gov.tr/ispark/Park')
      .then(response =>{
        commit('setParkList', response)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}