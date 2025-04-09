<template>
<div>VuexTest</div>
<div>合計：{{ count }}</div>
<div> Clicked: {{ count }} times, count is {{ evenOrOdd }}.</div>
<div><button @click="increment">+</button></div>
<button @click="decrement">-</button>
<button @click="incrementIfOdd">Increment if odd</button>
<button @click="incrementAsync">Increment async</button>
</template>

<script lang="ts" >
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore()
        const count = computed(()=>{
            return store.state.count
        })
        const increment = () => {
            store.commit('increment')
        }

        return{count, increment,
        decrement: () => store.dispatch('decrement'),
        incrementIfOdd: () => store.dispatch('incrementIfOdd'),
        incrementAsync: () => store.dispatch('incrementAsync'),
        evenOrOdd: computed(() => store.getters.evenOrOdd),
        }
    },
}

</script>

<style>

</style>