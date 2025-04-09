<template>
  <div class="margin-3">children (子ども)</div>
  <div class="purple-b">
    <Grand-Children />
  </div>
</template>

<script lang="ts" setup>
import GrandChildren from "@/components/GrandChildren.vue";

// setup を使っている場合、不要
// export default {
//   components: {
//     GrandChildren,
//   },
// };
</script>

<style>
.margin-3 {
  /* padding: 5%; */
  margin: 3%;
}
.purple-b {
  border: 1px purple solid;
  margin: 2%;
}
</style>