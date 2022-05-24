import { useI18n } from 'vue-i18n'

export default () => {
  const { t } = useI18n()

  /**
   * If the value is not empty, then it must be a valid email address, otherwise, return an error
   * message
   * @param {string} v - string - the value of the field
   */
  const emailRule = (v: string) => !v || /.+@.+\..+/.test(v.toLowerCase()) || t('message.composables.useValidationRules.emailRule')

  /**
   * It returns a validation message if the value is not truthy
   * @param {any} v - any - the value of the field
   */
  const requiredRule = (v: any) => !!v || t('message.composables.useValidationRules.requiredRule')

  /**
   * It returns true if the value is a string of the specified length, or a translated error message if
   * not
   * @param {string} v - the value to be validated
   * @param {number} length - The length of the string.
   */
  const exactLengthRule = (v: string, length: number) =>
    (v && v.length === length) || t('message.composables.useValidationRules.exactLengthRule', [length])

  return {
    emailRule,
    requiredRule,
    exactLengthRule,
  }
}
