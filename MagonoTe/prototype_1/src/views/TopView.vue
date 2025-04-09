<template>
  <div>
    <v-container>
        こんにちは
      <p> {{props.userName}}さんのトップ画面です</p>
    <v-row>
      <v-col>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            :events="events"
            color="primary"
          ></v-calendar>
        </v-sheet>
      </v-col>
    </v-row>
    <button @click="reserveTaxi">介護タクシーを予約する</button>
    <div :href="explain">孫の手とは？</div>
  </v-container>
  </div>
</template>

<script lang="ts" setup>
// import GrandChildren from '@/components/GrandChildren.vue'
import { ref, defineProps } from 'vue';
//import useRouterCmp from '@/composables/useRouterCmp';

const explain = ref("./explain")

const props = defineProps({
    userName:String
})

const focus = ref(new Date().toISOString().substr(0, 10));
    const events = ref([
      {
        name: '予約1',
        start: '2025-03-20',
        end: '2025-03-20',
      },
      {
        name: '予約2',
        start: '2025-03-22',
        end: '2025-03-22',
      },
    ]);
const reserveTaxi = () =>{

}



</script>

<style>


</style>