import { createApp } from 'vue'
import App from './App.vue'

import PopperTooltip from './components/popper.vue'

require('bootstrap-icons/font/bootstrap-icons.css')

import './assets/less/main.less'

const vm = createApp(App)

// eslint-disable-next-line
vm.component('Popper', PopperTooltip)

const app = vm.mount('#app')

export { app }
