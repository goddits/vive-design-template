import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";

const app = createApp(App)
app.use(Antd)
  .use(createPinia())
  .use(router)
  .mount('#app')
