<template>
  <div>
    <h1>A组件</h1>
    <button @click="emit">emit</button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance()
const emit = ()=>{
  // emit(自定义事件, 参数)
  instance?.proxy?.$Bus.emit('on-click','mitttttttt')
}
</script>

<style scoped>

</style>