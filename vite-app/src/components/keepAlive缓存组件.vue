<template>
  <div>
    <button @click="switchCom">切换</button>

    <!-- 
      指定缓存: :include
      指定不缓存: :exclude
      指定缓存数量: :max
     -->
    <keep-alive :include="['login']">
      <Login v-if="flag"></Login>
      <Register v-else></Register>
    </keep-alive>

  </div>
</template>

<script setup lang="ts">
import Login from './login/index.vue'
import Register from './register/index.vue'
import { ref } from 'vue';

let flag = ref(true)
const switchCom = () => {
  flag.value = !flag.value
}
</script>

<style scoped>
</style>