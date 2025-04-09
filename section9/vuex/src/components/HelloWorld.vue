<template>
  <!-- index.vue-->
  <div class="red-b">
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <button @click="incrementAction">+:Map</button>
    <button @click="addCount">=+10</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: function () {
    return {
      // infomationBanners: [],
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    try {
      console.log("mounted" + 1);
      this.addCount();
      console.log(1);
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    /* increment(){
        this.$store.commit('increment')
        },
        addCount(){
        this.$store.commit('addCount',{
        value: 10
        })
    }, */
    decrement() {
      this.$store.dispatch("decrementAction");
    },
    increment() {
      this.$store.dispatch("incrementAction");
    },
    //上記の短縮Ver
    ...mapActions(["incrementAction", "addCountAction"]),

    addCount() {
      // this.$store.dispatch("addCountAction", {
      //   value: 10,
      // });

      //mapActionsで引数をつける場合、以下の様に他のメソッドで引数をつけて呼び出す
      this.addCountAction({
        value: 10,
      });
    },
    ...mapActions(["addCountAction"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red-b {
  border: 1px red solid;
}
</style>