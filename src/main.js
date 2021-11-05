import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import * as utils from './libs/utils'

const app = createApp(App)

app.config.globalProperties.utils = utils

console.log(app)

app.mount('#app')
