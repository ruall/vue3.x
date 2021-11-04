<template>
  <div>
    <span>{{ item.title }}</span>
    <button @click="remove(item.id)">删除</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, onUnmounted } from 'vue'
import { test1, test2 } from './test'

export default defineComponent({
  name: 'test',
  props: {
    item: Object,
  },
  emits: ['remove'],
  setup(props, context) {
    const remove = (id: any) => {
      context.emit('remove', id)
    }
    onBeforeUnmount(() => {
      console.log('ID为' + props.item.id + '的项【准备】被删除')
    })
    onUnmounted(() => {
      console.log('ID为' + props.item.id + '的项【已经】被删除')
    })
    test1()
    test2()
    return {
      remove,
    }
  },
})
</script>
