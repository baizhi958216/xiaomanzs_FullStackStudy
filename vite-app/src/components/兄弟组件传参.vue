<template>
  <div>
    <A @click="getFlag"></A>
    <!-- 传递flag -->
    <B :flag="Flag"></B>
  </div>
</template>

<script setup lang="ts">
import A from './F/A.vue'
import B from './F/B.vue'
import { ref } from 'vue'

let Flag = ref(true)

// 触发事件接收flag
const getFlag = () => {
  // 修改flag
  Flag.value = !Flag.value
}


</script>

<style scoped>
</style>