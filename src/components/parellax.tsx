import { FunctionComponent } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function getParallaxHOC(Component: FunctionComponent) {
  return function ParallaxHOC (pageProps:any) {
    return (
      <ParallaxProvider scrollAxis='vertical'>
      <Component {...pageProps} />
    </ParallaxProvider>
  )}
}
