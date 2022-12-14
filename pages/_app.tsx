import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalStyled } from '../src/Styled/Global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  )
}
