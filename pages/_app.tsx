import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { css, Global } from '@emotion/react'
import { StoreProvider } from './src/stores/useStoreContext'
import rootStore from './src/stores/rootStore'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, [])
  if (!showChild) {
    return null;
  }

  return <StoreProvider value={rootStore}>
    <><Global
      styles={css`
          body {
            /* background-color: rgb(37, 36, 36); */
            background-color: #0d0e15;
            height: 100%;
            font-family: -apple-system, BlinkMascSystemFont, Segoe UI, Roboto, Oxygen,
                          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

          }
        `}
    />
      <Component {...pageProps} /></>
  </StoreProvider>
}


export default MyApp