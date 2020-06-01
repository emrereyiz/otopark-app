const state = {
  map: null,
  location: {
    lat: null,
    lng: null
  }
}
const getters = {
  getLocation (state) {
    return state.location
  },
  getMap (state) {
    return state.map
  }
}
const mutations = {
  setLocation (state, payload) {
    state.location = payload
  },
  setMap (state, payload) {
    state.map = payload
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