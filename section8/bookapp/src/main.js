import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
//import BookSearch from './pages/BookSearch'

Vue.config.productionTip = false
//エントリーポイント：最初に読み込まれるファイル

new Vue({
  router,
  vuetify,
  render: h => h(App)//最初に描画される画面
}).$mount('#app')//どこを読み込んでる？
