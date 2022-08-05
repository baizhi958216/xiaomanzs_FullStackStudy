<template>
  <!-- 无key -->
  <div v-for="item in Arr">
    {{ item }}
  </div>
  <hr>
  <!-- 有key
  diff算法
  1 从前往后走 直到出现差异跳出循环 -> 2 从后往前走 直到出现差异跳出循环
  3 中间新增 挂载 -> 4 删除 卸载
  5 乱序 标记相同的 尽可能复用 不同的进行挂载删除
  -->
  <div :key="index" v-for="(item, index) in Arr">
    {{ item }}
  </div>
</template>

<script setup lang="ts">
// 无key
const Arr: Array<string> = ['A', 'B', 'C', 'D', 'E']
Arr.splice(2, 0, 'CCCCC')
</script>

<style scoped>
</style>