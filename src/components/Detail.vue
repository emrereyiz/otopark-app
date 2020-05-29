<template>
  <div id="detail">
    <a @click="closeModal" href="javascript:;" class="close">
      <v-icon class="text-right">fas fa-times-circle</v-icon>
    </a>
    <h2>Yeşil Vadi Sokak 4</h2>
    <h3>Ataşehir</h3>
    <ul>
      <li>Toplam Kapasite: 40</li>
      <li>Boş Yer: 35</li>
      <li>Park Tipi: Yol Üstü</li>
      <li>Çalışma Saatleri: 40</li>
      <li>Ücretsiz Park Yapma Süresi: 15 Dk</li>
      <li>Aylık Abone Ücreti: 190 TL</li>
    </ul>
    <h3>Detaylı Adres</h3>
    <p>İÇERENKÖY MAHALLESİ YEDİTEPE ÜNİVERSİTESİ HASTANESİ ARKASI YEŞİLVADİ SOKAK</p>
    <h3>Tarifeler</h3>
    <ul>
      <li>0-1 Saat: 800 TL</li>
      <li>0-1 Saat: 800 TL</li>
      <li>0-1 Saat: 800 TL</li>
      <li>0-1 Saat: 800 TL</li>
      <li>0-1 Saat: 800 TL</li>
    </ul>
  </div>
</template>
<script>

  export default {
    methods: {
      closeModal () {
        this.$store.commit('setModal', false)
      }
    },
    data: () => ({
    }),
  }
</script>
<style lang="less">
  #detail{
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background: #fff;
    z-index: 3;
    padding:20px;
    text-align: center;
    ul{
      padding:0;
    }
    li{
      list-style: none;
    }
  }
  .close{
    color:#fff;
    text-decoration: none;
    float: right;
  }
</style>