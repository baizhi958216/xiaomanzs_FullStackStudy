<template>
  <div>
    <button @click="flag = !flag">切换</button>
    <!-- 
      transition组件 
      添加动画状态实现动画效果
      -->
    <transition name="fade">
      <div v-if="!flag" class="redbox"></div>
    </transition>
  </div>

  <!-- 自定义类名 -->
  <div>
    <button @click="flag1 = !flag1">切换1</button>
    <!-- 
      transition组件 
      指定类名
      -->
    <transition name="fade1" enter-from-class="e-f" enter-active-class="e-a" enter-to-class="e-t">
      <div v-if="!flag1" class="redbox1"></div>
    </transition>
  </div>

  <!-- 结合animate.css -->
  <div>
    <button @click="flag2 = !flag2">切换2</button>
    <!-- 
      transition组件 
      指定类名结合animate.css
      duration动画持续时长
      :duration="1000" 指定enter/leave均为1s
      -->
    <transition :duration="{ enter: 1000, leave: 1000 }" leave-active-class="animate__animated animate__lightSpeedOutRight"
      enter-active-class="animate__animated animate__lightSpeedInLeft" name="fade2">
      <div v-if="!flag2" class="redbox2">你好傻孩子</div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'animate.css'

let flag = ref(true)
let flag1 = ref(true)
let flag2 = ref(true)
</script>

<style scoped>
.redbox {
  width: 300px;
  height: 300px;
  background-color: red;
}

/* 
  vue提供的默认类名为
  *-enter-from/active/to
  *-leave-from/active/to
*/

/* 进入效果 */
.fade-enter-from {
  width: 0;
  height: 0;
  transform: rotate(-360deg);
  border-radius: 50%;
}

.fade-enter-active {
  transition: all 1.5s ease;
}

.fade-enter-to {
  width: 300px;
  height: 300px;
}

/* 退出效果 */
.fade-leave-from {
  width: 300px;
  height: 300px;
  transform: rotate(360deg);
}

.fade-leave-active {
  transition: all 1.5s ease;
}

.fade-leave-to {
  width: 0;
  height: 0;
  border-radius: 50%;
}

.redbox1 {
  width: 300px;
  height: 300px;
  background-color: red;
}

.e-f {
  width: 0;
  height: 0;
  transform: rotate(-360deg);
  border-radius: 50%;
}

.e-a {
  transition: all 1.5s ease;
}

.e-t {
  width: 300px;
  height: 300px;
}

.redbox2 {
  font-size: 100px;
}
</style>