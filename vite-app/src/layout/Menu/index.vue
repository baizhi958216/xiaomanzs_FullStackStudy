<template>
  <div class="menu">
    父组件的·{{ title }}·
    <br>
    父组件的·{{ data }}·
    <hr>
    <button @click="clickTap1">派发</button>
    <hr>
    <button @click="clickTap2">派发</button>
    <hr>
    <Card></Card>
    <hr>
    <Tree :data="data1" @on-click="getItem"></Tree>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Tree from '../../components/Tree/index.vue'

type TreeList = {
  name: string,
  icon?: string,
  children?: TreeList[] | []
}

const data1 = reactive<TreeList[]>([
  {
    name: 'no.1',
    children: [
      {
        name: 'no.1-1',
        children: [
          {
            name: 'no.1-1-1'
          }
        ]
      }
    ]
  }, {
    name: 'no.2',
    children: [
      {
        name: 'no.2-1'
      }
    ]
  }, {
    name: 'no.3'
  }
])

// 接收子组件递归item
const getItem = (item:TreeList) =>{
  console.log(item)
}

// 接收父组件参数
type Props = {
  title?: string,
  data?: number[]
}
// defineProps<Props>()

// 包含默认(父组件可以不传值)
// 如果父组件无值传入, 使用默认值
withDefaults(defineProps<Props>(), {
  title: '父组件没传值过来',
  data: () => [1, 2, 3, 3, 2]
})

// 向父组件传值
const list = reactive<number[]>([5, 5, 5, 5, 5])
const bool1 = false
const bool2 = true
const emit = defineEmits(['on-sssclick', 'on-cccclick'])
const clickTap1 = () => {
  emit('on-sssclick', list, bool1)
}
const clickTap2 = () => {
  emit('on-cccclick', bool2)
}

// 向父组件暴露 
defineExpose({
  list,
  bool2
})
</script>

<style scoped lang="less">
.menu {
  width: 200px;
  border-right: 1px solid #CCC;
}
</style>