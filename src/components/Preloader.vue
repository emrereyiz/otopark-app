<template>
  <v-overlay :value="modalStatus">
    <v-progress-circular
      :size="70"
      :width="7"
      color="blue"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>
<script>
  export default {
    data: () => ({
    }),
    mounted () {
      setTimeout(() =>{
        this.$store.commit('setLoading', false)
      }, 2000)
    },
    computed: {
      modalStatus () {
        return this.$store.getters.getLoading
      }
    }
  }
</script>
<style lang="less">
</style>