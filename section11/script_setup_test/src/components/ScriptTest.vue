
<template>
  <div>ScriptTest
    <h1>{{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <br>
    <span>{{ props }}</span>
    <p>{{ props.title }}</p>
    <br>
    <button @click="emitTest('custom-event','子からの値')">EMIT Test</button>
  </div>
</template>


<script lang="ts" setup>
import {ref,defineProps,defineEmits} from "vue";

//props（子側）
const props = defineProps({
    title:String
})

//emits(子側)
const emitTest = defineEmits(["custom-event"])

const count= ref(0);

const increment = () => {
    count.value++;
}

const decrement = () => {
    count.value--;
}

</script>


<style>

</style>