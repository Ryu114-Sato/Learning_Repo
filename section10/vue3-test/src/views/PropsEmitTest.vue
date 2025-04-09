<template>
  <div>PropsEmitTest
    <div class="border-b">{{ setupBooks }}</div>
    <ul class="border-b">
      <li v-for="book in setupBooks" :key="book">
        {{ book.title }}
      </li>
    </ul>
    <div class="border-b">{{ dataBooks }}</div>
    <div>
      <button @click="emitTest">emitTest</button>
    </div>
  </div>
</template>

<script lang="ts" >
import { SetupContext } from 'vue';

export default {
    props:{
        setupBooks: Array,
        dataBooks: Array

    },
    setup(props: { setupBooks: { title: string }[]; dataBooks: any[] },
    context: SetupContext) {
        // setupBooks が空でないことを確認してからアクセスする
        if (props.setupBooks.length > 0) {
        console.log("PropsEmitTest_1:" + JSON.stringify(props.setupBooks[0].title));
        }
        console.log("PropsEmitTest_2:"+JSON.stringify(props.dataBooks))
        


        const emitTest = ()=>{
            console.log("PropsEmitTest_7:"+context.expose)
            //context. とすることでemitを使用可能
            context.emit('custom-event', '子の値')
        }
        /* 
        Vue 3 の Composition API では、
        setup 関数からコンポーネントで使用する値や関数を公開するには、
        オブジェクトとして返す必要があります。
        */
        return { emitTest }
    },
    // mounted(props) {
    //     console.log("PropsEmitTest:"+props.dataBooks)
    // },
}
</script>

<style>
.border-b{
    border-bottom: 1px gray solid;
    margin: 3%;
}
</style>