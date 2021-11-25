<template>
  <h3>{{ name }}</h3>
</template>

<script>
import { defineComponent, inject } from 'vue'
export default defineComponent({
  inject: ['name'],
  setup() {
    // const name = inject('name', '1')
    // return {
    //   name,
    // }
  },
})
</script>

<style></style>
