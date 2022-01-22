import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import axios from 'axios'
import { interceptError, interceptOKResponse, interceptRequest } from '../shared/interceptors'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

axios.interceptors.request.use(interceptRequest, interceptError)
axios.interceptors.response.use(interceptOKResponse, interceptError)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MedicalTextPlatform</title>
      </Head>
      <Component {...pageProps} />
      <ToastContainer limit={1} />
    </>
  )
}
export default MyApp
