<template>
  <div id="detail">
    <h2>{{detail.ParkAdi}}</h2>
    <br>
    Boş Yer: {{detail.BosKapasite}}
    <br>
    <br>
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="(item,index) in detailContent"
        :key="index"
      >
        <v-expansion-panel-header>{{item}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <template v-if="item === 'Detay'">
            <ul>
              <li><strong>Ücretsiz Park Yapma Süresi</strong>: {{detail.UcretsizParklanmaDk}} Dakika</li>
              <li><strong>Park Tipi</strong>: {{detail.ParkTipi}}</li>
              <li><strong>Toplam Kapasite</strong>: {{detail.Kapasitesi}}</li>
              <li><strong>Çalışma Saatleri</strong>: {{detail.CalismaSaatleri}}</li>
              <li><strong>Aylık Abone Ücreti</strong>: {{detail.AylikAbonelikUcreti}} TL</li>
            </ul>
          </template>
          <template v-if="item === 'Adres'">
            {{detail.Adres}}
            <div class="ma-2">
              <centerMap @click.native="detail(detail.ParkID)">
                Haritada Görüntüle
              </centerMap>
            </div>
            <div class="ma-2">
              <routeMap @click.native="detail(detail.ParkID)">
                Rota Çiz
              </routeMap>
            </div>
          </template>
          <template v-if="item === 'Tarifeler'">
            <template v-if="detail.Tarifeler.length != 0">
              <ul v-for="tarife in detail.Tarifeler" :key="tarife.Tarife">
                <li>Süre: {{tarife.Tarife}}<br > Fiyat:{{tarife.Fiyat}} TL<hr></li>
              </ul>
            </template>
            <template v-else>
              <v-alert type="error">
                Tarife Bilgisi Bulunamadı
              </v-alert>
            </template>
          </template>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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
      closeModal () {
        this.$store.commit('setModal', false)
      }
    },
    computed: {
      detail () {
        return this.$store.getters.getDetail
      }
    },
    data: () => ({
      detailContent: ['Detay', 'Adres', 'Tarifeler']
    }),
  }
</script>
<style lang="less">
  #modal__content{
    ul{
      padding:0;
    }
    li{
      list-style: none;
    }
  }
</style>