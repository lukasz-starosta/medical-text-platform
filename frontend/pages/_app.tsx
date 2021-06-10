import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MedicalTextPlatform</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
