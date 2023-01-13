import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { BreadcrumbProvider, useGetTheme, useToggleDark } from './provider'
import routes from './router'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

function App() {
  const theme = useGetTheme()
  const toggle = useToggleDark('#custom-theme', '/antd.dark.min.css')
  useEffect(() => {
    toggle(theme)
  }, [theme])
  return (
    <ConfigProvider locale={zh_CN}>
      <BreadcrumbProvider>
        <RouterProvider router={routes}></RouterProvider>
      </BreadcrumbProvider>
    </ConfigProvider>
  )
}

export default App
