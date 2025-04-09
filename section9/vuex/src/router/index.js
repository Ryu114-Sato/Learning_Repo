import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "file:///Users/satouryuichi/Desktop/WORK/Vue/vue_test/sogo_satoryu_test/section1/index_24.html",
    name: "index_24",
  },
  {
    path: "file:///Users/satouryuichi/Desktop/WORK/Vue/vue_test/sogo_satoryu_test/section2/tab/index_27.html",
    name: "index_27",
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
