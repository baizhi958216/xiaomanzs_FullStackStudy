<template>
  <div class="B">
    <h1>我是B组件</h1>
    <div>{{dataB}}</div>
    <button @click="changeAll">changeAll</button>
  </div>
</template>

<script setup lang="ts">
import { inject,Ref,ref } from 'vue';

// 子组件使用inject接收
let dataB = inject<Ref<Boolean>>('根组件的Boolean',ref(false))

// 会修改每一层的值
const changeAll = ()=>{
  dataB.value = !dataB.value
}
</script>

<style scoped>
.B {
  width: 200px;
  height: 200px;
  background-color: green;
  color: #FFF;
}
</style>