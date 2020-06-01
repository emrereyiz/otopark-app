<template>
  <div id="list">
      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="(item,index) in list"
            :key="index"
          >
            <v-expansion-panel-header>{{item.data.ParkAdi}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              Boş Yer: {{item.data.BosKapasite}}
              <br>
              Toplam Kapasite: {{item.data.Kapasitesi}}
              <br>
              Ücretsiz Parklanma: {{item.data.UcretsizParklanmaDk + ' Dakika'}}
              <br>
              Park Tipi: {{item.data.ParkTipi}}
              <br>
              İlçe: {{item.data.Ilce}}
              <v-row>
                <v-col cols="6">
                  <centerMap @click.native="setCenter(item.data.Latitude, item.data.Longitude)">
                    Ortala
                  </centerMap>
                </v-col>
                <v-col cols="6">
                  <routeMap @click.native="openDetail(item.data.ParkID)">
                    Rota Çiz
                  </routeMap>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
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
    methods: {
    },
    mounted () {
        this.$store.commit('setLoading', false)
    },
    computed: {
      list () {
        return this.$store.getters.getDetailList
      }
    },
    data: () => ({
    }),
  }
</script>
<style lang="less">
#list{
  margin:40px 0 0 0;
}
</style>