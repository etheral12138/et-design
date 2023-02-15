import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import {EtButton} from 'et-design'
import EtDesign from "et-design"
import "et-design/dist/index.css"
// import 'et-design/styles/button.scss'
// import "uno.css";

createApp(App).use(EtDesign).mount('#app')
