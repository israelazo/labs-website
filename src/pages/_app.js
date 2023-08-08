import { React, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import "../styles/preloader.css";
import "../styles/globals.css";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-PLTJ8MPL" });
  }, []);

  return (
    <>
      <Head>
        <title>Iteck</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Component {...pageProps} />

      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/pace.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/bootstrap.bundle.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/mixitup.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/wow.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/html5shiv.min.js"
      ></Script>
      <Script strategy="lazyOnload" src="/assets/js/main.js"></Script>
    </>
  );
}

export default MyApp;
