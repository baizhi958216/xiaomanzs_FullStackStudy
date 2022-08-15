<template>
  <div>
    <button @click="flag=!flag">切换flag</button>
    <div>{{flag}}</div>
  </div>
</template>

<script setup lang="ts">
let flag = ref<boolean>(true)
</script>

<style scoped>

</style>