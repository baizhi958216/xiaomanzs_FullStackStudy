<template>
  <div>
    <h1>B组件</h1>
    <p>{{ stt }}</p>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue';

const instance = getCurrentInstance()

let stt = ref('')

const Bus = (str:any)=>{
  stt.value = str
}
// on 开启 (自定义mitt事件 函数)
instance?.proxy?.$Bus.on('on-click', Bus)

// off 取消 (自定义mitt事件, 函数)
instance?.proxy?.$Bus.off('on-click', Bus)

// all.clear()清除所有mitt事件
instance?.proxy?.$Bus.all.clear()
</script>

<style scoped>
</style>