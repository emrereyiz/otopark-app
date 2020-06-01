const state = {
  modalStatus: false,
  loadingStatus: false
}
const getters = {
  getModalStatus (state) {
    return state.modalStatus
  },
  getLoading (state) {
    return state.loadingStatus
  }
}
const mutations = {
  setModal (state, payload) {
    state.modalStatus = payload
    if(payload === false){
      state.setDetail  = null
    }
  },
  setLoading (state, payload) {
    state.loadingStatus = payload
  }
}
const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}