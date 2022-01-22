import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { TOKEN_KEY } from '../constants/storage'
import router from 'next/router'

export function interceptRequest(config: AxiosRequestConfig) {
  const token = localStorage.getItem(TOKEN_KEY)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  config.headers['Content-Type'] = 'application/json'

  return config
}

export function interceptOKResponse(response: AxiosResponse) {
  return response
}

export function interceptError(error: AxiosError) {
  if (
    error.response?.config.url?.includes('login') ||
    error.response?.config.url?.includes('register')
  )
    return Promise.reject(error)

  if (error.response?.status === 401) {
    toast('Sesja wygasła. Zaloguj się ponownie.', { type: 'error' })
    router.replace('/')
  } else if (error.response?.status === 403) {
    toast('Nie masz uprawnień do tego zasobu. Zaloguj się.', { type: 'error' })
    router.replace('/')
  } else {
    toast('Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.', { type: 'error' })
  }
}
