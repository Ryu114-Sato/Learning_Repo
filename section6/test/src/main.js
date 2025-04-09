import Vue from 'vue'
import App from './App.vue'

/* エントリーポイント */
Vue.config.productionTip = false

new Vue({
  render: h => h(App),//render関数を使って、コンポーネントを描画
}).$mount('#app')

