<template>
  <div class="items">
    <div v-for="item in arr" :key="item" class="item">
      Yeşil Vadi Sokak 4
      Boş Yer: 35
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [1,2,3]
    }
  }
}
</script>
<style lang="less">
  .items{
    position: absolute;
    bottom:0;
    width:100%;
    display:flex;
    align-items: flex-end;
    justify-content: center;
    .item{
      width: calc(100%/3);
      text-align: center;
      background-color: #fff;
      height: 100px;
    }
  }
</style>