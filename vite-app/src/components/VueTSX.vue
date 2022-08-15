<template>
  <div>
    <renderDom @on-click="getArr" title="标题"></renderDom>
  </div>
</template>

<script setup lang="ts">
import renderDom from './VueTSX';

const getArr = (Arr: Array<any>) => {
  console.log(Arr)
}
</script>

<style scoped>
</style>