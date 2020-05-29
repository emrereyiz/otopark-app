<template>
  <div class="search">
    <v-card
      class="pa-4"
      flat
    >
      <v-toolbar
        dense
        floating
      >
        <v-btn icon>
          <v-icon small>fa fa-list</v-icon>
        </v-btn>
        <v-text-field
          hide-details
          single-line
          @keyup="getSearch"
          :loading="searchLoading"
          v-model="searchVal"
        ></v-text-field>

      </v-toolbar>
    </v-card>
    <app-result></app-result>
  </div>
</template>
<script>
import result from './Result'
export default {
  components: {
    appResult: result,
  },
  data: () => ({
    searchVal: null,
    searchLoading: false
  }),
  methods: {
    getSearch (val) {
      this.searchLoading = true
      var obj = {
        _val: val.target.value,
        $this: this,
        getVal () {
          if(this._val === val.target.value){
            this.searchLoading = false
            this.$this.$store.commit('setClass')
            this.$this.$store.commit('setKey', this._val)
          }
        }
      }
      setTimeout(()=> obj.getVal(), 1500)
    }
  },
}
</script>
<style lang="less">
.search{
  position: absolute;
  z-index: 2;
  top:0;
  width:100%;
  > .v-card {
    width:100%;
    background-color: transparent !important;
    padding:0 !important;
    header{
      width:100%;
      .v-toolbar__content{
        width:100%;
        padding-left:0;
      }
    }
  }
}
</style>