import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/iconfont/iconfont.css'
import '@/assets/font/LiuJianMaoCao-Regular.css'
import '@/assets/font/LongCang-Regular.css'
import '@/assets/font/MaShanZheng-Regular.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
