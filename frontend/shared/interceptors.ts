import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { TOKEN_KEY } from '../constants/token'

export function interceptRequest(config: AxiosRequestConfig) {
  
  const token = localStorage.getItem(TOKEN_KEY)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

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
  } else {
    toast('Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.', { type: 'error' })
  }
  return Promise.reject(error)
}
