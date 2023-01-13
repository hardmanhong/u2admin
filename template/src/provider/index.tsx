export {
  BreadcrumbProvider,
  useBreadcrumb,
  useGetBreadcrumb,
  useSetBreadcrumb
} from './breadcrumb'
export {
  ThemeProvider,
  useToggleDark,
  useTheme,
  useGetTheme,
  useSetTheme
} from './theme'

export function composeProviders(...providers) {
  return ({ children }) =>
    providers.reduce((prev, Provider) => <Provider>{prev}</Provider>, children)
}
