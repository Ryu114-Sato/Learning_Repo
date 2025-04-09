<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ScriptSetupTest :title="parent" 
  @custom-event="parentMethod"
  />
  {{ emitData }}
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ScriptSetupTest from './components/ScriptTest.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ScriptSetupTest
  },
  data(){
    return{
      parent:'親側の値',
      emitData:''
    }

  },
  methods:{
    parentMethod(e){
    console.log("custom-event"+e)
    this.emitData = e
  }
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
