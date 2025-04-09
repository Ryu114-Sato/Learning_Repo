import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookList from "../views/BookList.vue";
import BookDetail from "@/components/BookDetail.vue";
import ItemList from "../views/ItemList.vue";
import NotFound from "@/components/NotFound.vue";
import UserProfile from "@/components/UserProfile.vue";
import UserPost from "@/components/UserPost.vue";
import UserInfo from "@/views/UserInfo.vue";
import HomeSub from "@/components/HomeSub.vue";

//Vue Router 設定ファイル

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: HomeView,
      sub: HomeSub,
    },
  },

  {
    path: "/aboutView",
    name: "AboutView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    //遅延ローディングと言われていて、アロー関数を使用して必要な時のみ呼び出す仕組み
  },
  {
    path: "/SampleOne",
    name: "SampleOne",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SampleOne.vue"),
  },
  {
    path: "/book",
    name: "BookList",
    component: BookList,
  },
  {
    path: "/book/id",
    name: "Book",
    component: BookDetail,
    props: (route) => ({
      id: Number(route.params.id),
      title: route.params.title,
      content: route.params.content,
    }),
  },
  {
    path: "/item/:id",
    name: "ItemList",
    component: ItemList,
    // beforeEnter: (to, from, next) => {
    //   // ...
    // }
  },
  {
    path: "/user",
    component: UserInfo,
    //ネストされたルートはnameを書くとエラーが出るので不要
    children: [
      {
        path: "/profile",
        component: UserProfile,
      },
      {
        path: "/post",
        component: UserPost,
      },
    ],
  },
  {
    path: "*",
    //上のpath中に該当しないpathの場合
    // redirect: "/", //homeに戻る様に設定
    name: "NotFound",
    component: NotFound,
  },
];
/* 
historyとは：
router.replaceについてrouter.pushとの違いは、
指定したURLをhistoryのスタックに追加せずに上書きしてページ遷移する点です。
NextはURLのhistoryをwindow.historyで管理していますが、
router.replaceは直接historyを上書きする感じで実装されていそうでした */
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("beforeEach to :" + JSON.stringify(to.path));
  console.log("beforeEach from :" + JSON.stringify(from.path));
  //next はつけないとrouter-viewが動作しない
  next();
  console.log("beforeEach next");
});

export default router;
