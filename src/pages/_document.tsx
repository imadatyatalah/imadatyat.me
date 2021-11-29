import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { __PROD__ } from "@/lib/constants";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {__PROD__ ? (
            <script async src="https://cdn.splitbee.io/sb.js"></script>
          ) : null}

          <meta
            name="google-site-verification"
            content="J3GXVYPGqR-UnaYIC2CVLE1MJUbW3mBbLnYtNfJZwNU"
          />

          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="text-[#090117] bg-[#f7f9fb] dark:bg-[#090117] dark:text-[#dedede]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
