<template>
  <div>
    <h2>テストコンポーネントです</h2>
    <p class="red-b">
      {{ testData }}
    </p>
    <p class="border__blue">SCSSテスト</p>
    <p class="background__primary">SCSSグローバルテスト</p>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  data() {
    return {
      testData: "テストデータです",
    };
  },
};
</script>

<style scoped lang="scss">
.red-b {
  border: red 1px solid;
}

/* lang="scss" でscssを利用できる様にする */
.border {
  &__blue {
    border: 1px blue solid;
  }
}

.background__primary {
  background-color: $color-primary;
}
</style>