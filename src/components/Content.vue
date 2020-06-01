<template>
  <div id="modal__content">
    <a @click="closeModal" href="javascript:;" class="close">
      <v-icon class="text-right">fas fa-times-circle</v-icon>
    </a>
    <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    >
      <app-detail v-if="contentType === 'detail'"></app-detail>
      <app-list v-else-if="contentType === 'list'"></app-list>
    </transition>
  </div>
</template>
<script>
  import detail from './Detail'
  import list from './List'
  export default {
    components: {
      appDetail: detail,
      appList: list
    },
    methods: {
      closeModal () {
        this.$store.commit('setModal', false)
      }
    },
    computed: {
      contentType () {
        return this.$store.getters.getContentType
      }
    },
    data: () => ({
    }),
  }
</script>
<style lang="less">
  #modal__content{
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background: #fff;
    z-index: 3;
    padding:20px;
    text-align: center;
    overflow: scroll;
  }
  .close{
    color:#fff;
    text-decoration: none;
    float: right;
  }
</style>