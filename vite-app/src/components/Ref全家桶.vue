<template>
  <button @click="refChange">refChange</button>
  <!-- template会解包，不需要加.valuex  -->
  <div>{{ message1 }}</div>
  <hr>
  <!-- shallowRef -->
  <button @click="shallowRefChange">shallowRefChange</button>
  <div>{{ message2 }}</div>
  <hr>
  <!-- triggerRef -->
  <button @click="triggerRefChange">triggerRefChange</button>
  <div>{{ message3 }}</div>
  <hr>
  <!-- customRef -->
  <button @click="customRefChange">customRefChange</button>
  <div>{{ message4 }}</div>

  <!-- ref的更新也会导致shallowRef视图的更新 -->
  <button @click="change">change</button>
  <div>{{ message5 }}_{{ message6 }}</div>
</template>

<script setup lang="ts">
// 通过Ref包装后则作为响应式更新
import { isRef, ref, Ref, shallowRef, triggerRef, customRef } from 'vue'
// ref
let message1: Ref<string> = ref('你好')

let noRef: number = 1

const refChange = () => {
  // ref 对象仅有一个 .value property，指向该内部值。
  message1.value = 'baizhi958216'
  console.log(message1)
}
// 判断是否Ref对象
console.log(isRef(noRef))
console.log(isRef(message1))

/* 
  shallowRef
  节省性能, 不需要响应式的内容
 */
/* let message2 = shallowRef('你好')
const shallowRefChange = () => {
  message2.value = '白'
} */
// 若对象类型, shallowRef不具有响应式
let message2 = shallowRef({
  name: '你好'
})
/* const shallowRefChange = () => {
  message2.value.name = '白'
} */
// 若需要数据发生改变，需要将value包装成对象类型
const shallowRefChange = () => {
  message2.value = { name: '白' }
}

// triggerRef需要配合shallowRef使用
let message3 = shallowRef({
  name: '你好'
})
const triggerRefChange = () => {
  message3.value.name = '白'
  triggerRef(message3)
}

// customRef
function myRef<T>(value: T) {
  return customRef((trank, trigger) => {
    return {
      get() {
        trank()
        return value
      },
      set(newValue: T) {
        console.log('set')
        value = newValue
        trigger()
      }
    }
  })
}
let message4 = myRef<string>('你好')
const customRefChange = () => {
  message4.value = '白'
}

// ref的更新也会导致shallowRef视图的更新
// 原因是ref也是通过触发triggerRefValue函数实现
let message5 = ref('hello'), message6 = shallowRef({ "name": "你好", "asf": "You" })
const change = () => {
  message5.value = 'hi'
  message6.value.name = '白'
}
</script>

<style scoped>
</style>