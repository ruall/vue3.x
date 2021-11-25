<template>
  <Child />
</template>

<script>
import { defineComponent } from 'vue'
import Child from './Child-1.vue'
export default defineComponent({
  components: { Child },
  setup() {
    return {}
  },
})
</script>

<style></style>
