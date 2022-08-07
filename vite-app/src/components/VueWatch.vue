<template>
  <!-- 监听多个值 -->
  <input type="text" v-model="message1">
  <input type="text" v-model="message2">
  <input type="text" v-model="message3">
  <hr>
  <!-- 深度监听 -->
  <input type="text" v-model="message4.first.second.third.forth.name">
  <hr>
  <!-- reactive实现深度监听 -->
  <input type="text" v-model="message5.first.second.third.forth.name">
  <hr>
  <!-- 监听指定值 -->
  <input type="text" v-model="message6.name1">
  <input type="text" v-model="message6.name2">
</template>

<script setup lang="ts">
import { watch, ref, reactive } from 'vue'

// 监听多个值
let message1 = ref<string>('')
let message2 = ref<string>('')
let message3 = ref<string>('')

watch([message1, message2, message3], (newVal, oldVal) => {
  console.log('新值' + newVal);
  console.log('旧值' + oldVal);
})

// 深度监听
let message4 = ref({
  first: {
    second: {
      third: {
        forth: {
          name: 'baizhi958216'
        }
      }
    }
  }
})
watch(message4, (newVal, oldVal) => {
  console.log('新值:', newVal)
  console.log('旧值:', oldVal)
}, {
  // 开启深度监听
  // 新值与旧值相同(bug)
  deep: true,
  // 视图加载就启动监听
  immediate: true
})

// reactive可以进行深度监听
let message5 = reactive({
  first: {
    second: {
      third: {
        forth: {
          name: 'baizhi958216'
        }
      }
    }
  }
})
watch(message5, (newVal, oldVal) => {
  console.log('新值:', newVal)
  console.log('旧值:', oldVal)
})

// 监听指定值
let message6 = reactive({
  name1: "abc",
  name2: "def"
})
// 监听message6.name1, 不对message.name2更新进行监听
watch(() => message6.name1, (newVal, oldVal) => {
  console.log('新值:', newVal)
  console.log('旧值:', oldVal)
})
</script>

<style scoped>
</style>