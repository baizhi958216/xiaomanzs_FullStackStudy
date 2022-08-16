<template>
  <div v-if="modelValue" class="dialog">
    <header>
      <div>{{title}}</div>
      <button @click="close">X</button>
    </header>
    <main>内容</main>
    <footer>页脚</footer>
  </div>
</template>

<script setup lang="ts">
type Props = {
  modelValue: boolean,
  title:string,
  modelModifiers?:{
    baizhi:boolean
  }
}
const propsdata = defineProps<Props>()

// defineEmits传递到父组件
// 传递多个值['xxx','xxx']
const emit = defineEmits(['update:modelValue','update:title'])
const close = () => {
  console.log(propsdata.modelModifiers);
  emit('update:modelValue', false)
  emit('update:title', 'TITLE')
}
</script>

<style scoped lang="less">
.dialog {
  border: 1px solid #CCC;
  width: 700px;
  height: 500px;

  header {
    font-size: 40px;
    border-bottom: 1px solid #CCC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    button {
      border: none;
      background-color: rgba(0, 0, 0, 0);
      cursor: pointer;
      width: 40px;
      height: 40px;
    }
  }

  main {
    height: 400px;
    border-bottom: 1px solid #CCC;
  }

  footer {
    font-size: 30px;
  }
}
</style>