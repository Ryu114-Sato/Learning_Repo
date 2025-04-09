<template>
  <div>
    ComposiotionFunctionTest
    <p>商品名 :{{ item.name }}</p>
    <p>単価:{{ item.price }}</p>
    <p>合計 :{{ totalPrice }}</p>
    <div>数量</div>
    <button @click='decrement'>-</button>
    <button @click='increment'>+</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import useCounter from '@/composables/useCounter'

const item = reactive({
    name:'商品名',
    price: 100,
    amount:0
})

//script内で合成関数を作成する場合：
// const useCounter = item => {
//     const increment = () => {
//       item.amount++
//     }
//     const decrement = () => {
//       item.amount--
//     }
//     const totalPrice = computed(()=>{
//         //※引数がcallback関数のため、returnで返却する必要がある
//       return item.price * item.amount
//     })
//    //作成した関数はreturnで返す
//     return {increment, decrement,totalPrice}
//    }
    const{increment, decrement, totalPrice} = useCounter(item)


/*
トップレベル(<scripu setup>ブロック内)で定義した変数は自動的にテンプレート側にエクスポートされます。
const{increment, decrement, totalPrice} = useCounter(item)
 return {item,increment,decrement,totalPrice}
 */

</script>

<style>

</style>