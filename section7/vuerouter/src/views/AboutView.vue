<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      <button @click="chkRouteInfo">ルート情報出力</button>
    </p>

    <button @click="goTohome">homeに戻る</button>
    <p><button @click="goToSampleOne">SamoleOneに遷移</button></p>
    <button @click="goApiUrl">APIについて</button>
  </div>
</template>
<script>
export default {
  name: "AboutView",
  methods: {
    chkRouteInfo() {
      console.log("現在表示されているページの情報：" + this.$route);
      console.log(this.$route.path);
      console.log(this.$router);
    },
    goTohome() {
      this.$router.push("/");
    },
    goToSampleOne() {
      this.$router.replace("/SampleOne");
    },
    goApiUrl() {
      this.$router.push("https://v3.router.vuejs.org/ja/api/#tag");
    },
  },
  beforeRouteLeave(to, from, next) {
    // ...現在いるページを離れる時に動作？
    const checkLeave = window.confirm("本当にこのページを離れますか？");
    console.log("checkLeave:" + checkLeave);
    next(checkLeave);
    // 以下だと動作しないのでシンプルにした
    // if (checkLeave) {
    //   console.log("checkLeave:" + checkLeave);
    //   next();
    // } else {
    //   console.log("checkLeave:" + checkLeave);
    //   next(false);
    // }
  },
};
</script>

