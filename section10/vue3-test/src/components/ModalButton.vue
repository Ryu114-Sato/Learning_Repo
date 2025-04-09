<template>
  <div class="relative">
    <button @click="modalOpen = true">モーダル</button>
    <teleport to='body' >
    <div v-if="modalOpen" class="modal">
        <div>
            <p>モーダルウィンドウ</p>
            <button @click="modalOpen = false">close</button>
        </div>
    </div>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// モーダルの表示・非表示を管理するリアクティブな変数
const modalOpen = ref(false);


</script>



<style>
.relative{
    position: relative;
}
.modal {
  position: absolute;
  background-color: rgba(0,0,0,.5);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 50%;
    height: 150px;
    padding: 5px;
}
</style>