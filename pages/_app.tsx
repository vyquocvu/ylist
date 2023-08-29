import React from "react";
import Head from "next/head";
import {NextUIProvider} from "@nextui-org/react";
import type { AppProps } from "next/app";
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className="dark w-full h-full text-foreground bg-background">
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
      </main>
    </NextUIProvider>
  );
}

export default MyApp;
