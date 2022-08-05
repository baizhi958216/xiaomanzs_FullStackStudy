<template>
  <!-- reactive -->
  <div>{{ message1 }}</div>
  <hr>
  <div>{{ message2 }}</div>
  <hr>
  <div>{{ message3 }}</div>
  <button @click="rea3change">Reactive3</button>
  <hr>

  <!-- readonly -->
  <div>{{ person }}-{{ copy }}</div>
  <hr>

  <!-- shallowReactive -->
  <div>{{ message4 }}</div>
  <button @click="changeName1">name1</button>
  <button @click="changeName2">name2</button>
  <hr>
</template>

<script setup lang="ts">
import { reactive, readonly, shallowReactive } from 'vue'
// reactive
type rea = {
  list: string[]
}
// 数组
let message1 = reactive<string[]>([])
let message2 = reactive<rea>({
  list: []
})
// 异步数据模拟
setTimeout(() => {
  let arr = ['asus', 'xiaomi', 'honor']
  /* 
  直接赋值会破坏响应式, 导致视图无法更新
  可以用push
  message1 = arr 
  */
  message1.push(...arr)
  // 或者用对象修饰
  message2.list = arr
  console.log(message1, message2);
}, 1000)
// 对象
let message3 = reactive({
  name: 'baizhi958216'
})
const rea3change = () => {
  message3.name = 'hello'
}

// readonly
let person = reactive({
  count: 1
})

let copy = readonly(person)
/* 
  无法分配到 "count" ，因为它是只读属性。
  copy.count++ 
*/
setTimeout(() => {
  person.count++
}, 1000)

/* 
  shallowReactive
  在DOM挂载 后 将第一层作为响应式更新
*/
let message4 = shallowReactive({
  name: 'baizhi958216',
  commit: {
    date: '2020',
    time: '12:33',
    coAuthor: {
      name: '114514'
    }
  }
})
const changeName1 = () => {
  message4.name = 'Hello'
}
const changeName2 = () => {
  /* 
    不能将类型“string”分配给类型“{ name: string; }”。 

    在此操作中, 数据会被修改  DOM不会发生改变
  */
  // message4.commit.coAuthor = 'baizhi958216'
  console.log(message4);

}
// DOM挂载 前 可以修改
// changeName2()
</script>

<style scoped>
</style>