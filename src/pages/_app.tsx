import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@self/utils/theme';
import createEmotionCache from '@self/utils/create-emotion-cache';
import Header from '@self/components/Header';
import Footer from "@self/components/Footer";
import { ScrollContext, useScrollTrack } from '@self/utils/scroll-tracker';
import '@self/styles/index.scss'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const scrollState = useScrollTrack()
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <ScrollContext.Provider value={scrollState}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ScrollContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}