<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about" tag="button">About</router-link> -->
      <router-link to="/aboutView">About</router-link> |
      <router-link to="/SampleOne">SampleOne</router-link> |
      <router-link to="/book">BookList</router-link> |
      <router-link to="/item/1">Item</router-link>|
      <router-link to="/user">UserInfo</router-link>|
    </nav>
    <div class="blue-b">
      <transition name="fade" mode="out-in">
        <router-view> 名前がないのはdefault </router-view>
      </transition>
    </div>
    <p class="red-b">
      <router-view name="sub"> 名前があるのは名前付き </router-view>
    </p>
  </div>
</template>

<style lang="scss">
.fade {
  &-enter {
    opacity: 0;
    &-to {
      opacity: 1;
    }
    &-active {
      transition: opacity 0.6s;
    }
  }
  &-leave {
    opacity: 1;
    &-to {
      opacity: 0;
    }
    &-active {
      transition: opacity 0.6s;
    }
  }
}
.blue-b {
  border: 1px blue solid;
}
.red-b {
  border: 1px red solid;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a.router-link-active {
  color: red;
}
</style>
