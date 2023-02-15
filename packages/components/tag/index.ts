import { App, Plugin } from 'vue'
import Tag from './src/index.vue'

export const EtTag: Plugin = {
  install(app: App) {
    app.component('et-tag', Tag)
  }
}
