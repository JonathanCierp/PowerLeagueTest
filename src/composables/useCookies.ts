import { globalCookiesConfig, useCookies } from 'vue3-cookies'

export default () => {
  globalCookiesConfig({
    expireTimes: 'Session',
  })
  const { cookies } = useCookies()

  return cookies
}
