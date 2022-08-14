<template>
  <div class="App">
    <h1>我是根组件</h1>
    <A></A>
  </div>

</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import A from './E/A.vue'

// 根组件使用provide传递
// provide 只能在 setup 使用, 在创建组件时实例化( creatComponentInstance )
// provide 使用 getCurrentInstance 去寻找父级以及父级的 provides
// 读取到值之后通过 Object.create() 赋值给自身(原型继承, 所以改一个值都会全部修改)
provide('根组件的Boolean', ref(false))
</script>

<style scoped>
.App {
  width: 300px;
  height: 300px;
  background-color: red;
  color: #FFF;
}
</style>