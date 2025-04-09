<template>
  <div id="app">
    <h1>
      {{ usersData }}
    </h1>
    <a href="indexPage.html">index</a>
    <br />
    <a href="usersPage.html">users</a>
  </div>
</template>

<script>
export default {
  // name: UsersPage,
  data() {
    return {
      usersData: "Users ページだよ",
    };
  },
};
</script>

<style>
</style>