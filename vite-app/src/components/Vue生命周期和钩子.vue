<template>
  <!-- Mount -->
  <div class="hello">
    Hi
  </div>
  <hr>

  <!-- Update -->
  <div>{{ ct }}</div>
  <button @click="ct++">count++</button>
  <hr>

  <!-- Unmount -->
  <div>
    <vUnmount v-if="flag"></vUnmount>
  </div>
  <button @click="flag = !flag">卸载组件</button>
</template>

<!-- setup语法 -->
<script setup lang="ts">
import vUnmount from './child/UnmountDemo.vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, ref } from 'vue'
console.log('setup')
// Mount
onBeforeMount(() => {
  let divh = document.querySelector('.hello')
  console.log('创建之前=====> onBeforeMount div:', divh)
})
onMounted(() => {
  let divh = document.querySelector('.hello')
  console.log('创建完成=====> onMounted div:', divh)
})

// Update
let ct = ref(1)
onBeforeUpdate(() => {
  console.log('更新之前=====>onBeforeUpdate');
})
onUpdated(() => {
  console.log('更新完毕=====>onUpdated');
})

// Unmount
let flag = ref(true)
</script>

<style scoped>
</style>