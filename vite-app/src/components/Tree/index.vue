<template>
  <div style="margin-left:10px;">
  <!-- 递归组件可添加点击事件 -->
    <div :key="index" v-for="(item, index) in data" @click.stop="clickItem(item)">
      {{ item.name }}
      <!-- 递归组件 -->
      <!-- 需要往父组件派发emit, 父组件才可以接收 -->
      <TreeItem @on-click="clickItem" v-if="item?.children?.length" :data="item.children"></TreeItem>
    </div>
  </div>
</template>

<script setup lang="ts">
type TreeList = {
  name: string,
  icon?: string,
  children?: TreeList[] | []
}
type Props = {
  data?: TreeList[]
}
defineProps<Props>()

const emit = defineEmits(['on-click'])

const clickItem = (item:TreeList) =>{
  emit('on-click',item)
}
</script>

// “default”隐式具有类型 "any"，因为它不具有类型批注，且在其自身的初始化表达式中得到直接或间接引用。
// 多写个默认导出名字
<script lang="ts">
export default{
  name: 'TreeItem'
}
</script>

<style lang="less" scoped>
</style>