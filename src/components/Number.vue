<template>
  <div>
    <span>{{ count }}</span>
    <button @click="add">增加</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Number',
  props: {
    count: Number,
  },
  emits: ['add'],
  setup(props, ctx) {
    const add = () => {
      ctx.emit('add', 100)
    }
    return {
      add,
    }
  },
})
</script>
