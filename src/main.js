import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './templates/app/App.vue'
import router from './plugins/router'
import en from './plugins/locales/en.js'
import ua from './plugins/locales/ua.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ua,
  },
})

app.use(i18n)

app.mount('#app')
