<template>
  <!-- page.vue-->
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <p>
      <router-view />
    </p>
    <button @click="setLogin" color="cyan">ログイン名表示</button>
    <div class="blueviolet-b">
      count: {{ $store.state.count }}
      <br />
      <ul>
        <li v-for="user in visibleUsers" :key="user.id">
          {{ user.id }} : {{ user.name }} : {{ user.isVisible }}
        </li>
      </ul>
      <br />
      <p>ID：2</p>
      {{ getUserById }}
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    try {
      console.log("App/mounted" + 1);
      this.addCount();
      console.log(2);
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    //mapActions("modules","Actions")
    ...mapActions("auth", ["setLoginUser"]),
    setLogin() {
      this.setLoginUser({ name: "モジュール分割君" });
    },
  },
  computed: {
    visibleUsers() {
      //メソッドスタイルでの呼び出し
      return this.$store.getters.visibleUsers;
    },
    getUserById() {
      return this.$store.getters.getUserById(2);
    },
  },
};
</script>

<style scoped>
.blueviolet-b {
  border: 1px blueviolet solid;
}
</style>
