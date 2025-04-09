<template>
  <div>LoginView</div>
  <input v-model.number="loginId" placeholder="input your login id" class="login_m"/>
  <button @click="nextLogin">Login</button>
  <p>
  <router-link to="/registNewUserView">新規ユーザー登録はこちら</router-link>
  </p>
</template>

<script lang="ts" setup>
import useRouterCmp from '@/composables/useRouterCmp'
import {ref,watch } from 'vue'
import { useStore } from 'vuex';

const store = useStore()
const loginInfo = store.state.loginInfo
console.log("LoginView_loginInfo"+loginInfo)

//合成関数も基本的には分割モジュールで呼び出すのが良さそう
const {goManageTop ,goTop, checkRoutePath } = useRouterCmp()

console.log("checkRoutePath:"+checkRoutePath)

//ユーザーの入力したログインID格納変数
const loginId = ref(0)

  watch(loginId,(newValue,prevValue)=>{
  console.log(`watch: ${loginId.value}`)
  console.log(`新たな値: ${newValue}`)
  console.log(`一つ前の値: ${prevValue}`)
  })

    /* ログインIDとPWをDBから取得したのと一致したら、ログイン成功処理 */

//トップ画面遷移遷移処理
const nextLogin = () =>{
  const getId = store.getters.getLoginInfoById(loginId)
  console.log("nextLogin_getId:"+getId)

    //画面遷移判定処理
    if(getId){
        goManageTop()
    } else {
        goTop()
    }
}



</script>

<style>
.login_m{
    margin: 5%;
}


</style>