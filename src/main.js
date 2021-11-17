import { createApp } from 'vue'
import App from './App.vue'

require('bootstrap-icons/font/bootstrap-icons.css')

import './assets/less/main.less'

const vm = createApp(App).mount('#app')

export { vm }
