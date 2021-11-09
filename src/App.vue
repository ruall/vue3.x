<template>
  <div>
    <!--     <Hello
      v-for="(item, index) in data"
      :key="index"
      :item="item"
      @remove="remove"
    />
    <Number :count="count" @add="add" /> -->
    <watch-eff></watch-eff>
    <watch />
  </div>
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue'
import Hello from './components/Hello.vue'
import Number from './components/Number.vue'
import watchEff from './components/watchEffect.vue'
import watch from './components/Watch.vue'

export default defineComponent({
  name: 'App',
  components: {
    Hello,
    Number,
    watchEff,
    watch,
  },
  setup() {
    const { proxy } = getCurrentInstance()
    console.log(proxy.utils.add(1, 2))

    const data = ref([
      {
        id: 0,
        title: '1111',
      },
      {
        id: 1,
        title: '2222',
      },
      {
        id: 2,
        title: '3333',
      },
      {
        id: 3,
        title: '4444',
      },
    ])
    const remove = (id) => {
      data.value = data.value.filter((item) => item.id !== id)
    }
    const count = ref(0)
    const add = (val) => {
      count.value += val
    }
    return {
      data,
      remove,
      count,
      add,
    }
  },
})
</script>
