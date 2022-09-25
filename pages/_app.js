import { Provider } from "@self.id/react";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    //here we wrapped the component inside a provider saying that we want to connect to testnet for ceramic
    <Provider client={{ ceramic: "testnet-clay" }}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
