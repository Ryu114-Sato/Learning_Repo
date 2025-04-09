import Vue from "vue";
import IndexPage from "./IndexPage.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(IndexPage),
}).$mount("#app");
