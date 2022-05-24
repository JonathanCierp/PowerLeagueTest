export default (value: any, rules: Array<(...args: any[]) => string>, immediate = true) => {
  let form = {
    message: '',
    isValid: true,
  }

  if (immediate) {
    for (const rule of rules) {
      if (typeof rule(value) === 'string') {
        form = {
          message: rule(value),
          isValid: false,
        }
        break
      }
    }
  }

  return form
}
