import Vue from 'vue'
import VueRouter from 'vue-router'
import BookIndex from '../pages/BookIndex'
import BookSearch from '../pages/BookSearch'
import BookEdit from '../pages/BookEdit'
import StudyIndex from '../pages/StudyIndex'
import addStudyFile from '../pages/addStudyFile'
//@/pagesだと読み込めない

Vue.use(VueRouter)

const routes = [
  {//http://localhost:8080/ の先を設定
    path: '/',
    name: 'BookIndex',
    component: BookIndex
  },
  {
    path: '/search',
    name: 'BookSearch',
    component: BookSearch
  },
  {
    path: '/edit/:id',
    name: 'BookEdit',
    component: BookEdit
  },
  {//存在しないURLだとHOMEに戻る
    path: '*',
    redirect: '/',
  },
  {
    path: '/StudyIndex',
    name: 'StudyIndex',
    component: StudyIndex
  },
  {
    path: '/addStudyFile',
    name: 'addStudyFile',
    component:addStudyFile
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
