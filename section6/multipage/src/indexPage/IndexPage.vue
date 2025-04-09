<template>
  <div id="app">
    <h1>
      {{ indexData }}
    </h1>
    <a href="indexPage.html">index</a>
    <br />
    <a href="usersPage.html">users</a>
  </div>
</template>

<script>
export default {
  // name: IndexPage,
  data() {
    return {
      indexData: "Index ページだよ",
    };
  },
};
</script>

<style>
</style>