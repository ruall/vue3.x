<template>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
  <h1>{{ hobby }}</h1>
  <h1>{{ career }}</h1>
  <button @click="changeName">change name</button>
</template>

<script>
import { defineComponent, inject } from 'vue'
export default defineComponent({
  // inject: ['name', 'age', 'hobby', 'career'],
  setup() {
    const name = inject('name', '张三'),
      age = inject('age', 29),
      hobby = inject('hobby', 'loading---'),
      career = inject('career', 'loading...'),
      changeName = inject('changeName')
    return {
      name,
      age,
      hobby,
      career,
      changeName,
    }
  },
})
</script>

<style></style>
