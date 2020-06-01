import axios from 'axios'
const state = {
  parkList: [],
  sortList: [],
  detailList: [],
  resultClass: '',
  key: null,
}
const getters = {
  getParkList (state) {
    return state.parkList
  },
  getDetailList (state) {
    return state.detailList
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
    state.parkList = payload.data
    for(let index in this.getters.getParkList){
      const calc = window.google.maps.geometry.spherical.computeDistanceBetween(
       new window.google.maps.LatLng(
         this.getters.getLocation.lat,
         this.getters.getLocation.lng
         ),
       new window.google.maps.LatLng(
         this.getters.getParkList[index].Latitude,
         this.getters.getParkList[index].Longitude)
       )
       state.sortList.push(
         {data: this.getters.getParkList[index], distance: calc}
       )
    }
    state.parkList = []
    state.parkList = state.sortList.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance))
  },
  setDetailList (state, payload) {
    state.detailList = payload
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
        console.log
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