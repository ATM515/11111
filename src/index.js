import { render, h } from 'omio'
import './components/index/index'
import './assets/index.css'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  render(<my-index />, '#app')
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
