<template>
  <div>
    <h2>{{ count }}</h2>
    <button @click="add">按钮</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, watch } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    const count = ref(0)
    const state = reactive({
      name: 'zhangsan',
      age: 10,
    })
    /* setTimeout(() => {
      count.value = 1
      state.name = '张三'
    }, 2000) */

    const add = () => {
      count.value++
    }

    /* 
        常规写法
    watch(
      () => {
        return count.value
      },
      () => {
        console.log(count.value)
      }
    ) */

    // ref写法
    watch(count, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })

    //reactive写法
    const stop = watch(
      () => state.name,
      () => {
        console.log('state Change')
      }
    )
    setTimeout(() => {
      stop()
    }, 4000)

    return {
      count,
      add,
    }
  },
})
</script>
