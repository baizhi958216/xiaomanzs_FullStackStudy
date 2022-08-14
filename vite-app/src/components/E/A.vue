<template>
  <div class="A">
    <h1>我是A组件</h1>
    <B></B>
    <div>
      {{dataA}}
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import B from './B.vue'

// 子组件使用inject接收
let dataA = inject('根组件的Boolean')
</script>

<style scoped>
.A{
  width: 250px;
  height: 250px;
  background-color: blue;
  color: #FFF;
}
</style>