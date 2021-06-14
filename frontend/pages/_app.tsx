import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import axios from 'axios'
import {
  interceptErrorResponse,
  interceptOKResponse,
  interceptRequest,
} from '../shared/interceptors'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

axios.interceptors.request.use(interceptRequest)
axios.interceptors.response.use(interceptOKResponse, interceptErrorResponse)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MedicalTextPlatform</title>
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}
export default MyApp
