<template>
  <div>
    <!-- 模板语法 -->
    {{ message }}
    <br>
    <!-- 条件表达式 -->
    {{ message2 ? 'Yes' : 'No' }}
    <br>
    <!-- 运算 -->
    {{ message2 + 1 }}
    <br>
    <!-- API调用 -->
    {{ message.split('') }}
    <br>
    <!-- 调用数组方法 -->
    {{ message.split('').map(v => `123${v}`) }}
    <br>
  </div>

  <!-- v-text -->
  <div v-text="message"></div>

  <!-- v-html -->
  <div v-html="messagehtml"></div>

  <!-- v-if -->
  <div v-if="message2">v-if 节点被删除了</div>

  <!-- v-else-if -->
  <div v-if="message2">v-if 节点</div>
  <div v-else-if="!message2">v-else-if 节点</div>
  <div v-else>v-else 节点</div>

  <!-- v-show -->
  <div v-show="message2">v-if 节点被隐藏了</div>

  <!-- v-on -->
  <div v-on:click="clickme">
    clickme
    <!-- .stop阻止事件冒泡 -->
    <div @click.stop="clickme">clickme2</div>
  </div>

  <!-- v-bind -->
  <div v-bind:style="bindStyle2">白纸</div>
  <div :class="['a', 'b']">白纸</div>
  <div :class="[flag ? 'a' : 'b']">白纸</div>
  <div :class="cls">白纸</div>

  <!-- v-for -->
  <div v-for="item in Arr">{{ '哈' + item }}</div>
  <div v-for="item in Arr2">
    <div>{{ item.id }}-<span>{{ item.name }}</span></div>
  </div>

  <!-- v-model -->
  <input type="text" v-model="modelMsg">
  <div>{{ modelMsg }}</div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

// v-html
const messagehtml: string = '<a href="https://baizhi958216.github.io">baizhi958216.github.io</a>'

// v-show v-if v-text
const message: string = '白纸'
const message2: number = 0

// v-on
const clickme = () => {
  alert('You click me! ')
}

// v-bind
type Style = {
  color: string,
}

const bindStyle1: Style = {
  color: 'blue',
}

const bindStyle2: Style = {
  color: 'red',
}

const flag = false

type Cls = {
  a: boolean,
  b: boolean
}
const cls: Cls = {
  a: true,
  b: false
}

// v-for
const Arr: Array<number> = [1, 2, 3]
const Arr2: Array<any> = [
  { id: 1, name: 'A1' },
  { id: 2, name: 'A2' },
  { id: 3, name: 'A3' }
]

// v-model
// ref数据劫持
const modelMsg = ref('test')

</script>

<style scoped>
.a {
  font-size: 40px;
}

.b {
  color: blue
}
</style>
