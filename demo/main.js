import { createApp } from 'vue'
import App from './App.vue'
import VuePipeline from '../index.js'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import JsonViewer from 'vue3-json-viewer'
import 'vue3-json-viewer/dist/index.css'

const app = createApp(App)
app.use(VuePipeline)
app.use(JsonViewer)
app.use(ElementPlus, {
  size: 'small'
})

app.mount('#app')
