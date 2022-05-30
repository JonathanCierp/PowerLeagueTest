import { App } from 'vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
import Dropdown from 'primevue/dropdown'
import Tooltip from 'primevue/tooltip'

import useI18n from '@/composables/useI18n'

const components = [Button, Calendar, Card, Dropdown]

export default (app: App) => {
  for (const component of components) {
    app.component(`P${component.name}`, component)
  }

  app.use(PrimeVue, {
    locale: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...useI18n.global.messages[useI18n.global.locale].message.components.base.BaseForm.BaseFormDatepicker.BaseFormDatepicker,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...useI18n.global.messages[useI18n.global.locale].message.components.base.BaseForm.BaseFormFileUpload.BaseFormFileUpload,
    },
  })
  app.use(ToastService)
  app.directive('tooltip', Tooltip)
}
