<template>
  <div>
    <p>ItemList</p>
    <router-link to="1">Item1</router-link><br />
    <router-link to="2">Item2</router-link><br />
    <router-link to="3">Item3</router-link>
    <p>{{ $route.params.id }}</p>
    <p>このコンポーネントで動的パラメータへ変更</p>
    <p v-if="$route.params.id === '3'">
      同じコンポーネントで動的パラメータを使用して表示を切り替える場合はwatchを使う
    </p>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: {
    id: Number,
  },
  created() {
    //同じコンポーネント内で表示を切り替える場合このライフサイクルフックは呼ばれない
    console.log("created:");
  },
  watch: {
    $route(val, oldVal) {
      console.log("val:" + JSON.stringify(val.params));
      console.log("oldVal:" + JSON.stringify(oldVal.params));

      // console.log(to); この様にも書く
      // console.log(from);
    },
  },
};
</script>

<style>
</style>