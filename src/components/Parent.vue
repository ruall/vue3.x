<template>
  <Child />
</template>

<script>
import { defineComponent } from 'vue'
import Child from './Child.vue'
export default defineComponent({
  components: { Child },
  setup() {
    return {}
  },
})
</script>

<style></style>
