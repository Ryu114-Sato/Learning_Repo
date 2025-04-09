<template>
<div class="red-b">
    <div class="border_blue">
        SCSSテストです。
    </div>
テストです。
{{testData}}

<div class="background__primary">
    SCSSグローバルテストです。
</div>
</template>

<script>


export default {
name:'TestComponent',
data(){
    return{
        testData:'テストデータです'
    }
}
}
</script>

<style scoped lang="scss">
.red-b{
    border: red solid;
}

.border{
    &__blue{
        border:1px blue solid;
    }
}

.background__primary{
    background-color: $color_primary
}

</style>