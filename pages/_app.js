import { ThirdwebProvider, useDesiredChainId, ChainId } from '@thirdweb-dev/react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}
