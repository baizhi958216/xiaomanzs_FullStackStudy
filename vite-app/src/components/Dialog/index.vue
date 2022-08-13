<template>
  <div>
    <header class="header">
      <slot name="header"></slot>
    </header>

    <main class="main">
      <div v-for="(item, index) in data">
        <slot :prop="item"></slot>
      </div>
      <!-- <slot></slot> -->
    </main>

    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// Scoped Slots
type names = {
  name: string,
  age: number
}

const data = reactive<names[]>(
  [
    {
      name: 'slot1',
      age: 11
    },
    {
      name: 'slot2',
      age: 22
    },
    {
      name: 'slot3',
      age: 33
    },
    {
      name: 'slot4',
      age: 44
    }
  ]
)
</script>

<style scoped lang="less">
.header {
  height: 200px;
  background-color: red;
  color: #fff;
}

.main {
  height: 200px;
  background-color: rgb(102, 102, 102);
  color: #fff;
}

.footer {
  height: 200px;
  background-color: green;
  color: #fff;
}
</style>