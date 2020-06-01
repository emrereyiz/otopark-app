<template>
  <v-app>
    <div id="mobile">
      <app-map></app-map>
      <app-content v-if="modalStatus"></app-content>
      <app-preloader></app-preloader>
    </div>
  </v-app>
</template>

<script>
import map from "./components/Map"
import content from './components/Content'
import preloader from './components/Preloader'
export default {
  name: 'App',
  components: {
    appMap: map,
    appContent: content,
    appPreloader: preloader
  },
  data () {
    return {
    }
  },
  computed: {
    modalStatus () {
      return this.$store.getters.getModalStatus
    }
  }
};
</script>
<style lang="less">
body{
  font-family: 'Ubuntu';
  font-weight: 300;
  font-weight: 500;
}
  #mobile{
    width: 100%;
    height: 100%;
    border:solid 1px #c1c1c1;
    position: relative;
    overflow: hidden;
  }
  .navigation{
    position: relative;
    z-index: 2;
    background-color: transparent !important;
    box-shadow: none !important;
    aside{
      &.v-navigation-drawer--mini-variant{
        min-width:70px;
      }
      &:not(.v-navigation-drawer--mini-variant){
        width: 100% !important;
      }
      .v-list{
        text-align: center;
      }
    }
  }
</style>