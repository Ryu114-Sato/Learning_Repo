<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/childrenViews">Children</router-link> |
    <router-link to="/teleport-test">teleportTest</router-link>|
    <router-link to="/composition-test">composition</router-link>|
    <router-link to="/scd-view">scdView</router-link> |
    <router-link to="/props-emit-test">PropsEmit</router-link> |
    <router-link to="/function-test">cmpFunction</router-link> |
    <router-link to="/router-test">Router</router-link> |
    <router-link to="/vuex-test">Vuex</router-link> 
  </nav>
  <div class="blue-b">
    Pairent(親)<br>
    <button @click="increment">Count is: {{ count }}</button>
    <div class="red-b">
      router-view
      <router-view :setupBooks="setupBooks" 
                   :dataBooks="dataBooks"
                   @custom-event="parentMethod"/>
    </div>
    <div>parentMethod:{{ emitVal }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, provide,reactive } from "vue";

// リアクティブな状態
const count = ref(1);

// 状態を変更し、更新をトリガーする関数。
function increment() {
  console.log("★increment function:")
  count.value++;
}

console.log('セットアップ時に実行されます（created() と同じタイミング）');

// ライフサイクルフック
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});

// provide(){
//   return{
//     userName:"親で設定した値です"
//   }
// }

// 値を provide する
provide("userName", "親で設定した値です");
const url =
  "https://ja.vuejs.org/api/composition-api-dependency-injection?utm_source=chatgpt.com";
provide("aboutProvide", url);
provide("count", count);

// setup() で定義していた部分
const setupBooks = reactive([
  {
    title: 'setupタイトル1',
    author: 'setup著者1'
  },
  {
    title: 'setupタイトル2',
    author: 'setup著者2'
  }
]);

// data() で定義していた部分
const dataBooks = reactive([
  {
    title: 'dataタイトル1',
    author: 'data著者1'
  },
  {
    title: 'dataタイトル2',
    author: 'data著者2'
  }
]);

//emit
function parentMethod(e){
  console.log("子から渡ってきた値:"+e)
  let emitVal = reactive([e])
  console.log("emitVal:"+emitVal)

  /*
  console.log(e) が出力できなかった理由
  @custom-event emitの場合:ではなく＠となる
  */
}

</script>

<style>
.red-b {
  border: 1px red solid;
  margin: 2%;
}
.blue-b {
  border: 1px blue solid;
  margin: 3%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
