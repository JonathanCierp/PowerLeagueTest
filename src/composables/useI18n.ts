import { createI18n } from 'vue-i18n'
import messages from '@/locales'
import useCookies from '@/composables/useCookies'

const cookies = useCookies()
const defaultLocale = 'en' //cookies.get('i18n.locale') || window.navigator.language.substring(0, 2)

export default createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  messages,
  datetimeFormats: {
    fr: {
      short: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
    en: {
      short: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
  },
})
