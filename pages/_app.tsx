import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
  <>
  <SessionProvider session={session}>
  <Navbar />
  <Component {...pageProps} />
  </SessionProvider>
  </>
  )
}

export default MyApp
