import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChildrenViews from "../views/ChildrenViews.vue";
import TeleportTest from "@/views/TeleportTest.vue";
import CompositionTest from "@/views/CompositionTest.vue";
import scdView from "@/views/scdView.vue";
import PropsEmitTest from "@/views/PropsEmitTest.vue";
import FunctionTest from "@/views/FunctionTest";
import RouterTest from "@/views/RouterTest";
import VuexTest from "@/views/VuexTest";

/* 
 createRouter, createWebHistory はvue router で必要な機能だけimport
*/
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
    path: "/childrenViews",
    name: "ChildrenViews",
    component: ChildrenViews,
  },
  {
    path: "/teleport-test",
    name: "TeleportTest",
    component: TeleportTest,
  },
  {
    path: "/composition-test",
    name: "CompositionTest",
    component: CompositionTest,
  },
  {
    path: "/scd-view",
    name: "scdView",
    component: scdView,
  },
  {
    path: "/props-emit-test",
    name: "PropsEmitTest",
    component: PropsEmitTest,
  },
  {
    path: "/function-test",
    name: "FunctionTest",
    component: FunctionTest,
  },
  {
    path: "/router-test",
    name: "RouterTest",
    component: RouterTest,
  },
  {
    path: "/vuex-test",
    name: "VuexTest",
    component: VuexTest,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
