import { DateTime, DateTimeUnit } from 'luxon'
import useCookies from '@/composables/useCookies'

const cookies = useCookies()
let defaultLocale = cookies.get('i18n.locale')

export default () => {
  /**
   * It sets the default locale to the locale stored in the cookie
   */
  const reloadLuxonLocale = () => (defaultLocale = cookies.get('i18n.locale'))

  /**
   * Return start of a date
   * @param {Date | string} date - Date | string
   * @param {DateTimeUnit} [of=day] - DateTimeUnit = 'day'
   * @returns A string in ISO format
   */
  const dateStartOf = (date: Date | string, of: DateTimeUnit = 'day'): string | null => {
    reloadLuxonLocale()
    const dateToIso = typeof date === 'object' ? date?.toISOString() : date

    return DateTime.fromISO(dateToIso).setLocale(defaultLocale).startOf(of).toISO()
  }

  /**
   * Return end of a date
   * @param {Date | string} date - The date you want to get the end of.
   * @param {DateTimeUnit} [of=day] - DateTimeUnit = 'day'
   * @returns A string in ISO format
   */
  const dateEndOf = (date: Date | string, of: DateTimeUnit = 'day'): string | null => {
    reloadLuxonLocale()
    const dateToIso = typeof date === 'object' ? date?.toISOString() : date

    return DateTime.fromISO(dateToIso).setLocale(defaultLocale).endOf(of).toISO()
  }

  return {
    dateStartOf,
    dateEndOf,
  }
}
