<template>
  <div>RouterTest
    <button @click="goHome">HOME</button>
    <button @click="checkRoutePath">ルート情報</button>
  </div>
</template>

<script>
import { useRoute, useRouter,onBeforeRouteLeave } from 'vue-router';

export default{
    setup(){
        //定数に変換するのが推奨
        const router = useRouter();
        const route = useRoute();

        const goHome = () =>{
            router.push('/')
        }
        const checkRoutePath = () => {
            console.log(route.path)
        }
        //vue router 実行時にこの関数の中が実行される
        onBeforeRouteLeave((to, from) =>{
            console.log(`to: ${to}`)
            console.log(`from: ${from}`)
        })
        return {
            goHome,
            checkRoutePath
        }
    }
}

</script>

<style>

</style>