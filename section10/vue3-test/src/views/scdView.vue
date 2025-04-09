<template>
  <div>
    <ul>やりたいこと：</ul>
    <li>**アプリ開発**</li>

    毎日1h

    <li>**ブログ/SNS **</li>

    毎日1h

    <li>** アルバイト **</li>

    週2 日？
    <div class="yellow-b">
      <h3>家計簿</h3>
      <div class="border-b">
        HelloCycling / 火・木・土
        <br>
        :300 * <input
          v-model="cycleUse.use"
          placeholder="1week使用回数"> 
        <br>
        {{ cyclePrice }}
      </div>

      <div class="border-b">
        1日何本吸う？： <br>
        <input v-model="smokeInfo.dailyConsumption" placeholder="1日の消化本数"><br>
        タバコ代 1ヶ月:<br>
        {{ monthlyCost }}
      </div>
      <div class="border-b">
        カフェ週 / 水・金：<br>
        <input v-model="cafePrice.cafeDay" placeholder="週何回通ったか？"><br>
        1ヶ月：{{ monthlyCafePrice }}
      </div>
      <div class="border-b">
        朝：バナナ / 昼：ラーメン<br>
        1ヶ月：{{ monthlyFoodPrice }}
      </div>
      <div>
        1ヶ月必要娯楽コスト：
        {{ totalMonthlyCost }}
      </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import { computed, reactive,  } from 'vue'; ''

const cycleUse = reactive({
    use:0,
    price:300 //1回150 の往復
    
})

const cyclePrice = computed(()=>{
    const oneWeek = cycleUse.use * cycleUse.price
    const oneMonth = oneWeek * 4
    return oneMonth
})

// タバコの情報を保持するリアクティブオブジェクト
const smokeInfo = reactive({
  dailyConsumption: 0, // 1日あたりの喫煙本数
  packPrice: 600,     // 1箱の価格（円）
  cigarettesPerPack: 20 // 1箱あたりの本数
});

// 1日あたりの費用を計算
const dailyCost = computed(() => {
  return (smokeInfo.dailyConsumption / smokeInfo.cigarettesPerPack) * smokeInfo.packPrice;
});

// 1ヶ月（30日）あたりの費用を計算
const monthlyCost = computed(() => {
  return dailyCost.value * 30;
});

//cafe
const cafePrice = reactive({
    american : 350,
    cafeDay:0
    
})
const monthlyCafePrice = computed(()=>{
    return (cafePrice.cafeDay * cafePrice.american) *4
})

//食費
const foodPrice = reactive({
    banana :100, //朝 コンビニ
    instanRamen:150, // スーパーで
})

const monthlyFoodPrice = computed(()=>{
    //5日平日分
    const oneWeekPrice = (foodPrice.banana + foodPrice.instanRamen) * 5
    //1ヶ月
    return oneWeekPrice * 4
})


const totalMonthlyCost = computed (()=>{
    return monthlyCost.value+cyclePrice.value+monthlyCafePrice.value+monthlyFoodPrice.value
})

</script>


<style>
.yellow-b{
    border: 1px yellowgreen solid;
    margin: 2%;
}
.border-b{
    border-bottom: 1px gray solid;
    margin-bottom: 2%;
}
</style>