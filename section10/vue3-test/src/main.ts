import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");

//スプラッシュ.ストア.ルーター.仮想DOMという順番で読み込んでいる
