<template>
  <div>
    <button @click="emitB">派发事件</button>
  </div>
</template>

<script setup lang="ts">
import Bus from '../Bus'
// const emit = defineEmits(['on-click'])
let flag = false
const emitB = () => {
  flag = !flag
  // 触发事件传递flag给父组件 emit
  // emit('on-click', flag)
  // 触发事件传递flag给父组件 通过Bus传递
  Bus.emit('on-click',flag)
}
</script>

<style scoped>
</style>