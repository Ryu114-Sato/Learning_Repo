<template>
  <div>
    GrandChildren(孫)
    <p>ユーザー名：{{ userName }}</p>
    <p><a :href="aboutProvide">Provide / inject</a></p>
    <p>{{ aboutProvide }}</p>
  </div>
  <div>
    <p>親のカウント：{{ count }}</p>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";

const userName = inject("userName");
const aboutProvide = inject("aboutProvide");
if (!aboutProvide) {
  throw new Error("aboutProvide is not provided");
}
const count = inject("count");
</script>

<style>
/* .purple-b {
  border: 1px purple solid;
  margin: 2%;
} */
</style>
