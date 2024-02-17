import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './templates/app/App.vue'
import router from './plugins/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
