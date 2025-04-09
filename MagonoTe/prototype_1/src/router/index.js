import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import ManageTopView from "@/views/ManageTopView.vue";
import TopView from "@/views/TopView.vue";
import RegistNewUserViews from "@/views/RegistNewUserView.vue";

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
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/manageTopView",
    name: "manageTopView",
    component: ManageTopView,
  },
  {
    path: "/topView",
    name: "topView",
    component: TopView,
  },
  {
    path: "/registNewUserView",
    name: "registNewUserView",
    component: RegistNewUserViews,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
