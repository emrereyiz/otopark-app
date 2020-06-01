<template>
  <div id="content">
      <app-search></app-search>
      <div id="map">
      </div>
      <app-slider></app-slider>
  </div>
</template>
<script>
import slider from "./Slider"
import search from "./Search"
export default {
  components: {
    appSlider: slider,
    appSearch: search
  },
  computed: {
    getList () {
        return this.$store.getters.getParkList
    }
  },
  data () {
    return  {
      map: null,
      zoom: 14,
      location: {
        lat: null,
        lng: null,
      }
    }
  },
  methods: {
    setMarker () {
      new window.google.maps.Marker({
          position: this.location,
          icon: 'https://www.denizecekgonder.com/_assets/img/icon-red.png',
          map: this.map
      });
    },
    deviceLocation (pos) {
      this.location.lat = pos.coords.latitude
      this.location.lng = pos.coords.longitude
      this.map.setCenter(this.location)
      this.setMarker()
      this.$store.commit('setLocation', {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      })
    },
    getLocation () {
      if (navigator.geolocation) {
        this.map = new window.google.maps.Map(document.getElementById("map"), {
          zoom: 17,
          disableDefaultUI: true
        });
        this.$store.commit('setMap', this.map)
        navigator.geolocation.watchPosition(this.deviceLocation)
      } else {
        console.log('Konumunuz alınmıyor.')
      }
    }
  },
  mounted () {
    this.getLocation()
    this.$store.dispatch('setParkList')
  }
}
</script>
<style lang="less">
  #map,
  #content{
    width:100%;
    height:100%;
  }
  #map{
    position: absolute;
    left:0;
    top:0;
  }
  .content__text{
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index: 2;
    background:#f1f1f1;
    display: none;
  }
</style>