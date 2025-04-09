<template>
  <div>
    404 ページが見つかりませんでした
    <br /><button @click="backHome">ホームへ</button>
    <v-btn @click.prevent="backHome" color="cyan" dark></v-btn>
    <br />
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    backHome() {
      console.log(process.env);
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>