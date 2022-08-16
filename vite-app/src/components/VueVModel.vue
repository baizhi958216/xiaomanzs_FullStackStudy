<template>
  <div class="mainbody">
    <div>
      <div>{{title}}</div>
      <button @click="changeFlag">{{ flag }}</button>
    </div>

    <!-- 
      v-model与子组件双向绑定
      多个值需要v-model:xxx=xxxx
      支持自定义修饰符
       -->
    <vmDialog v-model:title="title" v-model="flag" v-model.baizhi="baizhi"></vmDialog>
  </div>
</template>

<script setup lang="ts">
import vmDialog from './vmDialog/index.vue'
import { ref } from 'vue';

const flag = ref(true)

const baizhi = ref(false)

const title = ref('display vmDialog')

const changeFlag = () => {
  flag.value = !flag.value
  title.value='display vmDialog'
}
</script>

<style scoped lang="less">
.mainbody {
  height: 100vh;
  width: 100vw;
}
</style>