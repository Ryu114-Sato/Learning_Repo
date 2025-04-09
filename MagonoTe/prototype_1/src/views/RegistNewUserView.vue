<template>
<div>
<h2>新規ユーザー登録</h2>
</div>
<div v-for="(loginId, n) in loginInfo" :key="n">
    <p>
        <span class="magin-10">{{ loginId }}</span>
        <button @click="removeLoginId(n)">削除する</button>
    </p>
  <div v-if="validate(n)"> {{ validateError }} </div>
    <p>
        <input v-model="newLoginId" placeholder="ログインIDを入力してください"/>
    </p>
    <p>
      <input v-model="userName" placeholder="お名前を入力してください"/>
    </p>

    <!-- <p>
        <input v-model="newLoginPw" placeholder="ログインPWを入力してください"/>
    </p> -->
    <p>
        <button @click="setStoreData()">登録する</button>
    </p>
</div>
</template>

<script lang="ts" setup>
import {ref,reactive,watch } from 'vue';
import { useStore } from 'vuex';
import localStorageCmp from '@/composables/localStorageCmp';


const STORAGE_KEY = "newLoginIds";
const store = useStore()

let userData = reactive({
  loginIdNew:"",
  namae:""
});

//ストアから取得する
let loginInfo = store.state.loginInfo

const {getLocalStorage,removeLoginId} = localStorageCmp(STORAGE_KEY,loginInfo)

//これはこのページでリアクティブに変数を持つ
let  newLoginId = ref('')
let userName = ref('')
let validateError = reactive([])

const setStoreData = async () => {
  if(newLoginId.value){
    //ユーザーが入力した値を設定
    userData.loginIdNew = newLoginId.value;
    userData.namae = userName.value;
    //ストアに既に存在するかの、重複チェック
  return  store.getters.getLoginInfoById(userData.loginIdNew)
  }else{
    console.log("RegistNewUserView_newLoginId:"+newLoginId.value)
  } 
}

const validate = (n) =>{
  if(newLoginId.value == n){
    validateError.push('このIDは既に登録されています')
  }else if(userName.value.length > 20){
    validateError.push('氏名は20文字以内で入力して下さい')
  return 
}else{
  return
}
}


watch(userData,(newValue,prevValue)=>{
  console.log(`watch: ${userData}`)
  console.log(`新たな値: ${newValue}`)
  console.log(`一つ前の値: ${prevValue}`)
  const getId = store.getters.getLoginInfoById(userData.loginIdNew)
  console.log("getId:"+getId)
  })

console.log("userData"+userData);

//let  newLoginPw = ref('')

getLocalStorage(STORAGE_KEY).then(async (result)=>{
  console.log("getLocalStorage_result:"+result)

 // await store.dispatch("setLoginInfoAction",result)
})

</script>

<style>
.magin-10{
  margin: 10%;
}
.red-text{
  color: red;
}
[v-cloak] {
        display:none;
      }

</style>