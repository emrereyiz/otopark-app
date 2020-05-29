import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


Vue.prototype.$toTrLowerCase = function() {
  for (var i = ["Ç", "Ü", "Ğ", "I", "İ", "Ş", "Ö"], r = ["ç", "ü", "ğ", "ı", "i", "ş", "ö"], t = this, n = 0; n < i.length; n++)
      t = t.replace(new RegExp(i[n],"g"), r[n]);
  return t.toLowerCase()
}