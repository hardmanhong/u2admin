import { useCallback } from 'react'
import createContext from '../createContext'

const THEME_KEY = '__U2_theme__'
const defaultValue = window.localStorage.getItem(THEME_KEY) || 'dark'
const [ThemeProvider, useGetTheme, useSetTheme] = createContext(defaultValue)
const useTheme = () => [useGetTheme(), useSetTheme()]
const useToggleDark = (id, href) => {
  const createStyle = useCallback(() => {
    const customTheme = document.querySelector(id)
    if (customTheme) {
      customTheme.href = href
      return
    }
    const linkElement = document.createElement('link')
    const attributes = {
      type: 'text/css',
      rel: 'stylesheet',
      id: id.replace('#', ''),
      href
    }
    for (const [attribute, value] of Object.entries(attributes)) {
      linkElement[attribute] = value
    }
    document.head.appendChild(linkElement)
  }, [])
  const removeStyle = useCallback(() => {
    const element = document.querySelector(id)
    if (element) {
      element.parentNode.removeChild(element)
    }
  }, [])
  const toggle = useCallback((theme) => {
    if (theme === 'dark') {
      createStyle()
    } else {
      removeStyle()
    }
    document.querySelector('body').className = theme
    window.localStorage.setItem(THEME_KEY, theme)
  }, [])
  return toggle
}
export { ThemeProvider, useToggleDark, useTheme, useGetTheme, useSetTheme }
