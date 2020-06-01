<template>
  <div class="items">
    <v-sheet
      class="mx-auto"
      elevation="8"
      max-width="800"
    >
      <v-slide-group
        class="pa-0"
        v-model="centerSlide"
        @click="getSlide"
        center-active
        show-arrows
      >
        <v-slide-item
          v-for="item in getList"
          :key="item.distance"
          class="text-center py-2"
        >
        <v-scale-transition>
          <v-card
            color="grey lighten-5"
            class="ma-4"
            height="150"
            width="100"
          >
            <span class="items__title">
              {{item.data.ParkAdi.substring(0,16)}}...
            </span>
            <v-col class="items__buttons" cols="12">
              <centerMap @click.native="setCenter(item.data.Latitude, item.data.Longitude)"></centerMap>
              <routeMap @click.native="openDetail(item.data.ParkID)"></routeMap>
            </v-col>
          </v-card>
        </v-scale-transition>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
<script>
import centerMap from './buttons/CenterMap'
import routeMap from './buttons/RouteMap'
export default {
  components: {
    centerMap,
    routeMap
  },
  computed: {
    getList () {
      const arr = []
      const data = this.$store.getters.getParkList
      for(let index in data){
        if(index < 15){
          arr.push(data[index])
          new window.google.maps.Marker({
              position: new window.google.maps.LatLng(data[index].data.Latitude, data[index].data.Longitude),
              icon: 'https://www.denizecekgonder.com/_assets/img/icon-red.png',
              map: this.$store.getters.getMap
          });
        }
      }
      return arr
    }
  },
  methods: {
    setCenter (lat, lng) {
      const obj = {
        lat: lat,
        lng: lng
      }
      this.$store.getters.getMap.setCenter(new window.google.maps.LatLng(obj.lat, obj.lng))
    },
    getSlide () {
      console.log('test')
    },
    openDetail (id) {
        this.$store.commit('setModal', true)
        this.$store.commit('setLoading', true)
        this.$store.dispatch('setDetail', id)
    }
  },
  data () {
    return {
      centerSlide: null
    }
  }
}
</script>
<style lang="less">
  .items{
    position: absolute;
    bottom:0;
    width:100%;
    /*display:flex;
    align-items: flex-end;
    justify-content: center;*/
    .items__title{
      display:block;
    }
    .items__buttons{
      padding:10px 0 0 0 !important;
      button{
        width:90%!important;
        margin:2.5px 0;
      }
      span{
        font-size:12px;
      }
    }
    .v-sheet{
        background-color:transparent !important;
        &.theme--light{
          box-shadow:none !important;
        }
    }
  }
</style>