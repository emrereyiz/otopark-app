<template>
  <div :class="`result animate__animated ${resultClass}`">
    <v-list two-line>
      <v-row>
        <v-col cols="8">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-html="'Yeşil Vadi Sokak 4'"></v-list-item-title>
              <v-list-item-subtitle v-html="'İlçe: Ataşehir<br>Boş Yer: 35'"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="4">
          <div class="mt-5">
            <v-btn color="info">Detay</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-list>
    <v-divider></v-divider>
    <v-list two-line>
      <v-row>
        <v-col cols="8">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-html="'Yeşil Vadi Sokak 4'"></v-list-item-title>
              <v-list-item-subtitle v-html="'İlçe: Ataşehir<br>Boş Yer: 35'"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="4">
          <div class="mt-5">
            <v-btn color="info">Detay</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-list>
    <v-divider></v-divider>
    <v-list two-line>
      <v-row>
        <v-col cols="8">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-html="'Yeşil Vadi Sokak 4'"></v-list-item-title>
              <v-list-item-subtitle v-html="'İlçe: Ataşehir<br>Boş Yer: 35'"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="4">
          <div class="mt-5">
            <v-btn @click="openDetail"  color="info">Detay</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-list>
    {{getKey}}
  </div>
</template>
<script>

  export default {
    data: () => ({
      list: []
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
        // const searchKey = this.getKey
        // const list = this.getList
        console.log(this.$toTrLowerCase())
        // console.log(list.toTRLowerCase().indexOf(searchKey.toTRLowerCase()))
      }
    },
    methods: {
      openDetail () {
        this.$store.commit('setModal', true)
        this.$store.commit('setLoading', true)
      }
    }
  }
</script>
<style lang="less">
  .result{
    padding:0 20px;
    opacity: 0;
  }
</style>