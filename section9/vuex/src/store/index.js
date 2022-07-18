import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//初期値を設定
    count: 0
  },
  mutations: {//同期・履歴が残る
    increment(state){
      state.count++
    },
    addCount(state,payload){
      //第２引数はオブジェクトにすべき！（componentから渡ってくるデータを指定）
      state.count += payload.value
    }
    //$store.commit('xxxx') で呼び出す
  },
  actions: {//非同期・mutasionsはaction経由で呼び出す
    incrementAction(context){
      //mutationsのincrementを呼び出す
      context.commit('increment')
    },
    incrementAction({commit}){
      //上記の省略
      commit('increment')
    },
    addCountAction({commit},payload){
  commit('addCount',payload)
}
    //$store.dispatch('xxxx') で呼び出す
  },
  getters:{

  },
  modules: {
  }
})
