import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //初期値を設定
    count: 0,
    users: [
      { id: 1, name: "大谷", isVisible: true },
      { id: 2, name: "佐藤", isVisible: false },
      { id: 3, name: "マイケル", isVisible: true },
    ],
  },
  getters: {
    // visibleUsers(state) {
    //   return state.users.filter((user) => user.isVisible);
    // },
    //アロー関数で書いた場合：
    visibleUsers: (state) => state.users.filter((user) => user.isVisible),

    //メソッドスタイル？
    getUserById: (state) => (id) => {
      //user IDが同じだった場合に表示する
      return state.users.find((user) => user.id === id);
    },
  },
  mutations: {
    //同期・履歴が残る (vue devtoolsで確認可能)
    decrement(state) {
      state.count--;
    },
    increment(state) {
      state.count++;
    },
    addCount(state, payload) {
      //第２引数はオブジェクトにすべき！（componentから渡ってくるデータを指定）
      state.count += payload.value;
    },
  },
  actions: {
    //非同期・mutasionsはaction経由で呼び出す

    /*  incrementAction(context){    
      context.commit('increment')
    }, */
    decrementAction({ commit }) {
      commit("decrement");
    },
    incrementAction({ commit }) {
      //上記の省略
      commit("increment");
    },
    addCountAction({ commit }, payload) {
      commit("addCount", payload);
    },
    //$store.dispatch('xxxx') で呼び出すF
  },
  modules: {
    auth,
  },
});
