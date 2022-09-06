import '../styles/global.css'
import Footer from '../components/footer'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
export default MyApp