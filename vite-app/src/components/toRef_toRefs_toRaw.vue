<template>
  <div>{{ state }}</div>
  <div>{{ state2 }}</div>
  <button @click="change">plus1</button>
  <button @click="change2">plus2</button>
  <hr>
  <div>{{ foo }}-{{ bar }}</div>
  <button @click="change3">plus3</button>
  <div>{{ foo1 }}-{{ bar1 }}</div>
  <button @click="change4">plus4</button>
</template>

<script setup lang="ts">
import { toRef, toRefs, toRaw, reactive } from 'vue'
// toRef
const obj = {
  foo: 1,
  bar: 1
}
const state = toRef(obj, 'bar')
/* 
toRef会对自身以及原始对象造成影响
DOM不会受影响 
*/
const change = () => {
  state.value++
  console.log(obj);
  console.log(state.value);
}
/* 
  若原始对象是代理对象 DOM也会受影响 
  同时更新整个DOM
*/
const obj2 = reactive({
  foo: 1,
  bar: 1
})
const state2 = toRef(obj2, 'bar')
const change2 = () => {
  state2.value++
  console.log(obj2);
  console.log(state2.value);
}
// toRefs
let { foo, bar } = reactive({
  foo: 1,
  bar: 1
})
const change3 = () => {
  bar++
  foo++
  // 解构后数据可改变 视图无法更新
  console.log(foo, bar)
}
let objtorefs = reactive({
  foo1: 1,
  bar1: 1
})
let { foo1, bar1 } = toRefs(objtorefs)
const change4 = () => {
  foo1.value++
  bar1.value++
  // 响应式数据改变 视图改变
  console.log(foo1, bar1)
}
// toRaw 将响应式数据(代理)的转换为静态对象 节省内存
let objtoRaw = reactive({
  foo: 1,
  bar: 1
})
console.log('响应式数据:', objtoRaw)
const raw = toRaw(objtoRaw)
console.log('对象:', raw)
</script>

<style scoped>
</style>