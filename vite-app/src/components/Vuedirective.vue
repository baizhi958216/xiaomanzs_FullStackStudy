<template>
  <div>
    <button @click="flag = !flag">切换</button>
    <A v-if="flag" v-move:aaa.baizhi958216="{ background: 'red' }"></A>
    <input type="text" v-model="a2Input">
    <A v-ipt:iptval="{ background: a2Input }"></A>
  </div>
  <div v-window class="box">
    <div class="header"></div>
    <div>内容</div>
  </div>
</template>

<script setup lang="ts">
import A from './Vdirective/index.vue'
import { Directive, DirectiveBinding, ref } from 'vue';
let flag = ref<boolean>(true)
type Dir = {
  background: string
}
const vMove: Directive = {
  // 整个生命周期都可以接收
  // 0: element
  // 1: arg:传递的参数 modifiers:自定义修饰符 value:值
  // 2: 虚拟DOM
  // 2: 上一个虚拟DOM
  created(el: HTMLElement, dir: DirectiveBinding<Dir>) {
    console.log('=======>created');
    // el=>element dir:自定义泛型
    el.style.background = dir.value.background
  },
  beforeMount(...args: Array<any>) {
    console.log('=======>beforeMount');
    console.log(args)
  },
  mounted(...args: Array<any>) {
    console.log('=======>mounted');
    console.log(args)
  },
  // 数据变化时
  beforeUpdate() {
    console.log('=======>beforeUpdate');
  },
  updated() {
    console.log('=======>updated');
  },
  // 卸载
  beforeUnmount() {
    console.log('=======>beforeUnmount');
  },
  unmounted() {
    console.log('=======>unmounted');
  }
}

// 简写
let a2Input = ref<string>('')
type ipt = {
  background: string
}
const vIpt = (el: HTMLElement, dir: DirectiveBinding<ipt>) => {
  el.style.background = dir.value.background
}

// movebox
// any,void 不需要传入任何值
const vWindow: Directive<any, void> = (el: HTMLElement, binding: DirectiveBinding) => {
  let moveElement: HTMLElement = el.firstElementChild as HTMLElement
  moveElement.addEventListener('mousedown', (e: MouseEvent) => {
    let X = e.clientX - el.offsetLeft
    let Y = e.clientY - el.offsetTop
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX - X + 'px'
      el.style.top = e.clientY - Y + 'px'
    }
    // 鼠标拖动
    document.addEventListener('mousemove', move)
    // 鼠标松开
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  })
}
</script>

<style lang="less" scoped>
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 200px;
  border: 5px solid black;

  .header {
    background-color: black;
    height: 20px;
    cursor: move;
  }
}
</style>