
import { EtButton } from '@et-design/components/button'
import { EtTag } from '@et-design/components/tag'
import Components from './components'
import { App } from 'vue'
import 'uno.css'
import './styles/button.scss'

const Installer = {
  install(app: App) {
    Components.forEach((c) => {
      app.use(c)
    })
  }
}

export default Installer
export { EtButton, EtTag }
