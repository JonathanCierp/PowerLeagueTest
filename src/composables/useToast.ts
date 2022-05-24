import { useToast } from 'primevue/usetoast'

interface ToastOptions {
  summary?: string | undefined
  life?: number | undefined
}

export default () => {
  const toast = useToast()
  const defaultOptions = { life: 3000 }

  const success = (message: string, options: ToastOptions = defaultOptions) => {
    toast.add({ ...options, severity: 'success', detail: message })
  }

  const error = (message: string, options: ToastOptions = defaultOptions) => {
    toast.add({ ...options, severity: 'error', detail: message })
  }

  return {
    success,
    error,
  }
}
