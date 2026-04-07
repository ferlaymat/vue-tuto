import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
  //init app
  const app = createApp(App)
  //enable pinia in the app
  const pinia = createPinia()

  app.use(pinia)
  app.mount('#app')
