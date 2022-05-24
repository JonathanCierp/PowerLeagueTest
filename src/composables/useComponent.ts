import { App } from 'vue'

/**
 * It imports all the components in the `components` and `modules` directories, and registers them with
 * the Vue instance
 * @param {App} app - App - The app object that is passed to the plugin function.
 */
export default (app: App) => {
  const components = import.meta.globEager('@/components/**/*.vue')
  const moduleComponents = import.meta.globEager('@/modules/**/components/**/*.vue')

  Object.entries({ ...components, ...moduleComponents }).forEach(([path, definition]) => {
    const componentName = path
      .split('/')
      .pop()
      ?.replace(/\.\w+$/, '')

    app.component(`${componentName}`, definition.default)
  })
}
