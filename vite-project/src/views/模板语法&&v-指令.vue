<template>
  <!-- 模板语法 -->
  <div>
    <!-- 模板 插值 -->
    <p>{{ a }}</p>

    <!-- 模板 运算 -->
    <p>{{ a + 2 }}</p>

    <!-- 模板 三元 -->
    <p>{{ a ? 'true' : 'false' }}</p>

    <!-- 模板 API运算 -->
    <p>{{ a1.map((v) => ({ num: v })) }}</p>
  </div>
  <!-- v-指令 -->
  <div>
    <!-- v-text -->
    <div contenteditable="true" v-text="b"></div>

    <!-- v-html -->
    <div v-html="b1"></div>

    <!-- 
        v-show, 样式添加display:none, 性能优于v-if
      -->
    <div v-show="b2"></div>

    <!-- v-if -->
    <div v-if="b3 == 'a'">A</div>
    <!-- v-else-if -->
    <div v-else-if="b3 == 'b'">B</div>
    <!-- v-else -->
    <div v-else>C</div>

    <!-- v-on事件处理 -->
    <button v-on:click="xxx">尽情的点击我</button>
    <!-- v-on简写 -->
    <button @click="xxx">尽情的点击我</button>
    <!-- 动态v-on -->
    <button @[event]="xxx">尽情的点击我</button>
    <!-- 
        v-on内置修饰符
          capture:
          left: 鼠标左键
          middle: 鼠标中键
          once: 点击事件最多被触发一次
          passive: 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成 
          以防其中包含 `event.preventDefault()`
          prevent: 阻止默认行为
          right: 鼠标右键
          self: 仅当 event.target 是元素本身时才会触发事件处理器
          stop: 单击事件将停止传递(阻止冒泡)
          ...
      -->
    <div @click="parent">
      <button @[event].stop="xxx">尽情的点击我</button>
    </div>

    <!-- v-bind 可用于绑定元素属性 -->
    <div v-bind:id="id"></div>
    <!-- v-bind 简写 -->
    <div :id="id"></div>
    <!-- 绑定style -->
    <div :style="style">演示v-bind</div>
    <!-- 
        绑定class 
        可同时支持一个静态+一个动态
      -->
    <div class="c" :class="[Cls ? 'a' : 'b']">演示v-bind</div>

    <!-- v-model 可用于绑定表单元素 -->
    <div>
      <input type="text" v-model="b4" />
      <div>{{ b4 }}</div>
    </div>

    <!-- v-for 用于遍历 -->
    <div v-for="(item, index) in arr" :key="index">{{ index }}-{{ item }}</div>

    <!-- v-once 仅渲染元素和组件一次, 并跳过之后的更新 -->
    <div v-once @click="b5 = 456">
      {{ b5 }}
    </div>

    <!-- 
        v-memo 用于响应式内容性能优化
        数组接受一个或多个值
        搭配 v-for 使用 v-memo，确保两者都绑定在同一个元素上。v-memo 不能用在 v-for 内部。
      -->
    <div>
      <!-- 只响应subscribers -->
      <div v-memo="[subscribers]">
        <p>Subscribers: {{ subscribers }}</p>
        <p>Likes: {{ likes }}</p>
      </div>
      <button @click="subscribers++">Subscribers++</button>
      <button @click="likes++">Likes++</button>
      <div>
        <p>Current state:</p>
        <p>Subscribers: {{ subscribers }}</p>
        <p>Likes: {{ likes }}</p>
      </div>
    </div>
  </div>
</template>

<!-- <script lang="ts">
  // 不用setup语法糖的写法
  export default {
    setup() {
      const a = 1
      return {
        a
      }
    }
  }
  </script> -->
<script setup lang="ts">
import { ref } from 'vue'

const a: number = 1
const a1: number[] = [1, 2, 3, 4, 5]

const b: string = '我是一段文字xxxx'
// v-html不支持组件
const b1: string = '<section style="color:red">我是一段文字xxxx</section>'
const b2: boolean = false
const b3: string = 'b'
const event: string = 'click'
const xxx = () => {
  console.log('点击了xxx')
}
const parent = () => {
  console.log('我是父级')
}
const id: string = '123'
const style = {
  color: 'red',
  border: '1px solid #ccc'
}
const Cls: boolean = true
const b4 = ref('小满')
const arr: string[] = ['小满', '大满', '袜子']
const b5 = ref(123)
const subscribers = ref(4000)
const likes = ref(3000)
</script>

<style scoped lang="less">
.a {
  color: red;
}
.b {
  border: 1px solid #ccc;
}
.c {
  background-color: aqua;
}
</style>
