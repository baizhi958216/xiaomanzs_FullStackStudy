<template>
  <div class="content">
    <div class="content-items" v-for="item in 3">
      <Card :content="`我是第${item}个`"></Card>
    </div>
    <div class="tab">
      <div @click="switchCom(item)" v-for="(item, index) in data" :key="item.name">
        {{ item.name }}
      </div>
      <!-- 动态组件component -->
      <!-- 
      Vue3使用setup语法使用bind绑定,
      若不使用setup语法(Vue2)可以通过字符串形式绑定
      <component is="A"></component>
      export default{
        components:{
          A
        }
      }
      -->
      <component :is="current.comName"></component>
    </div>

    <!-- nameless slot匿名插槽 -->
    <Dialog>
      <template v-slot:header>
        <div>
          具名插槽插入
        </div>
      </template>

      <!-- 
        解构函数把data里的prop解构出来
        { "prop": { "name": "slot1", "age": 11 } }
         -->
      <template v-slot="{prop,index}">
        <div>{{prop.name}}-{{prop.age}}-{{index}}</div>
      </template>
      
      <!-- 简写# -->
      <template #footer>
        <div>
          具名插槽插入
        </div>
      </template>

      <!-- 动态插槽 dynamic slot -->
      <template #[name]>
          <div>动态插槽</div>
      </template>
    </Dialog>
  </div>

</template>

<script setup lang="ts">
import { markRaw, reactive,ref } from 'vue';
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'

type Tabs = {
  name: string,
  comName: any
}

type Com = Pick<Tabs, 'comName'>

const data = reactive<Tabs[]>([
  {
    name: '我是A组件',
    comName: markRaw(A)
  },
  {
    name: '我是B组件',
    comName: markRaw(B)
  },
  {
    name: '我是C组件',
    comName: markRaw(C)
  }
])

// 动态组件
let current = reactive<Com>({
  comName: null
})

// 动态组件切换
const switchCom = (item: Tabs) => {
  current.comName = item.comName
}

// 动态插槽
let name = ref('footer')
</script>

<style scoped lang="less">
.content {
  flex: 1;
  margin: 20px;
  border: 1px solid #CCC;
  overflow: auto;

  &-items {
    padding: 20px;
    border: 1px solid #CCC;
  }
}
</style>