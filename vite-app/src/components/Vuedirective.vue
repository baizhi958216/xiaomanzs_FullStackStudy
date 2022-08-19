<template>
  <div>
    <button @click="flag=!flag">切换</button>
    <A v-if="flag" v-move:aaa.baizhi958216="{background:'red'}"></A>
  </div>
</template>

<script setup lang="ts">
import A from './Vdirective/index.vue'
import { Directive,DirectiveBinding,ref } from 'vue';
let flag = ref<boolean>(true)
type Dir={
  background:string
}
const vMove:Directive = {
  // 整个生命周期都可以接收
  // 0: element
  // 1: arg:传递的参数 modifiers:自定义修饰符 value:值
  // 2: 虚拟DOM
  // 2: 上一个虚拟DOM
  created(el:HTMLElement,dir:DirectiveBinding<Dir>){
    console.log('=======>created');
    // el=>element dir:自定义泛型
    el.style.background = dir.value.background
  },
  beforeMount(...args:Array<any>){
    console.log('=======>beforeMount');
    console.log(args)
  },
  mounted(...args:Array<any>){
    console.log('=======>mounted');
    console.log(args)
  },
  // 数据变化时
  beforeUpdate(){
    console.log('=======>beforeUpdate');
  },
  updated(){
    console.log('=======>updated');
  },
  // 卸载
  beforeUnmount(){
    console.log('=======>beforeUnmount');
  },
  unmounted(){
    console.log('=======>unmounted');
  }
}
</script>

<style scoped>

</style>