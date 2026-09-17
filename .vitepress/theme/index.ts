import type { Theme } from 'vitepress'
import TeekTheme from 'vitepress-theme-teek'
import ChartComponent from './components/ChartComponent.vue'
import 'vitepress-theme-teek/index.css'
import './custom.css'

export default {
  extends: TeekTheme,
  enhanceApp({ app }) {
    app.component('Chart', ChartComponent)
  }
} satisfies Theme
