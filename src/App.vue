<template>
  <div>
    <Test
      v-for="(item, index) in data"
      :key="index"
      :item="item"
      @remove="remove"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Test from './components/Test.vue'
export default defineComponent({
  name: 'App',
  components: {
    Test,
  },
  setup() {
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
    return {
      data,
      remove,
    }
  },
})
</script>
