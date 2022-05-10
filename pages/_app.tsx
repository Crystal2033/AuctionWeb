import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { css, Global } from '@emotion/react'
import { StoreProvider } from './src/stores/useStoreContext'
import rootStore from './src/stores/rootStore'

function MyApp({ Component, pageProps }: AppProps) {
  return <StoreProvider value={rootStore}>
    <><Global
      styles={css`
          body {
            background-color: rgb(40, 39, 39);

            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }
        `}
    />
      <Component {...pageProps} /></>
  </StoreProvider>
}


export default MyApp