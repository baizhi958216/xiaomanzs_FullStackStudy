<template>
  <div>
    组件
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onUnmounted } from 'vue'
// Unmount写在组件里
onBeforeUnmount(() => {
  console.log('卸载之前=====>onBeforeUnmount')
})
onUnmounted(() => {
  console.log('卸载完成=====>onUnmounted')
})
</script>

<style scoped>
</style>