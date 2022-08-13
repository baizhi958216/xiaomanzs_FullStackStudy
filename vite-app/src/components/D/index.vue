<template>
  <div>
    <div v-for="item in list">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { axios } from './server'

// setup语法糖可以不写async
const list = await axios('./data.json')
console.log(list)

</script>

<style scoped>
</style>