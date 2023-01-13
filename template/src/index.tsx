import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './provider'
import './index.less'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
)

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
