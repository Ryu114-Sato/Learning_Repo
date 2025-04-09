import { createStore } from "vuex";

export default createStore({
  state: {
    loginInfo: [
      {
        loginIdNew: "",
        namae: "",
      },
    ],
    newLoginId: "",
    newLoginPw: "",
    loginUserName: "",
    users: [], // 新規ユーザー登録情報を保持する配列
  },
  getters: {
    getLoginInfo: (state) => {
      return state.loginInfo;
    },
    getLoginInfoById: (state) => (userData) => {
      //user IDが同じだった場合に登録しない処理を入れるため
      if (state.loginInfo) {
        state.loginInfo.filter((id) => {
          let resalt = id == userData;
          console.log("getLoginInfoById_resalt:" + resalt);
          return resalt;
        });
      }
      return false;
    },
    //アロー関数で書いた場合：
    visibleUsers: (state) => state.loginInfo.filter((user) => user.isVisible),
  },
  mutations: {
    setLoginInfo(state, addInfo) {
      state.loginInfo.push(addInfo);
    },
    setLoginUser(state, user) {
      state.loginUserName = user.name;
    },
    // 新規ユーザーを追加するミューテーション
    addUser(state, user) {
      state.users.push(user);
    },
  },
  actions: {
    setLoginInfoAction({ commit }, addInfo) {
      commit("setLoginInfo", addInfo);
    },
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
  },
  modules: {},
});
