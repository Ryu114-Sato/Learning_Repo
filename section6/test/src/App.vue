<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TestComponent />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestComponent from './modules/TestComponent.vue'
//exportされているので、取り込む

export default {//エントリーポイント で取り込む為にexportする
  name: 'App',
  components: {
    HelloWorld,
    TestComponent
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
