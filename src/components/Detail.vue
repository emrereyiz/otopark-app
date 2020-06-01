<template>
  <div id="detail">
    <h2>{{detail.ParkAdi}}</h2>
    <h3>{{detail.Ilce}}</h3>
    <v-divider></v-divider>
    <ul>
      <li>Toplam Kapasite: {{detail.Kapasitesi}}</li>
      <li>Boş Yer: {{detail.BosKapasite}}</li>
      <li>Park Tipi: {{detail.ParkTipi}}</li>
      <li>Çalışma Saatleri: {{detail.CalismaSaatleri}}</li>
      <li>Ücretsiz Park Yapma Süresi: {{detail.UcretsizParklanmaDk}}</li>
      <li>Aylık Abone Ücreti: {{detail.AylikAbonelikUcreti}} TL</li>
    </ul>
    <v-divider></v-divider>
    <h3>Detaylı Adres</h3>
    <p>{{detail.Adres}}</p>
    <v-divider></v-divider>
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
    <v-divider></v-divider>
    <h3>Tarifeler</h3>
    <ul v-for="tarife in detail.Tarifeler" :key="tarife.Tarife">
      <li>Süre: {{tarife.Tarife}}<br > Fiyat:{{tarife.Fiyat}}<hr></li>
    </ul>
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