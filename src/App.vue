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
    <Parent :name="name" />
    <Parentn :name="name" :age="age" :hobby="hobby" :career="career" />
    <!-- <button @click="change">修改</button> -->
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  getCurrentInstance,
  onMounted,
  provide,
} from 'vue'
import Hello from './components/Hello.vue'
import Number from './components/Number.vue'
import watchEff from './components/watchEffect.vue'
import watch from './components/Watch.vue'
import Parent from './components/Parent.vue'
import Parentn from './components/Parent-1.vue'

export default defineComponent({
  name: 'App',
  components: {
    Hello,
    Number,
    watchEff,
    watch,
    Parent,
    Parentn,
  },
  // provide: {
  //   name: '里斯本',
  // },
  setup() {
    const { proxy } = getCurrentInstance()
    console.log(proxy.utils.add(1, 2))
    // onMounted(() => {
    //   name = '安东尼'
    //   console.log(name)
    // })
    const change = () => {
      name.value = '李四'
    }
    const name = ref('张三')
    provide('name', name)
    provide('age', 26)
    provide('hobby', 'travel')
    provide('career', 'programmer')
    provide('changeName', change)
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
      change,
    }
  },
})
</script>
