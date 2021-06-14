import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

export function interceptRequest(config: AxiosRequestConfig) {
  // TODO: add default auth header

  return config
}

export function interceptOKResponse(response: AxiosResponse) {
  return response
}

export function interceptErrorResponse(error: AxiosError) {
  toast('Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.', { type: 'error' })
  Promise.reject(error)
}
