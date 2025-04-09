<template>
  <div>
    <div>
      「CompositionTest」
    </div>

    リアクティブではない名前：
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    リアクティブな文字列（ref）：
    <p>{{ nameRef }}</p>
    リアクティブなオブジェクト（reactive）：
    <p>{{ book.title }}</p>
    <p>{{ book.author[0] }}</p>
    <p>{{ book.author[1] }}</p>
    リアクティブなスプレッド構文オブジェクト（...toRefs）:
    <p>{{ title }}</p>
    <p>{{ author }}</p>
    メソッドは変数に入れて発火できる
    <br>
    <button @click="btnClicked">更新ボタン</button>
    <button @click="notReactive">非リアクティブ</button>
    
    <p>computed():
      <button @click="itemPlus">itemPlus</button>
      <br>
      item:{{ totalPrice }}
    </p>
    
    <div>watch：<input v-model="sertch">{{ sertch }}</div>
    <div>watchEfect：<input v-model="sertchEfect">{{ sertchEfect }}</div>
  </div>
</template>

<script lang="ts" >
import {ref,reactive,toRefs, computed,
        watch, watchEffect,onMounted} from "vue"
export default{
    setup(){
        console.log("setup です")
        console.log("this: "+this)
        //リアクティブな状態ではない、computedなどで値を更新できない
        let name = "佐藤　龍一"
        let age = 30
        // ref("string",Number)でリアクティブにする
        let nameRef = ref('神崎　人')
        console.log("scripu内でrefを参照する場合："+nameRef.value)
        //reactive({オブジェクト（dataに近い）})
        let book = reactive({
            title:"ZET MAN",
            author:["桂正和", "Ryuichi Sato"]
        })
        // toRef
        const bookToRefs = reactive({
            title:'プレイヤー',
            author:["灰谷", "エンビル"]
        })
        //method()
        const btnClicked = () =>{
            console.log("メソッド発火")
            nameRef = ref("デゼル")
            book.title ="alphas"
            book.author =  reactive(["天城こうが","正義"])
        } 
        const notReactive = () =>{
            age = 35
        }
        //computed
        const item = reactive({
            price:100,
            number: 1
        })
        const totalPrice = computed(()=>{
            return item.price * item.number
        })
        const itemPlus = () =>{
        item.number++
        }
        //watch
        const sertch = ref('') //監視対象
        watch(sertch,(newValue,prevValue)=>{
        console.log(`watch: ${sertch.value}`)
        console.log(`new: ${newValue}`)
        console.log(`prev: ${prevValue}`)
        itemPlus()

        })
        //watchEffect
        const sertchEfect = ref('')
        watchEffect(()=>{
            //処理の中で使っている値が監視対象
            console.log(`watchEfect:${sertchEfect.value}`)
        })
        //ライフサイクルフック
        onMounted(()=>{
            console.log('onMounted')
            console.log('setupはcreatedより前に呼ばれるが、少し後に呼びたい場合などに使う')
        })

        //※setup関数ないは最後returnで返す必要がある
        return {
            name, //JavaScript ES6では key : value が同じなら重複して書く必要はない 
            age:age,
            nameRef,
            book,
            ...toRefs(bookToRefs), //スプレッド構文でオブジェクトを展開して使える様にする,
            btnClicked,
            notReactive,
            totalPrice,
            item,
            itemPlus,
            sertch,
            sertchEfect
        }
    },
    data(){
        console.log("data():")
        return{
            number:1,
            sports:"サッカー"
        }
    },
    created(){
        console.log("Created です")
        console.log(this)
    },
    mounted(){
        console.log("Mounted です")
    },
}
</script>

<style>

</style>