<template>
  <input id="ms1" type="text" v-model="message1">
  <input type="text" v-model="message2">
  <button @click="stopWatch">停止监听</button>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
let message1 = ref('Hello')
let message2 = ref('Hello')
// watchEffect 副作用之一: DOM加载前获取不到元素 为null 需要flush参数
const stop1 = watchEffect((oninvalidate) => {
  // 若未配置flush, 为null
  let ms1: HTMLInputElement = document.querySelector('#ms1') as HTMLInputElement
  console.log(ms1)
  // 监听message1
  console.log('Value======>', message1.value)
  // oninvalidate 在进监听到数据更新前执行
  oninvalidate(() => {
    console.log('watchEffect前操作')
  })
}, {
  // flush 使watchEffect在DOM加载后执行
  // 否则获取的DOM元素为null
  flush: 'post',
  // onTrack 将在响应式 property 或 ref 作为依赖项被追踪时被调用。
  // onTrigger 将在依赖项变更导致副作用被触发时被调用。
  onTrigger(e) {
    debugger
  }
})
const stopWatch = () => {
  // 显式调用返回值以停止侦听
  stop1()
}
</script>

<style scoped>
</style>