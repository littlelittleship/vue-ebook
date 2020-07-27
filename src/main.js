import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/iconfont/iconfont.css'
import '@/assets/fonts/easy.css'
import '@/assets/fonts/LingLengLang.css'
import '@/assets/fonts/Summer Vibes OTF.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
