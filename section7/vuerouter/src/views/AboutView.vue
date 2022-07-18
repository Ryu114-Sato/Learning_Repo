<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="chkRouteInfo">ルート情報</button>
    <button @click="goTohome">homeに戻る</button>
    <button @click="goToSample">Samoleに遷移</button>
  </div>
</template>
<script>
export default {
  name:'About',
  methods:{
    chkRouteInfo(){
      console.log(this.$route)
      console.log(this.$route.path)
      console.log(this.$router)
    },
    goTohome(){
      this.$router.push('/')
    },
    goToSample(){
      this.$router.replace('/Sample')
    }
  },
}

</script>

