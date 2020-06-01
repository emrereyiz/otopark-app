<template>
  <div :class="`result animate__animated ${resultClass}`">
    <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    >
      <v-list class="animate__animated" v-if="searchStatus" two-line>
        <div v-if="list.length > 0">
          <v-alert class="result__status" type="success">
            <span>{{list.length}} sonuç bulundu</span>
            <div class="result__clear float-right">
              <v-btn @click="clearResult" outlined>
                <v-icon left>fa fa-times</v-icon> Temizle
              </v-btn>
            </div>
          </v-alert>
          <div v-for="(item, index) in list" :key="item.ParkID">
            <v-row  v-if="index < 3">
              <v-col cols="8">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.data.ParkAdi"></v-list-item-title>
                    <v-list-item-subtitle v-html="`İlçe: ${item.data.Ilce} <br> Boş Yer: ${item.data.BosKapasite}`"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="4">
                <div class="mt-5">
                  <v-btn @click="openDetail(item.data.ParkID)" color="info">Detay</v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
          <v-btn @click="openList" v-if="list.length > 3" block color="info">
            Tüm Sonuçları Göster
            <v-icon class="ml-5" small>fa fa-arrow-right</v-icon>
          </v-btn>
        </div>
        <v-alert v-else class="result__status" type="error">
          Sonuç bulunamadı
        </v-alert>
      </v-list>
    </transition>
  </div>
</template>
<script>
  export default {
    data: () => ({
      list: [1],
      searchStatus: false,
    }),
    computed: {
      resultClass () {
        return this.$store.getters.getClass
      },
      getKey () {
        return this.$store.getters.getKey
      },
      getList () {
        return this.$store.getters.getParkList
      }
    },
    watch: {
      getKey () {
        if(this.getKey.length > 3){
          this.list = []
          const result = this.getList.filter(obj => {
            if(obj.data.ParkAdi.toLowerCase().indexOf(this.getKey.toLowerCase()) != -1){
              return obj.data
            }
          })
          this.list = result
          this.$store.commit('setDetailList', result)
          this.searchStatus = true
        }
      }
    },
    methods: {
      openDetail (id) {
        this.$store.commit('setModal', true)
        this.$store.commit('setLoading', true)
        this.$store.dispatch('setDetail', id)
        this.$store.commit('setContentType', 'detail')
      },
      openList () {
        this.$store.commit('setModal', true)
        this.$store.commit('setLoading', true)
        this.$store.commit('setContentType', 'list')
      },
      clearResult () {
        this.searchStatus = false
      }
    }
  }
</script>
<style lang="less">
  .result{
    padding:0 20px;
    opacity: 0;
    > div{
      padding:0 !important;
    }
    .result__status{
      margin-bottom:0;
    }
    .result__clear{
      margin:-5px 0;
    }
  }
</style>