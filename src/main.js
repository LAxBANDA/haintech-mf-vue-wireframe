import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import icon from './components/Icon.vue'

const app = createApp(App);
app.component('v-icon', icon);
app.config.compilerOptions.isCustomElement = (tag) => {
    return !tag.includes('-')
}

app.use(router).mount('#app')
