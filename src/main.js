import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()

import icon from './components/Icon.vue'
import overlay from './components/Overlay.vue'

const app = createApp(App);
app.component('v-icon', icon);
const componentOverlay = app.component('v-overlay', overlay);

app.config.compilerOptions.isCustomElement = (tag) => {
    return !tag.includes('-')
}

app.use(pinia)
app.use(router)
app.mount('#app');
