import Vue from "vue";
import UsersPage from "./UsersPage.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(UsersPage),
}).$mount("#app");
