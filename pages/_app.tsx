import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "nextui";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <React.Fragment>
        <Head>
          <title>Linkdio</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
          <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default MyApp;
