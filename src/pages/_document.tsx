import { Html, Head, Main, NextScript } from "next/document";

import { __PROD__ } from "@/lib/constants";

const Document = () => {
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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
        <meta name="theme-color" content="#090117" />
      </Head>
      <body className="text-[#090117] bg-[#f7f9fb] dark:bg-[#090117] dark:text-[#dedede]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
