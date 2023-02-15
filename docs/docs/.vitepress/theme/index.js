import DefaultTheme from 'vitepress/theme'
// import EtDesign from 'et-design'

// 插件的组件，主要是demo组件
import './styles/index.css'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.mixin({
      mounted() {
        import('et-design').then(function (m) {
          app.use(m.default)
        })
      },
    }),
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}
