<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent, watchEffect, ref } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    const count = ref(0)
    setTimeout(() => {
      count.value = 1
    }, 2000)
    /* watchEffect(() => {
      console.log('watchEffect监听：' + count.value)
    }) */

    setTimeout(() => {
      count.value = 1
    }, 1000)

    setTimeout(() => {
      count.value = 2
    }, 3000)

    const stop = watchEffect(async (onInvalidate) => {
      console.log('watchEffect监听：' + count.value)
      onInvalidate(() => {
        console.log('onInvalidate is triggered')
      })
    })

    setTimeout(() => {
      //   stop()
    }, 2000)

    return {}
  },
})
</script>
