<template>
  <!-- ref -->
  <div>{{ Man }}</div>
  <div>
    {{ Man1 }}
  </div>
  <hr />
  <button @click="change">修改</button>

  <hr />

  <!-- shallowRef -->
  <div>{{ Man4 }}</div>
  <hr />
  <button @click="change1">修改</button>
  <hr />

  <!-- customRef -->
  <div>{{ Man5 }}</div>
  <hr />
  <button @click="change2">修改</button>
  <hr />

  <!-- ref获取dom元素 -->
  <div ref="dom" @click="change3">我是dom</div>
  <hr />
</template>

<!-- <script lang="ts">
  export default {
    data() {
      return {
        // 只有data()中return的元素才是响应式的
        age: 18
      }
    }
  }
  </script> -->

<script setup lang="ts">
// 深层次响应式
import { ref } from 'vue'
// 浅层次响应式
import { shallowRef } from 'vue'
// 检查是否为ref对象
import { isRef } from 'vue'
// 更新视图
import { triggerRef } from 'vue'
// 自定义Ref
import { customRef } from 'vue'
import type { Ref } from 'vue'
const Man = { name: '小满' }
type M = {
  name: string
}
// 自动类型推导
const Man1 = ref({ name: '小满' })
// Ref
const Man2: Ref<M> = ref({ name: '小满' })
// 自己写
const Man3 = ref<M>({ name: '小满' })

const Man4 = shallowRef({ name: '小满2' })

const change = () => {
  Man.name = '大满'
  Man1.value.name = '大满'
  console.log(Man)
  console.log(isRef(Man1))
}

const change1 = () => {
  // shallowRef无法响应到value内部
  // (如果跟ref一起用, 造成视图更新(调用了triggerRef), shallowRef就会响应到value内部)
  Man4.value.name = '大满2'
  // 通过triggerRef强制更新视图
  triggerRef(Man4)
  // 需要修改整个value
  /* Man4.value = {
      name: '大满2'
    } */
}

const Man5 = MyRef<string>('小满')

// 自己实现ref
function MyRef<T>(value: T) {
  // customRef接收一个回调函数
  // track收集依赖
  // trigger触发依赖
  return customRef((track, trigger) => {
    // 要求返回一个包含get,set的对象
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        value = newVal
        trigger()
      }
    }
  })
}
const change2 = () => {
  Man5.value = 'customRef修改啦'
}

const dom = ref<HTMLDivElement>()
const change3 = () => {
  console.log(dom.value?.innerText)
}
</script>

<style scoped></style>
