import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '@/components/BookDetail.vue'
//Vue Router 設定ファイル

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    //遅延ローディングと言われていて、アロー関数を使用して必要な時のみ呼び出す仕組み
  },
  {
    path: '/Sample',
    name: 'Sample',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sample.vue')
    
  },
  {
    path: '/book',
    name: 'BookList',
    component: BookList
    
  },
  {
    path: '/book/id',
    name: 'Book',
    component: BookDetail,
    props:(route)=>({
      id: route.params.id,
      title: route.params.title,
      content: route.params.content

    })
  }
]
/* 
historyとは：
router.replaceについてrouter.pushとの違いは、
指定したURLをhistoryのスタックに追加せずに上書きしてページ遷移する点です。
NextはURLのhistoryをwindow.historyで管理していますが、
router.replaceは直接historyを上書きする感じで実装されていそうでした */
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
