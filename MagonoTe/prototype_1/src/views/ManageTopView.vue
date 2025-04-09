<template>
  <div>
    管理者画面
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore()
const loginInfo = store.state.loginInfo

if(loginInfo){
  console.log("loginInfo:"+loginInfo)
}else{
  console.log("loginInfoは空です")
}


</script>

<style>

</style>