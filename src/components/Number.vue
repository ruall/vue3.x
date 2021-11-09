<template>
  <div>
    <span>{{ count }}</span>
    <button @click="add">增加</button>
    <button @click="addT">testAdd</button>
    <button @click="delT">testDel</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import test from '../libs/test'

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
    const addT = () => {
      test.addTest()
    }
    const delT = () => {
      test.delTest()
    }
    return {
      add,
      addT,
      delT,
    }
  },
})
</script>
