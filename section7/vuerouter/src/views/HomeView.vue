<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p class="green-b">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </p>
    <button class="margin" @click="checkProcessEnv">process.envを表示</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    checkProcessEnv() {
      console.log(process.env);
    },
  },
};
</script>

<style>
.green-b {
  border: 1px green solid;
}
.lightslategray-b {
  border: 1px lightslategray solid;
}
.margin {
  margin-bottom: 5%;
}
</style>