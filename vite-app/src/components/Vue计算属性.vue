<template>
  <div>
    <input v-model="firstName" type="text">
  </div>
  <div>
    <input v-model="lastName" type="text">
  </div>
  <div>
    {{ firstName }}-{{ lastName }}
  </div>
  <!-- computed1 -->
  <div>{{ name }}</div>
  <!-- computed2 -->
  <div>{{ getsetName }}</div>
  <hr>
  <!-- Shop -->
  <div>
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>数目</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>
        <tr :key="index" v-for="(item, index) in data">
          <td>{{ item.name }}</td>
          <td> <button @click="cal(item, false)">-</button> {{ item.num }} <button @click="cal(item, true)">+</button>
          </td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="del(index)">删除</button>
          </td>
        </tr>
      </tbody>

      <tfoot>
        <td>总价</td>
        <td>{{ total }}</td>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
let firstName = ref('')
let lastName = ref('')

// computed1
const name = computed(() => {
  return `${firstName.value}-${lastName.value}`
})
// computed2
const getsetName = computed({
  get() {
    return `${firstName.value}-${lastName.value}`
  },
  set() {
    firstName.value + lastName.value
  }
})

// Shop
type Shop = {
  name: string,
  num: number,
  price: number
}
const data = reactive<Shop[]>([
  {
    name: '帽子',
    num: 2,
    price: 100
  }, {
    name: '上衣',
    num: 3,
    price: 200
  }, {
    name: '裤子',
    num: 4,
    price: 300
  }, {
    name: '袜子',
    num: 5,
    price: 400
  },
])
const del = (index: number) => {
  console.log(index)
  data.splice(index, 1)
}
const cal = (item: Shop, type: boolean): void => {
  if (item.num > 1 && !type) {
    item.num--
  } else if (item.num < 99 && type) {
    item.num++
  }
}
const total = computed(() => {
  let allTotal = 0
  data.forEach(element => {
    allTotal += element.price * element.num
  })
  return allTotal
})
</script>

<style scoped>
</style>