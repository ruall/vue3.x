<template>
  <div>{{ name }}</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    name: String,
  },
  inject: ['name'],
  setup() {
    return {}
  },
})
</script>

<style></style>
