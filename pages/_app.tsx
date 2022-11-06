import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
  <>
   <ThemeProvider>
  <SessionProvider session={session}>
  <Navbar />
  <Component {...pageProps} />
  </SessionProvider>
  </ThemeProvider>
  </>
  )
}

export default MyApp
