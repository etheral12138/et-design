import { App, Plugin } from 'vue'
import Button from './src/index.vue'

export const EtButton: Plugin = {
  install(app: App) {
    app.component('et-button', Button)
  }
}
