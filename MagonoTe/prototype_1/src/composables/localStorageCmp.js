import useRouterCmp from "./useRouterCmp";
import { useStore } from "vuex";
export default function localStorageCmp(STORAGE_KEY, loginInfo) {
  const store = useStore();
  const { goLogin } = useRouterCmp();

  const getLocalStorage = async (loginInfo) => {
    console.log("getLocalStorage_1:" + STORAGE_KEY);
    const item = localStorage.getItem(STORAGE_KEY);
    if (localStorage.getItem(STORAGE_KEY)) {
      //localstrage(key) が設定されているか
      try {
        //ローカルストレージキーをdataに設定
        loginInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
        console.log("getLocalStorage_2:" + loginInfo);
      } catch (e) {
        localStorage.removeItem(STORAGE_KEY);
      }
      console.log("getLocalStorage_3:" + item);
    }
    // return loginInfo;
  };

  const addloginId = async (userData) => {
    const checkLeave = window.confirm("このIDで登録しますか？:" + userData);
    if (!userData) {
      return;
    } else if (userData) {
      //   const checked = await checkLoginInfo(newLoginId);
      // console.log("checked:" + checked);
      const checked = store.getters.getLoginInfoById(userData);
      if (checked) {
        return window
          .confirm("「このIDは既に登録されています」:" + userData)
          .goLogin();
      }
      //loginIdsに入力値を格納する
      else if (checkLeave) {
        //存在しなければ、ストアとDBに保存してログイン画面に遷移
        store.dispatch("setLoginInfoAction", userData);
        await saveStorage(store.state.loginInfo);
        await goLogin();
      } else {
        window.confirm(
          "「いいえ」が選択されたため、登録されませんでした:" + userData
        );
        goLogin();
      }
      console.log("addloginId_4:" + checkLeave);
    }
  };

  const checkLoginInfo = async (newLoginId) => {
    console.log("checkLoginInfo newLoginId:" + newLoginId);
    console.log("checkLoginInfo loginInfo:" + loginInfo);

    //配列内の重複削除
    // [...new Set(loginInfo)];

    return loginInfo.filter((info) => {
      console.log("info:" + info);
      return info.indexOf(newLoginId) !== -1;

      /*
        indexOfはJavaScriptの文字列検索の関数
        引数に渡したqueryにヒットしたtodoのみreturnする
      */
    });
  };

  const removeLoginId = async (x) => {
    const stLoginInfo = store.state.loginInfo;
    //StoreでloginInfoの状態保持
    stLoginInfo.splice(x, 1);
    await saveStorage(stLoginInfo);
  };

  const saveStorage = async (loginInfo) => {
    //ローカルストレージ保存 : loginInfoはStoreから取得
    const parsed = JSON.stringify(loginInfo);
    localStorage.setItem(STORAGE_KEY, parsed); //key , value
  };

  /* -------- chatGPT code --------- */

  // ローカルストレージからデータを取得する
  function getUsers() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        console.error("JSON parse error:", e);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    return [];
  }

  // ユーザーデータをローカルストレージに保存する
  function saveUsers(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }

  return {
    saveStorage,
    getLocalStorage,
    addloginId,
    removeLoginId,
    loginInfo,
    checkLoginInfo,
    getUsers,
    saveUsers,
  };
}
