import { createApp } from 'vue'
import { createI18n } from 'vue-i18n';
import router from './router'
import store from './store'
import VueSmoothScroll from 'v-smooth-scroll';
import './style.css'
import App from './App.vue'

import en from './locales/en.json';
import id from './locales/id.json';

const i18n = createI18n({
  legacy: false, // Enable Composition API mode
  locale: 'en', // Default language
  fallbackLocale: 'en', // Fallback language
  messages: {
    en,
    id,
  },
});

createApp(App)
.use(VueSmoothScroll)
.use(router)
.use(store)
.use(i18n)
.mount('#app')
