import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

//このファイルが読み込まれて、Vueインスタンス生成され、IDがAPPの箇所をマウントして使う
