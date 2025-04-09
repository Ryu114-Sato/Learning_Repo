<template>
  <div>GrandChildren
    <p><a :href="aboutProvide">Provide / inject</a></p>
    <p>{{ aboutProvide }}</p>
    
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue';

const aboutProvide = inject("aboutProvide");
if (!aboutProvide) {
  throw new Error("aboutProvide is not provided");
}

</script>

<style>

</style>